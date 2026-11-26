var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mp" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="360px"
    controls='["zoom","scale"]' aria-label="Bridges along the river">
    <poad-map-layer id="mp-river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-layer id="mp-bridges" label="Bridges" map-style='{"color":"#cf222e","radius":7}'></poad-map-layer>
    <poad-map-rail>
      <poad-map-rail-item icon="layers" label="Layers" panel="layers"></poad-map-rail-item>
      <poad-map-rail-item icon="info" label="About" panel="about"></poad-map-rail-item>
      <poad-map-rail-item id="mp-recentre" icon="home" label="Recentre"></poad-map-rail-item>
      <span slot="bottom">v1.0</span>
    </poad-map-rail>
    <poad-map-panel id="layers" header="Layers" icon="layers" width="280">
      <poad-map-section header="On the map" expanded><poad-map-legend heading="Legend" compact></poad-map-legend></poad-map-section>
      <poad-map-section header="Bridges" badge="4"><p>Four bridges cross the river: A, B, C and D.</p></poad-map-section>
    </poad-map-panel>
    <poad-map-panel id="about" header="About" icon="info" width="240">
      <p style="padding: 10px 12px; margin: 0">Bridges of a fictional river, drawn on a local basemap: no remote tiles.</p>
    </poad-map-panel>
  </poad-map>
</div>
<code id="mp-out">open=none recentred=0</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const bridge = (name, lng, lat) => ({ type: 'Feature', properties: { name }, geometry: { type: 'Point', coordinates: [lng, lat] } });
  document.querySelector('#mp-river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  document.querySelector('#mp-bridges').data = { type: 'FeatureCollection', features: [bridge('Bridge A', 4.84, 45.76), bridge('Bridge B', 4.81, 45.745), bridge('Bridge C', 4.86, 45.775), bridge('Bridge D', 4.79, 45.73)] };
  const map = document.querySelector('#mp');
  const out = document.querySelector('#mp-out');
  let open = 'none';
  let recentred = 0;
  const show = () => { out.textContent = \`open=\${open} recentred=\${recentred}\`; };
  // \`openchange\` : un panneau s'est ouvert ou fermé (\`detail\` : ouvert) ; \`id\` est celui du panneau
  map.addEventListener('openchange', (e) => {
    const id = e.target.panelId;
    open = e.detail ? id : open === id ? 'none' : open;
    show();
  });
  // entrée libre du rail : l'évènement \`click\` natif
  document.querySelector('#mp-recentre').addEventListener('click', () => { map.flyTo([4.84, 45.76], 12); recentred++; show(); });
<\/script>
`;export{e as default};