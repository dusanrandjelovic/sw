function pretragaLjudi(){
  const ispisInput = document.getElementById("ispis")
  const poljeInput = document.getElementById("polje")
  const dugmeInput = document.getElementById("dugme")
  let sablon = ""
  fetch(`https://swapi.co/api/species/?search=${poljeInput.value}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon += `
<div>
  <h1>${data.results[i].name}</h1>
  <p>Model: ${data.results[i].language}</p>
  <p>Passengers: ${data.results[i].hair_colors}</p>
  <p>Length: ${data.results[i].eye_colors} m</p>
  <p>Cost: ${data.results[i].average_height} credits</p>
  <p>Consumables: ${data.results[i].classification}</p>
  <p>Manufacturer: ${data.results[i].designation}</p>
  </div>
`
}
ispis.innerHTML = sablon
})
}
dugme.addEventListener("click", pretragaLjudi)
