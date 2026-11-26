var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mc" basemap="paper" basemaps='["paper","night"]' follow-theme glyphs="/demo/fonts/{fontstack}/{range}.pbf" center="[4.835,45.76]" zoom="13" height="440px" screenshotable controls='["zoom","scale"]' control-position="bottom-left" aria-label="Bridges of Lyon">
    <poad-map-layer id="zone" label="Flood zone" map-style='{"color":"#0891b2","fillOpacity":0.2}'></poad-map-layer>
    <poad-map-layer id="bridges" label="Bridges" map-style='{"color":"#cf222e","radius":7}'></poad-map-layer>
    <poad-map-chrome id="mc-chrome"></poad-map-chrome>
  </poad-map>
</div>
<code id="mc-out">open=false imported=none shapes=0</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  document.querySelector('#zone').data = { type: 'Feature', properties: { name: 'Flood zone' }, geometry: { type: 'Polygon', coordinates: [[[4.82, 45.75], [4.85, 45.75], [4.85, 45.77], [4.82, 45.77], [4.82, 45.75]]] } };
  document.querySelector('#bridges').data = { type: 'FeatureCollection', features: [
    { type: 'Feature', properties: { name: 'Pont Lafayette', kind: 'road' }, geometry: { type: 'Point', coordinates: [4.838, 45.763] } },
    { type: 'Feature', properties: { name: 'Passerelle Saint-Georges', kind: 'footbridge' }, geometry: { type: 'Point', coordinates: [4.826, 45.757] } },
    { type: 'Feature', properties: { name: 'Pont Wilson', kind: 'road' }, geometry: { type: 'Point', coordinates: [4.84, 45.758] } },
  ] };
  const out = { open: false, imported: 'none', shapes: 0 };
  const show = () => { document.querySelector('#mc-out').textContent = \`open=\${out.open} imported=\${out.imported} shapes=\${out.shapes}\`; };
  const chrome = document.querySelector('#mc-chrome');
  chrome.addEventListener('openchange', (e) => { out.open = e.detail; show(); });
  chrome.addEventListener('layerimport', (e) => { out.imported = e.detail.name; show(); });
  chrome.addEventListener('drawchange', (e) => { out.shapes = e.detail.features.length; show(); });
<\/script>
`;export{e as default};