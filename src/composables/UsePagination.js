import { ref, computed } from "vue";

export function usePagination() {
  const pagination = ref({
    sortBy: "desc",
    descending: false,
    page: 1,
    rowsPerPage: 5,
    rowsNumber: 0,
  });

  const filter = ref({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  const loading = ref(false);
  const maxItemsPerPage = 20;

  const dense = computed(() => {
    return pagination.value.rowsPerPage > 10;
  });

  /**
   *
   * @param {Object} newValues - Objeto com valores atualizados para paginação
   */
  const updatePagination = (newValues) => {
    pagination.value = { ...pagination.value, ...newValues };
  };

  /**
   * Prepara os parâmetros de paginação para a requisição à API.
   *
   * @param {Object} props - Propriedades de paginação do componente.
   * @returns - Objeto contendo parâmetros de paginação.
   */
  const preparePaginationParams = (props) => {
    const {
      page = 1,
      rowsPerPage = 5,
      sortBy = "desc",
      descending = false,
    } = props.pagination || {};

    const apiPage = Math.ceil((page * rowsPerPage) / maxItemsPerPage);
    const params = { ...props.filter, page: apiPage };

    return { page, rowsPerPage, sortBy, descending, apiPage, params };
  };

  /**
   * Fatia os dados da resposta da API com base nos parâmetros de paginação.
   *
   * @param {Object} resp - Resposta da API contendo dados.
   * @param {number} page - Número da página atual.
   * @param {number} rowsPerPage - Número de linhas a serem exibidas por página.
   * @param {number} apiPage - Página calculada da API.
   * @returns - Objeto contendo dados fatiados e número de linhas.
   */
  const getSlicedData = (resp, page, rowsPerPage, apiPage) => {
    const rowsNumber = resp.info.count;
    const apiOffset = (apiPage - 1) * maxItemsPerPage;
    const start = Math.max(0, (page - 1) * rowsPerPage - apiOffset);
    const end = start + rowsPerPage;
    const slicedData = resp.results.slice(start, end);

    return { rowsNumber, slicedData };
  };

  return {
    pagination,
    filter,
    dense,
    loading,
    getSlicedData,
    preparePaginationParams,
    updatePagination,
  };
}
