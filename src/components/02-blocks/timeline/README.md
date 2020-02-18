# Timeline

## Block

`.timeline`

## Elements

| Class                   | Requirement | Description                                                  |
| ----------------------- | ----------- | ------------------------------------------------------------ |
| `.timeline_item`        | Required    | Groups all activity for a specific day                       |
| `.timeline_item_date`   | Required    | Contains the specific day on the timeline                    |
| `.timeline_group`       | Required    | Groups each `.timeline_item_dot` with its respective `.timeline_item_group` |
| `.timeline_item_dot`    | Optional    | Creates a small circle next to the date object to show a new grouping of events; use for generic events |
| `.timeline_item_type`   | Optional    | Creates a circle larger than that of `.timeline_item_dot` next to the date object; contains an icon to represent a change based on a certain type |
| `.timeline_item_group`  | Optional    | Contains each `.activity_item`                               |
| `.activity_item`        | Required    | Contains the `.activity_item_time`, `.activity_item_desc`, and `.activity_item_action` of a specific event |
| `.activity_item_time`   | Required    | Contains the event time                                      |
| `.activity_item_desc`   | Required    | Contains the event description                               |
| `.activity_item_action` | Optional    | Contains an action associated with the event                 |

<!--TODO: Confirm requirement of each element -->