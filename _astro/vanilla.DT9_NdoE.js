var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" column-menu resizable-columns
  columns='[{"field":"name","header":"Service","sortable":true,"menu":false,"width":"140px"},{"field":"env","header":"Env","sortable":true,"width":"120px"},{"field":"pods","header":"Pods","dataType":"number","sortable":true,"width":"110px"},{"field":"owner","header":"Owner"}]'
  value='[{"id":1,"name":"web-01","env":"prod","pods":4,"owner":"Front office"},{"id":2,"name":"api","env":"neo","pods":2,"owner":"Fleet team"},{"id":3,"name":"worker","env":"recette","pods":1,"owner":"Night jobs"}]'>
</poad-table>
<code id="services-out">last=—</code>

<script type="module">
  // l'élément tient \`pinnedColumns\` et \`hiddenColumns\` (évènements \`columnpin\`, \`hiddencolumnschange\`)
  document.querySelector('#services').addEventListener('columnmenuaction', (e) => {
    document.querySelector('#services-out').textContent = \`last=\${e.detail.id}:\${e.detail.action}\`;
  });
<\/script>
`;export{e as default};