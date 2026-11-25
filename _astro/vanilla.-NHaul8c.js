var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
<poad-menubar id="menubar" aria-label="Main" current="#docs" items='[
  {"label":"Projects","icon":"folder","items":[{"label":"fleet-manager"},{"label":"billing-api"},{"separator":true},{"label":"All projects"}]},
  {"label":"Platform","columns":[
    {"header":"Build","items":[{"label":"Functions","icon":"code"},{"label":"Storage","icon":"database"}]},
    {"header":"Run","items":[{"label":"Flows","icon":"git-branch"},{"label":"Logs","icon":"list"}]}
  ]},
  {"label":"Settings","items":[{"label":"Members"},{"label":"Billing"},{"label":"Export","items":[{"label":"CSV"},{"label":"JSON"}]}]},
  {"label":"Docs","url":"#docs"}
]'>
  <strong slot="start">Acme</strong>
</poad-menubar>
</div>
<code id="menubar-out">last=none</code>

<script type="module">
  document.querySelector('#menubar').addEventListener('itemclick', (e) => {
    e.preventDefault();
    document.querySelector('#menubar-out').textContent = \`last=\${e.detail.item.label}\`;
  });
<\/script>
`;export{e as default};