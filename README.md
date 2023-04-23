# ichabod

headless react components

## eject

building your own custom component when you've previously depended on a library
is daunting because you need to first rebuild the component to the _library's_
specification so it's compatible with your pre-existing app, and _then_ you need
to customize it, which was supposed to be the hard part. this is where eject
comes in. eject will copy and paste the particular component into a dir of your
choice. The following command will write _this library's_ version of the
component to _your repo_ so you can begin in a place that you know works.

`npx eject button src/components`

you can also easily return to this libs components if you no longer want to
customize. the goal is to make this lib easy to use/disuse/reuse on a
per-component basis.

## headless components are fundamentally incomplete

styles are important to the semantic meaning of a component. a lot of components
can be expressed as

`<div className={}>{children}</div>`

This can be a sidebar, a popover panel, a card, a page, etc. the point is:
style, form, and function all affect behavior. the point of the previous point
is: style matters, and headless components have none, and so are incomplete.
luckily, you can "complete me" with classnames.

if tailwindcss is your preference, i will be creating a theme-based generator.
i will link to it when it exists.
