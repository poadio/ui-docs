var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="range" name="range" value="month" aria-label="Range"
  options='[{"label":"Day","value":"day"},{"label":"Week","value":"week","disabled":true},{"label":"Month","value":"month"},{"label":"Year","value":"year"}]'></poad-segmented>
<poad-segmented name="days" value='["Mon","Thu"]' multiple shape="pill" size="sm" aria-label="Days"
  options='[{"label":"Mon","value":"Mon"},{"label":"Tue","value":"Tue"},{"label":"Wed","value":"Wed"},{"label":"Thu","value":"Thu"},{"label":"Fri","value":"Fri"}]'></poad-segmented>
<code id="range-out">range=month</code>

<script type="module">
  document.querySelector('#range').addEventListener('change', (e) => {
    document.querySelector('#range-out').textContent = \`range=\${e.detail}\`;
  });
<\/script>
`;export{e as default};