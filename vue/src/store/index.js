import { createStore } from "vuex";
import axiosClient from "../axios";

// const tempSuhuKelas = [
//   {
//     id: 100,
//     kelas: "XII RPL 3",
//     suhu: 30.0,
//     kelembapan: 50,
//     created_at: "2021-12-20 18:00:00",
//     updated_at: "2021-12-20 18:00:00",
//   },
//   {
//     id: 101,
//     kelas: "XI RPL 3",
//     suhu: 31.0,
//     kelembapan: 51,
//     created_at: "2021-12-20 18:00:00",
//     updated_at: "2021-12-20 18:00:00",
//   },
// ];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    currentSuhuKelas: {
      loading: false,
      data: {},
    },
    SuhuKelas: {
      loading: false,
      data: []
    },
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
      // const { data } = axiosClient.post("/login", user);
      // commit("setUser", data);
      // return data;
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },

    saveSuhuKelas({ commit }, suhuKelas) {
      let response;
      if (suhuKelas.id) {
        response = axiosClient
          .put(`/suhuKelasDat/${suhuKelas.id}`, suhuKelas)
          .then((res) => {
            commit("setCurrentSuhuKelas", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/suhuKelasDat", suhuKelas).then((res) => {
          commit("setCurrentSuhuKelas", res.data);
          return res;
        });
      }
      return response;
    },
    getSuhuKelas({ commit }, id) {
      commit("setCurrentSuhuKelasLoading", true);
      return axiosClient
        .get(`/suhuKelasDat/${id}`)
        .then((res) => {
          commit("setCurrentSuhuKelas", res.data);
          commit("setCurrentSuhuKelasLoading", false);
          console.log(res);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSuhuKelasLoading", false);
          throw err;
        });
    },
    deleteSuhuKelas({ }, id) {
      return axiosClient.delete(`/suhuKelasDat/${id}`)
    },
    getSuhuKelass({ commit }) {
      commit('setSuhuKelasLoading', true)
      return axiosClient.get('/suhuKelasDat').then((res) => {
        commit('setSuhuKelasLoading', false)
        commit("setSuhuKelas", res.data)
        return res
      })
    }
  },
  mutations: {
    // saveSuhuKelas: (state, suhuKelas) => {
    //   state.SuhuKelas = [...state.SuhuKelas, suhuKelas.data];
    // },
    // updateSuhuKelas: (state, suhuKelas) => {
    //   state.SuhuKelas = state.SuhuKelas.map((s) => {
    //     if (s.id == suhuKelas.data.id) {
    //       return suhuKelas.data;
    //     }
    //     return s;
    //   });
    // },
    setCurrentSuhuKelasLoading: (state, loading) => {
      state.currentSuhuKelas.loading = loading;
    },
    setCurrentSuhuKelas: (state, suhuKelas) => {
      state.currentSuhuKelas.data = suhuKelas.data;
    },
    setSuhuKelasLoading: (state, loading) => {
      state.SuhuKelas.loading = loading
    },
    setSuhuKelas: (state, suhuKelass) => {
      state.SuhuKelas.data = suhuKelass.data
    },
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;

// {
//         name: "Tom Cook",
//         email: "tom@example.com",
//         imageUrl:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       }
