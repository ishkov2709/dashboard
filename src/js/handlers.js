import data from '../data.json'
import countInfo from './components/countInfo'
import tableItem from './components/tableItem'
import calcTableData from './utils/calcTableData'
import reloadPagination from './utils/reloadPagination'

export const handleClickNav = ({ target }) => {
  const btn = target.closest('button')
  if (btn) {
    document.querySelector('.list__button--active')?.classList.remove('list__button--active')
    btn.classList.add('list__button--active')
  }
}

export const handlePagination = (refs, countState, filteredData) => {
  const handler = ({ page }) => {
    countState.setPage(page)

    refs.tableBody.innerHTML = calcTableData(filteredData, countState, tableItem)
    refs.pagiInfo.textContent = countInfo(countState, filteredData.length)
  }
  return handler
}

export const handleInputSearch = (filteredData, refs, countState, pagination) => {
  const handler = ({ target }) => {
    const searchValue = target.value.toLowerCase()

    filteredData = data.filter((el) =>
      Object.values(el).some((e) =>
        typeof e === 'string' ? e.toLowerCase().includes(searchValue) : false
      )
    )

    refs.tableBody.innerHTML = calcTableData(filteredData, countState, tableItem)

    reloadPagination(refs, filteredData, countState, pagination)
  }
  return handler
}
