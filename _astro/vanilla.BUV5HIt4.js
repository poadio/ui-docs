var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-table id="steps" data-key="id" heading="Release steps" selection-mode="multiple" reorderable-rows
  columns='[{"field":"name","header":"Step"},{"field":"owner","header":"Owner","width":"120px"},{"field":"minutes","header":"Minutes","dataType":"number","width":"100px"}]'
  value='[{"id":1,"name":"Freeze the branch","owner":"Alice","minutes":5},{"id":2,"name":"Run the migrations","owner":"Bruno","minutes":20},{"id":3,"name":"Build the images","owner":"Chloé","minutes":15},{"id":4,"name":"Deploy to staging","owner":"Bruno","minutes":10},{"id":5,"name":"Smoke tests","owner":"Alice","minutes":10},{"id":6,"name":"Deploy to production","owner":"Chloé","minutes":10}]'>
</poad-table>
<code id="steps-out">order=1,2,3,4,5,6</code>

<script type="module">
  // nom de la ligne dans les annonces : « Smoke tests grabbed, position 5 of 6 »
  document.querySelector('#steps').rowLabel = (s) => s.name;
  // l'élément range \`value\` lui-même ; l'évènement donne le nouvel ordre
  document.querySelector('#steps').addEventListener('rowreorder', (e) => {
    document.querySelector('#steps-out').textContent = \`order=\${e.detail.rows.map((s) => s.id).join(',')}\`;
  });
<\/script>
`;export{e as default};