let Api = "https://ozgbcdyvmsjwqqptljpf.supabase.co/rest/v1/Products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96Z2JjZHl2bXNqd3FxcHRsanBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5ODg2MjMsImV4cCI6MjA1MzU2NDYyM30.86EaCA1fPHg8uVaseOdc5S93p9EHvExnn7Bd5okKo8U&=Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96Z2JjZHl2bXNqd3FxcHRsanBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5ODg2MjMsImV4cCI6MjA1MzU2NDYyM30.86EaCA1fPHg8uVaseOdc5S93p9EHvExnn7Bd5okKo8U"


//Aqui se manejan los elementos

function makeCard (products){
  const {Name,Price,imagen} = products;
  const cardContainer = document.querySelector('.card-container');

  const title = document.createElement('h5');
  title.classList.add("container-name")
  title.textContent = Name;



  const dolar = document.createElement('h5')
  dolar.textContent = "$"

  const price = document.createElement('h5');
  price.classList.add("price")
  price.textContent = Price
  price.appendChild(dolar)


  const characterImage = document.createElement('img');
  characterImage.src = imagen
  characterImage.width = 200;



  const Card = document.createElement('div');
  Card.appendChild(title);
  Card.appendChild(price)
  Card.appendChild(characterImage);

  cardContainer.appendChild(Card)
}

//Aqui se conecta la api

async function listaProducts() {
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

listaProducts()


