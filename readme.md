# 📐 IO-CLI — Investigação Operacional via Linha de Comando

Uma ferramenta interativa em Node.js que calcula **pontos admissíveis** a partir de um sistema de **restrições lineares** e **exibe visualmente o resultado** com um gráfico.

Ideal para estudantes de Pesquisa Operacional, Engenharia ou áreas relacionadas.

---

## 🚀 Funcionalidades

✅ Leitura interativa das restrições (via terminal)  
✅ Cálculo de interseções de retas (restrições)  
✅ Verificação de quais pontos satisfazem todas as desigualdades  
✅ Visualização gráfica usando `nodeplotlib`  
✅ Totalmente modularizado e pronto para expansão

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Jerry-523/io-cli.git
cd io-cli
```

### 2. Instale as dependências

```bash
npm install
```

---

## 🔗 Uso via Terminal

### 1. Modo de desenvolvimento

```bash
npm start
```

### 2. Modo global (CLI)

Instale o comando global com:

```bash
npm link
```

Agora você pode chamar de qualquer lugar usando:

```bash
iocalc
```

---

## 🧪 Exemplo de uso

```bash
$ iocalc
=== Inserir Restrições ===
Formato: ax + by <= c (ex: 1 2 10)
Digite a, b e c (ou pressione Enter para terminar): 1 1 5
Digite a, b e c (ou pressione Enter para terminar): 1 -1 1
Digite a, b e c (ou pressione Enter para terminar): -1 0 0
Digite a, b e c (ou pressione Enter para terminar): 0 -1 0
Digite a, b e c (ou pressione Enter para terminar):
```

🟢 A aplicação calcula os pontos admissíveis e abre uma **visualização gráfica** com as restrições e interseções viáveis.

---

## 📚 Como funciona?

- O usuário insere inequações do tipo `ax + by <= c`
- O programa:
  - Calcula todas as **interseções possíveis**
  - Verifica se cada ponto satisfaz **todas as restrições**
  - Mostra no terminal e plota os **pontos viáveis (admissíveis)**

---

## 📈 Visualização

A visualização é feita com [nodeplotlib](https://www.npmjs.com/package/nodeplotlib), uma interface Node.js para Plotly:

- As linhas representam as restrições
- Os pontos verdes são os pontos admissíveis (interseções viáveis)

---

## 🛠 Requisitos

- Node.js 18 ou superior
- Terminal compatível com entrada interativa

---

## 💡 Próximos Passos

- Suporte a `>=`, `=` nas restrições
- Adicionar função objetivo (maximização/minimização)
- Resolver graficamente problemas completos de PL
- Exportação dos gráficos como imagem ou PDF
- Interface Web



---

```


