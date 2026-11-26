var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mb" basemap="grid" center="[4.84,45.76]" zoom="12" height="360px" controls='["zoom","scale"]' aria-label="River on a choice of basemaps">
    <poad-map-layer id="mb-river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-panel id="mb-panel" header="Basemap" icon="globe" side="right" width="250" open closable="false">
      <div style="padding: 10px 12px">
        <poad-map-basemaps id="mb-picker" ids='["grid","paper","night","atlas"]' show-opacity></poad-map-basemaps>
      </div>
    </poad-map-panel>
  </poad-map>
</div>
<code id="mb-out">basemap=grid</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune requête hors du site) : deux styles MapLibre minimaux, une tuile raster du site, un fond à clé.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false), swatch: ['#eef2f5', '#dfe6ee', '#ffffff'] },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true, swatch: ['#151b24', '#232c3a', '#334155'] },
    { id: 'grid', label: 'Grid', kind: 'raster', tiles: ['/demo/map-tile.png'], tileSize: 256, swatch: ['#e8ecde', '#e0e6d6', '#c4ccbe'] },
    { id: 'atlas', label: 'Atlas', kind: 'raster', tiles: ['/demo/map-tile.png'], requiresKey: true, swatch: ['#f6e9c8', '#e9d8a8', '#f6e9c8'] },
  ]);
  document.querySelector('#mb-river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  // \`basemapselect\` : l'utilisateur a choisi un fond (\`detail\` : son id)
  document.querySelector('#mb-picker').addEventListener('basemapselect', (e) => { document.querySelector('#mb-out').textContent = \`basemap=\${e.detail}\`; });
<\/script>
`;export{e as default};