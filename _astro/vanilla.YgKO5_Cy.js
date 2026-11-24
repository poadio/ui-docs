var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="projects" data-key="id" heading="Projects" selection-mode="multiple" paginator rows="5" rows-per-page-options="[5, 10]"
    columns='[{"field":"name","header":"Name","sortable":true},{"field":"env","header":"Env"},{"field":"pods","header":"Pods","dataType":"number","sortable":true}]'></poad-table>
</div>
<code id="table-out">selected=none</code>

<script type="module">
  const table = document.querySelector('#projects');
  table.value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4 }, { id: 2, name: 'inventaire', env: 'neo', pods: 0 },
    { id: 3, name: 'demo2', env: 'neo', pods: 2 }, { id: 4, name: 'best', env: 'recette', pods: 12 },
    { id: 5, name: 'demo10', env: 'recette', pods: 1 }, { id: 6, name: 'atlas', env: 'neo', pods: 7 },
    { id: 7, name: 'zephyr', env: 'neo', pods: 3 }, { id: 8, name: 'cartographie', env: 'recette', pods: 5 },
  ];
  table.renderCell = ({ row, column }) => (column.field === 'name' ? Object.assign(document.createElement('strong'), { textContent: row.name }) : undefined);
  table.addEventListener('selectionchange', (e) => {
    document.querySelector('#table-out').textContent = \`selected=\${e.detail.map((p) => p.id).join(',') || 'none'}\`;
  });
<\/script>
`;export{e as default};