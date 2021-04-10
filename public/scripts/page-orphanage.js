const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomCotrol: false,
};
// gat values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

/** Criando mapa, orientação do site leafletjs */
const map = L.map('mapid', options).setView([lat, lng], 15);

/** Create and add tileLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

/** Create to icon */
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

/** O ponto de orientão do mapa */

L.marker([lat, lng], { icon }).addTo(map);

/* Image gallry */

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove('active');
  }

  //selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  //atualizar o container de image
  imageContainer.src = image.src;

  //adcionar a classe .active para este botao
  button.classList.add('active');
}
