var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-json-editor id="je" name="record" aria-label="Structure record" height="180px"
    value='{"site": "Sèvres bridge", "state": "Good", "inspected": "2026-03-12"}'></poad-json-editor>
</div>
<code id="je-out">state=…</code>

<script type="module">
  const je = document.querySelector('#je');
  const out = document.querySelector('#je-out');
  let error = null;
  const show = () => { out.textContent = \`state=\${je.value?.state ?? '—'} valid=\${error ? 'no' : 'yes'}\`; };
  // business rule, after the JSON syntax check
  je.validator = (o) => (['Good', 'Damaged'].includes(o?.state) ? [] : ['$.state: expected "Good" or "Damaged"']);
  je.addEventListener('errorchange', (e) => { error = e.detail; show(); });
  je.addEventListener('change', show);
  customElements.whenDefined('poad-json-editor').then(show);
<\/script>
`;export{e as default};