var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-progress id="build" value="40" label="Build" show-value></poad-progress>
  <poad-progress value="82" severity="warning" size="sm" striped aria-label="Disk usage"></poad-progress>
  <poad-progress indeterminate aria-label="Upload"></poad-progress>
</div>
<div class="demo-row">
  <poad-button id="more" severity="secondary" size="sm">+10 %</poad-button>
  <code id="build-out">build=40</code>
</div>

<script type="module">
  const build = document.querySelector('#build');
  document.querySelector('#more').addEventListener('click', () => {
    build.value = ((build.value ?? 0) + 10) % 110;
    document.querySelector('#build-out').textContent = \`build=\${build.value}\`;
  });
<\/script>
`;export{e as default};