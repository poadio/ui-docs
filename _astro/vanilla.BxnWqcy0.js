var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row" id="cities">
  <poad-chip label="Paris" icon="map-pin" removable></poad-chip>
  <poad-chip label="Lyon" icon="map-pin" removable></poad-chip>
  <poad-chip label="Nantes" icon="map-pin" removable></poad-chip>
</div>
<div class="demo-row">
  <poad-chip id="mine" label="Mine only" clickable></poad-chip>
  <poad-chip label="Ada Lovelace" avatar-text="AL" severity="info"></poad-chip>
  <poad-chip label="Archived" size="sm" disabled removable></poad-chip>
</div>

<script type="module">
  // remove: × button, Backspace or Delete — the chip is taken out of the page.
  document.querySelector('#cities').addEventListener('remove', (e) => e.target.remove());
  // press: click, Enter or Space on a clickable chip.
  const mine = document.querySelector('#mine');
  mine.addEventListener('press', () => (mine.selected = !mine.selected));
<\/script>
`;export{e as default};