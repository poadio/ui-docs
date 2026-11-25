var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<poad-upload id="docs" class="demo-upload" multiple accept="image/*,.pdf" max-file-size="1048576" max-files="3" custom-upload
  hint="PNG, JPG or PDF · 1 MB max · 3 files"></poad-upload>
<form id="attach">
  <poad-upload mode="basic" name="attachment" select-only choose-label="Attach a file"></poad-upload>
</form>
<code id="upload-out">uploaded= · attached=</code>

<script type="module">
  const out = { uploaded: '', attached: '' };
  const show = () => { document.querySelector('#upload-out').textContent = \`uploaded=\${out.uploaded} · attached=\${out.attached}\`; };
  // envoi simulé, sans réseau : la progression avance par quarts, puis le fichier est « envoyé »
  document.querySelector('#docs').addEventListener('uploadrequest', ({ detail: { files, progress, done } }) => {
    files.forEach((_, i) => {
      let pct = 0;
      const timer = setInterval(() => {
        pct += 25;
        if (pct < 100) progress(i, pct);
        else { clearInterval(timer); done(i, true); }
      }, 200);
    });
  });
  document.querySelector('#docs').addEventListener('uploaded', ({ detail }) => { out.uploaded = detail.file.name; show(); });
  // le fichier choisi part avec le formulaire (name="attachment") : new FormData(form).get('attachment')
  document.querySelector('#attach poad-upload').addEventListener('fileselect', ({ detail }) => { out.attached = detail[0]?.name ?? ''; show(); });
<\/script>
`;export{e as default};