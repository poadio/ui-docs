var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="mm" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="380px" controls='["zoom","scale"]' aria-label="Bridges along the river">
    <poad-map-layer id="river" label="River" interactive="false" map-style='{"stroke":"#0891b2","strokeWidth":4}'></poad-map-layer>
    <poad-map-layer id="bridges" label="Bridges" map-style='{"color":"#cf222e","radius":7}'></poad-map-layer>
    <poad-map-menu id="mm-menu"></poad-map-menu>
  </poad-map>
</div>
<code id="mm-out">last=none</code>

<script type="module">
  import { poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false), swatch: ['#eef2f5', '#dfe6ee', '#ffffff'] },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true, swatch: ['#151b24', '#232c3a', '#334155'] },
  ]);
  const bridge = (name, lng, lat) => ({ type: 'Feature', properties: { name }, geometry: { type: 'Point', coordinates: [lng, lat] } });
  document.querySelector('#river').data = { type: 'Feature', properties: { name: 'River' }, geometry: { type: 'LineString', coordinates: [[4.78, 45.72], [4.81, 45.745], [4.835, 45.755], [4.84, 45.76], [4.86, 45.775], [4.9, 45.79]] } };
  document.querySelector('#bridges').data = { type: 'FeatureCollection', features: [bridge('Bridge A', 4.84, 45.76), bridge('Bridge B', 4.81, 45.745), bridge('Bridge C', 4.86, 45.775), bridge('Bridge D', 4.79, 45.73)] };
  const menu = document.querySelector('#mm-menu');
  // gabarit \`count\` : une fonction de rendu (contexte, bloc) → nœud du DOM
  menu.templates = { count: (ctx) => { const p = document.createElement('p'); p.className = 'demo-count'; const b = document.createElement('strong'); b.textContent = String(ctx.n); p.append(b, ' bridges on the map'); return p; } };
  // Tout le menu en JSON : rail, panneaux, sections et blocs. Le texte n'est jamais injecté comme HTML (le script est jeté).
  menu.config = {
    rail: { bottom: 'v1.0', items: [
      { id: 'layers', icon: 'layers', label: 'Layers', panel: 'layers' },
      { id: 'about', icon: 'info', label: 'About', panel: 'about' },
      { id: 'recentre', icon: 'home', label: 'Recentre' },
    ] },
    panels: [
      { id: 'layers', header: 'Layers', icon: 'layers', width: 280, sections: [
        { header: 'Basemap', expanded: true, items: [{ type: 'basemaps', ids: ['paper', 'night'] }] },
        { header: 'On the map', expanded: true, badge: 2, items: [{ type: 'layer', layer: 'bridges', zoomTo: true, showOpacity: true }, { type: 'layer', layer: 'river' }] },
      ] },
      { id: 'about', header: 'About', icon: 'info', width: 260, sections: [
        { header: 'Data', collapsible: false, items: [
          { type: 'text', html: '<p>Bridges of a <b>fictional</b> river, on a local basemap: no remote tiles.</p><p>Text from the configuration is never injected as HTML.<script>alert(1)<\\/script></p>' },
          { type: 'custom', template: 'count', context: { n: 4 } },
        ] },
      ] },
    ],
  };
  // \`menuaction\` : ce que fait l'utilisateur (\`detail\` : { type, id, value? })
  menu.addEventListener('menuaction', (e) => {
    const a = e.detail;
    document.querySelector('#mm-out').textContent = \`last=\${a.type}:\${a.id}\${a.value === undefined ? '' : \`=\${a.value}\`}\`;
    if (a.type === 'rail' && a.id === 'recentre') document.querySelector('#mm').flyTo([4.84, 45.76], 12);
  });
<\/script>
`;export{e as default};