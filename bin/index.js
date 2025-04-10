#!/usr/bin/env node

import promptSync from 'prompt-sync';
import { verificarPontoAdmissivel, obterIntersecoes } from '../core/constraints.js';
import { plotRestricoes } from '../core/plot.js';

const prompt = promptSync();

let restricoes = [];

console.log("=== Inserir Restrições ===");
console.log("Formato: ax + by <= c (ex: 1 2 10)");

while (true) {
  const input = prompt('Digite a, b e c (ou pressione Enter para terminar): ');
  if (input.trim() === '') break;

  const [a, b, c] = input.split(' ').map(Number);
  if ([a, b, c].some(v => isNaN(v))) {
    console.log("Entrada inválida. Use três números separados por espaço.");
    continue;
  }

  restricoes.push({ a, b, c });
}

if (restricoes.length < 2) {
  console.log("❌ É necessário pelo menos duas restrições.");
  process.exit(1);
}

const intersecoes = obterIntersecoes(restricoes);
const admissiveis = intersecoes.filter(p => verificarPontoAdmissivel(p, restricoes));

console.log("\n🔹 Pontos Admissíveis:");
admissiveis.forEach(([x, y]) => {
  console.log(`(x=${x.toFixed(2)}, y=${y.toFixed(2)})`);
});


plotRestricoes(restricoes, admissiveis);
