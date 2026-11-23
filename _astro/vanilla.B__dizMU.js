var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-password id="pwd" name="password" feedback autocomplete="new-password" placeholder="New password" aria-label="New password"></poad-password>
  <poad-password value="secret" placeholder="Disabled" aria-label="Disabled" disabled></poad-password>
</div>
<code id="pwd-out">length=0</code>

<script type="module">
  document.querySelector('#pwd').addEventListener('input', (e) => {
    document.querySelector('#pwd-out').textContent = \`length=\${e.detail.length}\`;
  });
<\/script>
`;export{e as default};