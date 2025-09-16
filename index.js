// index.js (raíz)
import router from './src/routes/index.js';
import './src/styles/styles.css'; // o la ruta correcta del css

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
