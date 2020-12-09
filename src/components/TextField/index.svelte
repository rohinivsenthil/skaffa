<script>
  import { hexToRgb } from "../../utils/hexToRgb";
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
  /**
   * TODO: add in following props
   * disabled
   * error
   * input props
   * input style
   * wrapper style
   * multiline
   * placeholder
   * rows
   * size
   * variant
   */

  const rgbCode = hexToRgb(color);
  const textfValue = `${value ? value : defaultValue ? defaultValue : ""}`;
  const textfStyle = `--textf-color: ${rgbCode}; ` + style;
  const textfGroupClass =
    "spunk-textf-group " +
    `${fullWidth ? "spunk-textf-group-full-width " : ""}`;
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

  .spunk-textf-group-full-width {
    width: 100%;
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
    color: rgb(var(--textf-color));
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
    background: rgb(var(--textf-color));
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

  .spunk-textf-helper-text {
    margin-top: 5px;
    text-align: left;
    font-size: 10px;
    color: #757575;
  }
</style>

<div class={textfGroupClass} style={textfStyle}>
  <input
    class="spunk-textf"
    {type}
    required
    on:input={onChange}
    value={textfValue}
    {id}
    {name} />
  <span class="spunk-textf-bar" />
  {#if helperText}<span class="spunk-textf-helper-text">{helperText}</span>{/if}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="spunk-textf-label">{label}</label>
</div>
