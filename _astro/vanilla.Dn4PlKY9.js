var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-container class="demo-wide" padding="none">
  <poad-stack gap="md">
    <poad-cluster justify="between">
      <strong>Environments</strong>
      <span>3 running</span>
    </poad-cluster>
    <poad-grid cols="1 sm:2 lg:3" gap="sm">
      <div class="demo-cell"><span>Production</span><small>eu-west · 4 instances</small></div>
      <div class="demo-cell"><span>Staging</span><small>eu-west · 2 instances</small></div>
      <div class="demo-cell"><span>Preview</span><small>eu-west · 1 instance</small></div>
      <div class="demo-cell" poad-col="full"><span>Logs</span><small>Spans the full width of the grid</small></div>
    </poad-grid>
    <poad-sidebar width="200px" collapse-at="md" gap="sm">
      <div class="demo-cell"><span>Service details</span><small>The content takes the remaining width</small></div>
      <aside class="demo-cell" slot="panel"><span>Activity</span><small>Goes below the content under md</small></aside>
    </poad-sidebar>
  </poad-stack>
</poad-container>
`;export{e as default};