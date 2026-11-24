var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-button id="rename">Rename…</poad-button>
</div>
<poad-dialog id="dialog" header="Rename project" maximizable>
  <poad-field label="Name"><input id="draft" value="api" /></poad-field>
  <div slot="footer">
    <poad-button id="discard" severity="secondary">Discard</poad-button>
    <poad-button id="save">Save</poad-button>
  </div>
</poad-dialog>
<code id="dialog-out">open=false · name=api</code>

<script type="module">
  const dialog = document.querySelector('#dialog');
  const draft = document.querySelector('#draft');
  let name = 'api';
  const show = () => {
    document.querySelector('#dialog-out').textContent = \`open=\${!!dialog.open} · name=\${name}\`;
  };
  const setOpen = (open) => { dialog.open = open; show(); };
  document.querySelector('#rename').addEventListener('click', () => { draft.value = name; setOpen(true); });
  document.querySelector('#discard').addEventListener('click', () => setOpen(false));
  document.querySelector('#save').addEventListener('click', () => { name = draft.value; setOpen(false); });
  dialog.addEventListener('openchange', show);
<\/script>
`;export{e as default};