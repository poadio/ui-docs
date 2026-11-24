var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-menu id="actions" aria-label="Project actions"
    items='[{"label":"Open","icon":"folder-open","shortcut":"⌘O"},{"label":"Export","icon":"download","items":[{"label":"CSV"},{"label":"JSON"}]},{"separator":true},{"label":"Delete","icon":"trash-2","severity":"danger"}]'>
    <poad-button slot="trigger" variant="outline">Actions</poad-button>
  </poad-menu>
</div>
<code id="menu-out">last=none</code>

<script type="module">
  document.querySelector('#actions').addEventListener('itemclick', (e) => {
    document.querySelector('#menu-out').textContent = \`last=\${e.detail.item.label}\`;
  });
<\/script>
`;export{e as default};