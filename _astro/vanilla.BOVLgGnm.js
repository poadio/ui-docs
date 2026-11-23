var e=`<script type="module">import '@poadio/ui-elements/define';<\/script>

<div class="demo-col" style="width: min(100%, 480px)">
  <poad-meter unit="Gi" show-remaining aria-label="Disk"
    values='[{"label":"Database","value":42,"severity":"primary"},{"label":"Storage","value":18.5,"severity":"info"},{"label":"Logs","value":6,"severity":"warning"}]'></poad-meter>
  <poad-meter unit="%" size="sm" aria-label="CPU" values='[{"label":"CPU","value":72,"severity":"warning"}]'></poad-meter>
</div>
`;export{e as default};