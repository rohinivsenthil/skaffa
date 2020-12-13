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
  export let onChange;
  export let type = "text";
  export let multiline = false;
  export let rows = "1";
  export let error = false;
  export let inputProps = {};
  export let placeholder = " ";
  export let disabled = false;
  export let variant = "standard";
  /**
   * TODO: add in following props
   * placeholder //fix css
   * size
   * variant - outlined
   * helperText
   */

  const textfComponent = `${multiline ? "textarea" : "input"}`;
  const textfValue = `${value ? value : defaultValue ? defaultValue : ""}`;
  label = `${required ? label + " *" : label}`;
  const textfStyle = `--textfield-color: ${color}; `;
  const textfClass =
    `skaffa-textfield ` + `${fullWidth ? "skaffa-textfield-full-width " : ""}`;
  const textfInputClass =
    `skaffa-textfield-${textfComponent} ` +
    `skaffa-textfield-${variant}-${textfComponent} ` +
    `${error ? `skaffa-textfield-${textfComponent}-error ` : ""}`;
  const textfLabelClass =
    `skaffa-textfield-label ` +
    `skaffa-textfield-${variant}-label ` +
    `${error ? `skaffa-textfield-label-error ` : ""}`;
</script>

<style>
  .skaffa-textfield {
    position: relative;
    display: inline-block;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.02857em;
    overflow: hidden;
    margin: 8px;
  }

  .skaffa-textfield-full-width {
    width: 100%;
  }

  /* Input, Textarea */
  .skaffa-textfield-input,
  .skaffa-textfield-textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
    height: inherit;
    color: rgba(0, 0, 0, 0.87);
    height: inherit;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: border-bottom 0.2s, background-color 0.2s;
  }

  .skaffa-textfield-standard-input,
  .skaffa-textfield-standard-textarea {
    padding: 0 0 4px;
    width: 100%;
    background-color: transparent;
  }

  .skaffa-textfield-filled-input,
  .skaffa-textfield-filled-textarea {
    border-radius: 4px 4px 0 0;
    padding: 0 12px 10px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .skaffa-textfield-input-error,
  .skaffa-textfield-textarea-error {
    border-bottom: solid 1px rgba(244, 67, 54, 0.6);
  }

  /* Label */
  .skaffa-textfield-input + .skaffa-textfield-label,
  .skaffa-textfield-textarea + .skaffa-textfield-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    text-align: start;
    color: rgba(0, 0, 0, 0.6);
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  .skaffa-textfield-standard-input + .skaffa-textfield-standard-label,
  .skaffa-textfield-standard-textarea + .skaffa-textfield-standard-label {
    padding: 7px 0 0;
  }

  .skaffa-textfield-filled-input + .skaffa-textfield-filled-label,
  .skaffa-textfield-filled-textarea + .skaffa-textfield-filled-label {
    padding: 7px 12px 0;
  }

  .skaffa-textfield-input-error + .skaffa-textfield-label-error,
  .skaffa-textfield-textarea-error + .skaffa-textfield-label-error {
    color: #f44336;
  }

  /* Underline */
  .skaffa-textfield-input + .skaffa-textfield-label::after,
  .skaffa-textfield-textarea + .skaffa-textfield-label::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--textfield-color);
    transform-origin: bottom center;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  .skaffa-textfield-input-error + .skaffa-textfield-label-error::after,
  .skaffa-textfield-textarea-error + .skaffa-textfield-label-error::after {
    background-color: #f44336;
  }

  /* Hover */
  .skaffa-textfield-input:hover,
  .skaffa-textfield-textarea:hover {
    border-bottom-color: rgba(0, 0, 0);
  }

  .skaffa-textfield-filled-input:hover,
  .skaffa-textfield-filled-textarea:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .skaffa-textfield-input-error:hover,
  .skaffa-textfield-textarea-error:hover {
    border-bottom-color: #f44336;
  }

  /* Placeholder-shown */
  .skaffa-textfield-input:not(:focus):placeholder-shown
    + .skaffa-textfield-label,
  .skaffa-textfield-textarea:not(:focus):placeholder-shown
    + .skaffa-textfield-label {
    font-size: inherit;
    line-height: 56px;
  }

  .skaffa-textfield-standard-input::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }

  /* Focus */
  .skaffa-textfield-input:focus,
  .skaffa-textfield-textarea:focus {
    outline: none;
  }

  .skaffa-textfield-input:focus + .skaffa-textfield-label,
  .skaffa-textfield-textarea:focus + .skaffa-textfield-label {
    color: var(--textfield-color);
  }

  .skaffa-textfield-input-error:focus + .skaffa-textfield-label-error,
  .skaffa-textfield-textarea-error:focus + .skaffa-textfield-label-error {
    color: #f44336;
  }

  .skaffa-textfield-input:focus + .skaffa-textfield-label::before,
  .skaffa-textfield-textarea:focus + .skaffa-textfield-label::before {
    opacity: 0.12;
  }

  .skaffa-textfield-input:focus + .skaffa-textfield-label::after,
  .skaffa-textfield-textarea:focus + .skaffa-textfield-label::after {
    transform: scale(1);
  }

  /* Disabled */
  .skaffa-textfield-input:disabled,
  .skaffa-textfield-textarea:disabled {
    border-bottom-color: rgba(0, 0, 0, 0.38);
    color: rgba(0, 0, 0, 0.38);
  }

  .skaffa-textfield-input:disabled + .skaffa-textfield-label,
  .skaffa-textfield-textarea:disabled + .skaffa-textfield-label {
    color: rgba(0, 0, 0, 0.38);
  }

  /* Disabled */
  .skaffa-textfield-filled-input:disabled,
  .skaffa-textfield-filled-textarea:disabled {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .skaffa-textfield-input,
      .skaffa-textfield-input + .skaffa-textfield-label,
      .skaffa-textfield-input + .skaffa-textfield-label::after,
      .skaffa-textfield-textarea,
      .skaffa-textfield-textarea + .skaffa-textfield-label,
      .skaffa-textfield-textarea + .skaffa-textfield-label::after {
        transition-duration: 0.1s;
      }
    }
  }
</style>

<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet" />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={textfClass} style={textfStyle}>
  {#if !multiline}
    <input
      class={textfInputClass}
      {placeholder}
      {required}
      {type}
      {disabled}
      on:input={onChange}
      value={textfValue}
      {...inputProps}
      {style}
      {id}
      {name} />
  {:else}
    <textarea
      class={textfInputClass}
      {placeholder}
      {required}
      {type}
      {rows}
      {disabled}
      on:input={onChange}
      value={textfValue}
      {...inputProps}
      {style}
      {id}
      {name} />
  {/if}
  <span class={textfLabelClass}>{label}</span>
</label>
