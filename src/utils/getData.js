// src/utils/api.js
const BASE = 'https://api.spacexdata.com/v5/launches';

export async function getLaunches() {
  try {
    const res = await fetch(BASE);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // Normalizamos para lo que usa el front (nombre, links.patch.small, flight_number, date_utc, details, failures)
    return data.map(launch => ({
      id: launch.id,
      name: launch.name,
      img: (launch.links && launch.links.patch && launch.links.patch.small) || '',
      flight_number: launch.flight_number,
      date_utc: launch.date_utc,
      details: launch.details,
      failures: launch.failures || []
    }));
  } catch (err) {
    console.error('getLaunches error', err);
    return [];
  }
}

export async function getLaunchById(id) {
  try {
    const res = await fetch(`${BASE}/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const launch = await res.json();
    return {
      id: launch.id,
      name: launch.name,
      img: (launch.links && launch.links.patch && launch.links.patch.small) || '',
      flight_number: launch.flight_number,
      date_utc: launch.date_utc,
      details: launch.details,
      failures: launch.failures || []
    };
  } catch (err) {
    console.error('getLaunchById error', err);
    return null;
  }
}

export default { getLaunches, getLaunchById };
