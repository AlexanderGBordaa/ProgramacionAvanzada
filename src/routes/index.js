// src/routes/index.js
import { renderHome } from '../pages/Home.js';
import renderLaunchDetail from '../pages/LaunchDetail.js';

const container = document.getElementById('app');

function router() {
  const hash = window.location.hash || '#/';
  const launchDetailMatch = hash.match(/^#\/launch\/(.+)/);
  if (hash === '#/') {
    renderHome(container);
  } else if (launchDetailMatch) {
    renderLaunchDetail(container, launchDetailMatch[1]);
  } else {
    container.innerHTML = '<p>Página no encontrada</p>';
  }
}

// export default para que index.js raíz lo importe correctamente
export default router;
