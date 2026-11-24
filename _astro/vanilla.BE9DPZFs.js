var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-tabs id="tabs" value="res">
  <poad-tab value="res" label="Resources" count="12" icon="database"><p>12 resources in this project.</p></poad-tab>
  <poad-tab value="logs" label="Logs"><p>No new logs.</p></poad-tab>
  <poad-tab value="settings" label="Settings" disabled><p>Settings.</p></poad-tab>
</poad-tabs>
<code id="tabs-out">tab=res</code>

<script type="module">
  const tabs = document.querySelector('#tabs');
  tabs.addEventListener('change', (e) => {
    document.querySelector('#tabs-out').textContent = \`tab=\${e.detail}\`;
  });
<\/script>
`;export{e as default};