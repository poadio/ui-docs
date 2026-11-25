var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div id="notes" class="demo-scroller" tabindex="0" aria-label="Release notes"></div>
<poad-scroll-top target="#notes" threshold="100"></poad-scroll-top>

<script type="module">
  document.querySelector('#notes').append(
    ...Array.from({ length: 30 }, (_, i) => Object.assign(document.createElement('p'), { textContent: \`Release 1.\${30 - i} — fixes and improvements.\` })),
  );
<\/script>
`;export{e as default};