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
   * variant
   * helperText
   */

  const textfComponent = `${multiline ? "textarea" : "input"}`;
  const textfValue = `${value ? value : defaultValue ? defaultValue : ""}`;
  label = `${required ? label + " *" : label}`;
  const textfStyle = `--textfield-color: ${color}; `;
  const textfClass =
    `skaffa-textfield-${variant} ` +
    `${fullWidth ? "skaffa-textfield-full-width " : ""}`;
  const textfInputClass =
    `skaffa-textfield-${variant}-${textfComponent} ` +
    `${error ? `skaffa-textfield-${variant}-${textfComponent}-error ` : ""}`;
  const textfLabelClass =
    `skaffa-textfield-${variant}-label ` +
    `${error ? `skaffa-textfield-${variant}-label-error ` : ""}`;
</script>

<style>
  .skaffa-textfield-standard {
    position: relative;
    display: inline-block;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    overflow: hidden;
  }

  .skaffa-textfield-full-width {
    width: 100%;
  }

  /* Input, Textarea */
  .skaffa-textfield-standard-input,
  .skaffa-textfield-standard-textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
    padding: 0 0 4px;
    width: 100%;
    height: inherit;
    color: rgba(0, 0, 0, 0.87);
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: border-bottom 0.2s, background-color 0.2s;
  }

  .skaffa-textfield-standard-input-error,
  .skaffa-textfield-standard-textarea-error {
    border-bottom: solid 1px rgba(244, 67, 54, 0.6);
  }

  /* Label */
  .skaffa-textfield-standard-input + .skaffa-textfield-standard-label,
  .skaffa-textfield-standard-textarea + .skaffa-textfield-standard-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    padding: 7px 0 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
    text-align: start;
  }

  .skaffa-textfield-standard-input-error
    + .skaffa-textfield-standard-label-error,
  .skaffa-textfield-standard-textarea-error
    + .skaffa-textfield-standard-label-erro {
    color: #f44336;
  }

  /* Underline */
  .skaffa-textfield-standard-input + .skaffa-textfield-standard-label::after,
  .skaffa-textfield-standard-textarea
    + .skaffa-textfield-standard-label::after {
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

  .skaffa-textfield-standard-input-error
    + .skaffa-textfield-standard-label-error::after,
  .skaffa-textfield-standard-textarea-error
    + .skaffa-textfield-standard-label-error::after {
    background-color: #f44336;
  }

  /* Hover */
  .skaffa-textfield-standard-input:hover,
  .skaffa-textfield-standard-textarea:hover {
    border-bottom-color: rgba(0, 0, 0);
  }

  .skaffa-textfield-standard-input-error:hover,
  .skaffa-textfield-standard-textarea-error:hover {
    border-bottom-color: #f44336;
  }

  /* Placeholder-shown */
  .skaffa-textfield-standard-input:not(:focus):placeholder-shown
    + .skaffa-textfield-standard-label,
  .skaffa-textfield-standard-textarea:not(:focus):placeholder-shown
    + .skaffa-textfield-standard-label {
    font-size: inherit;
    line-height: 56px;
  }

  .skaffa-textfield-standard-input::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }

  /* Focus */
  .skaffa-textfield-standard-input:focus,
  .skaffa-textfield-standard-textarea:focus {
    outline: none;
  }

  .skaffa-textfield-standard-input:focus + .skaffa-textfield-standard-label,
  .skaffa-textfield-standard-textarea:focus + .skaffa-textfield-standard-label {
    color: var(--textfield-color);
  }

  .skaffa-textfield-standard-input-error:focus
    + .skaffa-textfield-standard-label-error,
  .skaffa-textfield-standard-textarea-error:focus
    + .skaffa-textfield-standard-label-error {
    color: #f44336;
  }

  .skaffa-textfield-standard-input:focus
    + .skaffa-textfield-standard-label::before,
  .skaffa-textfield-standard-textarea:focus
    + .skaffa-textfield-standard-label::before {
    opacity: 0.12;
  }

  .skaffa-textfield-standard-input:focus
    + .skaffa-textfield-standard-label::after,
  .skaffa-textfield-standard-textarea:focus
    + .skaffa-textfield-standard-label::after {
    transform: scale(1);
  }

  /* Disabled */
  .skaffa-textfield-standard-input:disabled,
  .skaffa-textfield-standard-textarea:disabled {
    border-bottom-color: rgba(0, 0, 0, 0.38);
    color: rgba(0, 0, 0, 0.38);
  }

  .skaffa-textfield-standard-input:disabled + .skaffa-textfield-standard-label,
  .skaffa-textfield-standard-textarea:disabled
    + .skaffa-textfield-standard-label {
    color: rgba(0, 0, 0, 0.38);
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .skaffa-textfield-standard-input,
      .skaffa-textfield-standard-input + .skaffa-textfield-standard-label,
      .skaffa-textfield-standard-input
        + .skaffa-textfield-standard-label::after,
      .skaffa-textfield-standard-textarea,
      .skaffa-textfield-standard-textarea + .skaffa-textfield-standard-label,
      .skaffa-textfield-standard-textarea
        + .skaffa-textfield-standard-label::after {
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
