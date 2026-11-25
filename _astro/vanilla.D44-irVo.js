var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-filter-chip id="status-chip" label="Status"></poad-filter-chip>
  <poad-filter-chip label="Owner" icon="plus" removable="false"></poad-filter-chip>
</div>
<code id="chip-out">status=none</code>

<script type="module">
  const chip = document.querySelector('#status-chip');
  const show = (status) => {
    Object.assign(chip, { value: status ?? '', active: !!status });
    document.querySelector('#chip-out').textContent = \`status=\${status ?? 'none'}\`;
  };
  chip.addEventListener('press', () => show('online'));
  chip.addEventListener('remove', () => show(null));
<\/script>
`;export{e as default};