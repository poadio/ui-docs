var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-map id="ms" basemap="paper" basemaps='["paper","night"]' follow-theme center="[4.84,45.76]" zoom="12" height="360px"
    controls='["zoom","scale"]' control-position="bottom-right" aria-label="Lyon">
    <poad-map-search id="ms-search" slot="top-left" placeholder="Bridge or town…" aria-label="Search a place"></poad-map-search>
  </poad-map>
</div>
<code id="ms-out">picked=none</code>

<script type="module">
  import { mapLocalGeocoder, poadBasemaps } from '@poadio/ui-elements';
  // Fonds locaux (aucune tuile distante) : un style MapLibre minimal, clair et sombre.
  const paper = (dark) => ({ version: 8, name: dark ? 'night' : 'paper', sources: {}, layers: [{ id: 'bg', type: 'background', paint: { 'background-color': dark ? '#151b24' : '#eef2f5' } }] });
  poadBasemaps().registerAll([
    { id: 'paper', label: 'Paper', kind: 'vector', style: paper(false) },
    { id: 'night', label: 'Night', kind: 'vector', style: paper(true), dark: true },
  ]);
  const search = document.querySelector('#ms-search');
  const out = document.querySelector('#ms-out');
  // Géocodeur local (propriété \`provider\`) : une liste fermée de lieux, aucune requête réseau (sans lui : la BAN).
  search.provider = mapLocalGeocoder([
    { label: 'Pont Lafayette', lng: 4.8387, lat: 45.7625, context: 'Lyon 2e' },
    { label: 'Pont Wilson', lng: 4.8375, lat: 45.7585, context: 'Lyon 2e' },
    { label: 'Pont de la Guillotière', lng: 4.8378, lat: 45.7553, context: 'Lyon 7e' },
    { label: 'Passerelle Saint-Georges', lng: 4.8268, lat: 45.7579, context: 'Lyon 5e' },
    { label: 'Lyon', lng: 4.8357, lat: 45.764, type: 'municipality', context: 'Rhône' },
    { label: 'Villeurbanne', lng: 4.8799, lat: 45.7719, type: 'municipality', context: 'Rhône' },
  ], { delay: 150 });
  // \`placeselect\` : l'utilisateur a choisi un lieu ; \`clear\` : il a effacé la recherche
  search.addEventListener('placeselect', (e) => { out.textContent = \`picked=\${e.detail.label}\`; });
  search.addEventListener('clear', () => { out.textContent = 'picked=none'; });
<\/script>
`;export{e as default};