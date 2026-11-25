var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-switch id="busy" label="Busy"></poad-switch>
<poad-block id="settings" message="Saving…">
  <div class="demo-panel">
    <p>Project settings are saved for the whole team.</p>
    <poad-button id="save">Save</poad-button>
  </div>
</poad-block>
<code id="block-out">busy=false · saves=0</code>

<script type="module">
  const block = document.querySelector('#settings');
  let saves = 0;
  const show = () => { document.querySelector('#block-out').textContent = \`busy=\${!!block.blocked} · saves=\${saves}\`; };
  document.querySelector('#busy').addEventListener('change', (e) => { block.blocked = e.detail; show(); });
  document.querySelector('#save').addEventListener('click', () => { saves += 1; show(); });
<\/script>
`;export{e as default};