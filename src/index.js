import data from './data.json'
import navItem from './js/components/navItem'
import countInfo from './js/components/countInfo'
import tableItem from './js/components/tableItem'
import Pagination from 'tui-pagination'
import calcTableData from './js/utils/calcTableData'
import { handleClickNav, handleInputSearch, handlePagination } from './js/handlers'
import './styles/index.scss'
import 'tui-pagination/dist/tui-pagination.css'

const refs = {
  navList: document.querySelector('.nav__list'),
  walcomeUser: document.querySelector('.welcome__user'),
  tableBody: document.querySelector('.table__body'),
  pagiInfo: document.querySelector('.pagination__info'),
  searchInput: document.querySelector('.search__input'),
}

const navData = ['dashboard', 'product', 'customers', 'income', 'promote', 'help']

const countState = {
  page: 1,

  get start() {
    return (this.page - 1) * 8
  },
  get end() {
    return this.page * 8
  },
  setPage: function (val) {
    this.page = val
  },
}

let filteredData = [...data]

const options = {
  totalItems: filteredData.length,
  itemsPerPage: 8,
  visiblePages: 5,
  page: countState.page,
}
let pagination = new Pagination('pagination', options)
pagination.on('beforeMove', handlePagination(refs, countState, filteredData))

document.addEventListener('DOMContentLoaded', () => {
  const renderedButtons = navData.map((el) => navItem(el)).join('')

  refs.navList.insertAdjacentHTML('beforeend', renderedButtons)
  refs.walcomeUser.textContent = 'Evano'
  refs.tableBody.innerHTML = calcTableData(filteredData, countState, tableItem)
  refs.pagiInfo.textContent = countInfo(countState, data.length)
  refs.navList.addEventListener('click', handleClickNav)
  refs.searchInput.addEventListener(
    'input',
    handleInputSearch(filteredData, refs, countState, pagination)
  )
})
