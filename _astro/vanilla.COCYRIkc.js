var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-carousel id="projects" num-visible="1 sm:2 lg:3" circular autoplay="6000" aria-label="Projects"></poad-carousel>
</div>
<code id="carousel-out">page=0</code>

<script type="module">
  const carousel = document.querySelector('#projects');
  carousel.items = [
    { name: 'fleet-manager', stack: 'Angular · PostgreSQL' }, { name: 'bridge-survey', stack: 'React · PostGIS' }, { name: 'open-data', stack: 'Vue · S3' },
    { name: 'road-works', stack: 'Angular · Redis' }, { name: 'tram-lines', stack: 'Svelte · Kafka' },
  ];
  carousel.renderItem = (p) => {
    const card = Object.assign(document.createElement('div'), { className: 'demo-slide' });
    card.append(Object.assign(document.createElement('strong'), { textContent: p.name }), Object.assign(document.createElement('span'), { textContent: p.stack }));
    return card;
  };
  carousel.addEventListener('pagechange', (e) => { document.querySelector('#carousel-out').textContent = \`page=\${e.detail}\`; });
<\/script>
`;export{e as default};