const tabla = document.getElementById('tabla')
function cargarTabla() {
  var url ="data.json"
  fetch(url)
    .then(response=>response.json)
    .then(data=>generarTabla(data))
  .catch(error=>{})
}
function generarTabla(json) {
  for (var i in json.cartas) {
    const tr=document.createElement('tr')
    const tdNumero=document.createElement('td')
      tdNumero.textContent=json.cartas[i].numero
      tr.appendChild(tdNumero)
    const tdCarta=document.createElement('td')
      tdCarta.textContent=json.cartas[i].carta
      tr.appendChild(tdCarta)
    const tdCant=document.createElement('td')
      tdCant.textContent=json.cartas[i].cant
      tr.appendChild(tdCant)
  tabla.tBodies[0].appendChild(tr)
  }

}
document.getElementById("boton").onclick=cargarTabla;
