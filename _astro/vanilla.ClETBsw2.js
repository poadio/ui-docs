var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="frozen" data-key="id" heading="Services" selection-mode="multiple" row-actions-width="48px"
    columns='[{"field":"name","header":"Service","nowrap":true,"sticky":"left","width":"140px"},{"field":"env","header":"Env","nowrap":true,"width":"90px"},{"field":"owner","header":"Owner","nowrap":true,"width":"100px"},{"field":"region","header":"Region","nowrap":true,"width":"120px"},{"field":"pods","header":"Pods","dataType":"number","width":"70px"},{"field":"cpu","header":"CPU","dataType":"number","width":"70px"},{"field":"memory","header":"Memory (MiB)","dataType":"number","width":"120px"},{"field":"image","header":"Image","nowrap":true,"width":"150px"},{"field":"status","header":"Status","nowrap":true,"sticky":"right","width":"100px"}]'>
    <poad-button slot="toolbar-end" id="pin-env" size="sm" variant="outline" severity="secondary">Pin Env</poad-button>
  </poad-table>
</div>
<code id="frozen-out">pinned=none</code>

<script type="module">
  const table = document.querySelector('#frozen');
  table.value = [
    { id: 1, name: 'gestion-api', env: 'recette', owner: 'Hélène', region: 'eu-west-3', pods: 4, cpu: 1.5, memory: 2048, image: 'gestion:2.4.1', status: 'running' },
    { id: 2, name: 'inventaire', env: 'neo', owner: 'Zoé', region: 'eu-west-1', pods: 0, cpu: 0, memory: 0, image: 'inventaire:1.0.0', status: 'stopped' },
    { id: 3, name: 'demo2-front', env: 'neo', owner: 'Noël', region: 'eu-west-3', pods: 2, cpu: 0.5, memory: 512, image: 'demo2:0.9.3', status: 'running' },
    { id: 4, name: 'best-worker', env: 'recette', owner: 'Hélène', region: 'eu-central-1', pods: 12, cpu: 6, memory: 8192, image: 'best:5.1.0', status: 'degraded' },
    { id: 5, name: 'atlas-sync', env: 'prod', owner: 'Yann', region: 'eu-west-3', pods: 3, cpu: 1, memory: 1024, image: 'atlas:3.2.7', status: 'running' },
  ];
  table.renderRowActions = ({ row }) => {
    const b = document.createElement('poad-button');
    Object.assign(b, { severity: 'ghost', variant: 'text', size: 'sm', icon: true, ariaLabel: \`Open \${row.name}\` });
    b.append(Object.assign(document.createElement('poad-icon'), { name: 'external-link', size: 14 }));
    return b;
  };
  const pin = document.querySelector('#pin-env');
  pin.addEventListener('click', () => {
    const on = table.pinnedColumns?.env !== 'left';
    table.pinnedColumns = on ? { env: 'left' } : {};
    pin.textContent = on ? 'Unpin Env' : 'Pin Env';
    pin.setAttribute('aria-pressed', String(on));
    document.querySelector('#frozen-out').textContent = \`pinned=\${on ? 'env:left' : 'none'}\`;
  });
<\/script>
`;export{e as default};