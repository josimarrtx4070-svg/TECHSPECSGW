const fmtLabel = k => k.replace(/([A-Z])/g,' $1').replace(/^./,s=>s.toUpperCase());

function getYear(it){
  const y = it.ano ?? it.Ano ?? it.year ?? '';
  return String(y).trim();
}

function slugify(s){
  return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}

function pageForItem(item){
  if(data.smartphones && data.smartphones.includes(item)) return 'smartphones.html';
  if(data.cpus && data.cpus.includes(item)) return 'cpus.html';
  if(data.gpus && data.gpus.includes(item)) return 'gpus.html';
  if(data.consoles && data.consoles.includes(item)) return 'console-portateis.html';
  if(data.rumores && data.rumores.includes(item)) return 'index.html';
  return 'index.html';
}

function populateYearFilters(){
  if(typeof data === 'undefined') return;
  const map = {
    'filter-year-smartphones': data.smartphones,
    'filter-year-cpus': data.cpus,
    'filter-year-gpus': data.gpus,
    'filter-year-consoles': data.consoles,
    'filter-year-rumores': data.rumores
  };
  Object.entries(map).forEach(([selId, items])=>{
    const sel = document.getElementById(selId);
    if(!sel || !items) return;
    const prev = sel.value;
    const years = [...new Set(items.map(getYear).filter(Boolean))].sort();
    sel.innerHTML = '<option value="">Todos os anos</option>'
      + years.map(y=>`<option value="${y}">${y}</option>`).join('');
    if(prev && years.includes(prev)) sel.value = prev;
    // Suporta link direto ?ano=2024 ou #ano-2024
    const params = new URLSearchParams(location.search);
    const qAno = params.get('ano');
    if(qAno && years.includes(qAno)) sel.value = qAno;
  });
}

function scoreClass(s){
  if(s>=90) return 'score-elite';
  if(s>=75) return 'score-high';
  if(s>=55) return 'score-mid';
  return 'score-low';
}

function scoreBadge(it){
  if(typeof it.score !== 'number') return '';
  return `<span class="score-badge ${scoreClass(it.score)}" title="Score TechSpecsGW (0–100)">★ ${Math.round(it.score)}/100</span>`;
}

