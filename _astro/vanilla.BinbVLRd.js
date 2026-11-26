var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<!-- toutes les colonnes ont une largeur : une colonne de remplissage prend le reste -->
<poad-table id="services" data-key="id" heading="Services" show-row-number show-density-toggle resizable-columns paginator rows="5"
  header-groups='[{"header":"Service","span":2},{"header":"Team","span":2}]'
  columns='[{"field":"name","header":"Service","width":"110px"},{"field":"env","header":"Env","width":"80px"},{"field":"owner","header":"Owner","width":"120px"},{"field":"pods","header":"Pods","dataType":"number","width":"70px"}]'>
</poad-table>
<code id="services-out">dense=false</code>

<script type="module">
  const table = document.querySelector('#services');
  table.value = [
    ['web-01', 'prod', 'Front office', 4], ['api', 'neo', 'Fleet team', 2], ['worker', 'neo', 'Night jobs', 1], ['web-02', 'prod', 'Front office', 3],
    ['gateway', 'prod', 'Fleet team', 2], ['billing', 'recette', 'Back office', 1], ['search', 'neo', 'Front office', 3], ['mailer', 'recette', 'Night jobs', 1],
    ['auth', 'prod', 'Fleet team', 2], ['reports', 'neo', 'Back office', 1], ['cache', 'prod', 'Fleet team', 2], ['cron', 'recette', 'Night jobs', 1],
  ].map(([name, env, owner, pods], i) => ({ id: i + 1, name, env, owner, pods }));
  // l'élément pose \`dense\` (sauf \`densechange\` annulé)
  table.addEventListener('densechange', (e) => {
    document.querySelector('#services-out').textContent = \`dense=\${e.detail}\`;
  });
<\/script>
`;export{e as default};