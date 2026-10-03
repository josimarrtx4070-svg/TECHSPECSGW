# TechSpecsGW

Site estático em HTML/CSS/JavaScript focado em informar características de Smartphones, Portáteis Gaming, Consoles Portáteis, CPUs e GPUs com comparadores integrados.

## Estrutura
```
TechSpecsGW/
├─ index.html
├─ smartphones.html
├─ portateis-gaming.html
├─ console-portateis.html
├─ cpus.html
├─ gpus.html
├─ comparadores.html
├─ themes.html
├─ data.js
├─ script.js
├─ fx.js
├─ styles.css
├─ style-startup.css
├─ style-neon.css
├─ style-glass.css
├─ style-minimal.css
├─ favicon.png
├─ icon-192.png
├─ icon-512.png
├─ img-console.svg
├─ manifest.json
├─ robots.txt
├─ sitemap.xml
├─ README.md
└─ docs/
   └─ temas.md
```

## Como usar
1. Abrir `index.html` no browser ou servir a pasta com um servidor local.
2. Navegar pelas páginas: Início (com secções de Lançamentos e Rumores), Smartphones, Portáteis Gaming, Consoles Portáteis, CPUs, GPUs, Comparadores e Temas.
3. Usar a barra de pesquisa e filtro por ano em cada página para filtrar ao vivo.
4. No comparador, escolher dois CPUs ou duas GPUs e clicar em Comparar.
5. Em `themes.html` pode alternar entre Original, Neon Cyber, Glass e Minimal. Todos os temas são folhas de estilos completas (podem ser ligadas em qualquer página substituindo o `<link rel="stylesheet">`).

Documentação adicional em [`docs/temas.md`](docs/temas.md).

## Adicionar / editar dispositivos
Todos os dados estão em `data.js` na variável `data`.

### Smartphones
```js
{name:"Modelo", chip:"...", ram:"...", storage:"...", camera:"...", battery:"...", tela:"..."}
```

### Portáteis Gaming
```js
{name:"Modelo", cpu:"...", gpu:"...", ram:"...", storage:"...", tela:"...", peso:"..."}
```

### Consoles Portáteis
```js
{name:"Modelo", cpu:"...", gpu:"...", ram:"...", storage:"...", tela:"...", battery:"...", peso:"...", ano:"..."}
```

### CPUs
```js
{id:"id-unico", nome:"Nome", nucleos:"...", threads:"...", base:"...", boost:"...", tdp:"...", socket:"..."}
```

### GPUs
```js
{id:"id-unico", nome:"Nome", memoria:"...", cuda:"..." ou stream:"...", tdp:"...", tipo:"Desktop|Laptop", bus:"..."}
```

### Rumores
```js
{nome:"Modelo", categoria:"Smartphone|Portátil Gaming|Console Portátil|CPU|GPU", fonte:"...", probabilidade:"Alta|Média|Baixa", ano:"2026|2027", descricao:"..."}
```
A secção `#rumores` em `index.html` usa o mesmo mecanismo de pesquisa e filtro por ano (ano esperado de lançamento).

Após editar `data.js`, recarregar a página. Os selects dos comparadores são preenchidos automaticamente a partir de `data.cpus` e `data.gpus`.

## Lançamentos recentes
A secção `#lancamentos` em `index.html` contém 8 `.featured-card`. Para alterar, edita os links, imagens e textos dentro de `<div class="featured-grid">`.

## Notas
* Tema escuro moderno, layout responsivo.
* Comparador destaca valores superiores com classe `.win`.
* Dados ilustrativos; verificar sempre com fontes oficiais.

© 2026 TechSpecsGW
