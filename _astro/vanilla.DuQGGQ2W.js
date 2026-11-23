var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-rating id="score" name="score" value="3.5" allow-half show-value></poad-rating>
<div class="demo-row">
  <poad-rating value="4" readonly size="sm" aria-label="Average rating"></poad-rating>
  <poad-rating value="2" icon="heart" severity="danger" max="3" aria-label="Likes"></poad-rating>
</div>
<code id="score-out">score=3.5</code>

<script type="module">
  document.querySelector('#score').addEventListener('change', (e) => {
    document.querySelector('#score-out').textContent = \`score=\${e.detail}\`;
  });
<\/script>
`;export{e as default};