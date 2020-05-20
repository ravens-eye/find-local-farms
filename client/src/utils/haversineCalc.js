export default function haversineCalc(la1, la2, lo1, lo2) {
  const R = 6371e3; // meters
  const φ1 = (la1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (la2 * Math.PI) / 180;
  const Δφ = ((la2 - la1) * Math.PI) / 180;
  const Δλ = ((lo2 - lo1) * Math.PI) / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c * 0.000621371; // in miles
}
