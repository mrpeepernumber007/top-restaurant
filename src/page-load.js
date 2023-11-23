import logo from './dog-logo.jpg'

const img = new Image()
img.src = logo

const headLine = document.createElement('h1')
headLine.innerHTML = 'Dog restaurant! Feast like a hound!'
    
const copyPar = document.createElement('p')
copyPar.innerHTML = 'The best restaurant in the neighborhood. We serve BIG meals in BIG ROUND plates. You cannot get enough of our food. Like a Dog! PS: we do NOT cook dog meat'


const contentDiv = document.getElementById('content')


export default function appendContent() {
    contentDiv.appendChild(img)
    contentDiv.appendChild(headLine)
    contentDiv.appendChild(copyPar)
}