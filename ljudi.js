function pretragaLjudi(){
  const ispisInput = document.getElementById("ispis")
  const poljeInput = document.getElementById("polje")
  const dugmeInput = document.getElementById("dugme")
  let sablon = ""
  fetch(`https://swapi.co/api/people/?search=${poljeInput.value}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.results.length; i++){
sablon += `
<div>
  <h1>${data.results[i].name}</h1>
  <p>Birth year: ${data.results[i].birth_year}</p>
  <p>Height: ${data.results[i].height} cm</p>
  <p>Mass: ${data.results[i].mass} kg</p>
  <p>Gender: ${data.results[i].gender}</p>
  <p>Eye color: ${data.results[i].eye_color}</p>
  <p>Hair color: ${data.results[i].hair_color}</p>
  </div>
`
}
ispis.innerHTML = sablon
})
}
dugme.addEventListener("click", pretragaLjudi)
