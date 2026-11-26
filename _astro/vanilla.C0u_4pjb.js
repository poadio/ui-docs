var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-segmented id="cal-view" value="week" size="sm" aria-label="View"
  options='[{"label":"Month","value":"month"},{"label":"Week","value":"week"},{"label":"Agenda","value":"agenda"}]'></poad-segmented>
<poad-calendar id="cal" class="demo-calendar" view="week" day-start="8" day-end="18" editable aria-label="Team calendar"
  sources='[{"id":"field","label":"Field","color":"#0f9d58"},{"id":"office","label":"Office"}]'></poad-calendar>
<code id="cal-out">last=—</code>

<script type="module">
  const cal = document.querySelector('#cal');
  const out = document.querySelector('#cal-out');
  const hm = (d) => \`\${d.getDate()}/\${d.getHours()}:\${String(d.getMinutes()).padStart(2, '0')}\`;
  cal.date = new Date(2026, 8, 15);
  cal.today = new Date(2026, 8, 15);
  cal.plan = {
    tasks: [
      { id: 'e1', label: 'Site visit', bucket: 'field', start: '2026-09-15T09:00', end: '2026-09-15T10:30' },
      { id: 'e2', label: 'Design review', bucket: 'office', start: '2026-09-15T10:00', end: '2026-09-15T11:30' },
      { id: 'e3', label: 'Lunch with partners', bucket: 'office', start: '2026-09-16T12:00', end: '2026-09-16T13:30' },
      { id: 'e4', label: 'Survey campaign', bucket: 'field', start: '2026-09-17', end: '2026-09-18', allDay: true },
      { id: 'e5', label: 'Stand-up', bucket: 'office', start: '2026-09-14T08:30', end: '2026-09-14T08:45', rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR' },
    ],
  };
  let nextId = 6;
  document.querySelector('#cal-view').addEventListener('change', (e) => { cal.view = e.detail; });
  // the calendar never writes: the application applies the change to its own document
  const change = (e) => {
    const m = e.detail;
    cal.plan = { ...cal.plan, tasks: cal.plan.tasks.map((t) => (t.id === m.occurrence.taskId ? { ...t, start: m.start, end: m.end } : t)) };
    out.textContent = \`last=\${m.occurrence.task.label} \${hm(m.start)}\`;
  };
  cal.addEventListener('eventmove', change);
  cal.addEventListener('eventresize', change);
  cal.addEventListener('eventcreate', (e) => {
    cal.plan = { ...cal.plan, tasks: [...cal.plan.tasks, { id: \`e\${nextId++}\`, label: 'New event', bucket: 'office', start: e.detail.start, end: e.detail.end }] };
    out.textContent = \`last=created \${hm(e.detail.start)}\`;
  });
<\/script>
`;export{e as default};