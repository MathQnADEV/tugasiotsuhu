<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Suhu Kelas</h1>
        <router-link
          :to="{ name: 'SuhuKelasCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 -mt-1 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          add more suhu kelas
        </router-link>
      </div>
    </template>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <SuhuKelasListItem
        v-for="datSuhu in suhukelass"
        :key="datSuhu.id"
        :datSuhu="datSuhu"
        @delete="deleteSuhuKelas(datSuhu)"
      />
    </div>
  </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import PageComponent from "../components/PageComponent.vue";
import SuhuKelasListItem from "../components/SuhuKelasListItem.vue";

const suhukelass = computed(() => store.state.SuhuKelas.data);

store.dispatch("getSuhuKelass");

function deleteSuhuKelas(survey) {
  if (confirm(`Yakin mau hapus data suhu kelas ${survey.id}`)) {
    store.dispatch('deleteSuhuKelas', survey.id)
      .then(() => {
      store.dispatch('getSuhuKelass')
    })
  }
}
</script>
