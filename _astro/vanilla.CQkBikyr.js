var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <div style="width: 220px">
    <poad-datepicker id="day" name="day" value="2026-11-24" first-day-of-week="1" clearable placeholder="Pick a day" aria-label="Day"></poad-datepicker>
  </div>
</div>
<code id="datepicker-out">day=2026-11-24</code>

<script type="module">
  const day = document.querySelector('#day');
  day.addEventListener('change', () => {
    document.querySelector('#datepicker-out').textContent = \`day=\${day.value ?? 'none'}\`;
  });
<\/script>
`;export{e as default};