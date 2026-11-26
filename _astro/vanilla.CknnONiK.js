var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="virtual" data-key="id" heading="Services" selection-mode="multiple" virtual-scroll virtual-row-height="40" body-max-height="360px" sticky-header
  columns='[{"field":"id","header":"#","dataType":"number","width":"110px"},{"field":"name","header":"Service"},{"field":"env","header":"Env","width":"110px"},{"field":"pods","header":"Pods","dataType":"number","width":"90px"}]'>
  <poad-button slot="toolbar-end" id="go" size="sm" variant="outline" severity="secondary">Go to 50,000</poad-button>
</poad-table>
<code id="virtual-out">rows=100000 · selected=0</code>

<script type="module">
  const ENVS = ['recette', 'neo', 'prod'];
  const table = document.querySelector('#virtual');
  table.value = Array.from({ length: 100_000 }, (_, i) => ({ id: i + 1, name: \`service-\${String(i + 1).padStart(6, '0')}\`, env: ENVS[i % 3], pods: (i * 7) % 13 }));
  document.querySelector('#go').addEventListener('click', () => table.scrollToIndex(49_999));
  table.addEventListener('selectionchange', (e) => {
    document.querySelector('#virtual-out').textContent = \`rows=100000 · selected=\${Array.isArray(e.detail) ? e.detail.length : 0}\`;
  });
<\/script>
`;export{e as default};