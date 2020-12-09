<script>
  export let label = "";
  export let required = false;

  label = `${required ? label + " *" : label}`;
</script>

<style>
  .spunk-textf-group {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    vertical-align: top;
    min-width: 0;
    margin: 8px;
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .spunk-textf {
    display: block;
    position: relative;
    box-sizing: border-box;

    width: 100%;
    margin: 0;
    padding: 0px 2px 10px 0px;
    border: none;
    border-bottom: 1px solid #757575;

    color: rgba(0, 0, 0);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.15px;
    cursor: text;
  }

  .spunk-textf:focus {
    outline: none;
  }

  .spunk-textf-label {
    position: absolute;
    pointer-events: none;
    padding: 0;
    left: 0;
    top: 0;

    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.15px;

    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .spunk-textf:focus ~ .spunk-textf-label,
  .spunk-textf:valid ~ .spunk-textf-label {
    top: -20px;
    font-size: 10px;
    color: #4285f4;
  }

  .spunk-textf-bar {
    position: relative;
    display: block;
  }

  .spunk-textf-bar:before,
  .spunk-textf-bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0.5px;
    position: absolute;
    background: #4285f4;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .spunk-textf-bar:before {
    left: 50%;
  }

  .spunk-textf-bar:after {
    right: 50%;
  }

  .spunk-textf:focus ~ .spunk-textf-bar:before,
  .spunk-textf:focus ~ .spunk-textf-bar:after {
    width: 50%;
  }
</style>

<div class="spunk-textf-group">
  <input class="spunk-textf" type="text" required />
  <span class="spunk-textf-bar" />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="spunk-textf-label">{label}</label>
</div>
