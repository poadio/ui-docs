var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-tree id="files" class="demo-tree" data-key="id" selection-mode="checkbox" filter lazy-children aria-label="Files"></poad-tree>
<code id="tree-out">selected=—</code>

<script type="module">
  const tree = document.querySelector('#files');
  const file = (id, label) => ({ id, label, leaf: true });
  tree.value = [
    { id: 'src', label: 'src', children: [
      { id: 'app', label: 'app', children: [file('main', 'main.ts'), file('routes', 'routes.ts')] },
      { id: 'lib', label: 'lib', children: [file('api', 'api.ts'), file('db', 'db.ts')] },
    ] },
    { id: 'docs', label: 'docs', children: [file('readme', 'README.md'), file('guide', 'guide.md')] },
    { id: 'archives', label: 'archives' },
  ];
  tree.expandedKeys = ['src', 'app'];
  // enfants chargés à la demande (ici, après un court délai)
  tree.loadChildren = (row) => new Promise((r) => setTimeout(() => r([file(\`\${row.id}-2025\`, '2025.zip'), file(\`\${row.id}-2024\`, '2024.zip')]), 600));
  tree.nodeIcon = (row) => (row.leaf ? 'file' : 'folder');
  tree.addEventListener('change', (e) => {
    const s = Array.isArray(e.detail) ? e.detail : e.detail ? [e.detail] : [];
    document.querySelector('#tree-out').textContent = \`selected=\${s.map((n) => n.label).join(', ') || '—'}\`;
  });
<\/script>
`;export{e as default};