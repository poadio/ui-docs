var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-code-editor id="ce" name="query" language="sql" aria-label="Inspection query" height="220px"></poad-code-editor>
</div>
<code id="ce-out">lines=…</code>

<script type="module">
  import { providePoadMonaco } from '@poadio/ui-elements';
  // Monaco served by the application itself (copied from node_modules/monaco-editor/min/vs)
  providePoadMonaco({ baseUrl: '/monaco/min/vs' });
  const ce = document.querySelector('#ce');
  const out = document.querySelector('#ce-out');
  const show = () => { const v = ce.value ?? ''; out.textContent = \`lines=\${v.split('\\n').length} chars=\${v.length}\`; };
  ce.value = "select name, state\\n  from structures\\n where state = 'Damaged'\\n order by name;";
  ce.addEventListener('change', show);
  show();
<\/script>
`;export{e as default};