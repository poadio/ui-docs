var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-image id="bridge" src="/demo/landscape.svg" alt="Bridge over the river" width="240px" height="160px" rounded preview
    caption="Click to enlarge"></poad-image>
  <!-- source volontairement illisible : l'image de repli la remplace -->
  <poad-image id="fallback" src="data:image/png;base64,broken" fallback="/demo/landscape.svg" alt="Fallback image" width="160px" height="107px" rounded
    caption="Fallback"></poad-image>
</div>
<code id="image-out">loaded=false · failed=false</code>

<script type="module">
  const state = { loaded: false, failed: false };
  const show = () => { document.querySelector('#image-out').textContent = \`loaded=\${state.loaded} · failed=\${state.failed}\`; };
  document.querySelector('#bridge').addEventListener('loaded', () => { state.loaded = true; show(); });
  document.querySelector('#fallback').addEventListener('loaderror', () => { state.failed = true; show(); });
<\/script>
`;export{e as default};