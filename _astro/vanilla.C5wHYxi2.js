var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<!-- les balises poad-* sont en display: contents : la place de la table se donne à un conteneur -->
<div class="demo-wide" style="display: flex; align-items: stretch">
  <div style="flex: 1; min-width: 0">
    <poad-table id="panel-projects" data-key="id" heading="Projects" show-filter-row="false"
      columns='[{"field":"name","header":"Name","sortable":true,"filterable":true},
                {"field":"env","header":"Env","filterable":true,"filterType":"select","filterOptions":[{"label":"recette","value":"recette"},{"label":"neo","value":"neo"}]},
                {"field":"pods","header":"Pods","dataType":"number","sortable":true,"filterable":true},
                {"field":"owner","header":"Owner"}]'></poad-table>
  </div>
  <poad-table-panel for="panel-projects"></poad-table-panel>
</div>
<code id="panel-out">filters=none</code>

<script type="module">
  document.querySelector('#panel-projects').value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4, owner: 'Hélène' }, { id: 2, name: 'inventaire', env: 'neo', pods: 0, owner: 'Zoé' },
    { id: 3, name: 'demo2', env: 'neo', pods: 2, owner: 'Noël' }, { id: 4, name: 'best', env: 'recette', pods: 12, owner: 'Hélène' },
    { id: 5, name: 'atlas', env: 'neo', pods: 7, owner: 'Zoé' },
  ];
  document.querySelector('poad-table-panel').addEventListener('filterschange', (e) => {
    document.querySelector('#panel-out').textContent = \`filters=\${Object.keys(e.detail).filter((k) => e.detail[k]).join(',') || 'none'}\`;
  });
<\/script>
`;export{e as default};