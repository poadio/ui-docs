var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" show-export export-filename="services" paginator rows="3"
  columns='[{"field":"name","header":"Service","sortable":true},{"field":"env","header":"Env","sortable":true},{"field":"pods","header":"Pods","dataType":"number","sortable":true},{"field":"active","header":"Active","dataType":"boolean"},{"field":"token","header":"Token","exportable":false}]'
  value='[{"id":1,"name":"web-01","env":"prod","pods":4,"active":true,"token":"••••"},{"id":2,"name":"web-02","env":"prod","pods":4,"active":true,"token":"••••"},{"id":3,"name":"api","env":"neo","pods":2.5,"active":true,"token":"••••"},{"id":4,"name":"worker","env":"recette","pods":1,"active":false,"token":"••••"},{"id":5,"name":"=cron","env":"recette","pods":1,"active":true,"token":"••••"}]'>
</poad-table>
<code id="services-out">—</code>

<script type="module">
  // avant le téléchargement : le contenu du fichier (annuler l'évènement le garderait pour vous)
  document.querySelector('#services').addEventListener('csvexport', (e) => {
    const head = e.detail.csv.replace('﻿', '').split('\\r\\n')[0];
    document.querySelector('#services-out').textContent = \`\${e.detail.filename} · \${e.detail.rows} · \${head}\`;
  });
<\/script>
`;export{e as default};