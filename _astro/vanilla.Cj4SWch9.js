var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-app">
  <poad-nav-drawer id="nav-drawer" value="dashboard" items='[
    {"value":"dashboard","label":"Dashboard","icon":"layout-dashboard"},
    {"value":"g-projects","label":"Projects","section":true,"collapsible":true},
    {"value":"fleet","label":"fleet-manager","icon":"folder","badge":3},
    {"value":"billing","label":"billing-api","icon":"folder"},
    {"label":"Platform","section":true},
    {"value":"functions","label":"Functions","icon":"code"},
    {"value":"storage","label":"Storage","icon":"database","disabled":true},
    {"value":"logs","label":"Logs","icon":"list","badge":12}
  ]'>
    <strong slot="header">Acme</strong>
    <div slot="footer" class="demo-app__foot">Ada Lovelace</div>
  </poad-nav-drawer>
  <div class="demo-app__main">
    <poad-button id="nav-drawer-menu" class="demo-app__burger" severity="secondary">Menu</poad-button>
    <code id="nav-drawer-out">value=dashboard collapsed=none</code>
  </div>
</div>

<script type="module">
  const drawer = document.querySelector('#nav-drawer');
  document.querySelector('#nav-drawer-menu').addEventListener('click', () => drawer.show());
  const show = () => {
    document.querySelector('#nav-drawer-out').textContent = \`value=\${drawer.value} collapsed=\${(drawer.collapsed ?? []).join(',') || 'none'}\`;
  };
  drawer.addEventListener('change', show);
  drawer.addEventListener('collapsedchange', show);
<\/script>
`;export{e as default};