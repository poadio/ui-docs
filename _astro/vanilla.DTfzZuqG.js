var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-field id="email-field" label="Email" hint="We never share it" required>
    <input id="email" type="email" name="email" placeholder="ada@example.org" required>
  </poad-field>
  <poad-field label="Project name" optional>
    <input name="project">
  </poad-field>
  <poad-field label="API key" hint="Read-only" disabled>
    <input value="pk_live_1234" disabled>
  </poad-field>
</div>
<code id="email-out">email=</code>

<script type="module">
  const field = document.querySelector('#email-field');
  document.querySelector('#email').addEventListener('input', (e) => {
    const email = e.target.value;
    field.error = email && !email.includes('@') ? 'Not an email address' : '';
    document.querySelector('#email-out').textContent = \`email=\${email}\`;
  });
<\/script>
`;export{e as default};