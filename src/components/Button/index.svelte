<script>
  export let variant = "contained";
  export let onClick;
  export let disabled = false;
  export let fullWidth = false;
  export let disableElevation = false;
  export let disableRipple = false;
  export let style = "";
  export let size = "medium";
  export let color = "#4791db";
  export let href;
  /**
   * TODO: add in following props
   * icon
   */

  const btnStyle = `--btn-color: ${color}; ` + style;

  const btnClass =
    "skaffa-btn " +
    `skaffa-btn-${variant} ` +
    `skaffa-btn-${size} ` +
    `${fullWidth ? "skaffa-btn-full-width " : ""}` +
    `${disableElevation ? "skaffa-btn-disable-elevation " : ""}` +
    `${disableRipple ? "skaffa-btn-disable-ripple " : ""}`;
</script>

<style>
  .skaffa-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    border: none;
    border-radius: 4px;
    min-width: 64px;
    height: fit-content;
    margin: 8px;

    text-overflow: ellipsis;
    text-transform: uppercase;
    text-decoration: none;

    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;

    overflow: hidden;
    outline: none;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .skaffa-btn-small {
    padding: 4px 10px;
    font-size: 13px;
  }

  .skaffa-btn-medium {
    padding: 6px 16px;
    font-size: 14px;
  }

  .skaffa-btn-large {
    padding: 8px 22px;
    font-size: 15px;
  }

  .skaffa-btn-full-width {
    width: 100%;
  }

  .skaffa-btn-contained {
    color: rgb(255, 255, 255);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: var(--btn-color);
  }

  .skaffa-btn-outlined {
    border: 1px solid var(--btn-color);
    color: var(--btn-color);
    background-color: transparent;
  }

  .skaffa-btn-text {
    color: var(--btn-color);
    background-color: transparent;
  }

  /* Ripple */
  .skaffa-btn::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  .skaffa-btn-contained::after {
    background-color: rgb(255, 255, 255);
  }

  .skaffa-btn-outlined::after,
  .skaffa-btn-text::after {
    background-color: var(--btn-color);
  }

  .skaffa-btn-disable-ripple::after {
    padding: 0;
  }

  /* Hover, Focus */
  .skaffa-btn-contained:hover,
  .skaffa-btn-contained:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .skaffa-btn-contained:hover::before {
    opacity: 0.08;
  }

  .skaffa-btn-contained:focus::before {
    opacity: 0.24;
  }

  .skaffa-btn-contained:hover:focus::before {
    opacity: 0.3;
  }

  .skaffa-btn-outlined:hover::before,
  .skaffa-btn-text:hover::before {
    opacity: 0.04;
  }

  .skaffa-btn-outlined:focus::before,
  .skaffa-btn-text:focus::before {
    opacity: 0.12;
  }

  .skaffa-btn-outlined:hover:focus::before,
  .skaffa-btn-text:hover:focus::before {
    opacity: 0.16;
  }

  /* Active */
  .skaffa-btn-contained:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .skaffa-btn-contained:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  .skaffa-btn-outlined:active::after,
  .skaffa-btn-text:active::after {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  /* Disabled */
  .skaffa-btn:disabled::before {
    opacity: 0;
  }

  .skaffa-btn:disabled::after {
    opacity: 0;
  }

  .skaffa-btn-contained:disabled {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: initial;
  }

  .skaffa-btn-outlined:disabled {
    color: rgba(0, 0, 0, 0.38);
    border: 1px solid rgba(0, 0, 0, 0.38);
    background-color: transparent;
    cursor: initial;
  }

  .skaffa-btn-text:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: transparent;
    cursor: initial;
  }

  .skaffa-btn-disable-elevation:not(:disabled) {
    box-shadow: none;
  }

  .skaffa-btn-disable-elevation:hover:not(:disabled) {
    box-shadow: none;
  }
</style>

<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet" />

{#if href && !disabled}
  <a
    {href}
    class={btnClass}
    style={btnStyle}
    {disabled}
    on:click={onClick}><slot /></a>
{:else}
  <button
    class={btnClass}
    style={btnStyle}
    {disabled}
    on:click={onClick}
    type="button">
    <slot />
  </button>
{/if}
