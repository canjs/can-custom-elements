//var canSymbol = require("can-symbol");
//var defineLazyValue = require("can-define-lazy-value");

//var lifecycleStatusSymbol = canSymbol.for("can.lifecycleStatus");
//var viewModelSymbol = canSymbol.for("can.viewModel");
//var proxyMetaSymbol = canSymbol.for("can.proxyMeta");

module.exports = function addLifeCycleMethods(Class) {
	return Class;
};

/*
	var ChildElement = function ChildElement() {
		var el = Reflect.construct(BaseElement, [], this.constructor);
		el[lifecycleStatusSymbol].constructed = true;
		return el;
	};

	// add lifecycle metadata to each instance
	defineLazyValue(proto, lifecycleStatusSymbol, function() {
		return {
			constructed: false,
			initialized: false,
			rendered: false,
			connected: false
		};
	});

	// can-stache-bindings uses viewModel symbol
	defineLazyValue(proto, viewModelSymbol, function() {
		var metadata = this[proxyMetaSymbol];
		return metadata && metadata.target;
	});

	proto.initialize = function() {
		var status = this[lifecycleStatusSymbol];

		if (!status.initialized) {
			// TODO initialize
			status.initialized = true;
		}
	};

	proto.render = function() {
		var status = this[lifecycleStatusSymbol];

		if (!status.rendered) {
			if (typeof this.renderer === "function") {
				const frag = this.renderer(this);
				this.appendChild(frag);
			}
			status.rendered = true;
		}
	};

	proto.connect = function() {
		var status = this[lifecycleStatusSymbol];

		if (!status.connected) {
			// TODO connect
			status.connected = true;
		}
	};

	proto.connectedCallback = function() {
		this.initialize();
		this.render();
		this.connect();
	};
*/