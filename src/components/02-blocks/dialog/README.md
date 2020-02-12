# Dialog

## Block 

`.dialog`

## Elements

| Class              | Requirement | Description                                                  |
| ------------------ | ----------- | ------------------------------------------------------------ |
| `.dialog_backdrop` | Required    | Adds a childless element when a dialog is opened and is destroyed when the dialog is closed; its opacity is set to `0` by default to allow for fading in and out; should be dynamically created as a child of the `body` element to prevent unexpected results |
| `.dialog_inner`    | Required    | Creates the actual `.dialog` container                       |
| `.dialog_header`   | Required    | Adds a header area immediately above `.dialog_content`       |
| `.dialog_title`    | Required    | Adds title content that succinctly describes the purpose of the dialog; include within `.dialog_header` |
| `.dialog_close`    | Required    | Adds a `button ` to close the dialog; include within `.dialog_header` |
| `.dialog_content`  | Required    | Holds the main content of the dialog                         |
| `.dialog_footer`   | Optional    | Adds a footer area immediately below `.dialog_content`       |

## Modifiers

| Class                         | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| `.dialog_backdrop--fill`      | Styles the `.dialog_backdrop` with a `background-color` and an image while resetting the `opacity` to 100%. |
| `.dialog_backdrop--opaque`    | Styles the `body` background color and resets the `opacity` to 100%. |
| `.dialog--center@xs`          | Centers the `.dialog` vertically on any viewport size        |
| `.dialog--center@sm`          | Centers the `.dialog` vertically on viewport sizes `sm` and larger |
| `.dialog--center@md`          | Centers the `.dialog` vertically on viewport sizes `md` and larger |
| `.dialog--center@lg`          | Centers the `.dialog` vertically on viewport sizes `lg` and larger |
| `.dialog_inner--lg`           | Increases the maximum width of the dialog                    |
| `.dialog_inner--sm`           | Retains the dialog styling on small viewports                |
| `.dialog_header--borderless`  | Removes the bottom border                                    |
| `.dialog_header--profile`     | Display profile information within `.dialog_header`          |
| `.dialog_content--no-padding` | Removes all built-in padding on the `.dialog_content`element |

## States

| Class                         | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| `.dialog_backdrop.is-visible` | Updates the opacity to make the `.dialog_backdrop` element visible |
| `.dialog.is-visible`          | Transitions `visibility`, `opacity`, and `transform` properties to fade and move the dialog in to view |
| `.has-dialog`                 | Can be applied to the `body` element to disallow scrolling; only add this class when a `.dialog` is present and remove it when one is not |
