import { fetchLaunchById } from '../utils/getData.js';

export async function renderLaunchDetail(container, id) {
    const launch = await fetchLaunchById(id);
    if (!launch) {
        container.innerHTML = '<p>Lanzamiento no encontrado</p>';
        return;
    }

    container.innerHTML = `
        <button id="back">← Volver</button>
        <h1>${launch.name}</h1>
        <img src="${launch.links.patch.large || launch.links.patch.small}" alt="${launch.name}" />
        <p><strong>Detalles:</strong> ${launch.details || 'No disponible'}</p>
        <p><strong>Fallos:</strong> ${launch.failures.length ? launch.failures.map(f => f.reason).join(', ') : 'Ninguno'}</p>
        <p><strong>Número de vuelo:</strong> ${launch.flight_number}</p>
        <p><strong>Fecha y hora de despegue:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
    `;

    document.getElementById('back').addEventListener('click', () => {
        window.location.hash = '#/';
    });
}
