var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-accordion id="settings" value="db">
  <poad-accordion-panel value="db" header="Database" icon="database">PostgreSQL 17, 2 GB, daily backups.</poad-accordion-panel>
  <poad-accordion-panel value="net" header="Network">Private network, no public IP.</poad-accordion-panel>
  <poad-accordion-panel value="logs" header="Logs" disabled>Kept for 30 days.</poad-accordion-panel>
</poad-accordion>
<code id="accordion-out">open=db</code>

<script type="module">
  const settings = document.querySelector('#settings');
  settings.addEventListener('change', (e) => {
    document.querySelector('#accordion-out').textContent = \`open=\${e.detail ?? 'none'}\`;
  });
<\/script>
`;export{e as default};