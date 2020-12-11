<script>
  export let name;
  export let id;
  export let label;
  export let indeterminate = false;
  export let disabled = false;
  export let checked;
  export let onChange;
  export let color = "#4791db";
  export let inputProps = {};
  export let required = false;
  export let value;
  /**
   * TODO: add in following props
   * size
   * disable ripple
   * icon
   * style
   */

  const checkboxStyle = `--checkbox-color: ${color}; `;
</script>

<style>
  .snowflake-checkbox {
    z-index: 0;
    position: relative;
    display: inline-block;
    color: rgba(0, 0, 0, 0.87);
    margin-left: -11px;
    margin-right: 16px;
  }

  /* Input */
  .snowflake-checkbox-input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
  }

  /* Span */
  .snowflake-checkbox-label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  /* Box */
  .snowflake-checkbox-label::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 8px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  /* Checkmark */
  .snowflake-checkbox-label::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  /* Checked, Indeterminate */
  .snowflake-checkbox-input:checked,
  .snowflake-checkbox-input:indeterminate {
    background-color: var(--checkbox-color);
  }

  .snowflake-checkbox-input:checked + .snowflake-checkbox-label::before,
  .snowflake-checkbox-input:indeterminate + .snowflake-checkbox-label::before {
    border-color: var(--checkbox-color);
    background-color: var(--checkbox-color);
  }

  .snowflake-checkbox-input:checked + .snowflake-checkbox-label::after,
  .snowflake-checkbox-input:indeterminate + .snowflake-checkbox-label::after {
    border-color: rgb(255, 255, 255);
  }

  .snowflake-checkbox-input:indeterminate + .snowflake-checkbox-label::after {
    border-left: none;
    transform: translate(4px, 3px);
  }

  /* Hover, Focus */
  .snowflake-checkbox:hover > .snowflake-checkbox-input {
    opacity: 0.04;
  }

  .snowflake-checkbox-input:focus {
    opacity: 0.12;
  }

  .snowflake-checkbox:hover > .snowflake-checkbox-input:focus {
    opacity: 0.16;
  }

  /* Active */
  .snowflake-checkbox-input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  .snowflake-checkbox-input:active + .snowflake-checkbox-label::before {
    border-color: var(--checkbox-color);
  }

  .snowflake-checkbox-input:checked:active + .snowflake-checkbox-label::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.6);
  }

  /* Disabled */
  .snowflake-checkbox > .snowflake-checkbox-input:disabled {
    opacity: 0;
  }

  .snowflake-checkbox-input:disabled + .snowflake-checkbox-label {
    color: rgba(0, 0, 0, 0.38);
    cursor: initial;
  }

  .snowflake-checkbox-input:disabled + .snowflake-checkbox-label::before {
    border-color: currentColor;
  }

  .snowflake-checkbox-input:checked:disabled
    + .snowflake-checkbox-label::before,
  .snowflake-checkbox-input:indeterminate:disabled
    + .snowflake-checkbox-label::before {
    border-color: transparent;
    background-color: currentColor;
  }
</style>

<label class="snowflake-checkbox" style={checkboxStyle}>
  <input
    type="checkbox"
    class="snowflake-checkbox-input"
    {disabled}
    {checked}
    {name}
    {id}
    {...inputProps}
    {required}
    {value}
    on:change={onChange}
    {indeterminate} />
  <span class="snowflake-checkbox-label">{label}</span>
</label>
