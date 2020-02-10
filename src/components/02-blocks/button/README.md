# Button

## Elements

| Name           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `btn_content`  | `btn_content` is intended to hold the text and/or icons of the button so that the opacity can be set to `0` when the button `is-loading`. |
| `btn_progress` | `btn_progress` should contain the progress indicator which will be made visible when the `btn_content` element is not. |

## Modifiers

| Class           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `.btn--default` | A button that requires no special attention and doesn't stick out particularly much, `btn--default` is your go-to choice for a non-critical action. |
| `.btn--neutral` | This button is meant to be used in proximity to dark search fields. |
| `.btn--link`    | `btn--link` removes the border and background color which makes the button appear more as a link but keeps consistent sizing with other buttons. |
| `.btn--primary` | This button is for the primary action in a view. `btn--primary` has a background color that matches the primary color variable. |
| `.btn--success` | For positive actions like adding a new page or inviting a new user, use `btn--success`. |
| `.btn--danger`  | For potentially dangerous actions like confirming the deletion of an asset or deauthorizing a user's devices, use `btn--danger`. |
| `.btn--toggle`  | This is a special snowflake, it has a modified background, text size, and weight. |
| `.btn--default-outline` ||
| `.btn--primary-outline` ||
| `.btn--success-outline` ||
| `.btn--danger-outline`  ||
| `btn--sm` |Use `btn--sm` within page content when the button doesn't need to stand out from the text as much or when it looks too large.|
| `btn--lg` |Use `btn--lg` in takeovers where there is one primary action and an option to dismiss the takeover.|
| `btn--wide` |`btn--wide` is useful when you want the primary button to take up a bit more space in case it contains a short word or phrase.|
| `btn--block` |`btn--block` transforms a button to `display: block` to take up an entire line. When two block buttons are created together the second has a `margin-top` value added to separate the two.|
| `btn--align-left` ||
| `btn--align-right` ||
| `ban--icon` |To create a button that is perfectly sized for an icon, use the `.btn--icon` modifier.|
| `ban--link` ||

## States

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `is-active`   |                                                              |
| `is-disabled` |                                                              |
| `is-loading`  | The `is-loading` state for buttons gives feedback to the user that their button press is doing *something*. |
