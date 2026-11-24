var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-stepper id="deploy" active-index="1" aria-label="Deployment">
  <poad-step label="Domain" description="DNS records" completed><p>The domain points to the cluster.</p></poad-step>
  <poad-step label="Certificate" optional><p>A certificate is issued on first request.</p></poad-step>
  <poad-step label="Go live"><p>Traffic is switched to the new version.</p></poad-step>
</poad-stepper>
<code id="stepper-out">step=1</code>

<script type="module">
  const deploy = document.querySelector('#deploy');
  deploy.addEventListener('change', (e) => {
    document.querySelector('#stepper-out').textContent = \`step=\${e.detail}\`;
  });
<\/script>
`;export{e as default};