var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="expandable" data-key="id" heading="Projects"
    columns='[{"field":"name","header":"Name"},{"field":"env","header":"Env"},{"field":"pods","header":"Pods","dataType":"number"}]'></poad-table>
</div>
<code id="expansion-out">expanded=none</code>

<script type="module">
  const table = document.querySelector('#expandable');
  table.value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4, owner: 'Hélène' }, { id: 2, name: 'inventaire', env: 'neo', pods: 0, owner: 'Zoé' },
    { id: 3, name: 'demo2', env: 'neo', pods: 2, owner: 'Noël' }, { id: 4, name: 'best', env: 'recette', pods: 12, owner: 'Hélène' },
  ];
  table.rowExpandable = (p) => p.pods > 0;
  table.renderExpansion = ({ row }) => Object.assign(document.createElement('div'), { className: 'detail', textContent: \`Owner: \${row.owner} · \${row.pods} pods running on \${row.env}\` });
  const show = () => { document.querySelector('#expansion-out').textContent = \`expanded=\${table.expandedRowKeys.join(',') || 'none'}\`; };
  table.addEventListener('rowexpand', show);
  table.addEventListener('rowcollapse', show);
<\/script>
`;export{e as default};