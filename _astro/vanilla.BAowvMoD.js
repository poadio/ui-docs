var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="resp-mode" value="stack" size="sm" aria-label="Mode"
  options='[{"label":"Cards","value":"stack"},{"label":"Priority","value":"priority"},{"label":"Scroll","value":"scroll"}]'></poad-segmented>
<div class="demo-wide">
  <poad-table id="responsive" data-key="id" heading="Services" selection-mode="multiple" responsive="stack"
    columns='[{"field":"name","header":"Service","priority":1},{"field":"env","header":"Env","priority":2},{"field":"pods","header":"Pods","dataType":"number","priority":1},{"field":"owner","header":"Owner","priority":3},{"field":"region","header":"Region","priority":4},{"field":"image","header":"Image","priority":5}]'>
    <poad-filter-chip slot="toolbar" id="running" label="Running"></poad-filter-chip>
  </poad-table>
</div>
<code id="responsive-out">mode=stack · rows=4</code>

<script type="module">
  const services = [
    { id: 1, name: 'gestion-api', env: 'recette', owner: 'Hélène', region: 'eu-west-3', pods: 4, image: 'gestion:2.4.1' },
    { id: 2, name: 'inventaire', env: 'neo', owner: 'Zoé', region: 'eu-west-1', pods: 0, image: 'inventaire:1.0.0' },
    { id: 3, name: 'demo2-front', env: 'neo', owner: 'Noël', region: 'eu-west-3', pods: 2, image: 'demo2:0.9.3' },
    { id: 4, name: 'best-worker', env: 'recette', owner: 'Hélène', region: 'eu-central-1', pods: 12, image: 'best:5.1.0' },
  ];
  const table = document.querySelector('#responsive');
  const chip = document.querySelector('#running');
  let running = false;
  const show = () => {
    table.value = running ? services.filter((s) => s.pods > 0) : services;
    Object.assign(chip, { active: running, value: running ? 'yes' : '' });
    document.querySelector('#responsive-out').textContent = \`mode=\${table.responsive} · rows=\${table.value.length}\`;
  };
  chip.addEventListener('press', () => { running = true; show(); });
  chip.addEventListener('remove', () => { running = false; show(); });
  document.querySelector('#resp-mode').addEventListener('change', (e) => { table.responsive = e.detail; show(); });
  show();
<\/script>
`;export{e as default};