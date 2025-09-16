// src/templates/card.js
export default function launchCard(launch) {
  const imgSrc = launch.img || 'https://via.placeholder.com/100x100?text=no+img';
  return `
    <div class="card">
      <h3>${escapeHtml(launch.name)}</h3>
      <img class="launch-img" data-id="${launch.id}" src="${imgSrc}" alt="${escapeHtml(launch.name)}" />
      <p>Vuelo: ${launch.flight_number ?? 'N/A'}</p>
      <p>${launch.date_utc ? new Date(launch.date_utc).toLocaleString() : ''}</p>
    </div>
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
