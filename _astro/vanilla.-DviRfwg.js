var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-fieldset legend="Connection">Host db.internal, port 5432.</poad-fieldset>
  <poad-fieldset id="advanced" legend="Advanced options" toggleable collapsed>Pool of 20 connections, 30 s timeout.</poad-fieldset>
</div>
<code id="fieldset-out">collapsed=true</code>

<script type="module">
  document.querySelector('#advanced').addEventListener('collapsedchange', (e) => {
    document.querySelector('#fieldset-out').textContent = \`collapsed=\${e.detail}\`;
  });
<\/script>
`;export{e as default};