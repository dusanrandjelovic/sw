function pretragaLjudi(){
  const ispisInput = document.getElementById("ispis")
  const poljeInput = document.getElementById("polje")
  const dugmeInput = document.getElementById("dugme")
  let sablon = ""
  fetch(`https://swapi.co/api/planets/?search=${poljeInput.value}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon += `
<div>
  <h1>${data.results[i].name}</h1>
  <p>Model: ${data.results[i].terrain}</p>
  <p>Passengers: ${data.results[i].population}</p>
  <p>Length: ${data.results[i].climate} m</p>
  <p>Cost: ${data.results[i].gravity} credits</p>
  <p>Consumables: ${data.results[i].orbital_period}</p>
  <p>Manufacturer: ${data.results[i].surface_water}</p>
  </div>
`
}
ispis.innerHTML = sablon
})
}
dugme.addEventListener("click", pretragaLjudi)
