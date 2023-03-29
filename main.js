const url = "https://pokebuildapi.fr/api/v1/pokemon/Smogogo/ability/Levitation";
const allPokemon = "https://pokebuildapi.fr/api/v1/pokemon";
let img = document.getElementById('pokeImage')
let nom = document.getElementById('pokeNom')
let pokeContainer = document.getElementById('pokeContainer')
const hundredPoke = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
let result;
let container;

let values = fetch(hundredPoke).then(response => response.json())
.then(data => {
    result = data;
    result.forEach((element, index) => {
        let {id, pokedexId, name, image, sprite} = element;
        let {HP, attack, defense, special_attack, special_defense, speed} = element.stats
        let container = document.createElement('div');
        container.className = 'col-lg-3';
        container.id = id;
        container.innerHTML = `<div class="col-lg-6 imgName">
        <img src="${image}" class="img-fluid" alt="" id="pokeImage${index}">
        <p id="pokeNom" class="text-center text-decoration-underline text-dark h3">${name}</p></div>
        <div class="col-lg-6 " id="table">
                    <table class="table table-dark">
                        <thead>
                          <tr>
                            <th>Capacité</th>
                            <th>Stats</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>PV</td>
                            <td>${HP}</td>
                          </tr>
                          <tr>
                            <td>Attaque</td>
                            <td>${attack}</td>
                          </tr>
                          <tr>
                            <td>Defense</td>
                            <td>${defense}</td>
                          </tr>
                          <tr>
                            <td>Attaque Spéciale</td>
                            <td>${special_attack}</td>
                          </tr>
                          <tr>
                            <td>Défense Spéciale</td>
                            <td>${special_defense}</td>
                          </tr>
                          <tr>
                            <td>Vitesse</td>
                            <td>${speed}</td>
                          </tr>
                        </tbody>
                    </table>
                </div>`;
        pokeContainer.appendChild(container);
        // let content = document.createElement('img')
        console.log(element.stats)
    });
    // (function () {
        // let {id, pokedexId, name, image, sprite} = result;
        // img.src = image;
        // nom.innerText = name;
    // })()
}).catch(
    error => console.error(error)
)

