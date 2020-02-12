# Dropdown

## Block

`.dropdown`

## Elements

| Class                    | Requirement | Description                                                  |
| ------------------------ | ----------- | ------------------------------------------------------------ |
| `.dropdown_toggle`       | Required    | Applies `.dropdown` -specific styles to a button or control element |
| `.dropdown_menu`         | Required    | Contains menu items or other content; add as a sibling to `.dropdown_toggle` |
| `.dropdown_menu_title`   | Optional    | Adds a title element within the `.dropdown_menu`             |
| `.dropdown_menu_item`    | Optional    | Adds a menu item within the `.dropdown_menu`                 |
| `.dropdown_menu_divider` | Optional    | Adds a divider element within the `.dropdown_menu` to group similar items |

## Modifiers

| Class                         | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| `.dropdown_toggle--indicator` | Creates an arrow pseudo-element that is aligned to the center of the control element |
| `.dropdown_menu--center`      | Centers a menu to its toggle control                         |
| `.dropdown_menu--padding`     | Adds a padding value on all side of the menu; useful for displaying content other than `.dropdown_menu_items` inside of your menu |

## States

| Class               | Description                   |
| ------------------- | ----------------------------- |
| `.dropdown.is-open` | Makes the `.dropdown` visible |

