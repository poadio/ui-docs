var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-number id="timeout" name="timeout" value="1234.5" min="0" max="2000" step="10" suffix=" ms" show-buttons aria-label="Timeout"></poad-number>
  <poad-number id="price" name="price" value="19.9" decimals="2" prefix-text="€ " aria-label="Price"></poad-number>
  <poad-number value="8080" aria-label="Port" disabled></poad-number>
</div>
<code id="number-out">timeout=1234.5 · price=19.9</code>

<script type="module">
  const timeout = document.querySelector('#timeout');
  const price = document.querySelector('#price');
  const show = () => {
    document.querySelector('#number-out').textContent = \`timeout=\${timeout.value} · price=\${price.value}\`;
  };
  timeout.addEventListener('change', show);
  price.addEventListener('change', show);
<\/script>
`;export{e as default};