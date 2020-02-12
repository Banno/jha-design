# Form

## Blocks

| Class             | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `.label`          | Identifies information collected in a specific form field    |
| `.field`          | A simplified input                                           |
| `.form-control`   | Apply to a typical text input or text area to style with a background color instead of an underline |
| `.form-group`     | Groups together a `.label` and `.field`                      |
| `.floating-group` | Creates a more concise and fluid group of a `.label` and `.field` |
| `.control`        | Resets the display of the contained input, but keeps it focusable |
| `.switch`         | Creates a checkbox control styled to look like a toggle switch |

<!--TODO: Consider breaking each of these blocks into discrete components -->

## Elements

| Class                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `.control_indicator` | Displays the styled radio or checkbox control based on the `.control` modifiers |
| `.switch_checkbox`   | Positions the actual checkbox control off-screen to make it invisible to the user, but accessible to keyboards |
| `.switch_toggle`     | Adds the styled toggle control; must be placed after the `.switch_checkbox` element |

## Modifiers

| Class                | Description                              |
| -------------------- | ---------------------------------------- |
| `.control--checkbox` | Styles a control to look like a checkbox |
| `.control--radio`    | Styles a control to look like a radio    |

## States

| Class                       | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `.floating-group.has-value` | Use when a `.floating-group` input field doesn't have the required attribute to properly position the `.label`; if the input is required, `.has-value` is not needed |