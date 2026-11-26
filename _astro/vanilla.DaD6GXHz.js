var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-switch id="mp-zone" label="Flood zone" checked></poad-switch>
<div class="demo-wide">
  <poad-map id="mp" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="340px"
    controls='["zoom","compass","scale"]' aria-label="Bridges along the river">
    <poad-map-layer id="zone" label="Flood zone" interactive="false"
      map-style='{"fill":"#2f6feb","fillOpacity":0.15,"stroke":"#2f6feb","strokeWidth":1}'></poad-map-layer>
    <poad-map-layer id="river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-layer id="bridges" label="Bridges" tooltip="name"
      map-style='{"color":{"field":"state","categories":{"good":"#1a7f37","fair":"#d29922","poor":"#cf222e"}},"radius":8}'></poad-map-layer>
  </poad-map>
</div>
<code id="mp-out">zoom=12 · last=— · inspected=—</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const bridge = (name, state, lng, lat) => ({ type: 'Feature', properties: { name, state }, geometry: { type: 'Point', coordinates: [lng, lat] } });
  document.querySelector('#zone').data = { type: 'Feature', properties: { name: 'Flood zone' }, geometry: { type: 'Polygon', coordinates: [[[4.8, 45.73], [4.88, 45.74], [4.89, 45.785], [4.82, 45.78], [4.8, 45.73]]] } };
  document.querySelector('#river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  document.querySelector('#bridges').data = { type: 'FeatureCollection', features: [bridge('Bridge A', 'good', 4.84, 45.76), bridge('Bridge B', 'fair', 4.81, 45.745), bridge('Bridge C', 'poor', 4.86, 45.775), bridge('Bridge D', 'good', 4.79, 45.73)] };
  const out = document.querySelector('#mp-out');
  let zoom = 12, last = '—', inspected = '—';
  const show = () => { out.textContent = \`zoom=\${zoom} · last=\${last} · inspected=\${inspected}\`; };
  // gabarit de popup : une fonction qui rend un nœud (le texte des propriétés posé en texte, jamais en HTML)
  document.querySelector('#bridges').popupTemplate = ({ properties: p }) => {
    const box = document.createElement('div');
    const name = document.createElement('strong'); name.textContent = p.name;
    const btn = document.createElement('button'); btn.type = 'button'; btn.dataset.pop = 'inspect'; btn.textContent = 'Inspect';
    btn.addEventListener('click', () => { inspected = p.name; show(); });
    box.append(name, \` · \${p.state} \`, btn);
    return box;
  };
  const map = document.querySelector('#mp');
  map.addEventListener('moveend', (e) => { zoom = Math.round(e.detail.zoom * 10) / 10; show(); });
  map.addEventListener('featureclick', (e) => { last = \`\${e.detail.properties.name} (\${e.detail.properties.state})\`; show(); });
  document.querySelector('#mp-zone').addEventListener('change', (e) => { document.querySelector('#zone').visible = e.detail; });
<\/script>
`;export{e as default};