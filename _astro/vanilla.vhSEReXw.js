var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-wide">
  <poad-paginator id="pager" total-records="137" rows="10" rows-per-page-options="[10, 25, 50]" show-first-last-icon></poad-paginator>
</div>
<code id="paginator-out">first=0 rows=10</code>

<script type="module">
  document.querySelector('#pager').addEventListener('pagechange', (e) => {
    document.querySelector('#paginator-out').textContent = \`first=\${e.detail.first} rows=\${e.detail.rows}\`;
  });
<\/script>
`;export{e as default};