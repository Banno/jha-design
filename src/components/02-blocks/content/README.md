# Content

## Block

`.content`

## Elements

| Class              | Requirement | Description                                                  |
| ------------------ | ----------- | ------------------------------------------------------------ |
| `.content_push`    | Required    | Applies a `margin-left` which can be adjusted with modifier classes |
| `.content_heading` | Optional    | Includes a left-aligned thumbnail or avatar along with a title of the content section |
| `.content_pull`    | Optional    | Applies a `margin` based on the viewport size which can be adjusted with modifier classes; used in conjunction with `content_push` |

## Modifiers

| Class               | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `.content_push--xs` | Adds `margin-left` that corresponds to the size and spacing of `thumbnail--xs` and `avatar--xs` |
| `.content_push--sm` | Adds `margin-left` that corresponds to the size and spacing of `thumbnail--sm` and `avatar--sm` |
| `.content_push--md` | Adds `margin-left` that corresponds to the size and spacing of `thumbnail--md` and `avatar--md` |
| `.content_push--lg` | Adds `margin-left` that corresponds to the size and spacing of `thumbnail--lg` and `avatar--lg` |
| `.content_push--xl` | Adds `margin-left` that corresponds to the size and spacing of `thumbnail--xl` and `avatar--xl` |
| `.content_pull@xs`  | Removes `margin-left` at the `xs` breakpoint                 |
| `.content_pull@sm`  | Removes `margin-left` at the `sm` breakpoint                 |
| `.content_pull@md`  | Removes `margin-left` at the `md` breakpoint                 |
| `.content_pull@lg`  | Removes `margin-left` at the `lg` breakpoint                 |

## Utilities

| Class           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `.u-float-left` | Add to `.thumbnail` or `.avatar` element to position `.content_push` to the right and eliminate text wrap |
