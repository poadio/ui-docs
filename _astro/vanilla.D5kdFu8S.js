var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col demo-wide" id="crumbs">
  <poad-breadcrumb
    home='{"icon":"home","label":"Home"}'
    items='[{"label":"Projects"},{"label":"fleet-manager"},{"label":"Environments"},{"label":"Production"}]'
  ></poad-breadcrumb>
  <poad-breadcrumb
    max-items="3"
    items='[{"label":"Projects"},{"label":"fleet-manager"},{"label":"Environments"},{"label":"Production"}]'
  ></poad-breadcrumb>
</div>
<code id="breadcrumb-out">last=none</code>

<script type="module">
  document.querySelector('#crumbs').addEventListener('itemclick', (e) => {
    document.querySelector('#breadcrumb-out').textContent = \`last=\${e.detail.item.label}\`;
  });
<\/script>
`;export{e as default};