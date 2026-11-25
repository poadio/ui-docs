var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-dataview id="structures" data-key="id" layout="grid" show-layout-switch paginator rows="6" sort-field="name" grid-cols="1 sm:2 lg:3">
    <b slot="header">Structures</b>
  </poad-dataview>
</div>
<code id="dataview-out">layout=grid · first=0</code>

<script type="module">
  const view = document.querySelector('#structures');
  view.value = [
    { id: 1, name: 'Pont de Sèvres', city: 'Boulogne', state: 'Good' }, { id: 2, name: 'Viaduc de Meudon', city: 'Meudon', state: 'Watch' },
    { id: 3, name: 'Passerelle Rive Sud', city: 'Lyon', state: 'Good' }, { id: 4, name: 'Pont Anne-de-Bretagne', city: 'Nantes', state: 'Good' },
    { id: 5, name: 'Écluse de Suresnes', city: 'Suresnes', state: 'Watch' }, { id: 6, name: 'Pont de Normandie', city: 'Le Havre', state: 'Good' },
    { id: 7, name: 'Viaduc de Millau', city: 'Millau', state: 'Good' },
  ];
  const content = (b, cls) => {
    const box = Object.assign(document.createElement('div'), { className: cls });
    const tag = Object.assign(document.createElement('poad-tag'), { value: b.state, severity: b.state === 'Good' ? 'success' : 'warning', size: 'sm' });
    box.append(Object.assign(document.createElement('b'), { textContent: b.name }), Object.assign(document.createElement('span'), { textContent: b.city }), tag);
    return box;
  };
  view.renderList = ({ item }) => content(item, 'demo-row');
  view.renderGrid = ({ item }) => content(item, 'demo-card');
  const show = () => { document.querySelector('#dataview-out').textContent = \`layout=\${view.layout} · first=\${view.first ?? 0}\`; };
  view.addEventListener('layoutchange', show);
  view.addEventListener('pagechange', show);
<\/script>
`;export{e as default};