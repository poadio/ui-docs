var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-richtext id="rt" name="report" aria-label="Inspection report" placeholder="Write the report…" max-length="400" min-height="120px"
    value="<h2>Sèvres bridge</h2><p>Visit on <strong>12 March</strong>, overall state <em>good</em>.</p><ul><li>Expansion joint cracked over 2.4 m.</li></ul>"></poad-richtext>
</div>
<code id="rt-out">html=…</code>

<script type="module">
  const rt = document.querySelector('#rt');
  const out = document.querySelector('#rt-out');
  const show = () => { out.textContent = \`html=\${(rt.value ?? '').length} chars\`; };
  rt.addEventListener('change', show);
  customElements.whenDefined('poad-richtext').then(show);
<\/script>
`;export{e as default};