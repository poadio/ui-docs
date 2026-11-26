var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" resizable-columns
  columns='[{"field":"name","header":"Service","width":"140px","minWidth":"90px","maxWidth":"320px"},{"field":"description","header":"Description","minWidth":"120px"},{"field":"pods","header":"Pods","dataType":"number","width":"80px","resizable":false}]'
  value='[{"id":1,"name":"web-01","description":"Front office served to the public, two zones","pods":4},{"id":2,"name":"gestion-flotte-api","description":"Fleet management API","pods":2},{"id":3,"name":"worker","description":"Night jobs: imports, exports, reminders","pods":1}]'>
</poad-table>
<code id="services-out">—</code>

<script type="module">
  // l'élément garde les largeurs dans \`columnWidths\` (à conserver pour la visite suivante)
  document.querySelector('#services').addEventListener('columnresize', (e) => {
    document.querySelector('#services-out').textContent = \`\${e.detail.id}=\${e.detail.width}px\`;
  });
<\/script>
`;export{e as default};