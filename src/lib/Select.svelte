<script>
import options from './options'
import Field from './Field.svelte'
import ChevronExpandIcon from './icons/ChevronExpandIcon.svelte'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'

/** @type {string} */
export let name
/** @type {string|number} */
export let value = undefined
/** @type {string} */
export let placeholder = undefined
/** @type {string} */
export let label = undefined
/** @type {string} */
export let info = undefined
/** @type {boolean|string} */
export let error = undefined
/** @type {boolean} */
export let required = false
/** @type {boolean} */
export let readonly = false
/** @type {boolean} */
export let disabled = false
/** @type {string} */
export let size = undefined

let control
let invalid

// update validity
$: if (control && invalid) {
  control.value = value
  if (control.validity.valid) {
    invalid = false
  } else if (!control.validity.valid) {
    control.checkValidity()
  }
}

// events

function handleBlur({ target }) {
  // check validity
  target.checkValidity()
}

function handleInvalid({ target }) {
  invalid = target.validationMessage
}
</script>

<Field class={$$props.class} style={$$props.style} {label} {disabled} {size} {info} error={invalid || error} let:id>
  <select
    {id}
    class="suil-control"
    {name}
    {placeholder}
    {required}
    {readonly}
    {disabled}
    on:blur={handleBlur}
    on:invalid|preventDefault={handleInvalid}
    on:focus
    on:blur
    on:input
    on:change
    bind:value
    bind:this={control}
  >
    <slot />
  </select>
  <div class="suil-placeholder" />
  {#if readonly}
    <div class="suil-input-icon"><PencilSlashIcon /></div>
  {:else}
    <div class="suil-input-icon"><ChevronExpandIcon /></div>
  {/if}
</Field>

<style>
.suil-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  display: block;
  background-color: transparent;
  color: inherit;
  border: 0;
  border-radius: 0;
  padding: calc(var(--suil-size) - var(--suil-border-width));
  margin: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  text-align: left;
  outline: 0;
}

.suil-control:disabled {
  color: var(--suil-gray);
  opacity: 50%;
  cursor: not-allowed;
}

.suil-placeholder {
  box-sizing: border-box;
  flex: 1;
}

.suil-input-icon {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}
</style>
