import appendContent from './page-load.js'
import setTable from './menu.js'

const indexTab = document.getElementById('home')
const menuTab = document.getElementById('menu')

indexTab.addEventListener('click', appendContent)
menuTab.addEventListener('click', setTable)