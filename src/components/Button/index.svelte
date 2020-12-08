<script>
  export let variant = 'contained';
  export let onClick;
  export let disabled = false;
  /**
   * TODO: add in following props
   */
  // export let disableElevation = 'false';
  // export let fullWidth = 'false';
  // export let size = 'medium';
  // export let color = 'primary'

  const btnClass = 'spunk-btn ' + `spunk-btn-${variant}`;
</script>

<button 
  class={btnClass}
  on:click={onClick}
  disabled={disabled}
  type="button"
>
  <slot></slot>
</button>

<style>
  .spunk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    vertical-align: middle;

    min-width: 64px;
    padding: 6px 16px 6px 16px;
    border: none;
    border-radius: 4px;
    margin: 8px;

    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;;
    font-size: 14px;
    line-height: 1.75;
    font-weight: 400;
    color: white;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .spunk-btn:disabled {
    color: rgba(0, 0, 0, 0.26);
  }

  .spunk-btn:hover {
    cursor: pointer;
  }

  .spunk-btn-contained {
    background-color: rgb(var(--primary));
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  }

  .spunk-btn-contained:hover:not(:disabled) {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12);
    filter: brightness(120%);
  }

  .spunk-btn-contained:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .spunk-btn-outlined {
    background-color: transparent;
    border: 1px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }

  .spunk-btn-outlined:disabled {
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .spunk-btn-text {
    background-color: transparent;
    color: rgb(var(--primary));
  }

  .spunk-btn-text:hover:not(:disabled)  {
    background-color: rgba(var(--primary), 0.05);
  }
</style>

