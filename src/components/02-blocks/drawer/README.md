# Drawer

## Block

`.drawer`

## Elements

| Class              | Requirement | Description                                                  |
| ------------------ | ----------- | ------------------------------------------------------------ |
| `.drawer_backdrop` | Required    | Adds a childless element when a drawer is opened and destroyed when the drawer is closed; its opacity is set to `0` by default to allow for fading in and out; should be dynamically created as a child of the `body` element to prevent unexpected results |
| `.drawer_inner`    | Required    | Creates the actual `.drawer` container                       |
| `.drawer_header`   | Required    | Adds a header area immediately above `.drawer_content`       |
| `.drawer_title`    | Required    | Adds title content that succinctly describes the purpose of the drawer; include within `.drawer_header` |
| `.drawer_close`    | Required    | Adds a `button ` to close the drawer; include within `.drawer_header` |
| `.drawer_content`  | Required    | Holds the main content of the drawer                         |
| `.drawer_footer`   | Optional    | Adds a footer area immediately below `.drawer_content`; the footer is fixed to the bottom of the `.drawer` so that its contents are always visible, even if the .`drawer_content` takes up a tremendous amount of space |

## Modifiers

| Class                  | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `.drawer_inner--left`  | Docks the `.drawer` to the left side of the viewport         |
| `.drawer_inner--right` | Docks the `.drawer` to the right side of the viewport        |
| `.drawer_inner--sm`    | Sizes the `.drawer` to a modest width within the viewport    |
| `.drawer_inner--lg`    | Sizes the `.drawer` to a width that takes up a majority of the viewport |

## States

| Class                         | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| `.drawer_backdrop.is-visible` | Updates the opacity to make the `.drawer_backdrop` element visible; the base element has a `transition` declaration that allows for animating the opacity |
| `.drawer.is-visible`          | Transitions `visibility`, `opacity`, and `transform` properties to fade and move the drawer in to view |
| `.has-drawer`                 | Can be applied to the `body` element to disallow scrolling; only add this class when a `.drawer` is present and remove it when one is not |

## Helpers

| Class              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `.fluid-container` | Use inside of `.drawer_header` to provide consistent spacing on the left and right of the `.drawer` |
