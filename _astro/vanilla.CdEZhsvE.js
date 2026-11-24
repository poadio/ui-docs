var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <div style="width: 280px">
    <poad-multiselect id="regions" name="regions" aria-label="Regions" placeholder="Pick regions" show-toggle-all clearable
      value='["n"]'
      options='[{"label":"North","value":"n"},{"label":"South","value":"s"},{"label":"East","value":"e","disabled":true},{"label":"West","value":"w"}]'></poad-multiselect>
  </div>
</div>
<code id="multiselect-out">regions=n</code>

<script type="module">
  const regions = document.querySelector('#regions');
  regions.addEventListener('change', (e) => {
    document.querySelector('#multiselect-out').textContent = \`regions=\${e.detail.join(',')}\`;
  });
<\/script>
`;export{e as default};