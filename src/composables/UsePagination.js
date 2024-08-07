import { ref } from "vue";

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

  /**
   * Prepara os parâmetros de paginação para a requisição à API.
   * @param {Object} props - Propriedades de paginação do componente.
   * @param {number} maxItemsPerPage - Máximo de itens que a API pode retornar por página.
   * @returns {Object} - Objeto contendo parâmetros de paginação.
   */
  const preparePaginationParams = (props, maxItemsPerPage) => {
    const { page, rowsPerPage, sortBy, descending } = props.pagination;
    const apiPage = Math.ceil((page * rowsPerPage) / maxItemsPerPage);
    const params = { ...props.filter, page: apiPage };

    return { page, rowsPerPage, sortBy, descending, apiPage, params };
  };

  /**
   * Fatia os dados da resposta da API com base nos parâmetros de paginação.
   * @param {Object} resp - Resposta da API contendo dados.
   * @param {number} page - Número da página atual.
   * @param {number} rowsPerPage - Número de linhas a serem exibidas por página.
   * @param {number} maxItemsPerPage - Máximo de itens que a API pode retornar por página.
   * @param {number} apiPage - Página calculada da API.
   * @returns {Object} - Objeto contendo dados fatiados e número de linhas.
   */
  const getSlicedData = (resp, page, rowsPerPage, maxItemsPerPage, apiPage) => {
    const rowsNumber = resp.info.count;
    const apiOffset = (apiPage - 1) * maxItemsPerPage;
    const start = (page - 1) * rowsPerPage - apiOffset;
    const end = start + rowsPerPage;
    const slicedData = resp.results.slice(start, end);

    return { rowsNumber, slicedData, apiPage };
  };

  return {
    pagination,
    filter,
    getSlicedData,
    preparePaginationParams,
  };
}
