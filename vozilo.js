function pretragaLjudi(){
  const ispisInput = document.getElementById("ispis")
  const poljeInput = document.getElementById("polje")
  const dugmeInput = document.getElementById("dugme")
  let sablon = ""
  fetch(`https://swapi.co/api/vehicles/?search=${poljeInput.value}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon += `
<div>
  <h1>${data.results[i].name}</h1>
  <p>Model: ${data.results[i].model}</p>
  <p>Passengers: ${data.results[i].passengers}</p>
  <p>Length: ${data.results[i].length} m</p>
  <p>Cost: ${data.results[i].cost_in_credits} credits</p>
  <p>Consumables: ${data.results[i].cargo_capacity}</p>
  <p>Manufacturer: ${data.results[i].manufacturer}</p>
  </div>
`
}
ispis.innerHTML = sablon
})
}
dugme.addEventListener("click", pretragaLjudi)
