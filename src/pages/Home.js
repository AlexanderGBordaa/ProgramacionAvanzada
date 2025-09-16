// src/pages/Home.js
import api from '../utils/getData.js';
import launchCard from '../templates/card.js';

export async function renderHome(container) {
  container.innerHTML = '<h1>Lanzamientos SpaceX</h1><div class="grid" id="launch-grid"></div>';
  const grid = container.querySelector('#launch-grid');

  const launches = await api.getLaunches();
  if (!launches || launches.length === 0) {
    grid.innerHTML = '<p>No se encontraron lanzamientos.</p>';
    return;
  }

  grid.innerHTML = launches.map(launch => launchCard(launch)).join('');

  // click en imagen -> ruta detalle
  grid.querySelectorAll('.launch-img').forEach(img => {
    img.addEventListener('click', () => {
      window.location.hash = `#/launch/${img.dataset.id}`;
    });
  });
}

export default { renderHome };
