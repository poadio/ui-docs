var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-toggle-button id="watch" on-label="Watching" off-label="Watch" on-icon="eye" off-icon="eye-off"></poad-toggle-button>
  <poad-toggle-button on-label="Pinned" off-label="Pin" severity="success" size="sm" pressed></poad-toggle-button>
  <poad-toggle-button on-label="Locked" off-label="Unlocked" pressed readonly></poad-toggle-button>
  <poad-toggle-button on-label="On" off-label="Off" disabled></poad-toggle-button>
</div>
<code id="watch-out">watching=false</code>

<script type="module">
  document.querySelector('#watch').addEventListener('change', (e) => {
    document.querySelector('#watch-out').textContent = \`watching=\${e.detail}\`;
  });
<\/script>
`;export{e as default};