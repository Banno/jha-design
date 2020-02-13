# Table

## Blocks

`.table`

## Elements

| Class               | Requirement | Description                                                  |
| ------------------- | ----------- | ------------------------------------------------------------ |
| `.table-responsive` | Optional    | Allows for horizontal panning of a table without disrupting other layout elements |
| `.table-row`        | Optional    | Allows for row styling through a series of modifiers         |

<!--TODO: Can we rename .table-row to .table_row to follow our BEM conventions? -->

<!--TODO: Can we rename .table-responsive to .table_responsive to follow our BEM conventions? -->

## Modifiers

| Class                        | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `.table--sm`                 | Reduces the padding on table cells for a tighter display of information |
| `.table--bordered`           | Adds vertical dividers between table cells                   |
| `.table--align-left`         | Resets the left padding on the first cell in each row to align the content to the same left edge that other content types use |
| `.table--stacked`            | Converts columns into rows with headings derived from the `data-label` attribute to make viewing better suited for smaller screens; heading is stacked on top of the cell value |
| `.table--stacked-horizontal` | Converts columns into rows with headings derived from the `data-label` attribute to make viewing better suited for smaller screens; heading and cell value appear on the same horizontal line |
| `.table-row--standout`       | Visually emphasizes the contents of a row's cells            |
| `.table-row--muted`          | Visually de-emphasizes the contents of a row's cells         |

