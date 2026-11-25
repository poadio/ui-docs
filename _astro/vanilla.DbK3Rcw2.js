var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-table id="with-actions" data-key="id" heading="Projects" selection-mode="multiple" row-actions-width="84px"
    columns='[{"field":"name","header":"Name"},{"field":"env","header":"Env"},{"field":"pods","header":"Pods","dataType":"number"}]'></poad-table>
</div>
<code id="actions-out">last=none · rows=4</code>

<script type="module">
  const table = document.querySelector('#with-actions');
  table.value = [
    { id: 1, name: 'gestion', env: 'recette', pods: 4 }, { id: 2, name: 'inventaire', env: 'neo', pods: 0 },
    { id: 3, name: 'demo2', env: 'neo', pods: 2 }, { id: 4, name: 'best', env: 'recette', pods: 12 },
  ];
  const show = (last) => { document.querySelector('#actions-out').textContent = \`last=\${last} · rows=\${table.value.length}\`; };
  const action = (label, iconName, onClick) => {
    const b = document.createElement('poad-button');
    Object.assign(b, { severity: 'ghost', variant: 'text', size: 'sm', icon: true, ariaLabel: label });
    b.append(Object.assign(document.createElement('poad-icon'), { name: iconName, size: 14 }));
    b.addEventListener('click', onClick);
    return b;
  };
  table.renderRowActions = ({ row }) => [
    action(\`Edit \${row.name}\`, 'edit', () => show(\`edit \${row.name}\`)),
    action(\`Delete \${row.name}\`, 'trash', () => { table.value = table.value.filter((x) => x.id !== row.id); show(\`delete \${row.name}\`); }),
  ];
<\/script>
`;export{e as default};