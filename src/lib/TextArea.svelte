<script>
import options from './options'
import Field from './Field.svelte'
import PencilSlashIcon from './icons/PencilSlashIcon.svelte'

/** @type {string} */
export let type = 'text'
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
/** @type {number} */
export let minlength = undefined
/** @type {number} */
export let maxlength = undefined
/** @type {boolean} */
export let required = false
/** @type {boolean} */
export let readonly = false
/** @type {boolean} */
export let disabled = false
/** @type {number} */
export let minlines = 3
/** @type {string} */
export let size = undefined
/** @type {boolean} */
export let nullable = options.nullable
/** @type {boolean} */
export let trim = options.trim

let control
let invalid

// update validity
$: if (control && invalid) {
  control.value = value || ''
  if (control.validity.valid) {
    invalid = false
  } else if (!control.validity.valid) {
    control.checkValidity()
  }
}

// events

function handleInput({ target }) {
  value = target.value || (nullable ? null : target.value)
}

function handleBlur({ target }) {
  // sanitize value
  const origValue = target.value
  if (trim) target.value = target.value.trim()
  if (nullable && !target.value) target.value = null
  if (value !== origValue) {
    target.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  // check validity
  target.checkValidity()
}

function handleInvalid({ target }) {
  invalid = target.validationMessage
}
</script>

<Field class={$$props.class} style={$$props.style} {label} {disabled} {size} {info} error={invalid || error} let:id>
  <div class="suil-textarea" style="--suil-min-lines: {minlines};">
    <div class="suil-textarea__preview">{value || ''}.</div>
    <textarea
      {id}
      class="suil-control"
      {type}
      {name}
      {placeholder}
      {minlength}
      {maxlength}
      {required}
      {readonly}
      {disabled}
      value={value || ''}
      on:input={handleInput}
      on:blur={handleBlur}
      on:invalid|preventDefault={handleInvalid}
      on:focus
      on:blur
      on:input
      on:change
    />
  </div>
  {#if readonly}
    <div class="suil-input-icon"><PencilSlashIcon /></div>
  {/if}
</Field>

<style>
.suil-textarea {
  flex: 1;
  position: relative;
  min-height: calc(var(--suil-min-lines) * var(--suil-line-height) + 2 * (var(--suil-size) - var(--suil-border-width)));
}

.suil-textarea__preview,
.suil-control {
  padding: calc(var(--suil-size) - var(--suil-border-width));
  margin: 0;
  width: 100%;
  font-family: var(--suil-font-family);
  font-size: var(--suil-font-size);
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: var(--suil-line-height);
  text-align: left;
}

.suil-textarea__preview {
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: normal;
  visibility: hidden;
}

.suil-control {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  box-sizing: border-box;
  display: block;
  background-color: transparent;
  color: inherit;
  border: 0;
  border-radius: 0;
  resize: none;
  outline: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
}

.suil-control:disabled {
  color: var(--suil-gray);
  opacity: 50%;
  cursor: not-allowed;
}

.suil-input-icon {
  padding: calc(var(--suil-size) - var(--suil-border-width));
}
</style>
