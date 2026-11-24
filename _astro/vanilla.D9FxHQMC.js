var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-card header="Database" subheader="PostgreSQL 17 · 2 GB">
    <poad-button id="restart" slot="actions" size="sm" variant="outline">Restart</poad-button>
    Daily backups, kept for 30 days.
    <span slot="footer">Last backup: 03:00</span>
  </poad-card>
  <poad-card hoverable compact>A compact card, raised on hover.</poad-card>
</div>
<code id="card-out">restarts=0</code>

<script type="module">
  let restarts = 0;
  document.querySelector('#restart').addEventListener('click', () => {
    document.querySelector('#card-out').textContent = \`restarts=\${++restarts}\`;
  });
<\/script>
`;export{e as default};