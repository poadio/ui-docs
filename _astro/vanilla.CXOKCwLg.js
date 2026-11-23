var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<!-- display : le texte montré hors édition ; le contenu de l'élément est l'éditeur -->
<poad-inplace id="city" display="Paris" closable aria-label="Edit the city">
  <input class="poad-input" value="Paris" aria-label="City">
</poad-inplace>
<code id="city-out">city=Paris</code>

<script type="module">
  const inplace = document.querySelector('#city');
  inplace.addEventListener('input', (e) => {
    inplace.display = e.target.value;
    document.querySelector('#city-out').textContent = \`city=\${e.target.value}\`;
  });
<\/script>
`;export{e as default};