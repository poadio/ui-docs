var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="gt-scale" value="week" size="sm" aria-label="Zoom"
  options='[{"label":"Day","value":"day"},{"label":"Week","value":"week"},{"label":"Month","value":"month"}]'></poad-segmented>
<poad-gantt id="gt" class="demo-gantt" scale="week" editable aria-label="Bridge repair plan"></poad-gantt>
<code id="gt-out">last=—</code>

<script type="module">
  const gantt = document.querySelector('#gt');
  const out = document.querySelector('#gt-out');
  gantt.today = new Date(2026, 8, 15);
  gantt.plan = {
    tasks: [
      { id: 'p1', label: 'Studies' },
      { id: 't1', parent: 'p1', label: 'Site survey', start: '2026-09-07', end: '2026-09-11', progress: 1 },
      { id: 't2', parent: 'p1', label: 'Structural diagnosis', start: '2026-09-14', end: '2026-09-23', progress: 0.4 },
      { id: 'p2', label: 'Works' },
      { id: 't3', parent: 'p2', label: 'Site set-up', start: '2026-09-24', end: '2026-09-29' },
      { id: 't4', parent: 'p2', label: 'Concrete repairs', start: '2026-09-28', end: '2026-10-09' },
      { id: 'm1', label: 'Handover', start: '2026-10-14', milestone: true },
      { id: 'u1', label: 'Landscape study' },
    ],
    links: [{ from: 't1', to: 't2' }, { from: 't2', to: 't3' }, { from: 't3', to: 't4', type: 'SS', lag: '1d' }, { from: 't4', to: 'm1' }],
    markers: [{ date: '2026-09-23', label: 'Steering' }],
  };
  document.querySelector('#gt-scale').addEventListener('change', (e) => { gantt.scale = e.detail; });
  // the Gantt chart never writes: the application applies the change to its own document
  const change = (e) => {
    const m = e.detail;
    gantt.plan = { ...gantt.plan, tasks: gantt.plan.tasks.map((t) => (t.id === m.task.id ? { ...t, start: m.start, end: m.end } : t)) };
    out.textContent = \`last=\${m.task.label} \${m.start.getDate()}/\${m.start.getMonth() + 1}\`;
  };
  gantt.addEventListener('taskmove', change);
  gantt.addEventListener('taskresize', change);
<\/script>
`;export{e as default};