// render_lexicon.mjs — generate viewer/index.html, the readable face of the
// semantic base: every covered census term and every constitution spell as
// the Lexon text itself, with its verified relation claim beside it.
//
// Self-contained static HTML (data inlined, no external requests); regenerate
// any time with: node tools/render_lexicon.mjs
// Open viewer/index.html in a browser, or serve the repo root.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')

const blocksDir = join(ROOT, 'blocks')
const blocks = readdirSync(blocksDir).filter(f => /^LEXPVM-T-\d{3}\.json$/.test(f))
  .map(f => JSON.parse(readFileSync(join(blocksDir, f), 'utf8')))
  .sort((a, b) => a.census.localeCompare(b.census))

const spellsDir = join(ROOT, 'artifact', 'SPELLS')
const spellIndex = JSON.parse(readFileSync(join(spellsDir, 'INDEX.json'), 'utf8'))
const spells = spellIndex.spells.map(s => ({
  ...s,
  lex: readFileSync(join(spellsDir, s.slug + '.lex'), 'utf8').trim(),
  claimList: JSON.parse(readFileSync(join(spellsDir, s.slug + '.claims.json'), 'utf8')),
}))

const cov = { census: 211, covered: blocks.length, debt: 211 - blocks.length }

const data = {
  generated: 'node tools/render_lexicon.mjs (re-derivable; blocks/ is the source)',
  coverage: cov,
  blocks: blocks.map(b => ({
    census: b.census, term: b.term, register: b.provenance.register, cites: b.provenance.cites,
    lex: b.lex, notes: b.notes, counts: b.counts,
    claim: b.relation ? b.relation.claim : null, grandfathered: b.grandfathered,
  })),
  spells,
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>lexon_pvm · the semantic base · ${cov.covered}/211 (residue ${cov.debt})</title>
<style>
:root{--bg:#12100e;--panel:#1b1815;--ink:#e8e0d2;--dim:#9a8f7d;--line:#2e2922;--gold:#c9a86a;--gate:#7fb069;--ordering:#6a9fc9;--conjunction:#b08fc9;--absence:#c96a6a;--mono:'Consolas','SF Mono',monospace}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--ink);font:15px/1.55 Georgia,serif;display:flex;height:100vh;overflow:hidden}
#side{width:340px;min-width:260px;border-right:1px solid var(--line);display:flex;flex-direction:column}
#head{padding:14px 16px;border-bottom:1px solid var(--line)}
#head h1{font-size:15px;color:var(--gold);font-weight:normal;letter-spacing:.04em}
#head .sub{font-size:11.5px;color:var(--dim);margin-top:3px}
#search{margin:10px 16px;padding:7px 10px;background:var(--panel);border:1px solid var(--line);color:var(--ink);font:13px var(--mono);width:calc(100% - 32px);border-radius:4px}
#filters{padding:0 16px 10px;display:flex;gap:6px;flex-wrap:wrap}
.f{font:11px var(--mono);padding:3px 8px;border:1px solid var(--line);border-radius:10px;color:var(--dim);cursor:pointer;user-select:none}
.f.on{color:var(--gold);border-color:var(--gold)}
#list{flex:1;overflow-y:auto;padding:4px 0}
.grp{font:10.5px var(--mono);color:var(--dim);letter-spacing:.12em;text-transform:uppercase;padding:12px 16px 4px}
.it{padding:6px 16px;cursor:pointer;border-left:2px solid transparent}
.it:hover{background:var(--panel)}
.it.sel{background:var(--panel);border-left-color:var(--gold)}
.it .id{font:10.5px var(--mono);color:var(--dim)}
.it .tm{font-size:13.5px}
.badge{display:inline-block;font:10px var(--mono);padding:1px 6px;border-radius:8px;margin-left:6px;vertical-align:1px}
.b-gate{background:#26361f;color:var(--gate)}.b-ordering{background:#1f2a36;color:var(--ordering)}
.b-conjunction{background:#2c2336;color:var(--conjunction)}.b-absence{background:#361f1f;color:var(--absence)}
.b-gf{background:#252017;color:#8a7a5c}
#main{flex:1;overflow-y:auto;padding:28px 40px}
#main h2{font-size:22px;color:var(--gold);font-weight:normal}
.meta{font:12px var(--mono);color:var(--dim);margin:8px 0 4px}
.claimline{font:12.5px var(--mono);margin:10px 0;padding:8px 12px;background:var(--panel);border-left:3px solid var(--gold);border-radius:0 4px 4px 0}
pre.lex{background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:18px 22px;margin:16px 0;font:13.5px/1.7 var(--mono);white-space:pre-wrap;color:#ded5c2}
pre.lex .kw{color:var(--gold)}pre.lex .cl{color:var(--ordering)}pre.lex .q{color:#c9b06a}
.notes{font-size:13.5px;color:var(--dim);font-style:italic;border-top:1px solid var(--line);padding-top:12px;margin-top:6px}
.regime{font:11px var(--mono);color:#6a6154;margin-top:18px}
#empty{color:var(--dim);font-style:italic;margin-top:40vh;text-align:center}
::-webkit-scrollbar{width:9px}::-webkit-scrollbar-thumb{background:var(--line);border-radius:5px}
@media(prefers-color-scheme:light){:root{--bg:#f4efe6;--panel:#eae3d5;--ink:#2b261e;--dim:#7a6f5c;--line:#d5cbb8;--gold:#8a6a2f}pre.lex{color:#3a3223}}
</style>
</head>
<body>
<div id="side">
  <div id="head">
    <h1>lexon_pvm · the semantic base</h1>
    <div class="sub">${cov.covered} of 211 canon terms expressed · residue ${cov.debt} · + 13 constitution spells</div>
  </div>
  <input id="search" placeholder="search term, id, claim…">
  <div id="filters">
    <span class="f on" data-f="all">all</span>
    <span class="f" data-f="gate">gate</span>
    <span class="f" data-f="ordering">ordering</span>
    <span class="f" data-f="conjunction">conjunction</span>
    <span class="f" data-f="absence">absence</span>
    <span class="f" data-f="spells">constitution</span>
  </div>
  <div id="list"></div>
</div>
<div id="main"><div id="empty">select an expression · the text IS the triples IS the claim</div></div>
<script>
const DATA = ${JSON.stringify(data)};
const list = document.getElementById('list'), main = document.getElementById('main');
let filter = 'all', q = '';
function badge(c){ if(!c) return '<span class="badge b-gf">grandfathered</span>'; return '<span class="badge b-'+c.type+'">'+c.type+'</span>'; }
function hl(lex){ return lex.replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/^(LEX [^\\n]+)/, '<span class="kw">$1</span>')
  .replace(/^(CLAUSE:[^\\n]+)/gm, '<span class="cl">$1</span>')
  .replace(/("[^"]+")/g, '<span class="q">$1</span>'); }
function render(){
  const terms = DATA.blocks.filter(b => {
    if (filter === 'spells') return false;
    if (filter !== 'all' && (!b.claim || b.claim.type !== filter)) return false;
    const hay = (b.census + ' ' + b.term + ' ' + JSON.stringify(b.claim||'') + ' ' + (b.notes||'')).toLowerCase();
    return hay.includes(q);
  });
  const sp = (filter === 'all' || filter === 'spells') ? DATA.spells.filter(s => (s.slug+' '+s.title+' '+s.source).toLowerCase().includes(q)) : [];
  let h = '';
  if (sp.length) { h += '<div class="grp">the constitution · trusts + seats</div>';
    for (const s of sp) h += '<div class="it" data-k="s:'+s.slug+'"><div class="id">'+s.slug+'</div><div class="tm">'+s.title + s.claims.map(t=>'<span class="badge b-'+t+'">'+t+'</span>').join('')+'</div></div>'; }
  if (terms.length) { h += '<div class="grp">the census · '+terms.length+' shown</div>';
    for (const b of terms) h += '<div class="it" data-k="b:'+b.census+'"><div class="id">'+b.census+'</div><div class="tm">'+b.term.replace(/</g,'&lt;')+badge(b.claim)+'</div></div>'; }
  list.innerHTML = h;
}
function show(k){
  document.querySelectorAll('.it').forEach(e => e.classList.toggle('sel', e.dataset.k === k));
  const [kind, id] = [k.slice(0,1), k.slice(2)];
  if (kind === 'b') { const b = DATA.blocks.find(x => x.census === id);
    main.innerHTML = '<h2>'+b.term.replace(/</g,'&lt;')+'</h2>'
      + '<div class="meta">'+b.census+' · '+b.register+' · cites '+b.cites+' · '+b.counts.triples+' triples, '+b.counts.promiseEdges+' promise edges</div>'
      + (b.claim ? '<div class="claimline">claim (verified at emit, twin-distinguished): '+JSON.stringify(b.claim)+'</div>' : '<div class="claimline">grandfathered: folded before the relation-claim rule; structural relation named in Notes</div>')
      + '<pre class="lex">'+hl(b.lex)+'</pre>'
      + (b.notes ? '<div class="notes">Notes: '+b.notes.replace(/</g,'&lt;')+'</div>' : '')
      + '<div class="regime">spec-checker regime: relations are clause-graph properties, not executed semantics (CR-11)</div>';
  } else { const s = DATA.spells.find(x => x.slug === id);
    main.innerHTML = '<h2>'+s.title+'</h2>'
      + '<div class="meta">'+s.slug+' · '+s.source.replace(/</g,'&lt;')+'</div>'
      + s.claimList.map(c => '<div class="claimline">claim: '+JSON.stringify(c)+'</div>').join('')
      + '<pre class="lex">'+hl(s.lex)+'</pre>'
      + '<div class="notes">Notes: '+s.notes.replace(/</g,'&lt;')+'</div>'
      + '<div class="regime">constitution corpus: 13/13 CORPUS PASS · node tools/spells_check.mjs</div>';
  }
  main.scrollTop = 0;
}
list.addEventListener('click', e => { const it = e.target.closest('.it'); if (it) show(it.dataset.k); });
document.getElementById('search').addEventListener('input', e => { q = e.target.value.toLowerCase(); render(); });
document.getElementById('filters').addEventListener('click', e => {
  const f = e.target.closest('.f'); if (!f) return;
  filter = f.dataset.f;
  document.querySelectorAll('.f').forEach(x => x.classList.toggle('on', x === f));
  render();
});
render();
</script>
</body>
</html>`

mkdirSync(join(ROOT, 'viewer'), { recursive: true })
writeFileSync(join(ROOT, 'viewer', 'index.html'), html)
console.log(`viewer/index.html written: ${cov.covered} census terms + ${spells.length} constitution spells, ${(html.length / 1024).toFixed(0)} KB self-contained`)
