# ember-basic-dropdown-hover

This is an addon for ember-basic-dropdown that implements a nicer API to open
and close it on `mouseEnter/mouseLeave`.

## Installation

* `ember install ember-basic-dropdown-hover`

That's it, you don't need to have `ember-basic-dropdown` as a dependency too, although you can.

## Usage

The API is identical to [Ember Basic Dropdown](www.ember-basic-dropdown.com) except for the
different component name. Example:

```hbs
{{#basic-dropdown-hover as |dd|}}
  {{#dd.trigger}}Hover me{{/dd.trigger}}
  {{#dd.content}}
    <p>Hello world</p>
  {{/dd.content}}
{{/basic-dropdown-hover}}
```

Each component should accept the same options as Ember Basic Dropdown. If it doesn't, open an issue.

There is three options exclusive of this component that you can use:

* `delay` The delay between the moment the mouse enters/exits the trigger/content. Defaults to 300ms
* `openDelay` Delay for opening the dropdown. Default to `delay`
* `closeDelay` Delay for closing the dropdown. Default to `delay`
