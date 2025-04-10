import { resolverSistema2x2 } from './utils.js';

export function verificarPontoAdmissivel([x, y], restricoes) {
  return restricoes.every(({ a, b, c }) => (a * x + b * y <= c));
}

export function obterIntersecoes(restricoes) {
  const intersecoes = [];

  for (let i = 0; i < restricoes.length; i++) {
    for (let j = i + 1; j < restricoes.length; j++) {
      const r1 = restricoes[i];
      const r2 = restricoes[j];

      const ponto = resolverSistema2x2(r1, r2);
      if (ponto) {
        intersecoes.push(ponto);
      }
    }
  }

  return intersecoes;
}
