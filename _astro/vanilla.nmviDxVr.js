var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-button-group id="range" selectable="single" value='"week"' aria-label="Range">
  <button value="day">Day</button>
  <button value="week">Week</button>
  <button value="month">Month</button>
</poad-button-group>
<poad-button-group id="styles" selectable="multiple" value='["bold"]' look="attached" size="sm" aria-label="Text style">
  <button value="bold">Bold</button>
  <button value="italic">Italic</button>
  <button value="underline">Underline</button>
</poad-button-group>
<poad-button-group look="attached" aria-label="History">
  <button data-severity="secondary">Undo</button>
  <button data-severity="secondary">Redo</button>
</poad-button-group>
<code id="group-out">range=week · styles=bold</code>

<script type="module">
  const range = document.querySelector('#range');
  const styles = document.querySelector('#styles');
  const show = () => {
    document.querySelector('#group-out').textContent = \`range=\${range.value} · styles=\${styles.value}\`;
  };
  range.addEventListener('change', show);
  styles.addEventListener('change', show);
<\/script>
`;export{e as default};