function injectCommonElements() {
  const headerHTML = `
    <header>
      <div class="container">
        <div class="logo-wrapper">
          <img class="site-logo" src="logo_transparente.png" alt="TechSpecsGW Logo">
        </div>
        <p class="tagline">Especificações de Smartphones, Consoles Portáteis, CPU e GPU</p>
        <div class="header-actions">
          <div class="search-wrapper">
            <input type="text" id="global-search" placeholder="Buscar tudo..." class="global-search-input">
            <div id="global-search-results" class="search-results-dropdown"></div>
          </div>
          <nav>
            <a href="index.html">Início</a>
            <a href="smartphones.html">Smartphones</a>
            <a href="console-portateis.html">Consoles</a>
            <a href="cpus.html">CPUs</a>
            <a href="gpus.html">GPUs</a>
            <a href="index.html#rumores">Rumores</a>
            <a href="comparadores.html">Comparadores</a>
          </nav>
        </div>
      </div>
    </header>`;

  const footerHTML = `
    <footer class="animate-fade-in">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} TechSpecsGW - Dados ilustrativos. Verifique sempre com fontes oficiais.</p>
      </div>
    </footer>`;

  const compareTrayHTML = `
    <div id="compare-tray" class="compare-tray">
      <div class="compare-tray-items"></div>
      <button id="compare-now-btn" class="compare-tray-btn" disabled>Comparar (0)</button>
    </div>
  `;

  const compareModalHTML = `
    <div id="compare-modal" class="compare-modal">
      <div class="compare-modal-content">
        <div class="compare-modal-header">
          <h2>Comparativo</h2>
          <span class="close-compare">&times;</span>
        </div>
        <div class="compare-table-container" id="compare-table-container"></div>
      </div>
    </div>
  `;

  const headerPlaceholder = document.getElementById('header-placeholder');
  if(headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if(footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  if (!document.getElementById('compare-tray')) {
    document.body.insertAdjacentHTML('beforeend', compareTrayHTML);
  }
  if (!document.getElementById('compare-modal')) {
    document.body.insertAdjacentHTML('beforeend', compareModalHTML);
  }
}

function getAllItems() {
  return [
    ... (data.smartphones || []),
    ... (data.cpus || []),
    ... (data.gpus || []),
    ... (data.consoles || []),
    ... (data.rumores || [])
  ].filter(function(it){ return it && typeof it === 'object'; });
}

function handleGlobalSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  const resultsContainer = document.getElementById('global-search-results');

  if (!resultsContainer) return;

  if (query.length < 2) {
    resultsContainer.style.display = 'none';
    return;
  }

  const allItems = getAllItems();
  const filtered = allItems.filter(item => {
    const searchableText = JSON.stringify(item).toLowerCase();
    return searchableText.includes(query);
  });

  if (filtered.length > 0) {
    displaySearchResults(filtered, resultsContainer);
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.innerHTML = '<div class="search-result-item">Nenhum resultado encontrado</div>';
    resultsContainer.style.display = 'block';
  }
}

function displaySearchResults(results, container) {
  container.innerHTML = '';
  results.slice(0, 10).forEach(item => {
    const div = document.createElement('div');
    div.className = 'search-result-item';

    const name = item.name || item.nome || 'Sem nome';
    const score = item.score ? `<span class="search-result-score">★ ${Math.round(item.score)}</span>` : '';

    // Determine category for display
    let category = 'Outros';
    if (data.smartphones?.includes(item)) category = 'Smartphones';
    else if (data.cpus?.includes(item)) category = 'CPUs';
    else if (data.gpus?.includes(item)) category = 'GPUs';
    else if (data.consoles?.includes(item)) category = 'Consoles';
    else if (data.rumores?.includes(item)) category = 'Rumores';

    div.innerHTML = `
      <span class="search-result-name">${name}</span>
      <span class="search-result-category">${category} ${score ? '•' : ''} ${score || ''}</span>
    `;

    div.addEventListener('click', () => {
      const slug = slugify(item.name || item.nome);
      const page = pageForItem(item);
      const dd = document.getElementById('global-search-results');
      if(dd) dd.style.display = 'none';
      const gs = document.getElementById('global-search');
      if(gs) gs.value = '';
      if(slug){ window.location.href = page + '#item-' + slug; }
    });

    container.appendChild(div);
  });
}

function renderFeatured() {
  const container = document.getElementById('featured-grid');
  if (!container) return;

  const newest = arr => (arr || []).filter(Boolean).slice().sort((a, b) =>
    String(b.ano || '').localeCompare(String(a.ano || '')) || ((b.score || 0) - (a.score || 0)));
  const featuredItems = [];
  newest(data.smartphones).slice(0, 2).forEach(i => featuredItems.push(i));
  newest(data.cpus).slice(0, 2).forEach(i => featuredItems.push(i));
  newest(data.gpus).slice(0, 2).forEach(i => featuredItems.push(i));

  if (featuredItems.length === 0) return;

  container.innerHTML = '';
  featuredItems.forEach(it => {
    const card = document.createElement('a');
    card.className = 'featured-card animate-fade-in';
    card.id = 'item-' + slugify(it.name || it.nome);
    card.href = '#' + card.id;

    const title = it.name || it.nome || '';
    const badge = scoreBadge(it);

    const entries = Object.entries(it).filter(([k])=>!['name','nome','score'].includes(k));
    if(entries.length){
      const badges = entries.slice(0,2).map(([k,v])=>`<span class="badge">${fmtLabel(k)}: ${v}</span>`).join('');
      card.innerHTML = `
        <div class="featured-body">
          <div class="card-head">${badge}</div>
          <h3>${title}</h3>
          <div style="margin:6px 0 10px">${badges}</div>
          <span class="featured-link">Ver detalhes →</span>
        </div>
      `;
    }
    container.appendChild(card);
  });
}

function renderCards(id, items, searchId=null){
  const container = document.getElementById(id);
  if(!container || !items) return;
  const input = searchId ? document.getElementById(searchId) : null;
  const yearSel = document.getElementById('filter-year-' + id.replace('-grid',''));
  const section = id.replace('-grid','');
  let sortSel = document.getElementById('sort-' + section);
  if(!sortSel && input){
    sortSel = document.createElement('select');
    sortSel.id = 'sort-' + section;
    sortSel.className = 'search';
    sortSel.style.maxWidth = '215px';
    sortSel.innerHTML = '<option value="">Ordenar: Padrão</option>'
      + '<option value="score-desc">Score: Maior → Menor</option>'
      + '<option value="score-asc">Score: Menor → Maior</option>'
      + '<option value="name-asc">Nome: A → Z</option>'
      + '<option value="name-desc">Nome: Z → A</option>';
    input.parentElement.insertBefore(sortSel, input);
  }
  const updateCount = n => {
    const cn = container.parentElement ? container.parentElement.querySelector('.result-count') : null;
    if(cn){ cn.textContent = n + (n === 1 ? ' resultado' : ' resultados'); }
  };
  const render = (list) => {
    container.innerHTML = '';
    updateCount(list ? list.length : 0);
    if(!list || !list.length){
      const empty=document.createElement('div');
      empty.className='empty-note';
      const activeY = (typeof yearSel !== 'undefined' && yearSel && yearSel.value) ? ' (' + yearSel.value + ')' : '';
      empty.textContent='Sem resultados para a pesquisa/filtro selecionado' + activeY + '. Escolha outro ano ou limpe a pesquisa.';
      container.appendChild(empty);
      return;
    }
    list.forEach(it=>{
      const card=document.createElement('div');
      card.className='card animate-fade-in';
      card.id = 'item-' + slugify(it.name || it.nome);
      const title = it.name || it.nome || '';
      const badge = scoreBadge(it);
      let html = badge
        ? `<div class="card-head"><h3>${title}</h3>${badge}</div>`
        : `<h3>${title}</h3>`;
      let entries = Object.entries(it).filter(([k])=>!['name','nome','score'].includes(k));
      entries.sort((a,b)=> {
        if(a[0]==='ano') return -1;
        if(b[0]==='ano') return 1;
        return 0;
      });
      if(entries.length){
        const badges = entries.slice(0,2).map(([k,v])=>`<span class="badge">${fmtLabel(k)}: ${v}</span>`).join('');
        html+=`<div style="margin:6px 0 10px">${badges}</div>`;
      }
      html+='<ul>';
      entries.forEach(([k,v])=>{
        html+=`<li><strong>${fmtLabel(k)}:</strong> ${v}</li>`;
      });
      html+='</ul>';
      card.innerHTML=html;
      container.appendChild(card);
    });
  };
  const filter = () => {
    // .filter(Boolean): ignora entradas vazias/nulas que quebrariam o filtro
    let list = [...items].filter(Boolean);
    const q = input ? input.value.trim().toLowerCase() : '';
    if(q){
      list = list.filter(it=>{
        const text = JSON.stringify(it).toLowerCase();
        return text.includes(q);
      });
    }
    if(yearSel && yearSel.value){
      list = list.filter(it=> getYear(it) === yearSel.value);
    }
    if(sortSel && sortSel.value){
      const nm = it => String(it.name || it.nome || '').toLowerCase();
      if(sortSel.value === 'score-desc') list = list.sort((a,b)=>(b.score??-1)-(a.score??-1));
      else if(sortSel.value === 'score-asc') list = list.sort((a,b)=>(a.score??1e9)-(b.score??1e9));
      else if(sortSel.value === 'name-asc') list = list.sort((a,b)=>nm(a).localeCompare(nm(b)));
      else if(sortSel.value === 'name-desc') list = list.sort((a,b)=>nm(b).localeCompare(nm(a)));
    }
    render(list);
  };
  if(input){ input.addEventListener('input', filter); }
  if(yearSel){ yearSel.addEventListener('change', filter); }
  if(sortSel){ sortSel.addEventListener('change', filter); }
  filter();
}

function fillSelect(id, items){
  const sel=document.getElementById(id);
  if(!sel || !items) return;
  sel.innerHTML = '<option value="">-- Selecionar --</option>';
  items.forEach(it=>{
    const label = it.nome || it.name || it.id || 'Sem nome';
    const opt=document.createElement('option');
    opt.value = it.id || it.nome || it.name;
    opt.textContent = label + (getYear(it) ? ' (' + getYear(it) + ')' : '');
    sel.appendChild(opt);
  });
}

function compareTwo(a,b,keys){
  const rows=[];
  const allKeys = new Set([...Object.keys(a),...Object.keys(b)]);
  keys.forEach(k=>allKeys.add(k));
  allKeys.forEach(k=>{
    if(k==='id'||k==='nome'||k==='name'||k==='score') return;
    const va = a[k] ?? '-';
    const vb = b[k] ?? '-';
    rows.push({k,va,vb});
  });
  return rows;
}

/* Devolve 1 se A vence a linha, -1 se B vence, 0 se empate/indecidido.
   Mesma regra do destaque das celulas: maior valor vence, exceto
   tdp/peso onde o menor vence. So decide quando ambos sao numericos. */
function rowWinner(va, vb, key){
  const numA = parseFloat(String(va));
  const numB = parseFloat(String(vb));
  if(isNaN(numA) || isNaN(numB) || numA === numB) return 0;
  const lowerIsBetter = ['tdp','peso'].indexOf(key) !== -1;
  if(lowerIsBetter) return numA < numB ? 1 : -1;
  return numA > numB ? 1 : -1;
}

function winnerBanner(nameA, nameB, winsA, winsB, draws, scoreA, scoreB){
  const total = winsA + winsB + draws;
  const line = `vence ${winsA}&ndash;${winsB} em ${total} categorias &middot; ${draws} empate(s)`;
  if(winsA === winsB){
    if(typeof scoreA === 'number' && typeof scoreB === 'number' && scoreA !== scoreB){
      const w = scoreA > scoreB ? nameA : nameB;
      return `<div class="winner-banner"><span class="winner-trophy">\u{1F3C6}</span>`
        + `<div><strong>Empate ${winsA}&ndash;${winsB} &mdash; ${w} vence no desempate (score)</strong>`
        + `<span>${draws} empate(s) &middot; score ${Math.round(scoreA)} vs ${Math.round(scoreB)}</span></div></div>`;
    }
    return `<div class="winner-banner"><span class="winner-trophy">\u{1F91D}</span>`
      + `<div><strong>Empate t&eacute;cnico ${winsA}&ndash;${winsB}</strong>`
      + `<span>${draws} empate(s) em ${total} categorias</span></div></div>`;
  }
  const w = winsA > winsB ? nameA : nameB;
  return `<div class="winner-banner"><span class="winner-trophy">\u{1F3C6}</span>`
    + `<div><strong>${w} &eacute; o vencedor</strong><span>${line}</span></div></div>`;
}

function renderTable(containerId, a, b, rows){
  const container=document.getElementById(containerId);
  if(!container) return;
  const nameA = a.nome || a.name || 'A';
  const nameB = b.nome || b.name || 'B';
  let winsA = 0, winsB = 0, draws = 0;
  const vote = w => { if(w === 1) winsA++; else if(w === -1) winsB++; else draws++; };
  let html=`<table class="table-compare"><thead><tr><th>Especificação</th><th>${nameA}</th><th>${nameB}</th></tr></thead><tbody>`;
  if(typeof a.score === 'number' && typeof b.score === 'number'){
    const w = a.score > b.score ? 1 : (b.score > a.score ? -1 : 0);
    vote(w);
    const clsA = w === 1 ? 'win' : '';
    const clsB = w === -1 ? 'win' : '';
    html += `<tr><td>Score</td><td class="${clsA}">★ ${Math.round(a.score)}/100</td><td class="${clsB}">★ ${Math.round(b.score)}/100</td></tr>`;
  }
  rows.forEach(r=>{
    const label = fmtLabel(r.k);
    const va = String(r.va);
    const vb = String(r.vb);
    const w = rowWinner(va, vb, r.k);
    vote(w);
    const clsA = w === 1 ? 'win' : '';
    const clsB = w === -1 ? 'win' : '';
    html+=`<tr><td>${label}</td><td class="${clsA}">${va}</td><td class="${clsB}">${vb}</td></tr>`;
  });
  html+='</tbody></table>';
  container.innerHTML = winnerBanner(nameA, nameB, winsA, winsB, draws, a.score, b.score) + html;
}

function findByVal(arr, v){
  return (arr || []).filter(Boolean).find(x => String(x.id) === String(v) || (x.nome && x.nome === v) || (x.name && x.name === v));
}

function setupComparators(){
  if(typeof data === 'undefined') return;
  fillSelect('cpu1', data.cpus); fillSelect('cpu2', data.cpus);
  fillSelect('gpu1', data.gpus); fillSelect('gpu2', data.gpus);
  const cpuBtn = document.getElementById('compareCpuBtn');
  if(cpuBtn){
    cpuBtn.addEventListener('click',()=>{
      const v1 = document.getElementById('cpu1')?.value || '';
      const v2 = document.getElementById('cpu2')?.value || '';
      if(!v1||!v2){ alert('Selecione dois CPUs'); return; }
      if(v1 === v2){ alert('Selecione dois CPUs diferentes'); return; }
      const a=findByVal(data.cpus, v1);
      const b=findByVal(data.cpus, v2);
      if(!a||!b) return;
      renderTable('cpuCompareResult',a,b,compareTwo(a,b,['nucleos','threads','base','boost','tdp']));
    });
  }
  const gpuBtn = document.getElementById('compareGpuBtn');
  if(gpuBtn){
    gpuBtn.addEventListener('click',()=>{
      const v1 = document.getElementById('gpu1')?.value || '';
      const v2 = document.getElementById('gpu2')?.value || '';
      if(!v1||!v2){ alert('Selecione duas GPUs'); return; }
      if(v1 === v2){ alert('Selecione duas GPUs diferentes'); return; }
      const a=findByVal(data.gpus, v1);
      const b=findByVal(data.gpus, v2);
      if(!a||!b) return;
      renderTable('gpuCompareResult',a,b,compareTwo(a,b,['memoria','cuda','stream','tdp','tipo']));
    });
  }
}

/* ===== SEO: JSON-LD dinamico =====
   Mantem os dados estruturados sempre sincronizados com o catalogo. */
(function(){
  if(typeof data === 'undefined') return;
  var page = (location.pathname.split('/').pop() || 'index.html');
  if(!page) page = 'index.html';
  var map = {
    'smartphones.html':      ['smartphones', 'Especificações de Smartphones'],
    'console-portateis.html':['consoles',    'Especificações de Consoles Portáteis'],
    'cpus.html':             ['cpus',        'Especificações de CPU'],
    'gpus.html':             ['gpus',        'Especificações de GPU']
  };
  var build = function(items, name){
    const top = items.slice().sort((a,b)=>(b.score||0)-(a.score||0)).slice(0,60);
    var ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: name,
      itemListElement: top.map(function(it,i){
        const desc = Object.entries(it)
          .filter(function(e){ return ['name','nome','score','id'].indexOf(e[0]) === -1; })
          .map(function(e){ return fmtLabel(e[0]) + ': ' + e[1]; })
          .join(' | ');
        return {
          '@type': 'ListItem',
          position: i+1,
          item: {
            '@type': 'Product',
            name: it.name || it.nome || '',
            description: desc,
            brand: { '@type': 'Brand', name: 'TechSpecsGW' }
          }
        };
      })
    };
    return ld;
  };
  var ld = null;
  if(map[page]){
    var key = map[page][0], nm = map[page][1];
    if(data[key] && data[key].length) ld = build(data[key], nm);
  } else if(page === 'index.html'){
    var all = (data.smartphones||[]).slice(0,5)
      .concat((data.cpus||[]).slice(0,5))
      .concat((data.gpus||[]).slice(0,5));
    ld = build(all.length ? all : [{name:'TechSpecsGW'}], 'TechSpecsGW — Especificações Técnicas');
  }
  if(ld){
    var el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(ld);
    document.head.appendChild(el);
  }
})();

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
  injectCommonElements();
  if(typeof data === 'undefined'){ return; }
  populateYearFilters();
  setupComparators();

  // Inicializa os componentes da Home
  if(document.getElementById('featured-grid')) {
    renderFeatured();
  }

  // Pesquisa partilhada via ?q= (ex.: smartphones.html?q=pixel)
  const qParam = new URLSearchParams(location.search).get('q') || '';
  if(qParam){
    ['search-smartphones','search-cpus','search-gpus','search-consoles','search-rumores'].forEach(sid=>{
      const el = document.getElementById(sid);
      if(el) el.value = qParam;
    });
  }

  // Inicializa os componentes das outras páginas
  renderCards('smartphones-grid', data.smartphones, 'search-smartphones');
  renderCards('cpus-grid', data.cpus, 'search-cpus');
  renderCards('gpus-grid', data.gpus, 'search-gpus');
  renderCards('consoles-grid', data.consoles, 'search-consoles');
  renderCards('rumores-grid', data.rumores, 'search-rumores');

  // Ancora direta #item-... (vindas da pesquisa global): destacar o cartao
  if(location.hash && location.hash.startsWith('#item-')){
    setTimeout(()=>{
      const t = document.getElementById(location.hash.slice(1));
      if(t){
        t.scrollIntoView({behavior:'smooth', block:'center'});
        t.style.outline = '2px solid var(--accent, #3aa0ff)';
        setTimeout(()=>{ t.style.outline = ''; }, 2500);
      }
    }, 150);
  }

  // Theme switcher
  document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const theme = btn.id.replace('theme-', '');
      let href = '';
      switch(theme) {
        case 'startup': href = 'style-startup.css'; break;
        case 'glass': href = 'style-glass.css'; break;
        case 'minimal': href = 'style-minimal.css'; break;
        case 'neon': href = 'style-neon.css'; break;
      }
      if(href) {
        let link = document.querySelector('link[href$="style-startup.css"], link[href$="style-glass.css"], link[href$="style-minimal.css"], link[href$="style-neon.css"]');
        if(!link) {
          link = document.createElement('link');
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
        link.href = href;
        localStorage.setItem('techspecs-theme', theme);
      }
    });
  });

  // Restore saved theme
  const savedTheme = localStorage.getItem('techspecs-theme');
  if(savedTheme) {
    const themeMap = { startup: 'style-startup.css', glass: 'style-glass.css', minimal: 'style-minimal.css', neon: 'style-neon.css' };
    const href = themeMap[savedTheme];
    if(href) {
      let link = document.querySelector('link[href$="style-startup.css"], link[href$="style-glass.css"], link[href$="style-minimal.css"], link[href$="style-neon.css"]');
      if(!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      link.href = href;
    }
  }

  // Global Search setup
  const globalSearch = document.getElementById('global-search');
  if(globalSearch) {
    globalSearch.addEventListener('input', handleGlobalSearch);

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const results = document.getElementById('global-search-results');
      if (results && !globalSearch.contains(e.target) && !results.contains(e.target)) {
        results.style.display = 'none';
      }
    });
  }
});