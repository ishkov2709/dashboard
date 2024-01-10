import '@/styles/index.scss'
import navItem from './js/components/navItem'

const refs = {
  navList: document.querySelector('.nav__list'),
  walcomeUser: document.querySelector('.welcome__user'),
}

const navData = ['dashboard', 'product', 'customers', 'income', 'promote', 'help']

const renderedItems = navData.map((el) => navItem(el)).join('')

refs.navList.insertAdjacentHTML('beforeend', renderedItems)

refs.navList.addEventListener('click', ({ target }) => {
  const btn = target.closest('button')
  if (btn) {
    document.querySelector('.list__button--active')?.classList.remove('list__button--active')
    btn.classList.add('list__button--active')
  }
})

refs.walcomeUser.textContent = 'Evano'
