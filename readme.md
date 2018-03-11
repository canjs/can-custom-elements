# can-element
DEPRECATED since 4.x infavor of can-component which is now a nativ Component by it self that can be edited via the component Registry 

[![Join the chat at https://gitter.im/canjs/canjs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/canjs/canjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/canjs/can-element/blob/master/LICENSE.md)
[![npm version](https://badge.fury.io/js/can-element.svg)](https://www.npmjs.com/package/can-element)
[![Travis build status](https://travis-ci.org/canjs/can-element.svg?branch=master)](https://travis-ci.org/canjs/can-element)

Import/require **can-element** and use the Element to derive your own classes. Calling `customElements.define` will register your element with the window's registry of custom elements.

## Documentation

Read the [can-element API docs on CanJS.com](https://v3.canjs.com/doc/can-element.html).

## Changelog

See the [latest releases on GitHub](https://github.com/canjs/can-element/releases).

## Contributing

The [contribution guide](https://github.com/canjs/can-element/blob/master/CONTRIBUTING.md) has information on getting help, reporting bugs, developing locally, and more.

## License

[MIT](https://github.com/canjs/can-element/blob/master/LICENSE.md)

## Extra Information for v4+
Example showing how to get a Element on Insert and showing how to get the original Element.

```
<script type="module">
import Steal from /node_modules/steal/steal.js;
Steal.import('can-component').then(Component=>{
	Component.extend({
		tag: 'my-component',
		connectedCallback: (el) => {
			this.element = el;
			// from here you can get the name and place 
			// in the component registry and so on to modify even the original callbacks of the element
			// You should check here if your alredy a instance of your modifyed component to do this
			// only once.
			this.componentConstructor = window.customElements.get('my-component');
			// from here you can extend.
			class myCanElement extends this.componentConstructor {}
		}
	})
})
</script>

<my-component></<my-component
```

Common Questions:
- Why do we handle that in the Connected Callback?
maybe we could handle that at a other place better but at last at this state the element is registered and it runs only in the browser.
