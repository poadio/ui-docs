var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-picklist id="cols" class="demo-pick" source-header="Available" target-header="Selected" filter list-height="200px"></poad-picklist>
<code id="picklist-out">export=Service, Pods</code>

<script type="module">
  const cols = document.querySelector('#cols');
  const columns = ['Service', 'Env', 'Pods', 'Owner', 'Region', 'Notes'].map((label) => ({ label }));
  cols.options = columns;
  cols.value = [columns[0], columns[2]];
  cols.addEventListener('change', (e) => {
    document.querySelector('#picklist-out').textContent = \`export=\${e.detail.map((c) => c.label).join(', ')}\`;
  });
<\/script>
`;export{e as default};