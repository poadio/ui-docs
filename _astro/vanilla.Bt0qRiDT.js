var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-split-button id="save" label="Save" icon="save" dropdown-aria-label="More save options"
    items='[{"label":"Save and close"},{"label":"Save as draft"}]'></poad-split-button>
</div>
<code id="split-out">saves=0 · last=none</code>

<script type="module">
  const save = document.querySelector('#save');
  let saves = 0, last = 'none';
  const show = () => { document.querySelector('#split-out').textContent = \`saves=\${saves} · last=\${last}\`; };
  save.addEventListener('press', () => { saves++; show(); });
  save.addEventListener('itemclick', (e) => { last = e.detail.item.label; show(); });
<\/script>
`;export{e as default};