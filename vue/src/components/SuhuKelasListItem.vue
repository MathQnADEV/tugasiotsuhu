<template>
      <div

        class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[200px]"
      >
        <h4 class="mt-1 text-lg font-bold">{{ datSuhu.kelas }}</h4>
        <div class="overflow-hidden py-3 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M11,24c-6.078.117-9.334-7.638-5-11.889V5c.211-6.609,9.791-6.6,10,0v7.111C20.335,16.363,17.077,24.117,11,24ZM11,2A3,3,0,0,0,8,5v7.537a1,1,0,0,1-.332.744A5.018,5.018,0,0,0,11,22a5.018,5.018,0,0,0,3.332-8.719A1,1,0,0,1,14,12.537V5A3,3,0,0,0,11,2Zm0,18a3.007,3.007,0,0,1-1-5.829V5a1,1,0,0,1,2,0v9.171A3.007,3.007,0,0,1,11,20Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,11,16ZM21,6a3,3,0,0,1,0-6A3,3,0,0,1,21,6Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,21,2Z"
            />
          </svg>
          = {{ datSuhu.suhu }}
        </div>
        <div class="overflow-hidden pb-3 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M10,17a1,1,0,0,1-.831-1.555l4-6a1,1,0,0,1,1.664,1.11l-4,6A1,1,0,0,1,10,17Zm9.779,3.778c6.858-7.336,1.519-14.521-4.565-19.6h0a4.947,4.947,0,0,0-6.426,0C2.706,6.231-2.63,13.491,4.222,20.778a11,11,0,0,0,15.556,0ZM13.919,2.7h0C18.7,6.777,24.43,12.966,18.364,19.364a9.043,9.043,0,0,1-12.728,0c-6.071-6.4-.325-12.6,4.445-16.662a2.958,2.958,0,0,1,3.838,0ZM8,10a1,1,0,0,0,2,0A1,1,0,0,0,8,10Zm6,6a1,1,0,0,0,2,0A1,1,0,0,0,14,16Z"
            />
          </svg>
          = {{ datSuhu.kelembapan }}
        </div>
        <div class="flex justify-between items-center mt-3">
          <router-link
            :to="{ name: 'SuhuKelasView', params: { id: datSuhu.id } }"
            class="flex gap-1 py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 27"
              stroke-width="1.3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit
          </router-link>
          <button
            v-if="datSuhu.id"
            type="button"
            @click="emit('delete', datSuhu)"
            class="h-8 w-8 flex item-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 20"
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
          </button>
        </div>
      </div>
</template>

<script setup>

const {datSuhu} = defineProps({
  datSuhu: Object
})

const emit = defineEmits(['delete'])

</script>
