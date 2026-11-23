var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-badge id="count" value="3"></poad-badge>
  <poad-badge value="120"></poad-badge>
  <poad-badge value="120" max="999" severity="info"></poad-badge>
  <poad-badge value="new" severity="success"></poad-badge>
  <poad-badge value="7" severity="neutral" size="sm"></poad-badge>
  <poad-badge dot severity="success" aria-label="Online"></poad-badge>
  <poad-button id="inc" size="sm" severity="secondary">+1</poad-button>
</div>

<script type="module">
  const badge = document.querySelector('#count');
  document.querySelector('#inc').addEventListener('click', () => {
    badge.value = Number(badge.value) + 1;
  });
<\/script>
`;export{e as default};