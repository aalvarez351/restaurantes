
async function loadMenu(){

const res = await fetch("menu.json")
const data = await res.json()

const panel = document.getElementById("menuPanel")

data.items.forEach(item=>{

let div=document.createElement("div")
div.className="item"

div.innerHTML=`
<b>${item.name}</b> - ${item.price}<br>
${item.description}<br>
<button onclick="order('${item.name}','${data.phone}')">Ordenar</button>
`

panel.appendChild(div)

})

}

function order(item,phone){

const url=`https://wa.me/${phone}?text=Quiero%20ordenar%20${encodeURIComponent(item)}`
window.open(url)

}

loadMenu()
