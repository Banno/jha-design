# Card

## Block

`.card`

## Elements

| Class             | Requirement | Description                                                  |
| ----------------- | ----------- | ------------------------------------------------------------ |
| `.card_header`    | Required    | Adds the card header                                         |
| `.card_title`     | Required    | Adds a title element within the card header                  |
| `.card_sub-title` | Optional    | Adds a subtitle element within the card header               |
| `.card_media`     | Optional    | Adds a prominent image to the card; may be placed either above or below the `card_header` |
| `.card_content`   | Required    | Adds the card content                                        |
| `.card_empty`     | Optional    | Displays a short message when there is no data to display within the card |
| `.card_footer`    | Optional    | Adds the card footer                                         |

## Modifiers

| Class                       | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `.card--wide`               | Removes the `max-width` constraint so a card can display the full width of a page |
| `.card--reset`              | Removes the card appearance on mobile-sized viewports, but has no effect on larger ones |
| `.card--summary`            | Styles the card to be smaller with left-aligned text and `card_media` positioned to the left of `card_content`, if present |
| `.card_header--borderless`  | Removes the bottom border of the card header                 |
| `.card_content--sm`         | Decreases the top and bottom padding                         |
| `.card_content--no-spacing` | Removes the top and bottom padding                           |
| `.card_content--border`     | Adds a border to the top of the element                      |
| `.card_footer--borderless`  | Removes the top border of the card footer                    |

## States

| Class                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `.progress-circular` | Include inside of `card_content` when waiting on an AJAX response |
| `.error-loading`     | Include inside of `card_content` when there is a network error and you are unable to display card content |

