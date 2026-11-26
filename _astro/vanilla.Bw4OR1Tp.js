var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-block-editor id="be" name="report" aria-label="Inspection report" min-height="200px"></poad-block-editor>
</div>
<code id="be-out">blocks=…</code>

<script type="module">
  // Editor.js and its extensions come from the application's own bundle (optional dependencies), never a CDN
  const be = document.querySelector('#be');
  const out = document.querySelector('#be-out');
  const show = () => { const b = be.value?.blocks ?? []; out.textContent = \`blocks=\${b.length} types=\${b.map((x) => x.type).join(',')}\`; };
  be.value = {"time": 0, "version": "2.31.6", "blocks": [{"type": "header", "data": {"text": "Sèvres bridge", "level": 2}}, {"type": "paragraph", "data": {"text": "Visit on <b>12 March 2026</b>, overall state <i>good</i>."}}, {"type": "alert", "data": {"type": "warning", "message": "Plan a new visit before winter."}}, {"type": "list", "data": {"style": "unordered", "meta": {}, "items": [{"content": "Deck joints: <b>to watch</b>", "meta": {}, "items": []}, {"content": "Pier 3: cracked", "meta": {}, "items": []}]}}, {"type": "paragraph", "data": {"text": "Type “/” in an empty block to insert one."}}]};
  be.addEventListener('change', show);
  show();
<\/script>
`;export{e as default};