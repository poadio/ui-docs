var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="ml" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="360px"
    controls='["zoom","scale"]' aria-label="Bridges along the river">
    <poad-map-legend slot="top-right" heading="Layers"></poad-map-legend>
    <poad-map-layer id="ml-zone" label="Flood zone" interactive="false"
      map-style='{"fill":"#2f6feb","fillOpacity":0.15,"stroke":"#2f6feb","strokeWidth":1}'></poad-map-layer>
    <poad-map-layer id="ml-river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-layer id="ml-bridges" label="Bridges"
      map-style='{"color":{"field":"state","categories":{"good":"#1a7f37","fair":"#d29922","poor":"#cf222e"}},"radius":8}'></poad-map-layer>
  </poad-map>
</div>
<code id="ml-out">shown=Flood zone, River, Bridges</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const bridge = (name, state, lng, lat) => ({ type: 'Feature', properties: { name, state }, geometry: { type: 'Point', coordinates: [lng, lat] } });
  document.querySelector('#ml-zone').data = { type: 'Feature', properties: { name: 'Flood zone' }, geometry: { type: 'Polygon', coordinates: [[[4.8, 45.73], [4.88, 45.74], [4.89, 45.785], [4.82, 45.78], [4.8, 45.73]]] } };
  document.querySelector('#ml-river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  document.querySelector('#ml-bridges').data = { type: 'FeatureCollection', features: [bridge('Bridge A', 'good', 4.84, 45.76), bridge('Bridge B', 'fair', 4.81, 45.745), bridge('Bridge C', 'poor', 4.86, 45.775), bridge('Bridge D', 'good', 4.79, 45.73)] };
  const layers = ['#ml-zone', '#ml-river', '#ml-bridges'].map((s) => document.querySelector(s));
  const out = document.querySelector('#ml-out');
  // \`visiblechange\` : l'utilisateur a montré ou masqué une couche dans la légende (la propriété \`visible\` suit)
  document.querySelector('#ml').addEventListener('visiblechange', () => {
    out.textContent = \`shown=\${layers.filter((l) => l.visible !== false).map((l) => l.label).join(', ') || 'none'}\`;
  });
<\/script>
`;export{e as default};