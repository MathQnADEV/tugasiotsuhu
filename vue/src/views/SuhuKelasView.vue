<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ route.params.id ? model.kelas : "Create a Suhu Kelas" }}
        </h1>
        <button
          v-if="route.params.id"
          type="button"
          @click="deleteSuhuKelas()"
          class="flex gap-1 py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 25"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          Delete Suhu
        </button>
      </div>
    </template>
    <div v-if="suhuKelasLoading" class="flex justify-center">Loading...</div>
    <form v-else @submit.prevent="saveSuhuKelas">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <!-- Suhu Kelas field input data -->
        <div class="">
          <!-- Kelas -->
          <div class="mb-5 ml-6">
            <label for="title" class="block text-sm font-medium text-gray-700">
              Kelas
            </label>
            <input
              type="text"
              name="kelas"
              id="kelas"
              v-model="model.kelas"
              autocomplete="SuhuKelas_kelas"
              class="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md w-30"
            />
          </div>
          <!-- Suhu -->
          <div class="mb-5 ml-6">
            <label for="suhu" class="block text-sm font-medium text-gray-700">
              Suhu
            </label>
            <input
              type="text"
              name="suhu"
              id="suhu"
              v-model="model.suhu"
              autocomplete="SuhuKelas_suhu"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md w-30"
            />
          </div>
          <!-- Kelembapan -->
          <div class="mb-5 ml-6">
            <label
              for="kelembapan"
              class="block text-sm font-medium text-gray-700"
            >
              Kelembapan
            </label>
            <input
              type="text"
              name="kelembapan"
              id="kelembapan"
              v-model="model.kelembapan"
              autocomplete="SuhuKelas_kelembapan"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md w-30"
            />
          </div>
          <!-- submit -->
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

import PageComponent from "../components/PageComponent.vue";

const router = useRouter();

const route = useRoute();

const suhuKelasLoading = computed(() => store.state.currentSuhuKelas.loading);

let model = ref({
  kelas: "",
  suhu: "",
  kelembapan: "",
});

watch(
  () => store.state.currentSuhuKelas.data,
  (newVal, oldVal) => {
    console.log(newVal);
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: newVal.status !== "draft",
    };
  }
);

if (route.params.id) {
  store.dispatch("getSuhuKelas", route.params.id);
  console.log(route.params.id);
}

/**
 * Create or update Suhu Kelasa
 */

function saveSuhuKelas() {
  store.dispatch("saveSuhuKelas", model.value).then(({ data }) => {
    router.push({
      name: "SuhuKelas",
      params: { id: data.data.id },
    });
  });
}

function deleteSuhuKelas() {
  if (confirm(`Are you sure want to delete data suhu kelas ${model.value.kelas}?`)) {
    store.dispatch("deleteSuhuKelas", model.value.id).then(() => {
      router.push({
        name: "SuhuKelas"
      })
    })
  }
}

</script>
