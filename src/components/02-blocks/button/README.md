# Button

## Block

`.btn`

## Elements

| Class           | Requirement | Description                                                  |
| --------------- | ----------- | ------------------------------------------------------------ |
| `.btn_content`  | Optional    | Holds the text and/or icons of the button so that the opacity can be set to `0` when the button `is-loading` |
| `.btn_progress` | Optional    | Contains the progress indicator which will be made visible when the `btn_content` element is not |

## Modifiers

| Class           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `.btn--default` | Styles the button outline with a neutral color |
| `.btn--neutral` | Styles the button background with the neutral color |
| `.btn--link`    | Removes all of the base button styles making it look like a text link |
| `.btn--primary` | Styles the button background with the primary color |
| `.btn--success` | Styles the button background with the success color |
| `.btn--danger`  | Styles the button background with the danger color |
| `.btn--toggle`  | This is a special snowflake, it has a modified background, text size, and weight. |
| `.btn--default-outline` ||
| `.btn--primary-outline` ||
| `.btn--success-outline` ||
| `.btn--danger-outline`  ||
| `.btn--sm` |Sizes button to the small variable|
| `.btn--lg` |Sizes button to the large variable|
| `.btn--wide` |`btn--wide` is useful when you want the primary button to take up a bit more space in case it contains a short word or phrase.|
| `.btn--block` |`btn--block` transforms a button to `display: block` to take up an entire line. When two block buttons are created together the second has a `margin-top` value added to separate the two.|
| `.btn--align-left` ||
| `.btn--align-right` ||
| `.btn--icon` |To create a button that is perfectly sized for an icon, use the `.btn--icon` modifier.|

## States

| Class          | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `.is-active`   |                                                              |
| `.is-disabled` |                                                              |
| `.is-loading`  | The `is-loading` state for buttons gives feedback to the user that their button press is doing *something*. |

<!--TODO: Add descriptions -->