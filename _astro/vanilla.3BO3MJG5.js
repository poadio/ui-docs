var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-orderlist id="steps" class="demo-order" header="Steps" filter list-height="220px"
  value='[{"label":"Inspect"},{"label":"Measure"},{"label":"Test samples"},{"label":"Write report"},{"label":"Review"}]'></poad-orderlist>
<code id="orderlist-out">order=Inspect, Measure, Test samples, Write report, Review</code>

<script type="module">
  const steps = document.querySelector('#steps');
  steps.addEventListener('change', (e) => {
    document.querySelector('#orderlist-out').textContent = \`order=\${e.detail.map((s) => s.label).join(', ')}\`;
  });
<\/script>
`;export{e as default};