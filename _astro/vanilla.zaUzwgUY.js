var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" show-group-zone column-menu
  columns='[{"field":"name","header":"Service","groupable":false},{"field":"env","header":"Env"},{"field":"owner","header":"Owner"},{"field":"pods","header":"Pods","dataType":"number","groupable":false}]'
  value='[{"id":1,"name":"web-01","env":"prod","owner":"Front office","pods":4},{"id":2,"name":"api","env":"neo","owner":"Fleet team","pods":2},{"id":3,"name":"worker","env":"neo","owner":"Night jobs","pods":1},{"id":4,"name":"web-02","env":"prod","owner":"Front office","pods":3}]'>
</poad-table>
<code id="services-out">groupBy=</code>

<script type="module">
  // l'élément pose \`groupBy\` (sauf \`groupbychange\` annulé)
  document.querySelector('#services').addEventListener('groupbychange', (e) => {
    document.querySelector('#services-out').textContent = \`groupBy=\${e.detail.fields.join(',')}\`;
  });
<\/script>
`;export{e as default};