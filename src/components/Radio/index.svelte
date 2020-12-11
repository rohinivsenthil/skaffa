<script>
  export let name;
  export let id;
  export let label;
  export let disabled = false;
  export let onChange;
  export let color = "#4791db";
  export let inputProps = {};
  export let required = false;
  export let checked;
  export let value;
  /**
   * TODO: add in following props
   * size
   * disable ripple
   * icon
   * style
   */

  const radioStyle = `--radio-color: ${color}; `;
</script>

<style>
  .snowflake-radio {
    z-index: 0;
    position: relative;
    display: inline-block;
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  /* Input */
  .snowflake-radio-input {
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
    background-color: var(--radio-color);
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
  }

  /* Label */
  .snowflake-radio-label {
    display: inline-block;
    width: 100%;
    cursor: pointer;
  }

  /* Circle */
  .snowflake-radio-label::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 2px 8px 2px 0;
    border: solid 2px;
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s;
  }

  /* Check */
  .snowflake-radio-label::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: var(--radio-color);
    transform: translate(5px, 5px) scale(0);
    transition: transform 0.2s;
  }

  /* Checked */
  .snowflake-radio-input:checked {
    background-color: var(--radio-color);
  }

  .snowflake-radio-input:checked + .snowflake-radio-label::before {
    border-color: var(--radio-color);
  }

  .snowflake-radio-input:checked + .snowflake-radio-label::after {
    transform: translate(5px, 5px) scale(1);
  }

  /* Hover, Focus */
  .snowflake-radio:hover > .snowflake-radio-input {
    opacity: 0.04;
  }

  .snowflake-radio-input:focus {
    opacity: 0.12;
  }

  .snowflake-radio:hover > .snowflake-radio-input:focus {
    opacity: 0.16;
  }

  /* Active */
  .snowflake-radio-input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  .snowflake-radio-input:active + .snowflake-radio-label::before {
    border-color: var(--radio-color);
  }

  /* Disabled */
  .snowflake-radio > .snowflake-radio-input:disabled {
    opacity: 0;
  }

  .snowflake-radio-input:disabled + .snowflake-radio-label {
    color: rgba(0, 0, 0, 0.38);
    cursor: initial;
  }

  .snowflake-radio-input:disabled + .snowflake-radio-label::before {
    border-color: currentColor;
  }

  .snowflake-radio-input:disabled + .snowflake-radio-label::after {
    background-color: currentColor;
  }
</style>

<label class="snowflake-radio" style={radioStyle}>
  <input
    class="snowflake-radio-input"
    type="radio"
    {name}
    {disabled}
    {id}
    {checked}
    on:change={onChange}
    {required}
    {value}
    {...inputProps} />
  <span class="snowflake-radio-label">{label}</span>
</label>
