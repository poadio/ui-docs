var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-button id="delete" severity="danger" variant="outline">Delete project…</poad-button>
</div>
<code id="confirm-out">result=none</code>

<script type="module">
  import { poadConfirm } from '@poadio/ui-elements';

  document.querySelector('#delete').addEventListener('click', async () => {
    const ok = await poadConfirm({ header: 'Delete project?', message: 'This cannot be undone.', severity: 'danger', acceptLabel: 'Delete' });
    document.querySelector('#confirm-out').textContent = \`result=\${ok}\`;
  });
<\/script>
`;export{e as default};