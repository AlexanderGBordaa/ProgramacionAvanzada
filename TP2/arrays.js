
// Ejercicio 1

const router = {
  modelo: "AX6000",
  marca: "TP-Link",
  puertos: 8,
  velocidad: 6000, // Mbps
  soportaWifi: true
};
console.log("Router:", router);


// Ejercicio 2

const inventarioRed = [
  { tipo: "Router", marca: "Cisco", modelo: "RV340", precio: 450 },
  { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
  { tipo: "Firewall", marca: "Fortinet", modelo: "FG-40F", precio: 950 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi 6 Lite", precio: 229 },
  { tipo: "Router", marca: "MikroTik", modelo: "hEX S", precio: 79 }
];
console.log("Inventario:", inventarioRed);


// Ejercicio 3

const dispositivosRed = [
  { tipo: "Router", marca: "Cisco",    modelo: "1941",             precio: 1200 },
  { tipo: "Switch", marca: "TP-Link",  modelo: "TL-SG108",         precio: 150  },
  { tipo: "Firewall", marca: "Cisco",  modelo: "ASA 5506-X",       precio: 2500 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
  { tipo: "Router", marca: "TP-Link",  modelo: "Archer C7",        precio: 180  }
];
function filtrarPorMarca(arr, marca) {
  return arr.filter(d => d.marca.toLowerCase() === marca.toLowerCase());
}
console.log("Solo Cisco:", filtrarPorMarca(dispositivosRed, "Cisco"));
console.log("Solo TP-Link:", filtrarPorMarca(dispositivosRed, "TP-Link"));


// Ejercicio 4

const servidores = [
  { nombre: "Servidor Web",        ip: "192.168.1.10", sistema: "Linux"   },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo",  ip: "192.168.1.12", sistema: "Linux"   },
  { nombre: "Servidor DNS",        ip: "192.168.1.13", sistema: "Linux"   },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows"}
];
const soloIPs = servidores.map(s => s.ip);
console.log("IPs:", soloIPs);


// Ejercicio 5

const paquetesDatos = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800,  prioridad: 1 },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950,  prioridad: 2 },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];
const paquetesFiltradosOrdenados = paquetesDatos
  .filter(p => p.tamaño > 1000)
  .sort((a, b) => b.prioridad - a.prioridad);
console.log(">1000 bytes ordenados por prioridad DESC:", paquetesFiltradosOrdenados);


// Ejercicio 6

const traficoRed = {
  "08:00": 1250, "09:00": 1870, "10:00": 2100, "11:00": 1950, "12:00": 1600,
  "13:00": 1300, "14:00": 1700, "15:00": 2200, "16:00": 1800, "17:00": 1500
};
const totalMB = Object.values(traficoRed).reduce((acc, mb) => acc + mb, 0);
const [horaPico, maxMB] = Object.entries(traficoRed)
  .reduce((max, [hora, mb]) => (mb > max[1] ? [hora, mb] : max), ["", -Infinity]);
console.log(`Total MB: ${totalMB} | Hora pico: ${horaPico} (${maxMB} MB)`);


// Ejercicio 7

const conexiones = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
  { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
  { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
  { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];
const conexionesPorProtocolo = conexiones.reduce((acc, c) => {
  acc[c.protocolo] = (acc[c.protocolo] || 0) + 1;
  return acc;
}, {});
console.log(" Conexiones por protocolo:", conexionesPorProtocolo);


// Ejercicio 8

const alertas = [
  { id: 1, nivel: "alto",  origen: "192.168.1.5",  mensaje: "Múltiples intentos fallidos de login" },
  { id: 2, nivel: "medio", origen: "192.168.1.7",  mensaje: "Tráfico inusual" },
  { id: 3, nivel: "alto",  origen: "192.168.1.11", mensaje: "Firma de malware detectada" }
];
const mensajesAdmin = alertas
  .filter(a => a.nivel.toLowerCase() === "alto")
  .map(a => `[ALERTA ALTA] ${a.origen}: ${a.mensaje}`);
console.log(" Mensajes al administrador:", mensajesAdmin);


// Ejercicio 9

const dispositivos = [
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5",  tipo: "Estación de trabajo" },
  { id: 2, nombre: "PC-Marketing",  ip: "192.168.1.7",  tipo: "Estación de trabajo" },
  { id: 3, nombre: "Servidor-Web",  ip: "192.168.1.10", tipo: "Servidor" },
  { id: 4, nombre: "Servidor-BD",   ip: "192.168.1.11", tipo: "Servidor" }
];
const conexionesActivas = [
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP",  bytes: 8500  },
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200  }
];
const informeActividad = conexionesActivas.map(conexion => {
  const origen  = dispositivos.find(d => d.ip === conexion.origen);
  const destino = dispositivos.find(d => d.ip === conexion.destino);
  return {
    origen:      origen ? origen.nombre : conexion.origen,
    origenTipo:  origen ? origen.tipo   : "Desconocido",
    destino:     destino ? destino.nombre: conexion.destino,
    destinoTipo: destino ? destino.tipo  : "Desconocido",
    protocolo:   conexion.protocolo,
    bytes:       conexion.bytes
  };
});
console.log(" Informe de actividad de red:", informeActividad);


// Ejercicio 10

const topologiaRed = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1" },
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000 },
    { origen: "A", destino: "C", ancho_banda: 1000 },
    { origen: "B", destino: "C", ancho_banda: 100 },
    { origen: "B", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "E", ancho_banda: 1000 },
    { origen: "D", destino: "E", ancho_banda: 1000 }
  ]
};
const conexionesPorNodoTopo = Object.fromEntries(topologiaRed.nodos.map(n => [n.id, 0]));
topologiaRed.conexiones.forEach(c => {
  conexionesPorNodoTopo[c.origen]  += 1;
  conexionesPorNodoTopo[c.destino] += 1;
});
const nodosOrdenados = Object.entries(conexionesPorNodoTopo).sort((a, b) => b[1] - a[1]);
const sugerencias = nodosOrdenados
  .filter(([, count]) => count > 2)
  .map(([id, count]) => `Nodo ${id} con ${count} conexiones: evaluar aumentar ancho de banda o segmentar.`);
console.log(" Conexiones por nodo:", conexionesPorNodoTopo);
console.log(" Nodos ordenados:", nodosOrdenados);
console.log(" Sugerencias:", sugerencias);
