<script>
  export let variant = "body1";
  export let gutterBottom = false;
  export let style = "";
  export let display;
  export let align;
  export let color = "#000000";

  const typographyStyle =
    `--typography-color: ${color}; --typography-display: ${display}; --typography-align: ${align};` +
    style;

  const typographyClass =
    "snowflake-typography " +
    `snowflake-typography-${variant} ` +
    `${gutterBottom ? "snowflake-typography-gutter-bottom " : ""}` +
    `${align ? `snowflake-typography-align ` : ""}` +
    `${display ? `snowflake-typography-display ` : ""}`;
</script>

<style>
  .snowflake-typography {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: var(--typography-color);
  }

  .snowflake-typography-h1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }

  .snowflake-typography-h2 {
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }

  .snowflake-typography-h3 {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.167;
    letter-spacing: 0em;
  }

  .snowflake-typography-h4 {
    font-size: 2.125rem;
    font-weight: 400;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }

  .snowflake-typography-h5 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  .snowflake-typography-h6 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }

  .snowflake-typography-subtitle1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }

  .snowflake-typography-subtitle2 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
    letter-spacing: 0.00714em;
  }

  .snowflake-typography-body1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  .snowflake-typography-body2 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }

  .snowflake-typography-caption {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  }

  .snowflake-typography-button {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
  }

  .snowflake-typography-overline {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
  }

  .snowflake-typography-gutter-bottom {
    margin-bottom: 0.35em;
  }

  .snowflake-typography-display {
    display: var(--typography-display);
  }

  .snowflake-typography-align {
    text-align: var(--typography-align);
  }
</style>

{#if variant == 'h1'}
  <h1 class={typographyClass} style={typographyStyle}>
    <slot />
  </h1>
{:else if variant == 'h2'}
  <h2 class={typographyClass} style={typographyStyle}>
    <slot />
  </h2>
{:else if variant == 'h3'}
  <h3 class={typographyClass} style={typographyStyle}>
    <slot />
  </h3>
{:else if variant == 'h4'}
  <h4 class={typographyClass} style={typographyStyle}>
    <slot />
  </h4>
{:else if variant == 'h5'}
  <h5 class={typographyClass} style={typographyStyle}>
    <slot />
  </h5>
{:else if variant == 'h6' || variant == 'subtitle1' || variant == 'subtitle2'}
  <h6 class={typographyClass} style={typographyStyle}>
    <slot />
  </h6>
{:else if variant == 'body1' || variant == 'body2'}
  <p class={typographyClass} style={typographyStyle}>
    <slot />
  </p>
{:else if variant == 'caption' || variant == 'button' || variant == 'overline'}
  <span class={typographyClass} style={typographyStyle}>
    <slot />
  </span>
{/if}
