var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-button id="notify">Notify</poad-button>
  <poad-button id="fail" severity="danger" variant="outline">Fail</poad-button>
</div>
<code id="toast-out">sent=0</code>
<!-- optional: without it, poadToast adds one at the end of <body> -->
<poad-toast position="top-right" show-progress></poad-toast>

<script type="module">
  import { poadToast } from '@poadio/ui-elements';

  let sent = 0;
  const count = () => { document.querySelector('#toast-out').textContent = \`sent=\${++sent}\`; };
  document.querySelector('#notify').addEventListener('click', () => { poadToast.success('Deployed', 'api v1.4 is live'); count(); });
  document.querySelector('#fail').addEventListener('click', () => { poadToast.error('Build failed', 'Step “test” exited with code 1'); count(); });
<\/script>
`;export{e as default};