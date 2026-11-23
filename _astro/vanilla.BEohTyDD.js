var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col">
  <poad-field label="Quantity" hint="Integers only (int)">
    <poad-key-filter filter="int"><input name="quantity"></poad-key-filter>
  </poad-field>
  <poad-field label="Colour" hint="Hexadecimal (hex)">
    <poad-key-filter filter="hex"><input name="colour" style="font-family: var(--poad-font-mono)"></poad-key-filter>
  </poad-field>
  <poad-field label="Code" hint="Letters and digits (alphanum)">
    <poad-key-filter filter="alphanum"><input name="code"></poad-key-filter>
  </poad-field>
</div>
`;export{e as default};