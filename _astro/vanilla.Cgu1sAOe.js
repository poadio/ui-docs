var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<!-- Owner : critère de regroupement (panneau, « + Owner »), colonne masquée pour tenir sur un petit écran -->
<div class="demo-wide" style="display: flex; align-items: stretch">
  <div style="flex: 1; min-width: 0">
    <poad-table id="grouped" data-key="id" heading="Projects" group-by="env" aggregates='{"pods":"sum"}' show-grand-total selection-mode="multiple"
      columns='[{"field":"name","header":"Name","sortable":true},{"field":"env","header":"Env"},{"field":"owner","header":"Owner","hidden":true},{"field":"pods","header":"Pods","dataType":"number","sortable":true}]'></poad-table>
  </div>
  <poad-table-panel for="grouped" tabs='["groups","values"]' active-tab="groups"></poad-table-panel>
</div>
<code id="groups-out">groups=env selected=0</code>

<script type="module">
  const table = document.querySelector('#grouped');
  table.value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4, owner: 'Hélène' }, { id: 2, name: 'inventaire', env: 'neo', pods: 0, owner: 'Zoé' },
    { id: 3, name: 'demo2', env: 'neo', pods: 2, owner: 'Noël' }, { id: 4, name: 'best', env: 'recette', pods: 12, owner: 'Hélène' },
    { id: 5, name: 'atlas', env: 'neo', pods: 7, owner: 'Zoé' },
  ];
  const show = () => {
    const g = table.groupBy == null ? [] : [].concat(table.groupBy);
    document.querySelector('#groups-out').textContent = \`groups=\${g.join(',') || 'none'} selected=\${(table.selection ?? []).length}\`;
  };
  document.querySelector('poad-table-panel').addEventListener('groupbychange', show);
  table.addEventListener('selectionchange', show);
<\/script>
`;export{e as default};