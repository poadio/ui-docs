var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-field label="Release notes" hint="Markdown, grows as you type" autosize>
    <textarea id="notes" name="notes" rows="2"></textarea>
  </poad-field>
  <poad-field label="Config (JSON)">
    <textarea name="config" rows="3" style="font-family: var(--poad-font-mono)">{ "replicas": 2 }</textarea>
  </poad-field>
</div>
<code id="notes-out">0 characters</code>

<script type="module">
  document.querySelector('#notes').addEventListener('input', (e) => {
    document.querySelector('#notes-out').textContent = \`\${e.target.value.length} characters\`;
  });
<\/script>
`;export{e as default};