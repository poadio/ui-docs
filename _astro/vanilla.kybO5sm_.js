var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row demo-top">
  <poad-listbox id="team" class="demo-list" value='"data"' aria-label="Team"
    options='[{"label":"Platform","value":"platform"},{"label":"Data","value":"data"},{"label":"Security","value":"security","disabled":true},{"label":"Design","value":"design"}]'></poad-listbox>
  <poad-listbox id="regions" class="demo-list" multiple filter select-all list-height="160px" aria-label="Regions"
    options='["North","South","East","West","Île-de-France"]' value="[]"></poad-listbox>
</div>
<code id="listbox-out">team=data · regions=</code>

<script type="module">
  const team = document.querySelector('#team');
  const regions = document.querySelector('#regions');
  const show = () => { document.querySelector('#listbox-out').textContent = \`team=\${team.value} · regions=\${(regions.value ?? []).join(', ')}\`; };
  team.addEventListener('change', show);
  regions.addEventListener('change', show);
<\/script>
`;export{e as default};