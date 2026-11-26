var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<!-- les trois modes : une cellule, toute la ligne en place, ou la ligne dans une boîte de dialogue -->
<poad-segmented id="mode" name="mode" value="cell" size="sm" aria-label="Edit mode"
  options='[{"label":"Cell","value":"cell"},{"label":"Row","value":"row-inline"},{"label":"Dialog","value":"row"}]'></poad-segmented>
<poad-table id="services" data-key="id" heading="Services" edit-mode="cell" row-actions-always-visible
  columns='[{"field":"name","header":"Service","editable":true,"required":true,"minLength":3},{"field":"env","header":"Env","width":"110px","editable":true,"editor":"select","editorOptions":[{"label":"recette","value":"recette"},{"label":"neo","value":"neo"},{"label":"prod","value":"prod"}]},{"field":"pods","header":"Pods","dataType":"number","width":"80px","editable":true,"editor":"number","min":0,"max":20},{"field":"active","header":"Active","dataType":"boolean","width":"90px","editable":true,"editor":"checkbox"}]'
  value='[{"id":1,"name":"web-01","env":"prod","pods":4,"active":true},{"id":2,"name":"web-02","env":"prod","pods":4,"active":true},{"id":3,"name":"api","env":"neo","pods":2,"active":true},{"id":4,"name":"worker","env":"recette","pods":1,"active":false},{"id":5,"name":"cron","env":"recette","pods":1,"active":true}]'>
</poad-table>
<code id="services-out">last=—</code>

<script type="module">
  const table = document.querySelector('#services');
  const out = document.querySelector('#services-out');
  document.querySelector('#mode').addEventListener('change', (e) => table.setAttribute('edit-mode', e.detail));
  // l'élément écrit la valeur validée dans \`value\` (sauf si \`editcomplete\` / \`roweditsave\` est annulé)
  table.addEventListener('editcomplete', (e) => { out.textContent = \`last=\${e.detail.field}=\${e.detail.value}\`; });
  table.addEventListener('roweditsave', (e) => {
    out.textContent = \`last=\${Object.entries(e.detail.changes).map(([k, v]) => \`\${k}=\${v}\`).join(',')}\`;
  });
<\/script>
`;export{e as default};