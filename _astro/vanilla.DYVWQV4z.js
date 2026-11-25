var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-phone">
  <poad-bottom-nav id="bottom-nav" value="home" always-show items='[
    {"value":"home","label":"Home","icon":"home"},
    {"value":"projects","label":"Projects","icon":"folder","badge":3},
    {"value":"alerts","label":"Alerts","icon":"bell","badge":128},
    {"value":"me","label":"Account","icon":"user","badge":true}
  ]'></poad-bottom-nav>
</div>
<code id="bottom-nav-out">value=home</code>

<script type="module">
  document.querySelector('#bottom-nav').addEventListener('change', (e) => {
    document.querySelector('#bottom-nav-out').textContent = \`value=\${e.detail}\`;
  });
<\/script>
`;export{e as default};