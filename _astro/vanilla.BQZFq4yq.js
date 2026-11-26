var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide"><poad-map-card id="card" header="Study site" basemap="paper" basemaps='["paper","night"]' follow-theme height="360px" editable></poad-map-card></div>
<code id="card-out">value=2 feature(s) flipped=false</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const card = document.querySelector('#card');
  card.value = { type: 'FeatureCollection', features: [
    { type: 'Feature', properties: { name: 'Site' }, geometry: { type: 'Polygon', coordinates: [[[4.82, 45.75], [4.85, 45.75], [4.85, 45.77], [4.82, 45.77], [4.82, 45.75]]] } },
    { type: 'Feature', properties: { name: 'Gauge' }, geometry: { type: 'Point', coordinates: [4.835, 45.76] } },
  ] };
  const out = { value: '2 feature(s)', flipped: false };
  const show = () => { document.querySelector('#card-out').textContent = \`value=\${out.value} flipped=\${out.flipped}\`; };
  card.addEventListener('change', (e) => { const g = e.detail; out.value = g ? \`\${g.features?.length ?? 1} feature(s)\` : 'empty'; show(); });
  card.addEventListener('flippedchange', (e) => { out.flipped = e.detail; show(); });
<\/script>
`;export{e as default};