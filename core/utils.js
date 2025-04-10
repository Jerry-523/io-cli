export function resolverSistema2x2(r1, r2) {
    const { a: a1, b: b1, c: c1 } = r1;
    const { a: a2, b: b2, c: c2 } = r2;
  
    const det = a1 * b2 - a2 * b1;
  
    if (det === 0) return null; // Retas paralelas
  
    const x = (c1 * b2 - c2 * b1) / det;
    const y = (a1 * c2 - a2 * c1) / det;
  
    return [x, y];
  }
  