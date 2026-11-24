var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-button id="details" variant="outline">Details</poad-button>
</div>
<poad-drawer id="drawer" header="Service details" position="right" size="sm">
  <div style="display: grid; gap: 12px">
    <p style="margin: 0">api · 2 replicas · eu-west</p>
    <poad-switch id="autoscale" label="Autoscale" checked></poad-switch>
  </div>
</poad-drawer>
<code id="drawer-out">open=false · autoscale=true</code>

<script type="module">
  const drawer = document.querySelector('#drawer');
  const autoscale = document.querySelector('#autoscale');
  const show = () => {
    document.querySelector('#drawer-out').textContent = \`open=\${!!drawer.open} · autoscale=\${!!autoscale.checked}\`;
  };
  document.querySelector('#details').addEventListener('click', () => { drawer.open = true; show(); });
  drawer.addEventListener('openchange', show);
  autoscale.addEventListener('change', show);
<\/script>
`;export{e as default};