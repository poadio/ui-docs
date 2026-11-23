var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-field label="Phone" hint="Preset « phone »">
    <poad-mask id="phone" preset="phone"><input name="phone"></poad-mask>
  </poad-field>
  <poad-field label="Date" hint="Raw value (unmask), cleared if incomplete (autoClear)">
    <poad-mask id="date" mask="99/99/9999" unmask auto-clear><input name="date"></poad-mask>
  </poad-field>
</div>
<code id="mask-out">phone=null · date=null</code>

<script type="module">
  const phone = document.querySelector('#phone');
  const date = document.querySelector('#date');
  const show = () => {
    document.querySelector('#mask-out').textContent = \`phone=\${phone.value} · date=\${date.value}\`;
  };
  phone.addEventListener('valuechange', show);
  date.addEventListener('valuechange', show);
<\/script>
`;export{e as default};