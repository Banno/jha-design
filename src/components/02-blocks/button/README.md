# Button

Buttons have the most options of any other components to allow for different colors, shapes and sizes.

Your basic button can be contructed like so:

```html
{{render '@button--default'}}
```

or

```html
{{render '@button--link'}}
```

## Modifiers

### Color

| Modifier Class  | Description                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.btn--default` | A button that requires no special attention and doesn't stick out particularly much, `btn--default` is your go-to choice for a non-critical action. |
| `.btn--neutral` | This button is meant to be used in proximity to dark search fields.                                                                                 |
| `.btn--link`    | `btn--link` removes the border and background color which makes the button appear more as a link but keeps consistent sizing with other buttons.    |
| `.btn--primary` | This button is for the primary action in a view. `btn--primary` has a background color that matches the primary color variable.                     |
| `.btn--success` | For positive actions like adding a new page or inviting a new user, use `btn--success`.                                                             |
| `.btn--danger`  | For potentially dangerous actions like confirming the deletion of an asset or deauthorizing a user's devices, use `btn--danger`.                    |
| `.btn--toggle`  | This is a special snowflake, it has a modified background, text size, and weight.                                                                   |

### Outline

| Modifier Class          |
| ----------------------- |
| `.btn--default-outline` |
| `.btn--primary-outline` |
| `.btn--success-outline` |
| `.btn--danger-outline`  |

### Size

There are a few size modifiers:

- `btn--sm`
- `btn--lg`
- `btn--wide`

Use `btn--sm` within page content when the button doesn't need to stand out from the text as much or when it looks too large.

Use `btn--lg` in takeovers where there is one primary action and an option to dismiss the takeover.

`btn--wide` is useful when you want the primary button to take up a bit more space in case it contains a short word or phrase.

**Important:** Don't use different sized buttons together. When in doubt, stick with the default sized button.

### Block

`btn--block` transforms a button to `display: block` to take up an entire line. When two block buttons are created together the second has a `margin-top` value added to separate the two.

Block buttons best used in narrower UIs, like in takeovers.

### Alignment

These two alignment modifiers will modify the margins of a button to align the text the button contains obvious visual edges.

- `btn--align-left`
- `btn--align-right`

Notice how the above button is pulled to the left a bit? This is most useful in `page-header` layout elements when a button is left or right aligned.

### Icons

To create a button that is perfectly sized for an icon, use the `.btn--icon` modifier. This creates a circular button shape. Use the `btn--link` color modifier in most situations.

**Important:** Don't use icons and text together in buttons. For screen reader support you should add a title to the SVG icon or use the `u-sr-only` utility class on a span inside of the button element.

## States

Buttons have three available state classes:

- `is-active`
- `is-disabled`
- `is-loading`

These class names are intended to be toggled with JavaScript. They change the appearance of the button slightly. Note that adding `is-disabled` doesn't actually disable the button, you'll still need the `disabled` attribute.

## Loading

The `is-loading` state for buttons gives feedback to the user that their button press is doing _something_. Along with that state are a couple of elements that belong to buttons.

- `btn_content`
- `btn_progress`

`btn_content` is intended to hold the text and/or icons of the button so that the opacity can be set to `0` when the button `is-loading`.

`btn_progress` should contain the progress indicator which will be made visible when the `btn_content` element is not.

```html
<button class="btn btn--default is-loading">
  <span class="btn_content">Default Button</span>

  <div class="btn_progress">
    <div class="progress-circular progress-circular--sm"></div>
  </div>
</button>
```
