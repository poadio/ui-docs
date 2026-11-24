var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <div style="width: 260px">
    <poad-combo id="city" name="city" option-label="name" force-selection dropdown clearable placeholder="City…" aria-label="City"
      suggestions='[{"name":"Lyon"},{"name":"Lens"},{"name":"Évry"},{"name":"Paris"},{"name":"Pau"}]'></poad-combo>
  </div>
</div>
<code id="combo-out">city=none</code>

<script type="module">
  const city = document.querySelector('#city');
  city.addEventListener('change', () => {
    document.querySelector('#combo-out').textContent = \`city=\${city.value?.name ?? 'none'}\`;
  });
<\/script>
`;export{e as default};