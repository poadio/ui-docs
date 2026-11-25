var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-shell">
  <poad-app-shell id="shell">
    <poad-menubar slot="bar" aria-label="Main" breakpoint="" items='[{"label":"Docs","url":"#docs"},{"label":"Help","items":[{"label":"Shortcuts"},{"label":"Support"}]}]'>
      <span slot="start"><poad-button id="shell-menu" class="demo-shell__burger" severity="secondary" size="sm">Menu</poad-button> <strong>Acme</strong></span>
    </poad-menubar>
    <poad-nav-drawer slot="nav" id="shell-nav" value="dashboard" items='[
      {"value":"dashboard","label":"Dashboard","icon":"layout-dashboard"},
      {"label":"Projects","section":true},
      {"value":"fleet","label":"fleet-manager","icon":"folder","badge":3},
      {"value":"billing","label":"billing-api","icon":"folder"},
      {"label":"Platform","section":true},
      {"value":"functions","label":"Functions","icon":"code"},
      {"value":"logs","label":"Logs","icon":"list"}
    ]'></poad-nav-drawer>
    <div class="demo-shell__content">
      <h3 id="shell-title">dashboard</h3>
      <code id="shell-out">value=dashboard</code>
      <p>Paragraph 1: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 2: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 3: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 4: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 5: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 6: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 7: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 8: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 9: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 10: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 11: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 12: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 13: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 14: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 15: only this area scrolls, the bars stay in place.</p>
      <p>Paragraph 16: only this area scrolls, the bars stay in place.</p>
    </div>
    <poad-bottom-nav slot="bottom" id="shell-bottom" value="dashboard" items='[
      {"value":"dashboard","label":"Home","icon":"layout-dashboard"},
      {"value":"fleet","label":"Fleet","icon":"folder","badge":3},
      {"value":"functions","label":"Functions","icon":"code"},
      {"value":"logs","label":"Logs","icon":"list"}
    ]'></poad-bottom-nav>
  </poad-app-shell>
</div>

<script type="module">
  const shell = document.querySelector('#shell');
  const nav = document.querySelector('#shell-nav');
  const bottom = document.querySelector('#shell-bottom');
  // le bouton « Menu » demande le menu à la coquille, sans connaître le tiroir
  document.querySelector('#shell-menu').addEventListener('click', (e) => e.currentTarget.closest('poad-app-shell').openNav());
  shell.addEventListener('navrequested', () => nav.show());
  const go = (value) => {
    nav.value = value;
    bottom.value = value;
    document.querySelector('#shell-title').textContent = value;
    document.querySelector('#shell-out').textContent = \`value=\${value}\`;
  };
  nav.addEventListener('change', (e) => go(e.detail));
  bottom.addEventListener('change', (e) => go(e.detail));
<\/script>
`;export{e as default};