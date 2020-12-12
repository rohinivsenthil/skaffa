<script>
  export let label = "";
  export let required = false;
  export let color = "#4791db";
  export let style = "";
  export let defaultValue;
  export let value;
  export let id;
  export let name;
  export let fullWidth = false;
  export let helperText;
  export let onChange;
  export let type = "text";
  export let multiline = false;
  export let rows = "1";
  export let error = false;
  export let inputProps = {};
  /**
   * TODO: add in following props
   * disabled
   * input props // fix css
   * placeholder //fix css
   * size
   * variant
   */

  const textfValue = `${value ? value : defaultValue ? defaultValue : ""}`;
  const textfGroupStyle = `--textf-color: ${color}; `;
  const textfGroupClass =
    "satin-textf-group " +
    `${fullWidth ? "satin-textf-group-full-width " : ""}`;
  const textfClass = "satin-textf " + `${error ? "satin-textf-error " : ""}`;
  const textfBarClass =
    "satin-textf-bar " + `${error ? "satin-textf-bar-error " : ""}`;
  const textfLabelClass =
    "satin-textf-label " + `${error ? "satin-textf-label-error " : ""}`;
  const textfHelperTextClass =
    "satin-textf-helper-text " +
    `${error ? "satin-textf-helper-text-error " : ""}`;
  label = `${required ? label + " *" : label}`;
</script>

<style>
  .satin-textf-group {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    vertical-align: top;
    min-width: 0;
    margin: 18px 8px 8px 8px;
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .satin-textf-group-full-width {
    width: 100%;
  }

  .satin-textf {
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

  .satin-textf-error {
    border-bottom: 1px solid #f44336;
  }

  .satin-textf:focus {
    outline: none;
  }

  .satin-textf-label {
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

  .satin-textf-label-error {
    color: #f44336;
  }

  .satin-textf:focus ~ .satin-textf-label,
  .satin-textf:valid ~ .satin-textf-label {
    top: -16px;
    font-size: 10px;
    color: var(--textf-color);
  }

  .satin-textf:not(:focus) ~ .satin-textf-label {
    color: rgba(0, 0, 0, 0.54);
  }

  .satin-textf:not(:focus) ~ .satin-textf-label-error {
    color: #f44336;
  }

  .satin-textf-error:focus ~ .satin-textf-label,
  .satin-textf-error:valid ~ .satin-textf-label {
    color: #f44336;
  }

  .satin-textf-bar {
    position: relative;
    display: block;
  }

  .satin-textf-bar:before,
  .satin-textf-bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0.5px;
    position: absolute;
    background: var(--textf-color);
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .satin-textf-bar-error:before,
  .satin-textf-bar-error:after {
    background: #f44336;
  }

  .satin-textf-bar:before {
    left: 50%;
  }

  .satin-textf-bar:after {
    right: 50%;
  }

  .satin-textf:focus ~ .satin-textf-bar:before,
  .satin-textf:focus ~ .satin-textf-bar:after {
    width: 50%;
  }

  .satin-textf-helper-text {
    margin-top: 5px;
    text-align: left;
    font-size: 10px;
    color: #757575;
  }

  .satin-textf-helper-text-error {
    color: #f44336;
  }
</style>

<div class={textfGroupClass} style={textfGroupStyle}>
  {#if !multiline}
    <input
      class={textfClass}
      {type}
      required
      on:input={onChange}
      value={textfValue}
      {...inputProps}
      {style}
      {id}
      {name} />
  {:else}
    <textarea
      class={textfClass}
      {type}
      {rows}
      {...inputProps}
      required
      on:input={onChange}
      value={textfValue}
      {id}
      {name} />
  {/if}
  <span class={textfBarClass} />
  {#if helperText}<span class={textfHelperTextClass}>{helperText}</span>{/if}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class={textfLabelClass}>{label}</label>
</div>
