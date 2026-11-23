var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <div style="width: 240px">
    <poad-select id="runtime" name="runtime" placeholder="Runtime" aria-label="Runtime" filter clearable
      option-label="name" option-value="id" value="3"
      options='[{"id":1,"name":"Serverless"},{"id":2,"name":"Node / Bun","disabled":true},{"id":3,"name":"Spring Boot"},{"id":4,"name":"Python"}]'></poad-select>
  </div>
  <div style="width: 120px">
    <poad-select id="size" name="size" aria-label="Size" size="sm" value="M" options='["S","M","L","XL"]'></poad-select>
  </div>
  <div style="width: 120px">
    <poad-select aria-label="Disabled" value="M" options='["S","M","L","XL"]' disabled></poad-select>
  </div>
</div>
<code id="select-out">runtime=3 · size=M</code>

<script type="module">
  const runtime = document.querySelector('#runtime');
  const size = document.querySelector('#size');
  const show = () => {
    document.querySelector('#select-out').textContent = \`runtime=\${runtime.value} · size=\${size.value}\`;
  };
  runtime.addEventListener('change', show);
  size.addEventListener('change', show);
<\/script>
`;export{e as default};