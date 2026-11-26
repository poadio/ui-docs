var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="sch-scale" value="week" size="sm" aria-label="Scale"
  options='[{"label":"Day","value":"day"},{"label":"Week","value":"week"},{"label":"Month","value":"month"}]'></poad-segmented>
<poad-scheduler id="sch" class="demo-scheduler" scale="week" editable aria-label="Team schedule"></poad-scheduler>
<code id="sch-out">last=—</code>

<script type="module">
  const sch = document.querySelector('#sch');
  const out = document.querySelector('#sch-out');
  const hm = (d) => \`\${d.getDate()}/\${d.getHours()}:\${String(d.getMinutes()).padStart(2, '0')}\`;
  sch.date = new Date(2026, 8, 14);
  sch.today = new Date(2026, 8, 15, 11);
  sch.plan = {
    resources: [
      { id: 'field', label: 'Field team' },
      { id: 'claire', label: 'Claire Fontaine', parent: 'field', color: '#2f6feb' },
      { id: 'marc', label: 'Marc Delorme', parent: 'field', color: '#a371f7' },
      { id: 'van', label: 'Inspection van', color: '#0f9d58' },
    ],
    tasks: [
      { id: 's1', label: 'Site survey', start: '2026-09-14T09:00', end: '2026-09-15T17:00', assignments: [{ resource: 'claire' }] },
      { id: 's2', label: 'Bridge inspection', start: '2026-09-16T08:00', end: '2026-09-17T12:00', assignments: [{ resource: 'claire' }, { resource: 'van' }] },
      { id: 's3', label: 'Design review', start: '2026-09-14T09:00', end: '2026-09-14T17:00', assignments: [{ resource: 'marc' }] },
      { id: 's4', label: 'Report writing', start: '2026-09-15T09:00', end: '2026-09-17T17:00', assignments: [{ resource: 'marc' }] },
      { id: 's5', label: 'Servicing', start: '2026-09-21T08:00', end: '2026-09-21T17:00', assignments: [{ resource: 'van' }], locked: true },
      { id: 's6', label: 'Load test', duration: '1d' },
    ],
  };
  let nextId = 7;
  const update = (id, patch) => { sch.plan = { ...sch.plan, tasks: sch.plan.tasks.map((t) => (t.id === id ? { ...t, ...patch(t) } : t)) }; };
  document.querySelector('#sch-scale').addEventListener('change', (e) => { sch.scale = e.detail; });
  // the scheduler never writes: the application applies the change to its own document
  const change = (e) => {
    const m = e.detail;
    update(m.occurrence.taskId, () => ({ start: m.start, end: m.end }));
    out.textContent = \`last=\${m.occurrence.task.label} \${hm(m.start)}\`;
  };
  sch.addEventListener('eventmove', change);
  sch.addEventListener('eventresize', change);
  sch.addEventListener('eventassign', (e) => {
    const m = e.detail;
    update(m.occurrence.taskId, (t) => ({ assignments: t.assignments.map((a, i) => (i === m.assignmentIndex ? { ...a, resource: m.to } : a)) }));
    out.textContent = \`last=\${m.occurrence.task.label} → \${m.to}\`;
  });
  sch.addEventListener('eventcreate', (e) => {
    sch.plan = { ...sch.plan, tasks: [...sch.plan.tasks, { id: \`s\${nextId++}\`, label: 'New task', start: e.detail.start, end: e.detail.end, assignments: [{ resource: e.detail.resource }] }] };
    out.textContent = \`last=created \${e.detail.resource} \${hm(e.detail.start)}\`;
  });
  sch.addEventListener('eventschedule', (e) => {
    const m = e.detail;
    update(m.task.id, () => ({ start: m.start, end: m.end, duration: undefined, assignments: [{ resource: m.resource }] }));
    out.textContent = \`last=\${m.task.label} → \${m.resource} \${hm(m.start)}\`;
  });
<\/script>
`;export{e as default};