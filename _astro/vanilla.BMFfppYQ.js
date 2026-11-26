var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-taskboard id="board" class="demo-taskboard" aria-label="Project tasks"></poad-taskboard>
<code id="board-out">moved=—</code>

<script type="module">
  const board = document.querySelector('#board');
  board.plan = {
    buckets: [{ id: 'todo', label: 'To do' }, { id: 'doing', label: 'Doing', wipLimit: 2 }, { id: 'done', label: 'Done' }],
    resources: [{ id: 'ana', label: 'Ana Silva' }, { id: 'tom', label: 'Tom Weber' }],
    tasks: [
      { id: 't1', label: 'Bridge inspection', bucket: 'todo', rank: 'b', tags: ['field'], end: '2026-12-04', assignments: [{ resource: 'ana' }] },
      { id: 't2', label: 'Survey report', bucket: 'todo', rank: 'd', end: '2026-12-11' },
      { id: 't3', label: 'Concrete diagnosis', bucket: 'doing', rank: 'b', progress: 0.4, assignments: [{ resource: 'tom' }] },
      { id: 't4', label: 'Traffic count', bucket: 'doing', rank: 'd', progress: 0.7, tags: ['data'], assignments: [{ resource: 'ana' }] },
      { id: 't5', label: 'Kick-off meeting', bucket: 'done', rank: 'b', progress: 1 },
    ],
  };
  // the board never writes: the application applies the move to its own document
  board.addEventListener('taskmove', (e) => {
    const m = e.detail;
    board.plan = { ...board.plan, tasks: board.plan.tasks.map((t) => (t.id === m.id ? { ...t, bucket: m.to, rank: m.rank } : t)) };
    document.querySelector('#board-out').textContent = \`moved=\${m.task.label} → \${m.to}\`;
  });
<\/script>
`;export{e as default};