var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-slider name="volume" value="40" step="5" show-value="always" aria-label="Volume"></poad-slider>
  <poad-slider id="price" name="price" value="[20,60]" range label="Price"
    marks='[0,50,{"value":100,"label":"Max"}]'></poad-slider>
</div>
<code id="price-out">price=20,60</code>

<script type="module">
  const price = document.querySelector('#price');
  price.formatValue = (v) => \`\${v} €\`;
  // input : pendant le geste ; change : au relâchement
  price.addEventListener('change', (e) => {
    document.querySelector('#price-out').textContent = \`price=\${e.detail}\`;
  });
<\/script>
`;export{e as default};