var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mg" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="360px" controls='["zoom","scale"]' aria-label="Bridges along the river">
    <poad-map-layer id="mg-zone" label="Flood zone" interactive="false" map-style='{"fill":"#2f6feb","fillOpacity":0.15,"stroke":"#2f6feb","strokeWidth":1}'></poad-map-layer>
    <poad-map-layer id="mg-river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-layer id="mg-bridges" label="Bridges" map-style='{"color":{"field":"state","categories":{"good":"#1a7f37","fair":"#d29922","poor":"#cf222e"}},"radius":8}'></poad-map-layer>
    <poad-map-panel id="mg-layers" header="Layers" icon="layers" side="right" width="260" open closable="false">
      <div style="padding: 8px 12px">
        <poad-map-layer-group header="Water" layers='["mg-river","mg-zone"]' zoom-to></poad-map-layer-group>
        <poad-map-layer-toggle layer="mg-bridges"></poad-map-layer-toggle>
      </div>
    </poad-map-panel>
  </poad-map>
</div>
<code id="mg-out">shown=zone, river, bridges</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const bridge = (name, state, lng, lat) => ({ type: 'Feature', properties: { name, state }, geometry: { type: 'Point', coordinates: [lng, lat] } });
  document.querySelector('#mg-zone').data = { type: 'Feature', properties: { name: 'Flood zone' }, geometry: { type: 'Polygon', coordinates: [[[4.8, 45.73], [4.88, 45.74], [4.89, 45.785], [4.82, 45.78], [4.8, 45.73]]] } };
  document.querySelector('#mg-river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  document.querySelector('#mg-bridges').data = { type: 'FeatureCollection', features: [bridge('Bridge A', 'good', 4.84, 45.76), bridge('Bridge B', 'fair', 4.81, 45.745), bridge('Bridge C', 'poor', 4.86, 45.775), bridge('Bridge D', 'good', 4.79, 45.73)] };
  const out = document.querySelector('#mg-out');
  const shown = new Set(['zone', 'river', 'bridges']);
  // \`visiblechange\` d'une couche (\`detail\` : visible), montrée ou masquée par la ligne
  document.querySelector('#mg').addEventListener('visiblechange', (e) => {
    if (e.detail) shown.add(e.target.id.slice(3)); else shown.delete(e.target.id.slice(3));
    out.textContent = \`shown=\${['zone', 'river', 'bridges'].filter((id) => shown.has(id)).join(', ') || 'none'}\`;
  });
<\/script>
`;export{e as default};