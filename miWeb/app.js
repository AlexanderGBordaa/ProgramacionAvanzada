


// let nombre = "Alexander";
// let edad = 24;
// let profesion = "Estudiante";

// console.log("Nombre: " + nombre);
// console.log("Edad: " + edad);
// console.log("Profesión: " + profesion);

function pick(obj, keys) {
  const out = {};
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      out[k] = obj[k];
    }
  }
  return out;
}
