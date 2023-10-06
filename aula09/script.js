const corpo = document.body
const p1 = document.getElementsByTagName("p")[1]
const d = document.getElementById("msg")

document.write(p1.innerHTML) 
d.style.color = 'black'
d.innerText = 'Estou aguardando...'