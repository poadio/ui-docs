var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col demo-wide">
  <poad-if when="md+">
    <div class="demo-panel">
      <strong>Desktop layout</strong>
      <p>From md (768 px) up: navigation in a side rail.</p>
    </div>
    <div class="demo-panel" slot="fallback">
      <strong>Mobile layout</strong>
      <p>Below md: navigation in a bottom bar.</p>
    </div>
  </poad-if>
</div>
<code id="breakpoint-out">current=? mobile=?</code>

<script type="module">
  import { watchBreakpoint } from '@poadio/ui-elements';
  watchBreakpoint((bp) => {
    document.querySelector('#breakpoint-out').textContent = \`current=\${bp.current} mobile=\${bp.isMobile}\`;
  });
<\/script>
`;export{e as default};