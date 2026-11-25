var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="filtered" data-key="id" heading="Projects" show-search show-row-count
    columns='[{"field":"name","header":"Name","sortable":true,"filterable":true},
              {"field":"env","header":"Env","filterable":true,"filterType":"select","filterOptions":[{"label":"recette","value":"recette"},{"label":"neo","value":"neo"}]},
              {"field":"pods","header":"Pods","dataType":"number","sortable":true,"filterable":true}]'></poad-table>
</div>
<code id="filters-out">filters=none</code>

<script type="module">
  const table = document.querySelector('#filtered');
  table.value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4 }, { id: 2, name: 'inventaire', env: 'neo', pods: 0 },
    { id: 3, name: 'demo2', env: 'neo', pods: 2 }, { id: 4, name: 'best', env: 'recette', pods: 12 },
    { id: 5, name: 'démo10', env: 'recette', pods: 1 }, { id: 6, name: 'atlas', env: 'neo', pods: 7 },
  ];
  table.addEventListener('filterchange', (e) => {
    const { filters, globalFilter } = e.detail;
    const active = [...Object.keys(filters).filter((k) => filters[k]), ...(globalFilter ? ['search'] : [])];
    document.querySelector('#filters-out').textContent = \`filters=\${active.join(',') || 'none'}\`;
  });
<\/script>
`;export{e as default};