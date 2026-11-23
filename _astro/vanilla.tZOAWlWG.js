var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<form id="extensions" class="demo-row">
  <poad-checkbox name="ext" value="postgis" label="PostGIS" checked></poad-checkbox>
  <poad-checkbox name="ext" value="pgvector" label="pgvector"></poad-checkbox>
  <poad-checkbox label="Disabled" checked disabled></poad-checkbox>
  <poad-checkbox label="Read-only" checked readonly></poad-checkbox>
  <poad-checkbox label="Accept the terms" invalid></poad-checkbox>
</form>
<code id="ext-out">ext=postgis</code>

<script type="module">
  const form = document.querySelector('#extensions');
  form.addEventListener('change', () => {
    const values = new FormData(form).getAll('ext');
    document.querySelector('#ext-out').textContent = \`ext=\${values.join(',')}\`;
  });
<\/script>
`;export{e as default};