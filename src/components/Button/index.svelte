<script>
  import { hexToRgb } from "../../utils/hexToRgb";
  export let variant = "contained";
  export let onClick;
  export let disabled = false;
  export let fullWidth = false;
  export let disableElevation = false;
  export let style = "";
  export let size = "medium";
  export let color = "#4791db";
  /**
   * TODO: add in following props
   */
  // href
  // ripple effect

  const rgbCode = hexToRgb(color);
  const btnStyle = `--btn-color: ${rgbCode}; ` + style;

  const btnClass =
    "spunk-btn " +
    `spunk-btn-${variant} ` +
    `spunk-btn-${size} ` +
    `${fullWidth ? "spunk-btn-full-width " : ""}` +
    `${disableElevation ? "spunk-btn-disable-elevation " : ""}`;
</script>

<style>
  .spunk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    vertical-align: middle;

    min-width: 64px;
    border: none;
    border-radius: 4px;
    margin: 8px;

    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.75;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .spunk-btn-small {
    padding: 4px 10px;
    font-size: 13px;
  }

  .spunk-btn-medium {
    padding: 6px 16px;
    font-size: 14px;
  }

  .spunk-btn-large {
    padding: 8px 22px;
    font-size: 15px;
  }

  .spunk-btn:disabled {
    color: rgba(0, 0, 0, 0.26);
  }

  .spunk-btn:hover {
    cursor: pointer;
  }

  .spunk-btn-contained {
    background-color: rgb(var(--btn-color));
    color: rgb(255, 255, 255);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .spunk-btn-contained:hover:not(:disabled) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    filter: brightness(110%);
  }

  .spunk-btn-contained:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .spunk-btn-outlined {
    background-color: transparent;
    border: 1px solid rgb(var(--btn-color));
    color: rgb(var(--btn-color));
  }

  .spunk-btn-outlined:disabled {
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .spunk-btn-text {
    background-color: transparent;
    color: rgb(var(--btn-color));
  }

  .spunk-btn-text:hover:not(:disabled) {
    background-color: rgba(var(--btn-color), 0.05);
  }

  .spunk-btn-full-width {
    width: 100%;
  }

  .spunk-btn-disable-elevation:not(:disabled) {
    box-shadow: none;
  }

  .spunk-btn-disable-elevation:hover:not(:disabled) {
    box-shadow: none;
  }
</style>

<button
  class={btnClass}
  on:click={onClick}
  {disabled}
  type="button"
  style={btnStyle}>
  <slot />
</button>
