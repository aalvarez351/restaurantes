
const images=[
"https://images.unsplash.com/photo-1550547660-d9450f859349",
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
"https://images.unsplash.com/photo-1606756790138-261d2b21cd6f"
]

let index=0

function show(){
document.getElementById("carouselImage").src=images[index]
}

function next(){
index=(index+1)%images.length
show()
}

function prev(){
index=(index-1+images.length)%images.length
show()
}

function diagnostics(){

let status=document.getElementById("status")

if(navigator.mediaDevices){
status.innerText="✔ Camera API available"
}else{
status.innerText="⚠ Camera API not detected"
}

}

diagnostics()
