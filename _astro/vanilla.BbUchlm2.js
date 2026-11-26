var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mt" basemap="paper" basemaps='["paper","night"]' follow-theme glyphs="/demo/fonts/{fontstack}/{range}.pbf" center="[4.84,45.76]" zoom="12" height="400px" controls='["zoom","scale"]' control-position="bottom-right" aria-label="River survey">
    <poad-map-layer id="river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-tools id="mt-tools"></poad-map-tools>
  </poad-map>
</div>
<code id="mt-out">mode=none shapes=1 measure=none compare=off</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre — la comparaison les met côte à côte.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  document.querySelector('#river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  const tools = document.querySelector('#mt-tools');
  // Dessin de départ : une zone d'étude, à sélectionner (outil « Sélection ») pour en déplacer les sommets.
  tools.features = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { name: 'Survey area' }, geometry: { type: 'Polygon', coordinates: [[[4.82, 45.75], [4.85, 45.75], [4.85, 45.77], [4.82, 45.77], [4.82, 45.75]]] } }] };
  const out = { mode: 'none', shapes: 1, measure: 'none', compare: 'off' };
  const show = () => { document.querySelector('#mt-out').textContent = \`mode=\${out.mode} shapes=\${out.shapes} measure=\${out.measure} compare=\${out.compare}\`; };
  tools.addEventListener('drawchange', (e) => { out.shapes = e.detail.features.length; show(); });
  tools.addEventListener('measure', (e) => { out.measure = e.detail ? e.detail.label : 'none'; show(); });
  tools.addEventListener('modechange', (e) => { out.mode = e.detail ?? 'none'; show(); });
  tools.addEventListener('comparechange', (e) => { out.compare = e.detail ? 'on' : 'off'; show(); });
<\/script>
`;export{e as default};