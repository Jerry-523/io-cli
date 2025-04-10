import nodeplotlib from 'nodeplotlib';
const { plot } = nodeplotlib;

export function plotRestricoes(restricoes, admissiveis) {
  const xRange = [-10, 10];
  const yRange = [-10, 10];
  const resolucao = 100;

  const restricaoPlots = restricoes.map(({ a, b, c }, i) => {
    const x = [];
    const y = [];

    for (let xi = xRange[0]; xi <= xRange[1]; xi += (xRange[1] - xRange[0]) / resolucao) {
      if (b === 0) continue; // evita divisão por zero
      const yi = (c - a * xi) / b;
      x.push(xi);
      y.push(yi);
    }

    return {
      x,
      y,
      type: 'scatter',
      mode: 'lines',
      name: `R${i + 1}`,
    };
  });

  const admissiveisPlot = {
    x: admissiveis.map(([x]) => x),
    y: admissiveis.map(([, y]) => y),
    mode: 'markers',
    type: 'scatter',
    name: 'Admissíveis',
    marker: { color: 'green', size: 10 },
  };

  const layout = {
    title: 'Restrições e Pontos Admissíveis',
    xaxis: { title: 'x' },
    yaxis: { title: 'y' },
  };

  plot([...restricaoPlots, admissiveisPlot], layout);
}
