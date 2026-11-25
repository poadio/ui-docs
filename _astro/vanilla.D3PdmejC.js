var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-stage">
  <poad-speed-dial id="dial" direction="up"
    items='[{"label":"Edit","icon":"pencil"},{"label":"Share","icon":"share-2"},{"label":"Delete","icon":"trash-2"}]'></poad-speed-dial>
  <poad-speed-dial direction="right" type="semi-circle"
    items='[{"label":"Edit","icon":"pencil"},{"label":"Share","icon":"share-2"},{"label":"Delete","icon":"trash-2"}]'></poad-speed-dial>
</div>
<code id="dial-out">last=none</code>

<script type="module">
  document.querySelector('#dial').addEventListener('itemclick', (e) => {
    document.querySelector('#dial-out').textContent = \`last=\${e.detail.item.label}\`;
  });
<\/script>
`;export{e as default};