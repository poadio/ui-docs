var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-block-view id="bv"></poad-block-view>
</div>
<code id="bv-out">toc=…</code>

<script type="module">
  const bv = document.querySelector('#bv');
  const out = document.querySelector('#bv-out');
  bv.addEventListener('toc', (e) => { out.textContent = \`toc=\${e.detail.map((t) => t.text).join(' › ')}\`; });
  bv.data = {"time": 0, "version": "2.31.6", "blocks": [{"type": "header", "data": {"text": "Sèvres bridge", "level": 2}}, {"type": "paragraph", "data": {"text": "Visit on <b>12 March 2026</b>, overall state <i>good</i>. See the <a href=\\"https://www.cerema.fr\\">inspection guide</a>."}}, {"type": "list", "data": {"style": "unordered", "items": [{"content": "Deck", "meta": {}, "items": [{"content": "Expansion joint cracked over 2.4 m", "meta": {}, "items": []}]}, {"content": "Piers: no change", "meta": {}, "items": []}]}}, {"type": "alert", "data": {"type": "warning", "message": "Plan a new visit <b>before winter</b>."}}, {"type": "header", "data": {"text": "Follow-up", "level": 3}}, {"type": "list", "data": {"style": "checklist", "items": [{"content": "Photos uploaded", "meta": {"checked": true}, "items": []}, {"content": "Report signed", "meta": {"checked": false}, "items": []}]}}, {"type": "table", "data": {"withHeadings": true, "content": [["Part", "State"], ["Deck", "Damaged"], ["Piers", "Good"]]}}, {"type": "code", "data": {"code": "select name, state\\n  from structures\\n where state = 'Damaged';", "language": "sql"}}]};
<\/script>
`;export{e as default};