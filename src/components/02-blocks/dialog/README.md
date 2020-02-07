# Dialog

## Elements

| Element    | Class             | Required | Description |
| ---------- | ----------------- | -------- | ----------- |
| `backdrop` | `dialog_backdrop` | Yes      |             |
| `inner`    | `dialog_inner`    | Yes      |             |
| `header`   | `dialog_header`   | Yes      |             |
| `content`  | `dialog_content`  | Yes      |             |
| `footer`   | `dialog_footer`   | No       |             |

## Modifiers

| Class                        | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `dialog_backdrop--fill`      | The fill modifier gives the backdrop a background color and image while resetting the opacity to 100%. |
| `dialog_backdrop--opaque`    | The opaque modifer shifts the background color to the body background color and resets the opacity to 100%. |
| `dialog--center@xs`          |                                                              |
| `dialog--center@sm`          |                                                              |
| `dialog--center@md`          |                                                              |
| `dialog--center@lg`          |                                                              |
| `dialog_inner--lg`           | The dialog_inner--lg size modifier class will increase the maximum width of the dialog allowing. |
| `dialog_inner--sm`           |                                                              |
| `dialog_header--borderless`  | The borderless modifier removes the bottom border of the default element. |
| `dialog_header--profile`     | Dialog headers can be modified to display profile information with the profile modifier. |
| `dialog_content--no-padding` | The no-padding modifier class will remove all built-in padding on the dialog_content element. |

## States

| State        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `is-visible` | The visibility state class will update the opacity to make the element visible. |

## Slots

| Slot          | Description |
| ------------- | ----------- |
| `contentSlot` |             |
| `footerSlot`  |             |

