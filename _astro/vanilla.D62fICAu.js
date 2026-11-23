var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-popover id="filters" align="start" focus-trap mobile="sheet" sheet-title="Filters">
    <poad-button slot="trigger" variant="outline">Filters</poad-button>
    <div style="display: grid; gap: 8px; padding: 12px">
      <poad-switch id="running" label="Running only" checked></poad-switch>
      <poad-switch id="mine" label="Mine"></poad-switch>
    </div>
  </poad-popover>
</div>
<code id="popover-out">open=false · running=true · mine=false</code>

<script type="module">
  const filters = document.querySelector('#filters');
  const running = document.querySelector('#running');
  const mine = document.querySelector('#mine');
  const show = () => {
    document.querySelector('#popover-out').textContent = \`open=\${!!filters.open} · running=\${running.checked} · mine=\${!!mine.checked}\`;
  };
  filters.addEventListener('openchange', show);
  filters.addEventListener('change', show);
<\/script>
`;export{e as default};