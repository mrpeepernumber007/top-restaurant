const contentDiv = document.getElementById('content')

const menuDiv = document.createElement('div')
const menuUl = document.createElement('ul')

const dish1 = document.createElement('li')
const dish2 = document.createElement('li')
const dish3 = document.createElement('li')

const d1Title = document.createElement('h1')
const d2Title = document.createElement('h1')
const d3Title = document.createElement('h1')

const d1Desc = document.createElement('p')
const d2Desc = document.createElement('p')
const d3Desc = document.createElement('p')

d1Title.textContent = 'Irresistible kibble'
d2Title.textContent = 'Classic steak'
d3Title.textContent = 'Bone calzone'

d1Desc.textContent = 'Small roundish breaded bits of fish, chicken or potatoe. You can never guess what you will get, because even WE dont know!'
d2Desc.textContent = 'Simple yet effective. The classic steak comes with a side of salad or fried or mashed potatoes.'
d3Desc.textContent = 'Calzone in the shape of a bone! The greatest food for the Italian hound to munch on! Vegan version available soon.'


export default function setTable() {
    console.log('Setting table');
    dish1.appendChild(d1Title)
    dish1.appendChild(d1Desc)
    
    dish2.appendChild(d2Title)
    dish2.appendChild(d2Desc)
    
    dish3.appendChild(d3Title)
    dish3.appendChild(d3Desc)
    
    menuUl.appendChild(dish1)
    menuUl.appendChild(dish2)
    menuUl.appendChild(dish3)
    
    menuDiv.appendChild(menuUl)
    contentDiv.appendChild(menuDiv)
}