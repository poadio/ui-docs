var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-row">
  <poad-avatar text="Ada Lovelace"></poad-avatar>
  <poad-avatar text="Alan Turing" size="lg"></poad-avatar>
  <poad-avatar text="Grace Hopper" size="sm" shape="square"></poad-avatar>
  <poad-avatar text="LT" color="#2f6feb" label="Linus Torvalds"></poad-avatar>
  <poad-avatar icon="user" label="Guest"></poad-avatar>
  <poad-avatar id="photo" label="Margaret Hamilton" size="lg"></poad-avatar>
</div>

<script type="module">
  // Any image URL; a data URL keeps the example self-contained.
  document.querySelector('#photo').src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23a5b4fc"/%3E%3Ccircle cx="20" cy="16" r="7" fill="%23eef2ff"/%3E%3Cpath d="M6 40c2-9 8-13 14-13s12 4 14 13z" fill="%23eef2ff"/%3E%3C/svg%3E';
<\/script>
`;export{e as default};