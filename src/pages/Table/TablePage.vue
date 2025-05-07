<template>
   <p class="q-pa-xl text-white">
    <strong>Tabela para teste de consumo de API paginada</strong>
  </p>
  <q-table title="Personagens" dark :dense="dense" :rows="data" :columns="columns" binary-state-sort
    class="q-pa-md q-ma-md bg-grey-10" flat style="border-radius: 20px;" v-model:pagination="pagination" row-key="id"
    :rows-per-page-options="[5, 10, 20]" bordered @request="loadData" ref="tableRef" :filter="filter" :loading="loading">
    <template v-slot:top-right>
      <q-input class="q-mx-sm" borderless dark :dense="dense" debounce="1000" v-model="filter.name" placeholder="Name">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RickMortyApi from 'src/services/rick-mortyapiservice';
import { usePagination } from '../../composables/UsePagination'

const { pagination, loading, dense, filter, preparePaginationParams, getSlicedData, updatePagination } = usePagination();

const tableRef = ref();
const data = ref([]);
const columns = ref([
  {
    name: 'id',
    label: 'Id',
    align: 'left',
    field: 'id',
    sortable: true
  },
  {
    name: 'name',
    label: 'Nome',
    align: 'left',
    field: 'name',
    sortable: true
  },
  {
    name: 'species',
    label: 'Epécie',
    align: 'left',
    field: 'species',
    sortable: true
  },
  {
    name: 'gender',
    label: 'Gênero',
    align: 'left',
    field: 'gender',
    sortable: true
  },
  {
    name: 'origin',
    label: 'Origem',
    align: 'left',
    field: row => row.origin.name,
    sortable: true
  },
  {
    name: 'status',
    label: 'Status',
    align: 'left',
    field: 'status',
    sortable: true
  },
]);

async function loadData(props) {
  loading.value = true;
  const { page, rowsPerPage, sortBy, descending, apiPage, params } = preparePaginationParams(props);

  await RickMortyApi.characters.getAllCharacters(params)
    .then((resp) => {
      const { rowsNumber, slicedData } = getSlicedData(resp, page, rowsPerPage, apiPage);
      data.value = slicedData;
      updatePagination({ rowsNumber, page, rowsPerPage, sortBy, descending });
    })
    .finally(() => loading.value = false);
};

onMounted(() => {
  tableRef.value.requestServerInteraction();
});

</script>
