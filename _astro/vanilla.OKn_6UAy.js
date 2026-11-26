var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" edit-mode="row" row-actions-always-visible row-edit-dialog-cols="2"
  columns='[{"field":"name","header":"Service","editable":true,"required":true,"minLength":3},{"field":"env","header":"Env","width":"110px","editable":true,"editor":"select","editorOptions":[{"label":"recette","value":"recette"},{"label":"neo","value":"neo"},{"label":"prod","value":"prod"}]},{"field":"pods","header":"Pods","dataType":"number","width":"80px","editable":true,"editor":"number","min":0,"max":20},{"field":"notes","header":"Notes","editable":true,"editor":"textarea","maxLength":120}]'
  value='[{"id":1,"name":"web-01","env":"prod","pods":4,"notes":"Public front office"},{"id":2,"name":"api","env":"neo","pods":2,"notes":"Fleet management API"},{"id":3,"name":"worker","env":"recette","pods":1,"notes":"Night jobs"}]'>
</poad-table>
<code id="services-out">last=—</code>

<script type="module">
  const table = document.querySelector('#services');
  const out = document.querySelector('#services-out');
  // le titre de la boîte, fonction de la ligne : en propriété
  table.rowEditDialogHeader = (row) => \`Edit \${row.name}\`;
  // l'élément écrit les changements dans \`value\` (sauf si \`roweditsave\` est annulé)
  table.addEventListener('roweditsave', (e) => {
    out.textContent = \`last=\${Object.entries(e.detail.changes).map(([k, v]) => \`\${k}=\${v}\`).join(',')}\`;
  });
  table.addEventListener('roweditcancel', () => { out.textContent = 'last=cancel'; });
<\/script>
`;export{e as default};