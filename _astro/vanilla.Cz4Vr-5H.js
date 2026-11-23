var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-switch id="wifi" name="wifi" label="Wi-Fi" checked></poad-switch>
  <poad-switch label="Bluetooth" label-position="left"></poad-switch>
  <poad-switch label="Disabled" checked disabled></poad-switch>
  <poad-switch label="Read-only" checked readonly></poad-switch>
  <poad-switch aria-label="Wi-Fi (small)" size="sm"></poad-switch>
</div>
<code id="wifi-out">wifi=true</code>

<script type="module">
  const wifi = document.querySelector('#wifi');
  wifi.addEventListener('change', (e) => {
    document.querySelector('#wifi-out').textContent = \`wifi=\${e.detail}\`;
  });
<\/script>
`;export{e as default};