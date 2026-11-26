var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="ch-type" value="bar" size="sm" aria-label="Chart type"
  options='[{"label":"Bars","value":"bar"},{"label":"Lines","value":"line"},{"label":"Doughnut","value":"doughnut"}]'></poad-segmented>
<div class="demo-wide">
  <poad-chart id="ch" type="bar" aria-label="Readings per month" table-toggle height="260px"></poad-chart>
</div>
<code id="ch-out">last=—</code>

<script type="module">
  const chart = document.querySelector('#ch');
  chart.data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Inspections', data: [12, 19, 8, 15, 11, 17] }, { label: 'Alerts', data: [3, 5, 2, 6, 4, 3] }],
  };
  document.querySelector('#ch-type').addEventListener('change', (e) => { chart.type = e.detail; });
  chart.addEventListener('chartclick', (e) => { document.querySelector('#ch-out').textContent = \`last=\${e.detail.label} \${e.detail.value}\`; });
<\/script>
`;export{e as default};