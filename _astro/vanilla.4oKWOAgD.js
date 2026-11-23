var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-message severity="info" text="A new version is available."></poad-message>
  <poad-message id="saved" severity="success" closable>Changes saved.</poad-message>
  <poad-message severity="warning" variant="outline">The certificate expires in 6 days.</poad-message>
  <poad-message severity="danger" size="sm" icon="" text="Connection lost (no icon)."></poad-message>
</div>
<code id="closed-out">closed=0</code>

<script type="module">
  let closed = 0;
  document.querySelector('#saved').addEventListener('close', () => {
    document.querySelector('#closed-out').textContent = \`closed=\${++closed}\`;
  });
<\/script>
`;export{e as default};