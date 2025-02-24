/** CONSUMIR API */

const Api = "https://rickandmortyapi.com/api/character"
/** CARGANDO ELEMENTOS A HTML */
function makeCard (character){
  const {name, status, image, species, gender} = character;
  const cardContainer = document.querySelector('.card-container');

  const title = document.createElement('h5');
  title.textContent = name;

  const specie = document.createElement('h4')
  specie.textContent = species

  const genero = document.createElement('h3')
  genero.textContent = gender


  const characterStatus = document.createElement('p');
  characterStatus.textContent = status;
  if(status == "Alive") characterStatus.style.color = "green";
  else if(status == "Dead") characterStatus.style.color = "red"
  else characterStatus.style.color = "gray";

  const characterImage = document.createElement('img');
  characterImage.src = image
  characterImage.width = 200;

  const Card = document.createElement('div');
  Card.appendChild(title);
  Card.appendChild(specie)
  Card.appendChild(genero)
  Card.appendChild(characterImage);
  Card.appendChild(characterStatus);

  cardContainer.appendChild(Card)
}

  /** PARA CONFIGURAR LO Q VA APARECER EN LA PANTALLA DEBES VER Q DATOS TE SUELTA LA API Y LLAMARLOS CON UNA COSTANDTE */




/** CONSUMIENDO LA API */
async function rick() {
  try {
    const reponse = await fetch(Api);
    const results = await reponse.json();

    for(let i=0; i < results.length; i++){
      makeCard(results[i])
    }

    console.log(results)
  } catch (error) {
    console.error(error)
  }
}

rick()









/*
Promesa

function addToArray (data,array){
  const promise = new Promise(function(resolve,reject){
    setTimeout(function() {
      array.push(data);
      resolve(array);
    },1000)
  })

  if(!array){
    reject(new Error("no existe el array"))
  }
  return promise;
}


let array = [1,2,3]
addToArray(4, array).then(()=> console.log(array))

*/
