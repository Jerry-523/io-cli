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

Claro! Aqui vai um **rascunho explicativo** sobre as **fórmulas matemáticas utilizadas** e a **modularização** feita no código da CLI de Investigação Operacional:

---

## 🧠 **Resumo Matemático das Fórmulas Utilizadas**

O objetivo principal é determinar os **pontos admissíveis** de um sistema de **inequações lineares** da forma:

```
a₁x + b₁y ≤ c₁  
a₂x + b₂y ≤ c₂  
...  
```

### 1. **Interseção entre restrições (retas)**

Para encontrar possíveis **vértices da região viável**, calculamos o ponto de interseção entre **todas as combinações de pares de restrições**, tratando-as como **equações**:

> Seja:
```
a₁x + b₁y = c₁  
a₂x + b₂y = c₂
```

Montamos um sistema linear:

\[
\begin{cases}
a₁x + b₁y = c₁ \\
a₂x + b₂y = c₂
\end{cases}
\]

Usamos álgebra linear para resolver:

\[
A = 
\begin{bmatrix}
a₁ & b₁ \\
a₂ & b₂
\end{bmatrix},
\quad
C = 
\begin{bmatrix}
c₁ \\
c₂
\end{bmatrix}
\quad
\Rightarrow \quad
A \cdot 
\begin{bmatrix}
x \\
y
\end{bmatrix}
= C
\]

Se `A` é invertível (ou seja, `det(A) ≠ 0`), o ponto de interseção existe.

---

### 2. **Verificação de viabilidade**

Após encontrar um ponto \( (x, y) \), testamos se ele satisfaz **todas** as restrições:

\[
a_ix + b_iy ≤ c_i \quad \text{para todo } i
\]

Somente os pontos que satisfazem **todas** as inequações são considerados **admissíveis**.

---

### 3. **Visualização Gráfica**

Cada inequação é representada como uma **reta (fronteira)**:

\[
y = \frac{c - ax}{b}
\]

Essas retas são desenhadas, e os pontos admissíveis são marcados no gráfico.

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
