var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-orgchart id="org" class="demo-org" label-field="name" sublabel-field="role" avatar-field="initials" selection-mode="single"></poad-orgchart>
<code id="org-out">selected=—</code>

<script type="module">
  const org = document.querySelector('#org');
  const p = (name, role) => ({ name, role, initials: name.split(' ').map((w) => w[0]).join('') });
  org.value = [{
    data: p('Alice Martin', 'Director'), children: [
      { data: p('Bruno Petit', 'Engineering'), children: [{ data: p('Chloé Roux', 'Platform') }, { data: p('David Leroy', 'Apps') }] },
      { data: p('Emma Faure', 'Operations'), children: [{ data: p('Farid Benali', 'Support') }] },
      { data: p('Gaëlle Simon', 'Finance') },
    ],
  }];
  org.addEventListener('change', (e) => {
    document.querySelector('#org-out').textContent = \`selected=\${e.detail?.name ?? '—'}\`;
  });
<\/script>
`;export{e as default};