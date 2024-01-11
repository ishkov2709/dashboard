import Pagination from 'tui-pagination'
import { handlePagination } from '../handlers'

const reloadPagination = (refs, filteredData, countState, pagination) => {
  const parentElement = document.querySelector('.tui-pagination')
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild)
  }
  if (filteredData.length > 8) {
    const newOptions = {
      totalItems: filteredData.length,
      itemsPerPage: 8,
      visiblePages: 5,
      page: countState.page,
    }
    pagination = new Pagination('pagination', newOptions)
    pagination.on('beforeMove', handlePagination(refs, countState, filteredData))
  }
}

export default reloadPagination
