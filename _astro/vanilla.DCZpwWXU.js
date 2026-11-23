var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-radio-group id="mode" name="mode" value="transaction" aria-label="Pooling mode" orientation="horizontal">
  <poad-radio value="transaction" label="Transaction"></poad-radio>
  <poad-radio value="session" label="Session"></poad-radio>
  <poad-radio value="statement" label="Statement" disabled></poad-radio>
</poad-radio-group>
<poad-radio-group name="plan" value="shared" aria-label="Database plan"
  options='[{"value":"env","label":"One per environment","hint":"Strong isolation, more databases."},
            {"value":"project","label":"One per project","hint":"One schema per environment."},
            {"value":"shared","label":"Shared","hint":"Serverless pool (default)."}]'></poad-radio-group>
<code id="mode-out">mode=transaction</code>

<script type="module">
  document.querySelector('#mode').addEventListener('change', (e) => {
    document.querySelector('#mode-out').textContent = \`mode=\${e.detail}\`;
  });
<\/script>
`;export{e as default};