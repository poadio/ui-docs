var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-timeline id="jobs" align="alternate" active-index="1"></poad-timeline>
</div>

<script type="module">
  const timeline = document.querySelector('#jobs');
  timeline.events = [
    { title: 'Build', date: '09:12', icon: 'check', severity: 'success' },
    { title: 'Tests', date: '09:15' },
    { title: 'Deploy', date: '09:21' },
  ];
  timeline.renderOpposite = (e) => e.date;
  timeline.renderContent = (e) => Object.assign(document.createElement('strong'), { textContent: e.title });
<\/script>
`;export{e as default};