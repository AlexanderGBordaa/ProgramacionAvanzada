// src/pages/LaunchDetail.js
import api from '../utils/getData';

export default async function renderLaunchDetail(container, id) {
  container.innerHTML = '<button id="back">← Volver</button><div class="detail-container"><div class="detail-card"></div><div class="detail-info"></div></div>';

  const back = container.querySelector('#back');
  back.addEventListener('click', () => (window.location.hash = '#/'));

  const card = container.querySelector('.detail-card');
  const info = container.querySelector('.detail-info');

  const launch = await api.getLaunchById(id);
  if (!launch) {
    info.innerHTML = '<p>No se encontró el lanzamiento.</p>';
    return;
  }

  card.innerHTML = `
    <h2>${escapeHtml(launch.name)}</h2>
    <img src="${launch.img || 'https://via.placeholder.com/250'}" alt="${escapeHtml(launch.name)}" />
  `;

  info.innerHTML = `
    <p><strong>Vuelo:</strong> ${launch.flight_number ?? 'N/A'}</p>
    <p><strong>Fecha:</strong> ${launch.date_utc ? new Date(launch.date_utc).toLocaleString() : 'N/A'}</p>
    <p><strong>Detalles:</strong> ${escapeHtml(launch.details || 'Sin detalles')}</p>
    <h3>Fallas</h3>
    ${launch.failures.length ? `<ul>${launch.failures.map(f => `<li>${escapeHtml(f.reason || JSON.stringify(f))}</li>`).join('')}</ul>` : '<p>No se registraron fallas</p>'}
  `;
}


function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}