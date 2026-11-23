var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <div style="width: 200px"><poad-colorpicker id="accent" name="accent" value="#2f6feb" aria-label="Accent" clearable></poad-colorpicker></div>
  <div style="width: 240px"><poad-colorpicker id="overlay" name="overlay" value="rgba(15, 23, 42, 0.6)" format="rgb" alpha aria-label="Overlay"></poad-colorpicker></div>
  <div style="width: 200px"><poad-colorpicker value="#16a34a" aria-label="Disabled" disabled></poad-colorpicker></div>
</div>
<code id="color-out">accent=#2f6feb · overlay=rgba(15, 23, 42, 0.6)</code>

<script type="module">
  const accent = document.querySelector('#accent');
  const overlay = document.querySelector('#overlay');
  const show = () => {
    document.querySelector('#color-out').textContent = \`accent=\${accent.value} · overlay=\${overlay.value}\`;
  };
  accent.addEventListener('change', show);
  overlay.addEventListener('change', show);
<\/script>
`;export{e as default};