var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="services" data-key="id" heading="Services" reorderable-columns
  columns='[{"field":"name","header":"Service","sticky":"left","width":"140px"},{"field":"env","header":"Env","width":"120px"},{"field":"pods","header":"Pods","dataType":"number","width":"110px"},{"field":"owner","header":"Owner"}]'
  value='[{"id":1,"name":"web-01","env":"prod","pods":4,"owner":"Front office"},{"id":2,"name":"api","env":"neo","pods":2,"owner":"Fleet team"},{"id":3,"name":"worker","env":"recette","pods":1,"owner":"Night jobs"}]'>
</poad-table>
<code id="services-out">order=name,env,pods,owner</code>

<script type="module">
  // l'élément garde l'ordre dans \`columnOrder\` (sauf \`columnreorder\` annulé)
  document.querySelector('#services').addEventListener('columnreorder', (e) => {
    document.querySelector('#services-out').textContent = \`order=\${e.detail.order.join(',')}\`;
  });
<\/script>
`;export{e as default};