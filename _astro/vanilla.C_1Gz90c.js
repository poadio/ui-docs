var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="tree" data-key="id" tree-field="children" heading="Projects" show-search filter-delay="0" selection-mode="multiple" lazy-children
    columns='[{"field":"name","header":"Name"},{"field":"kind","header":"Kind"},{"field":"pods","header":"Pods","dataType":"number"}]'></poad-table>
</div>
<code id="tree-out">open=1 selected=0</code>

<script type="module">
  const table = document.querySelector('#tree');
  const icons = { project: 'folder', env: 'layers', service: 'box', snapshot: 'file-archive' };
  table.treeIcon = (row) => icons[row.kind] ?? null;
  // enfants paresseux : simulés par une minuterie (aucun appel réseau dans la démo)
  table.loadChildren = (row) => new Promise((done) => setTimeout(() => done([
    { id: row.id * 10 + 1, name: 'v2025', kind: 'snapshot', pods: 0, leaf: true },
    { id: row.id * 10 + 2, name: 'v2026', kind: 'snapshot', pods: 0, leaf: true },
  ]), 600));
  table.value = [
    { id: 1, name: 'gestion', kind: 'project', pods: 6, children: [
      { id: 11, name: 'recette', kind: 'env', pods: 2, children: [{ id: 111, name: 'api', kind: 'service', pods: 1, leaf: true }, { id: 112, name: 'postgres', kind: 'service', pods: 1, leaf: true }] },
      { id: 12, name: 'neo', kind: 'env', pods: 4, children: [{ id: 121, name: 'web', kind: 'service', pods: 3, leaf: true }, { id: 122, name: 'worker', kind: 'service', pods: 1, leaf: true }] },
    ] },
    { id: 2, name: 'inventaire', kind: 'project', pods: 2, children: [{ id: 21, name: 'recette', kind: 'env', pods: 2, leaf: true }] },
    { id: 3, name: 'archives', kind: 'project', pods: 0 },
  ];
  table.expandedNodeKeys = [1];
  const show = () => {
    document.querySelector('#tree-out').textContent = \`open=\${(table.expandedNodeKeys ?? []).join(',') || 'none'} selected=\${(table.selection ?? []).length}\`;
  };
  table.addEventListener('expandednodekeyschange', show);
  table.addEventListener('selectionchange', show);
<\/script>
`;export{e as default};