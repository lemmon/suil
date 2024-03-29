<script>
import options from './options'

/** @type {string} */
export let type = undefined
/** @type {string} */
export let href = undefined
/** @type {string} */
export let target = undefined
/** @type {string} */
export let rel = undefined
/** @type {string|boolean} */
export let autofocus = undefined
/** @type {string} */
export let color = 'primary'
/** @type {string} */
export let kind = undefined
/** @type {boolean | "hover"} */
export let ul = options.buttonUnderline
/** @type {boolean} */
export let min = false
/** @type {string} */
export let justify = undefined
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let disabled = false
/** @type {boolean} */
export let loading = false
</script>

<!-- svelte-ignore a11y-autofocus -->
{#if !href}
  <button
    {type}
    {autofocus}
    disabled={disabled || loading}
    class="suil-button {$$props.class || ''}"
    class:suil-button--loading={loading}
    class:suil-button--primary={color === 'primary'}
    class:suil-button--secondary={color === 'secondary'}
    class:suil-button--danger={color === 'danger'}
    class:suil-button--outlined={kind === 'outlined'}
    class:suil-button--ghost={kind === 'ghost'}
    class:suil-button--minimal={min}
    class:suil-button--ul={ul === true}
    class:suil-button--ul:hover={ul === 'hover'}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    style={$$props.style}
    on:click
    on:hover
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="suil-button__label" style:justify-content={justify}><slot /></span>
    {#if loading}
      <span class="suil-button__loader" />
    {/if}
  </button>
{:else if !disabled}
  <a
    {href}
    {target}
    {rel}
    {autofocus}
    class="suil-button {$$props.class || ''}"
    class:suil-button--disabled={disabled === true}
    class:suil-button--primary={color === 'primary'}
    class:suil-button--secondary={color === 'secondary'}
    class:suil-button--danger={color === 'danger'}
    class:suil-button--outlined={kind === 'outlined'}
    class:suil-button--ghost={kind === 'ghost'}
    class:suil-button--minimal={min}
    class:suil-button--ul={ul === true}
    class:suil-button--ul:hover={ul === 'hover'}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    style={$$props.style}
    on:click
    on:hover
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <span class="suil-button__label" style:justify-content={justify}><slot /></span>
  </a>
{:else}
  <span
    {autofocus}
    class="suil-button suil-button--disabled {$$props.class || ''}"
    class:suil-button--primary={color === 'primary'}
    class:suil-button--secondary={color === 'secondary'}
    class:suil-button--danger={color === 'danger'}
    class:suil-button--outlined={kind === 'outlined'}
    class:suil-button--ghost={kind === 'ghost'}
    class:suil-button--minimal={min}
    class:suil-button--ul={ul === true}
    class:suil-button--ul:hover={ul === 'hover'}
    class:suil-xs={size === 'xs'}
    class:suil-sm={size === 'sm'}
    class:suil-md={size === 'md'}
    class:suil-lg={size === 'lg'}
    class:suil-xl={size === 'xl'}
    style={$$props.style}
  >
    <span class="suil-button__label" style:justify-content={justify}><slot /></span>
  </span>
{/if}

<style>
.suil-button {
  --suil-color: currentColor;
  --suil-label: var(--suil-button-label);
  box-sizing: border-box;
  display: block;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  border: var(--suil-border-width) solid transparent;
  border-radius: var(--suil-border-radius);
  overflow: clip;
  width: initial;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: var(--suil-font-weight);
  line-height: var(--suil-line-height);
  text-decoration: none;
  text-align: left;
  background-color: var(--suil-color);
  color: inherit;
  transition: initial;
  min-width: var(--suil-button-width);
  cursor: pointer;
  outline: 0;
}

.suil-button__label {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: var(--suil-button-justify);
  align-items: center;
  gap: var(--suil-button-gap);
  min-width: var(--suil-line-height);
  color: var(--suil-label);
}

.suil-button--primary {
  --suil-color: var(--suil-color-primary);
}

.suil-button--secondary {
  --suil-color: var(--suil-color-secondary);
}

.suil-button--danger {
  --suil-color: var(--suil-color-danger);
}

.suil-button--outlined:not(:hover, :focus),
.suil-button--outlined:is(:disabled, .suil-button--disabled) {
  --suil-label: var(--suil-color);
  background-color: transparent;
  border-color: var(--suil-color);
}

.suil-button--ghost {
  --suil-label: var(--suil-color);
  background-color: transparent;
}

.suil-button--minimal {
  min-width: auto;
}

.suil-button--ul:not(:disabled, .suil-button--disabled) .suil-button__label,
.suil-button--ul\:hover:hover:not(:disabled, .suil-button--disabled) .suil-button__label {
  text-decoration: var(--suil-underline);
}

.suil-button:focus:not(:disabled, .suil-button--disabled) {
  outline: var(--suil-outline-width) solid var(--suil-outline-color);
  outline-offset: var(--suil-outline-offset);
  border-color: var(--suil-focus-color, var(--suil-color));
}

.suil-button:focus:not(:disabled, .suil-button--disabled, .suil-button--ghost) {
  box-shadow: inset 0 0 0 var(--suil-focus-inset-width) var(--suil-bg);
}

.suil-button:is(:disabled, .suil-button--disabled):not(
    .suil-button--outlined,
    .suil-button--ghost,
    .suil-button--loading
  )
  .suil-button__label {
  color: var(--suil-text);
  opacity: 50%;
}

.suil-button:is(:disabled, .suil-button--disabled):not(.suil-button--loading) {
  --suil-color: var(--suil-gray);
  opacity: 50%;
  cursor: not-allowed;
}

.suil-button--loading {
  cursor: progress;
}

.suil-button--loading .suil-button__label {
  visibility: hidden;
}

.suil-button--loading .suil-button__loader {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.suil-button--loading .suil-button__loader::before {
  content: '';
  box-sizing: border-box;
  display: block;
  width: var(--suil-loader-size);
  height: var(--suil-loader-size);
  border-width: var(--suil-loader-width);
  border-style: solid;
  border-color: var(--suil-label) var(--suil-label) transparent transparent;
  border-radius: 100%;
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateZ(-360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
</style>
