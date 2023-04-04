const bitcoinPrice = document.getElementById("bitcoin-price");
const ethereumPrice = document.getElementById("ethereum-price");
const cardanoPrice = document.getElementById("cardano-price");
const solanaPrice = document.getElementById("solana-price");
const litecoinPrice = document.getElementById("litecoin-price");

async function fetchCryptoPrice(crypto, currency) {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[crypto][currency];
}

async function displayCryptoPrice() {
  const btcPrice = await fetchCryptoPrice("bitcoin", "usd");
  bitcoinPrice.textContent = `$${btcPrice.toLocaleString()}`;

  const ethPrice = await fetchCryptoPrice("ethereum", "usd");
  ethereumPrice.textContent = `$${ethPrice.toLocaleString()}`;

  const adaPrice = await fetchCryptoPrice("cardano", "usd");
  cardanoPrice.textContent = `$${adaPrice.toLocaleString()}`;

  const solPrice = await fetchCryptoPrice("solana", "usd");
  solanaPrice.textContent = `$${solPrice.toLocaleString() }`;

  const litePrice = await fetchCryptoPrice("litecoin", "usd");
  litecoinPrice.textContent = `$${litePrice.toLocaleString()}`
}

displayCryptoPrice();
setInterval(displayCryptoPrice,10000)


//funciones del menu responsive
function responsiveMenu(){
  let x = document.getElementById("nav");
  if (x.className === ""){
    x.className = "responsive";
  }else {
    x.className = "";
  }
}

// funcion que aplica estilo a la opcion seleccionada en el menu y quita la previamente seleccionado 
function seleccionar (link){
  let opciones = document.querySelectorAll('#links a');
  opciones[0].className ="";
  opciones[1].className ="";
  opciones[2].className ="";
  opciones[3].className ="";
  opciones[4].className ="";
  link.className = "seleccionado"

  //hacemos desaparecer el menu una ves seleccionada una opcion
  let x = document.getElementById("nav");
  x.className = "";

}

//detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function () {
  efectoHabilidades()
};

//funcion que aplica la animacion

function efectoHabilidades(){
  let skills = document.getElementById ("skills")
  let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("cF").classList.add ("barra-progreso1")
    document.getElementById("hA").classList.add ("barra-progreso2")
    document.getElementById("d").classList.add ("barra-progreso3")
    document.getElementById("hbP").classList.add ("barra-progreso4")

  }
}