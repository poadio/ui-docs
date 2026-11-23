var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-button id="save">Save</poad-button>
  <poad-button severity="secondary">Cancel</poad-button>
  <poad-button severity="danger" variant="outline">Delete</poad-button>
  <poad-button severity="ghost" variant="text">More</poad-button>
  <poad-button id="deploy" size="sm">Deploy</poad-button>
  <poad-button disabled>Disabled</poad-button>
</div>
<code id="button-out">saves=0</code>

<script type="module">
  let saves = 0;
  document.querySelector('#save').addEventListener('click', () => {
    document.querySelector('#button-out').textContent = \`saves=\${++saves}\`;
  });
  const deploy = document.querySelector('#deploy');
  deploy.addEventListener('click', () => {
    deploy.loading = true;
    setTimeout(() => (deploy.loading = false), 1500);
  });
<\/script>
`;export{e as default};