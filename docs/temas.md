# Temas do TechSpecsGW

O site tem quatro temas, todos como folhas de estilos **completas e auto-suficientes**
(cobrem base, cartões, grelhas, cards de lançamentos, comparadores, tabelas e
estados de erro/vazio).

| Tema | Ficheiro | Descrição |
| --- | --- | --- |
| Original | `styles.css` | Tema escuro base com acento azul |
| Startup (em uso por omissão) | `style-startup.css` | Escuro moderno, gradientes ciano/violeta, cards em vidro |
| Neon Cyber | `style-neon.css` | Fundo preto, brilhos ciano/magenta |
| Glass | `style-glass.css` | Claro, translúcido com blur |
| Minimal | `style-minimal.css` | Branco limpo, sem gradientes |

## Como trocar o tema

1. Em `themes.html` há uma barra para alternar entre os temas em tempo real (prévia de cartões).
2. Para aplicar um tema a todo o site, substitui a ligação
   `<link rel="stylesheet" href="style-startup.css">` no `<head>` de cada página
   (index.html, smartphones.html, portateis-gaming.html, cpus.html, gpus.html,
   comparadores.html) pelo ficheiro do tema desejado.

## Variáveis de tema

Todos os temas definem as mesmas variáveis CSS em `:root`, pelo que é fácil criar
temas novos a partir de um existente:

```css
--bg; --card; --accent; --accent-2; --text; --muted; --border;
```

## Ícones (PWA)

- `favicon.png` — 64×64, usado na aba do browser (`<link rel="icon">`).
- `icon-192.png` / `icon-512.png` — usados no `manifest.json` para instalação PWA.
  O `manifest.json` declara apenas tamanhos reais existentes (verificar antes de editar).
