var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-frame">
  <poad-splitter id="split" panel-sizes="[30, 70]" min-sizes="[15, 30]">
    <poad-splitter-panel><div class="demo-pane">Files</div></poad-splitter-panel>
    <poad-splitter-panel><div class="demo-pane">Editor</div></poad-splitter-panel>
  </poad-splitter>
</div>
<code id="split-out">sizes=30 / 70</code>

<script type="module">
  document.querySelector('#split').addEventListener('resizeend', (e) => {
    document.querySelector('#split-out').textContent = \`sizes=\${e.detail.map(Math.round).join(' / ')}\`;
  });
<\/script>
`;export{e as default};