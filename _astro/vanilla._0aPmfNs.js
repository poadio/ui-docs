var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-panel id="resources" header="Resources" toggleable>
    <poad-button slot="actions" size="sm" variant="text">Refresh</poad-button>
    2 vCPU · 4 GB memory · 20 GB disk.
    <span slot="footer">Updated 2 minutes ago.</span>
  </poad-panel>
  <poad-panel header="Logs" variant="outline" flat>No new logs.</poad-panel>
</div>
<code id="panel-out">collapsed=false</code>

<script type="module">
  document.querySelector('#resources').addEventListener('collapsedchange', (e) => {
    document.querySelector('#panel-out').textContent = \`collapsed=\${e.detail}\`;
  });
<\/script>
`;export{e as default};