/*!
 * jQuery JavaScript Library v3.5.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = Object.create( null );

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

var globalPowerbi = powerbi;
var cardsList55FB9B0494D540179EBAEAFE64FCDE54=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="assets",n(n.s=153)}([function(e,t,n){var r=n(2),o=n(16).f,i=n(14),a=n(15),u=n(83),l=n(108),c=n(57);e.exports=function(e,t){var n,s,f,p,d,h=e.target,v=e.global,g=e.stat;if(n=v?r:g?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(d=o(n,s))&&d.value:n[s],!c(v?s:h+(g?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;l(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),a(n,s,p,e)}}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){(function(t,n){var r="object",o=function(e){return e&&e.Math==Math&&e};e.exports=o(typeof globalThis==r&&globalThis)||o(typeof t==r&&t)||o(typeof self==r&&self)||o(typeof n==r&&n)||Function("return this")()}).call(this,n(41),n(156))},function(e,t,n){"use strict";e.exports=n(354)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(2),o=n(53),i=n(54),a=n(110),u=r.Symbol,l=o("wks");e.exports=function(e){return l[e]||(l[e]=a&&u[e]||(a?u:i)("Symbol."+e))}},function(e,t,n){"use strict";var r,o=n(8),i=n(2),a=n(4),u=n(12),l=n(69),c=n(14),s=n(15),f=n(10).f,p=n(29),d=n(64),h=n(6),v=n(54),g=i.DataView,m=g&&g.prototype,y=i.Int8Array,b=y&&y.prototype,x=i.Uint8ClampedArray,w=x&&x.prototype,E=y&&p(y),S=b&&p(b),k=Object.prototype,T=k.isPrototypeOf,P=h("toStringTag"),C=v("TYPED_ARRAY_TAG"),_=!(!i.ArrayBuffer||!g),O=_&&!!d&&"Opera"!==l(i.opera),A=!1,N={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R=function(e){return a(e)&&u(N,l(e))};for(r in N)i[r]||(O=!1);if((!O||"function"!=typeof E||E===Function.prototype)&&(E=function(){throw TypeError("Incorrect invocation")},O))for(r in N)i[r]&&d(i[r],E);if((!O||!S||S===k)&&(S=E.prototype,O))for(r in N)i[r]&&d(i[r].prototype,S);if(O&&p(w)!==S&&d(w,S),o&&!u(S,P))for(r in A=!0,f(S,P,{get:function(){return a(this)?this[C]:void 0}}),N)i[r]&&c(i[r],C,r);_&&d&&p(m)!==k&&d(m,k),e.exports={NATIVE_ARRAY_BUFFER:_,NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:A&&C,aTypedArray:function(e){if(R(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(d){if(T.call(E,e))return e}else for(var t in N)if(u(N,r)){var n=i[t];if(n&&(e===n||T.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},exportProto:function(e,t,n){if(o){if(n)for(var r in N){var a=i[r];a&&u(a.prototype,e)&&delete a.prototype[e]}S[e]&&!n||s(S,e,n?t:O&&b[e]||t)}},exportStatic:function(e,t,n){var r,a;if(o){if(d){if(n)for(r in N)(a=i[r])&&u(a,e)&&delete a[e];if(E[e]&&!n)return;try{return s(E,e,n?t:O&&y[e]||t)}catch(e){}}for(r in N)!(a=i[r])||a[e]&&!n||s(a,e,t)}},isView:function(e){var t=l(e);return"DataView"===t||u(N,t)},isTypedArray:R,TypedArray:E,TypedArrayPrototype:S}},function(e,t,n){var r=n(1);e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(24),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(8),o=n(105),i=n(5),a=n(27),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(17);e.exports=function(e){return Object(r(e))}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(35),o=n(52),i=n(11),a=n(9),u=n(60),l=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,s=4==e,f=6==e,p=5==e||f;return function(d,h,v,g){for(var m,y,b=i(d),x=o(b),w=r(h,v,3),E=a(x.length),S=0,k=g||u,T=t?k(d,E):n?k(d,0):void 0;E>S;S++)if((p||S in x)&&(y=w(m=x[S],S,b),e))if(t)T[S]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return S;case 2:l.call(T,m)}else if(s)return!1;return f?-1:c||s?s:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(e,t,n){var r=n(8),o=n(10),i=n(42);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(2),o=n(53),i=n(14),a=n(12),u=n(83),l=n(106),c=n(23),s=c.get,f=c.enforce,p=String(l).split("toString");o("inspectSource",(function(e){return l.call(e)})),(e.exports=function(e,t,n,o){var l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||i(n,"name",t),f(n).source=p.join("string"==typeof t?t:"")),e!==r?(l?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=n:i(e,t,n)):c?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||l.call(this)}))},function(e,t,n){var r=n(8),o=n(67),i=n(42),a=n(19),u=n(27),l=n(12),c=n(105),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=a(e),t=u(t,!0),c)try{return s(e,t)}catch(e){}if(l(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){var r=n(52),o=n(17);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(85),o=n(12),i=n(114),a=n(10).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||a(t,e,{value:i.f(e)})}},function(e,t,n){var r=n(17),o=/"/g;e.exports=function(e,t,n,i){var a=String(r(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+a+"</"+t+">"}},function(e,t,n){var r=n(1);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},function(e,t,n){var r,o,i,a=n(107),u=n(2),l=n(4),c=n(14),s=n(12),f=n(68),p=n(55),d=u.WeakMap;if(a){var h=new d,v=h.get,g=h.has,m=h.set;r=function(e,t){return m.call(h,e,t),t},o=function(e){return v.call(h,e)||{}},i=function(e){return g.call(h,e)}}else{var y=f("state");p[y]=!0,r=function(e,t){return c(e,y,t),t},o=function(e){return s(e,y)?e[y]:{}},i=function(e){return s(e,y)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(10).f,o=n(12),i=n(6)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){var r=n(12),o=n(11),i=n(68),a=n(91),u=i("IE_PROTO"),l=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=o(e),r(e,u)?e[u]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},function(e,t,n){(function(t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var u=i.apply(null,n);u&&e.push(u)}else if("object"===a)for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"function"==typeof t&&"object"===r(t.amd)&&t.amd?t("classnames",[],(function(){return i})):n.classNames=i}()}).call(this,n(358),n(41))},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(8),a=n(101),u=n(7),l=n(124),c=n(38),s=n(42),f=n(14),p=n(9),d=n(125),h=n(140),v=n(27),g=n(12),m=n(69),y=n(4),b=n(45),x=n(64),w=n(43).f,E=n(141),S=n(13).forEach,k=n(49),T=n(10),P=n(16),C=n(23),_=C.get,O=C.set,A=T.f,N=P.f,R=Math.round,I=o.RangeError,M=l.ArrayBuffer,j=l.DataView,L=u.NATIVE_ARRAY_BUFFER_VIEWS,F=u.TYPED_ARRAY_TAG,z=u.TypedArray,D=u.TypedArrayPrototype,U=u.aTypedArrayConstructor,B=u.isTypedArray,V=function(e,t){for(var n=0,r=t.length,o=new(U(e))(r);r>n;)o[n]=t[n++];return o},W=function(e,t){A(e,t,{get:function(){return _(this)[t]}})},$=function(e){var t;return e instanceof M||"ArrayBuffer"==(t=m(e))||"SharedArrayBuffer"==t},Q=function(e,t){return B(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},q=function(e,t){return Q(e,t=v(t,!0))?s(2,e[t]):N(e,t)},H=function(e,t,n){return!(Q(e,t=v(t,!0))&&y(n)&&g(n,"value"))||g(n,"get")||g(n,"set")||n.configurable||g(n,"writable")&&!n.writable||g(n,"enumerable")&&!n.enumerable?A(e,t,n):(e[t]=n.value,e)};i?(L||(P.f=q,T.f=H,W(D,"buffer"),W(D,"byteOffset"),W(D,"byteLength"),W(D,"length")),r({target:"Object",stat:!0,forced:!L},{getOwnPropertyDescriptor:q,defineProperty:H}),e.exports=function(e,t,n,i){var u=e+(i?"Clamped":"")+"Array",l="get"+e,s="set"+e,v=o[u],g=v,m=g&&g.prototype,T={},P=function(e,n){A(e,n,{get:function(){return function(e,n){var r=_(e);return r.view[l](n*t+r.byteOffset,!0)}(this,n)},set:function(e){return function(e,n,r){var o=_(e);i&&(r=(r=R(r))<0?0:r>255?255:255&r),o.view[s](n*t+o.byteOffset,r,!0)}(this,n,e)},enumerable:!0})};L?a&&(g=n((function(e,n,r,o){return c(e,g,u),y(n)?$(n)?void 0!==o?new v(n,h(r,t),o):void 0!==r?new v(n,h(r,t)):new v(n):B(n)?V(g,n):E.call(g,n):new v(d(n))})),x&&x(g,z),S(w(v),(function(e){e in g||f(g,e,v[e])})),g.prototype=m):(g=n((function(e,n,r,o){c(e,g,u);var i,a,l,s=0,f=0;if(y(n)){if(!$(n))return B(n)?V(g,n):E.call(g,n);i=n,f=h(r,t);var v=n.byteLength;if(void 0===o){if(v%t)throw I("Wrong length");if((a=v-f)<0)throw I("Wrong length")}else if((a=p(o)*t)+f>v)throw I("Wrong length");l=a/t}else l=d(n),i=new M(a=l*t);for(O(e,{buffer:i,byteOffset:f,byteLength:a,length:l,view:new j(i)});s<l;)P(e,s++)})),x&&x(g,z),m=g.prototype=b(D)),m.constructor!==g&&f(m,"constructor",g),F&&f(m,F,u),T[u]=g,r({global:!0,forced:g!=v,sham:!L},T),"BYTES_PER_ELEMENT"in g||f(g,"BYTES_PER_ELEMENT",t),"BYTES_PER_ELEMENT"in m||f(m,"BYTES_PER_ELEMENT",t),k(u)}):e.exports=function(){}},function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(18),o=n(39),i=n(30),a=n.n(i),u=n(150),l=n(3),c=n.n(l),s=n(40);function f(e,t){var n,i=void 0===t?{}:t,l=i.displayName,f=void 0===l?(n=e)[0].toUpperCase()+Object(u.a)(n).slice(1):l,p=i.Component,d=void 0===p?"div":p,h=i.defaultProps,v=c.a.forwardRef((function(t,n){var i=t.className,u=t.bsPrefix,l=t.as,f=void 0===l?d:l,p=Object(o.a)(t,["className","bsPrefix","as"]),h=Object(s.a)(u,e);return c.a.createElement(f,Object(r.a)({ref:n,className:a()(i,h)},p))}));return v.defaultProps=h,v.displayName=f,v}},function(e,t){e.exports=!1},function(e,t,n){var r=n(85),o=n(2),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},function(e,t,n){var r=n(26);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(6),o=n(45),i=n(14),a=r("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,o(null)),e.exports=function(e){u[a][e]=!0}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){var n=[][e];return!n||!r((function(){n.call(null,t||function(){throw 1},1)}))}},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(18),n(149);var r=n(3),o=n.n(r),i=o.a.createContext({});i.Consumer,i.Provider;function a(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},function(e,t){e.exports=Function("return this")()},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(109),o=n(86).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(24),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t,n){var r=n(5),o=n(111),i=n(86),a=n(55),u=n(112),l=n(82),c=n(68)("IE_PROTO"),s=function(){},f=function(){var e,t=l("iframe"),n=i.length;for(t.style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),f=e.F;n--;)delete f.prototype[i[n]];return f()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[c]=e):n=f(),void 0===t?n:o(n,t)},a[c]=!0},function(e,t,n){"use strict";var r=n(27),o=n(10),i=n(42);e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},function(e,t,n){var r=n(55),o=n(4),i=n(12),a=n(10).f,u=n(54),l=n(65),c=u("meta"),s=0,f=Object.isExtensible||function(){return!0},p=function(e){a(e,c,{value:{objectID:"O"+ ++s,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,c)){if(!f(e))return"F";if(!t)return"E";p(e)}return e[c].objectID},getWeakData:function(e,t){if(!i(e,c)){if(!f(e))return!0;if(!t)return!1;p(e)}return e[c].weakData},onFreeze:function(e){return l&&d.REQUIRED&&f(e)&&!i(e,c)&&p(e),e}};r[c]=!0},function(e,t,n){var r=n(5),o=n(26),i=n(6)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[i])?t:o(n)}},function(e,t,n){"use strict";var r=n(34),o=n(10),i=n(6),a=n(8),u=i("species");e.exports=function(e){var t=r(e),n=o.f;a&&t&&!t[u]&&n(t,u,{configurable:!0,get:function(){return this}})}},function(e,t,n){var r=n(15);e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},function(e,t,n){var r=n(17),o="["+n(75)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},function(e,t,n){var r=n(1),o=n(25),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t,n){var r=n(2),o=n(83),i=n(33),a=r["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.2.1",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){var r=n(19),o=n(9),i=n(44),a=function(e){return function(t,n,a){var u,l=r(t),c=o(l.length),s=i(a,c);if(e&&n!=n){for(;c>s;)if((u=l[s++])!=u)return!0}else for(;c>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},function(e,t,n){var r=n(1),o=/#|\.prototype\./,i=function(e,t){var n=u[a(e)];return n==c||n!=l&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=i.data={},l=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},function(e,t,n){var r=n(25);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(109),o=n(86);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(4),o=n(58),i=n(6)("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(1),o=n(6)("species");e.exports=function(e){return!r((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t){e.exports={}},function(e,t,n){var r=n(69),o=n(62),i=n(6)("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},function(e,t,n){var r=n(5),o=n(122);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return r(n),o(i),t?e.call(n,i):n.__proto__=i,n}}():void 0)},function(e,t,n){var r=n(1);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,n){var r=n(5),o=n(89),i=n(9),a=n(35),u=n(63),l=n(119),c=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,n,s,f){var p,d,h,v,g,m,y=a(t,n,s?2:1);if(f)p=e;else{if("function"!=typeof(d=u(e)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,v=i(e.length);v>h;h++)if((g=s?y(r(m=e[h])[0],m[1]):y(e[h]))&&g instanceof c)return g;return new c(!1)}p=d.call(e)}for(;!(m=p.next()).done;)if((g=l(p,y,m.value,s))&&g instanceof c)return g;return new c(!1)}).stop=function(e){return new c(!0,e)}},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(53),o=n(54),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(25),o=n(6)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(6)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n}},function(e,t,n){"use strict";var r=n(19),o=n(36),i=n(62),a=n(23),u=n(90),l=a.set,c=a.getterFor("Array Iterator");e.exports=u(Array,"Array",(function(e,t){l(this,{type:"Array Iterator",target:r(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(e,t,n){var r=n(26),o=n(11),i=n(52),a=n(9),u=function(e){return function(t,n,u,l){r(n);var c=o(t),s=i(c),f=a(c.length),p=e?f-1:0,d=e?-1:1;if(u<2)for(;;){if(p in s){l=s[p],p+=d;break}if(p+=d,e?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:f>p;p+=d)p in s&&(l=n(l,s[p],p,c));return l}};e.exports={left:u(!1),right:u(!0)}},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(57),a=n(15),u=n(47),l=n(66),c=n(38),s=n(4),f=n(1),p=n(70),d=n(28),h=n(92);e.exports=function(e,t,n,v,g){var m=o[e],y=m&&m.prototype,b=m,x=v?"set":"add",w={},E=function(e){var t=y[e];a(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!s(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof m||!(g||y.forEach&&!f((function(){(new m).entries().next()})))))b=n.getConstructor(t,e,v,x),u.REQUIRED=!0;else if(i(e,!0)){var S=new b,k=S[x](g?{}:-0,1)!=S,T=f((function(){S.has(1)})),P=p((function(e){new m(e)})),C=!g&&f((function(){for(var e=new m,t=5;t--;)e[x](t,t);return!e.has(-0)}));P||((b=t((function(t,n){c(t,b,e);var r=h(new m,t,b);return null!=n&&l(n,r[x],r,v),r}))).prototype=y,y.constructor=b),(T||C)&&(E("delete"),E("has"),v&&E("get")),(C||k)&&E(x),g&&y.clear&&delete y.clear}return w[e]=b,r({global:!0,forced:b!=m},w),d(b,e),g||n.setStrong(b,e,v),b}},function(e,t){var n=Math.expm1,r=Math.exp;e.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:r(e)-1}:n},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";var r=n(33),o=n(2),i=n(1);e.exports=r||!i((function(){var e=Math.random();__defineSetter__.call(null,e,(function(){})),delete o[e]}))},function(e,t,n){"use strict";var r=n(5);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var r,o,i=n(77),a=RegExp.prototype.exec,u=String.prototype.replace,l=a,c=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(c||s)&&(l=function(e){var t,n,r,o,l=this;return s&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),c&&(t=l.lastIndex),r=a.call(l,e),c&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),s&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=l},function(e,t,n){var r=n(24),o=n(17),i=function(e){return function(t,n){var i,a,u=String(o(t)),l=r(n),c=u.length;return l<0||l>=c?e?"":void 0:(i=u.charCodeAt(l))<55296||i>56319||l+1===c||(a=u.charCodeAt(l+1))<56320||a>57343?e?u.charAt(l):i:e?u.slice(l,l+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},function(e,t,n){"use strict";var r=n(14),o=n(15),i=n(1),a=n(6),u=n(78),l=a("species"),c=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=a(e),d=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=d&&!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!t}));if(!d||!h||"replace"===e&&!c||"split"===e&&!s){var v=/./[p],g=n(p,""[e],(function(e,t,n,r,o){return t.exec===u?d&&!o?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),m=g[0],y=g[1];o(String.prototype,e,m),o(RegExp.prototype,p,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)}),f&&r(RegExp.prototype[p],"sham",!0)}}},function(e,t,n){var r=n(25),o=n(78);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},function(e,t,n){var r=n(2),o=n(4),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,n){var r=n(2),o=n(14);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(34),o=n(43),i=n(87),a=n(5);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){e.exports=n(2)},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){"use strict";var r=n(11),o=n(44),i=n(9);e.exports=function(e){for(var t=r(this),n=i(t.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,c=void 0===l?n:o(l,n);c>u;)t[u++]=e;return t}},function(e,t,n){var r=n(6),o=n(62),i=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},function(e,t,n){"use strict";var r=n(0),o=n(120),i=n(29),a=n(64),u=n(28),l=n(14),c=n(15),s=n(6),f=n(33),p=n(62),d=n(121),h=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=s("iterator"),m=function(){return this};e.exports=function(e,t,n,s,d,y,b){o(n,t,s);var x,w,E,S=function(e){if(e===d&&_)return _;if(!v&&e in P)return P[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},k=t+" Iterator",T=!1,P=e.prototype,C=P[g]||P["@@iterator"]||d&&P[d],_=!v&&C||S(d),O="Array"==t&&P.entries||C;if(O&&(x=i(O.call(new e)),h!==Object.prototype&&x.next&&(f||i(x)===h||(a?a(x,h):"function"!=typeof x[g]&&l(x,g,m)),u(x,k,!0,!0),f&&(p[k]=m))),"values"==d&&C&&"values"!==C.name&&(T=!0,_=function(){return C.call(this)}),f&&!b||P[g]===_||l(P,g,_),p[t]=_,d)if(w={values:S("values"),keys:y?_:S("keys"),entries:S("entries")},b)for(E in w)(v||T||!(E in P))&&c(P,E,w[E]);else r({target:t,proto:!0,forced:v||T},w);return w}},function(e,t,n){var r=n(1);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,n){var r=n(4),o=n(64);e.exports=function(e,t,n){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(e,a),e}},function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},function(e,t,n){"use strict";var r=n(24),o=n(17);e.exports="".repeat||function(e){var t=String(o(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},function(e,t,n){var r=n(34);e.exports=r("navigator","userAgent")||""},function(e,t,n){var r=n(4),o=n(25),i=n(6)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},function(e,t,n){var r=n(96);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,t,n){var r=n(6)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(e){}}return!1}},function(e,t,n){"use strict";var r=n(79).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},function(e,t,n){var r=n(1),o=n(75);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},function(e,t,n){var r=n(2),o=n(1),i=n(70),a=n(7).NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,l=r.Int8Array;e.exports=!a||!o((function(){l(1)}))||!o((function(){new l(-1)}))||!i((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||o((function(){return 1!==new l(new u(2),1,void 0).length}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(155),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(71),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(225),n(226),n(227),n(228),n(229),n(230),n(232),n(234),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(257),n(258),n(261),n(262),n(263),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(137),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(352),n(145),n(353);var r=n(3),o=n(147),i=n(148);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Visual constructor",t),this.target=t.element}var t,n,u;return t=e,(n=[{key:"update",value:function(e){e.dataViews&&e.dataViews[0]&&(console.log("Visual update",e),this.manipulateData(e),o.render(r.createElement(i.a,e),this.target))}},{key:"manipulateData",value:function(e){return console.log("manipulateData "+e),e}}])&&a(t.prototype,n),u&&a(t,u),e}()},function(e,t,n){"use strict";var r=n(18),o=n(3),i=n.n(o),a=n(30),u=n.n(a);t.a=function(e){return i.a.forwardRef((function(t,n){return i.a.createElement("div",Object(r.a)({},t,{ref:n,className:u()(t.className,e)}))}))}},function(e,t,n){"use strict";var r=n(18),o=n(39),i=n(30),a=n.n(i),u=n(3),l=n.n(u),c=n(40),s=n(32),f=n(103),p=n(151),d=n(152),h=Object(f.a)("h5"),v=Object(f.a)("h6"),g=Object(s.a)("card-body"),m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.bg,f=e.text,d=e.border,h=e.body,v=e.children,m=e.as,y=void 0===m?"div":m,b=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(c.a)(n,"card"),w=Object(u.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return l.a.createElement(p.a.Provider,{value:w},l.a.createElement(y,Object(r.a)({ref:t},b,{className:a()(i,x,s&&"bg-"+s,f&&"text-"+f,d&&"border-"+d)}),h?l.a.createElement(g,null,v):v))}));m.displayName="Card",m.defaultProps={body:!1},m.Img=d.a,m.Title=Object(s.a)("card-title",{Component:h}),m.Subtitle=Object(s.a)("card-subtitle",{Component:v}),m.Body=g,m.Link=Object(s.a)("card-link",{Component:"a"}),m.Text=Object(s.a)("card-text",{Component:"p"}),m.Header=Object(s.a)("card-header"),m.Footer=Object(s.a)("card-footer"),m.ImgOverlay=Object(s.a)("card-img-overlay"),t.a=m},function(e,t,n){var r=n(8),o=n(1),i=n(82);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(53);e.exports=r("native-function-to-string",Function.toString)},function(e,t,n){var r=n(2),o=n(106),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var r=n(12),o=n(84),i=n(16),a=n(10);e.exports=function(e,t){for(var n=o(t),u=a.f,l=i.f,c=0;c<n.length;c++){var s=n[c];r(e,s)||u(e,s,l(t,s))}}},function(e,t,n){var r=n(12),o=n(19),i=n(56).indexOf,a=n(55);e.exports=function(e,t){var n,u=o(e),l=0,c=[];for(n in u)!r(a,n)&&r(u,n)&&c.push(n);for(;t.length>l;)r(u,n=t[l++])&&(~i(c,n)||c.push(n));return c}},function(e,t,n){var r=n(1);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,t,n){var r=n(8),o=n(10),i=n(5),a=n(59);e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=a(t),u=r.length,l=0;u>l;)o.f(e,n=r[l++],t[n]);return e}},function(e,t,n){var r=n(34);e.exports=r("document","documentElement")},function(e,t,n){(function(t){var r=n(19),o=n(43).f,i={}.toString,a="object"==typeof t&&t&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(t):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(r(e))}}).call(this,n(41))},function(e,t,n){t.f=n(6)},function(e,t,n){"use strict";var r=n(11),o=n(44),i=n(9),a=Math.min;e.exports=[].copyWithin||function(e,t){var n=r(this),u=i(n.length),l=o(e,u),c=o(t,u),s=arguments.length>2?arguments[2]:void 0,f=a((void 0===s?u:o(s,u))-c,u-l),p=1;for(c<l&&l<c+f&&(p=-1,c+=f-1,l+=f-1);f-- >0;)c in n?n[l]=n[c]:delete n[l],l+=p,c+=p;return n}},function(e,t,n){"use strict";var r=n(58),o=n(9),i=n(35),a=function(e,t,n,u,l,c,s,f){for(var p,d=l,h=0,v=!!s&&i(s,f,3);h<u;){if(h in n){if(p=v?v(n[h],h,t):n[h],c>0&&r(p))d=a(e,t,p,o(p.length),d,c-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[d]=p}d++}h++}return d};e.exports=a},function(e,t,n){"use strict";var r=n(13).forEach,o=n(37);e.exports=o("forEach")?function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(e,t,n){"use strict";var r=n(35),o=n(11),i=n(119),a=n(89),u=n(9),l=n(46),c=n(63);e.exports=function(e){var t,n,s,f,p=o(e),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,m=0,y=c(p);if(g&&(v=r(v,h>2?arguments[2]:void 0,2)),null==y||d==Array&&a(y))for(n=new d(t=u(p.length));t>m;m++)l(n,m,g?v(p[m],m):p[m]);else for(f=y.call(p),n=new d;!(s=f.next()).done;m++)l(n,m,g?i(f,v,[s.value,m],!0):s.value);return n.length=m,n}},function(e,t,n){var r=n(5);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},function(e,t,n){"use strict";var r=n(121).IteratorPrototype,o=n(45),i=n(42),a=n(28),u=n(62),l=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=o(r,{next:i(1,n)}),a(e,c,!1,!0),u[c]=l,e}},function(e,t,n){"use strict";var r,o,i,a=n(29),u=n(14),l=n(12),c=n(6),s=n(33),f=c("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||l(r,f)||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,t,n){"use strict";var r=n(19),o=n(24),i=n(9),a=n(37),u=Math.min,l=[].lastIndexOf,c=!!l&&1/[1].lastIndexOf(1,-0)<0,s=a("lastIndexOf");e.exports=c||s?function(e){if(c)return l.apply(this,arguments)||0;var t=r(this),n=i(t.length),a=n-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}:l},function(e,t,n){"use strict";var r=n(2),o=n(8),i=n(7).NATIVE_ARRAY_BUFFER,a=n(14),u=n(50),l=n(1),c=n(38),s=n(24),f=n(9),p=n(125),d=n(43).f,h=n(10).f,v=n(88),g=n(28),m=n(23),y=m.get,b=m.set,x=r.ArrayBuffer,w=x,E=r.DataView,S=r.Math,k=r.RangeError,T=S.abs,P=S.pow,C=S.floor,_=S.log,O=S.LN2,A=function(e,t,n){var r,o,i,a=new Array(n),u=8*n-t-1,l=(1<<u)-1,c=l>>1,s=23===t?P(2,-24)-P(2,-77):0,f=e<0||0===e&&1/e<0?1:0,p=0;for((e=T(e))!=e||e===1/0?(o=e!=e?1:0,r=l):(r=C(_(e)/O),e*(i=P(2,-r))<1&&(r--,i*=2),(e+=r+c>=1?s/i:s*P(2,1-c))*i>=2&&(r++,i/=2),r+c>=l?(o=0,r=l):r+c>=1?(o=(e*i-1)*P(2,t),r+=c):(o=e*P(2,c-1)*P(2,t),r=0));t>=8;a[p++]=255&o,o/=256,t-=8);for(r=r<<t|o,u+=t;u>0;a[p++]=255&r,r/=256,u-=8);return a[--p]|=128*f,a},N=function(e,t){var n,r=e.length,o=8*r-t-1,i=(1<<o)-1,a=i>>1,u=o-7,l=r-1,c=e[l--],s=127&c;for(c>>=7;u>0;s=256*s+e[l],l--,u-=8);for(n=s&(1<<-u)-1,s>>=-u,u+=t;u>0;n=256*n+e[l],l--,u-=8);if(0===s)s=1-a;else{if(s===i)return n?NaN:c?-1/0:1/0;n+=P(2,t),s-=a}return(c?-1:1)*n*P(2,s-t)},R=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},I=function(e){return[255&e]},M=function(e){return[255&e,e>>8&255]},j=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},L=function(e){return A(e,23,4)},F=function(e){return A(e,52,8)},z=function(e,t){h(e.prototype,t,{get:function(){return y(this)[t]}})},D=function(e,t,n,r){var o=p(+n),i=y(e);if(o+t>i.byteLength)throw k("Wrong index");var a=y(i.buffer).bytes,u=o+i.byteOffset,l=a.slice(u,u+t);return r?l:l.reverse()},U=function(e,t,n,r,o,i){var a=p(+n),u=y(e);if(a+t>u.byteLength)throw k("Wrong index");for(var l=y(u.buffer).bytes,c=a+u.byteOffset,s=r(+o),f=0;f<t;f++)l[c+f]=s[i?f:t-f-1]};if(i){if(!l((function(){x(1)}))||!l((function(){new x(-1)}))||l((function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name}))){for(var B,V=(w=function(e){return c(this,w),new x(p(e))}).prototype=x.prototype,W=d(x),$=0;W.length>$;)(B=W[$++])in w||a(w,B,x[B]);V.constructor=w}var Q=new E(new w(2)),q=E.prototype.setInt8;Q.setInt8(0,2147483648),Q.setInt8(1,2147483649),!Q.getInt8(0)&&Q.getInt8(1)||u(E.prototype,{setInt8:function(e,t){q.call(this,e,t<<24>>24)},setUint8:function(e,t){q.call(this,e,t<<24>>24)}},{unsafe:!0})}else w=function(e){c(this,w,"ArrayBuffer");var t=p(e);b(this,{bytes:v.call(new Array(t),0),byteLength:t}),o||(this.byteLength=t)},E=function(e,t,n){c(this,E,"DataView"),c(e,w,"DataView");var r=y(e).byteLength,i=s(t);if(i<0||i>r)throw k("Wrong offset");if(i+(n=void 0===n?r-i:f(n))>r)throw k("Wrong length");b(this,{buffer:e,byteLength:n,byteOffset:i}),o||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},o&&(z(w,"byteLength"),z(E,"buffer"),z(E,"byteLength"),z(E,"byteOffset")),u(E.prototype,{getInt8:function(e){return D(this,1,e)[0]<<24>>24},getUint8:function(e){return D(this,1,e)[0]},getInt16:function(e){var t=D(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=D(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return R(D(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return R(D(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return N(D(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return N(D(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){U(this,1,e,I,t)},setUint8:function(e,t){U(this,1,e,I,t)},setInt16:function(e,t){U(this,2,e,M,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){U(this,2,e,M,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){U(this,4,e,j,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){U(this,4,e,j,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){U(this,4,e,L,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){U(this,8,e,F,t,arguments.length>2?arguments[2]:void 0)}});g(w,"ArrayBuffer"),g(E,"DataView"),t.ArrayBuffer=w,t.DataView=E},function(e,t,n){var r=n(24),o=n(9);e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw RangeError("Wrong length or index");return n}},function(e,t,n){"use strict";var r=n(10).f,o=n(45),i=n(50),a=n(35),u=n(38),l=n(66),c=n(90),s=n(49),f=n(8),p=n(47).fastKey,d=n(23),h=d.set,v=d.getterFor;e.exports={getConstructor:function(e,t,n,c){var s=e((function(e,r){u(e,s,t),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=r&&l(r,e[c],e,n)})),d=v(t),g=function(e,t,n){var r,o,i=d(e),a=m(e,t);return a?a.value=n:(i.last=a={index:o=p(t,!0),key:t,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),f?i.size++:e.size++,"F"!==o&&(i.index[o]=a)),e},m=function(e,t){var n,r=d(e),o=p(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return i(s.prototype,{clear:function(){for(var e=d(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=d(this),n=m(this,e);if(n){var r=n.next,o=n.previous;delete t.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),t.first==n&&(t.first=r),t.last==n&&(t.last=o),f?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=d(this),r=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!m(this,e)}}),i(s.prototype,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),f&&r(s.prototype,"size",{get:function(){return d(this).size}}),s},setStrong:function(e,t,n){var r=t+" Iterator",o=v(t),i=v(r);c(e,t,(function(e,t){h(this,{type:r,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(t)}}},function(e,t){var n=Math.log;e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:n(1+e)}},function(e,t,n){var r=n(4),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}},function(e,t,n){"use strict";var r=n(8),o=n(1),i=n(59),a=n(87),u=n(67),l=n(11),c=n(52),s=Object.assign;e.exports=!s||o((function(){var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||"abcdefghijklmnopqrst"!=i(s({},t)).join("")}))?function(e,t){for(var n=l(e),o=arguments.length,s=1,f=a.f,p=u.f;o>s;)for(var d,h=c(arguments[s++]),v=f?i(h).concat(f(h)):i(h),g=v.length,m=0;g>m;)d=v[m++],r&&!p.call(h,d)||(n[d]=h[d]);return n}:s},function(e,t,n){var r=n(8),o=n(59),i=n(19),a=n(67).f,u=function(e){return function(t){for(var n,u=i(t),l=o(u),c=l.length,s=0,f=[];c>s;)n=l[s++],r&&!a.call(u,n)||f.push(e?[n,u[n]]:u[n]);return f}};e.exports={entries:u(!0),values:u(!1)}},function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},function(e,t,n){var r=n(2);e.exports=r.Promise},function(e,t,n){var r,o,i,a=n(2),u=n(1),l=n(25),c=n(35),s=n(112),f=n(82),p=a.location,d=a.setImmediate,h=a.clearImmediate,v=a.process,g=a.MessageChannel,m=a.Dispatch,y=0,b={},x=function(e){if(b.hasOwnProperty(e)){var t=b[e];delete b[e],t()}},w=function(e){return function(){x(e)}},E=function(e){x(e.data)},S=function(e){a.postMessage(e+"",p.protocol+"//"+p.host)};d&&h||(d=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return b[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},r(y),y},h=function(e){delete b[e]},"process"==l(v)?r=function(e){v.nextTick(w(e))}:m&&m.now?r=function(e){m.now(w(e))}:g?(i=(o=new g).port2,o.port1.onmessage=E,r=c(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(S)?r="onreadystatechange"in f("script")?function(e){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),x(e)}}:function(e){setTimeout(w(e),0)}:(r=S,a.addEventListener("message",E,!1))),e.exports={set:d,clear:h}},function(e,t,n){var r,o,i,a,u,l,c,s,f=n(2),p=n(16).f,d=n(25),h=n(133).set,v=n(95),g=f.MutationObserver||f.WebKitMutationObserver,m=f.process,y=f.Promise,b="process"==d(m),x=p(f,"queueMicrotask"),w=x&&x.value;w||(r=function(){var e,t;for(b&&(e=m.domain)&&e.exit();o;){t=o.fn,o=o.next;try{t()}catch(e){throw o?a():i=void 0,e}}i=void 0,e&&e.enter()},b?a=function(){m.nextTick(r)}:g&&!/(iphone|ipod|ipad).*applewebkit/i.test(v)?(u=!0,l=document.createTextNode(""),new g(r).observe(l,{characterData:!0}),a=function(){l.data=u=!u}):y&&y.resolve?(c=y.resolve(void 0),s=c.then,a=function(){s.call(c,r)}):a=function(){h.call(f,r)}),e.exports=w||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,a()),i=t}},function(e,t,n){var r=n(5),o=n(4),i=n(136);e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},function(e,t,n){"use strict";var r=n(26),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},function(e,t,n){"use strict";var r=n(79).charAt,o=n(23),i=n(90),a=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(e){a(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=u(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},function(e,t,n){var r=n(9),o=n(94),i=n(17),a=Math.ceil,u=function(e){return function(t,n,u){var l,c,s=String(i(t)),f=s.length,p=void 0===u?" ":String(u),d=r(n);return d<=f||""==p?s:(l=d-f,(c=o.call(p,a(l/p.length))).length>l&&(c=c.slice(0,l)),e?s+c:c+s)}};e.exports={start:u(!1),end:u(!0)}},function(e,t,n){var r=n(95);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},function(e,t,n){var r=n(24);e.exports=function(e,t){var n=r(e);if(n<0||n%t)throw RangeError("Wrong offset");return n}},function(e,t,n){var r=n(11),o=n(9),i=n(63),a=n(89),u=n(35),l=n(7).aTypedArrayConstructor;e.exports=function(e){var t,n,c,s,f,p=r(e),d=arguments.length,h=d>1?arguments[1]:void 0,v=void 0!==h,g=i(p);if(null!=g&&!a(g))for(f=g.call(p),p=[];!(s=f.next()).done;)p.push(s.value);for(v&&d>2&&(h=u(h,arguments[2],2)),n=o(p.length),c=new(l(this))(n),t=0;n>t;t++)c[t]=v?h(p[t],t):p[t];return c}},function(e,t,n){"use strict";var r=n(50),o=n(47).getWeakData,i=n(5),a=n(4),u=n(38),l=n(66),c=n(13),s=n(12),f=n(23),p=f.set,d=f.getterFor,h=c.find,v=c.findIndex,g=0,m=function(e){return e.frozen||(e.frozen=new y)},y=function(){this.entries=[]},b=function(e,t){return h(e.entries,(function(e){return e[0]===t}))};y.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var n=b(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=v(this.entries,(function(t){return t[0]===e}));return~t&&this.entries.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,c){var f=e((function(e,r){u(e,f,t),p(e,{type:t,id:g++,frozen:void 0}),null!=r&&l(r,e[c],e,n)})),h=d(t),v=function(e,t,n){var r=h(e),a=o(i(t),!0);return!0===a?m(r).set(t,n):a[r.id]=n,e};return r(f.prototype,{delete:function(e){var t=h(this);if(!a(e))return!1;var n=o(e);return!0===n?m(t).delete(e):n&&s(n,t.id)&&delete n[t.id]},has:function(e){var t=h(this);if(!a(e))return!1;var n=o(e);return!0===n?m(t).has(e):n&&s(n,t.id)}}),r(f.prototype,n?{get:function(e){var t=h(this);if(a(e)){var n=o(e);return!0===n?m(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return v(this,e,t)}}:{add:function(e){return v(this,e,!0)}}),f}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){var r=n(1),o=n(6),i=n(33),a=o("iterator");e.exports=!r((function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",i&&!e.toJSON||!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash}))},function(e,t,n){"use strict";n(71);var r=n(0),o=n(144),i=n(15),a=n(50),u=n(28),l=n(120),c=n(23),s=n(38),f=n(12),p=n(35),d=n(5),h=n(4),v=n(351),g=n(63),m=n(6)("iterator"),y=c.set,b=c.getterFor("URLSearchParams"),x=c.getterFor("URLSearchParamsIterator"),w=/\+/g,E=Array(4),S=function(e){return E[e-1]||(E[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},k=function(e){try{return decodeURIComponent(e)}catch(t){return e}},T=function(e){var t=e.replace(w," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(S(n--),k);return t}},P=/[!'()~]|%20/g,C={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},_=function(e){return C[e]},O=function(e){return encodeURIComponent(e).replace(P,_)},A=function(e,t){if(t)for(var n,r,o=t.split("&"),i=0;i<o.length;)(n=o[i++]).length&&(r=n.split("="),e.push({key:T(r.shift()),value:T(r.join("="))}))},N=function(e){this.entries.length=0,A(this.entries,e)},R=function(e,t){if(e<t)throw TypeError("Not enough arguments")},I=l((function(e,t){y(this,{type:"URLSearchParamsIterator",iterator:v(b(e).entries),kind:t})}),"Iterator",(function(){var e=x(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),M=function(){s(this,M,"URLSearchParams");var e,t,n,r,o,i,a,u=arguments.length>0?arguments[0]:void 0,l=this,c=[];if(y(l,{type:"URLSearchParams",entries:c,updateURL:function(){},updateSearchParams:N}),void 0!==u)if(h(u))if("function"==typeof(e=g(u)))for(t=e.call(u);!(n=t.next()).done;){if((o=(r=v(d(n.value))).next()).done||(i=r.next()).done||!r.next().done)throw TypeError("Expected sequence with length 2");c.push({key:o.value+"",value:i.value+""})}else for(a in u)f(u,a)&&c.push({key:a,value:u[a]+""});else A(c,"string"==typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},j=M.prototype;a(j,{append:function(e,t){R(arguments.length,2);var n=b(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){R(arguments.length,1);for(var t=b(this),n=t.entries,r=e+"",o=0;o<n.length;)n[o].key===r?n.splice(o,1):o++;t.updateURL()},get:function(e){R(arguments.length,1);for(var t=b(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){R(arguments.length,1);for(var t=b(this).entries,n=e+"",r=[],o=0;o<t.length;o++)t[o].key===n&&r.push(t[o].value);return r},has:function(e){R(arguments.length,1);for(var t=b(this).entries,n=e+"",r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){R(arguments.length,1);for(var n,r=b(this),o=r.entries,i=!1,a=e+"",u=t+"",l=0;l<o.length;l++)(n=o[l]).key===a&&(i?o.splice(l--,1):(i=!0,n.value=u));i||o.push({key:a,value:u}),r.updateURL()},sort:function(){var e,t,n,r=b(this),o=r.entries,i=o.slice();for(o.length=0,n=0;n<i.length;n++){for(e=i[n],t=0;t<n;t++)if(o[t].key>e.key){o.splice(t,0,e);break}t===n&&o.push(e)}r.updateURL()},forEach:function(e){for(var t,n=b(this).entries,r=p(e,arguments.length>1?arguments[1]:void 0,3),o=0;o<n.length;)r((t=n[o++]).value,t.key,this)},keys:function(){return new I(this,"keys")},values:function(){return new I(this,"values")},entries:function(){return new I(this,"entries")}},{enumerable:!0}),i(j,m,j.entries),i(j,"toString",(function(){for(var e,t=b(this).entries,n=[],r=0;r<t.length;)e=t[r++],n.push(O(e.key)+"="+O(e.value));return n.join("&")}),{enumerable:!0}),u(M,"URLSearchParams"),r({global:!0,forced:!o},{URLSearchParams:M}),e.exports={URLSearchParams:M,getState:b}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=a(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(l[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(355)},function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),o=n(359),i=n(104);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var t,n,a,p,d=(t=h,function(){var e,n=f(t);if(s()){var r=f(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=d.call(this,e)).state={textLabel:"",textValue:""},t.update=function(e){console.log("Component Update "+e),t.setState({newState:e})},console.log("Component Constructor"),console.log(e),t.state={textLabel:"",textValue:""},t}return n=h,(a=[{key:"render",value:function(){console.log("Props: "+this.props);var e=this.props.dataViews[0].categorical.categories[0].values;return r.createElement(o.a,{style:{msOverflowY:"scroll"}},e.map((function(e){return r.createElement(i.a,{onClick:function(){console.log(e)},style:{width:"18rem",margin:"15px",backgroundColor:"yellow",padding:"25px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},r.createElement(i.a.Body,null,r.createElement(i.a.Title,null,e)))})))}}])&&u(n.prototype,a),p&&u(n,p),h}(r.Component)},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,i=n.defaultProps,a=n.allowFallback,u=void 0!==a&&a,l=n.displayName,c=void 0===l?e.name||e.displayName:l,s=function(t,n){return e(t,n)};return Object.assign(o.default.forwardRef||!u?o.default.forwardRef(s):function(e){return s(e,null)},{displayName:c,propTypes:r,defaultProps:i})};var r,o=(r=n(3))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=/-(.)/g;function o(e){return e.replace(r,(function(e,t){return t.toUpperCase()}))}},function(e,t,n){"use strict";var r=n(3),o=n.n(r);t.a=o.a.createContext(null)},function(e,t,n){"use strict";var r=n(18),o=n(39),i=n(30),a=n.n(i),u=n(3),l=n.n(u),c=n(40),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.variant,s=e.as,f=void 0===s?"img":s,p=Object(o.a)(e,["bsPrefix","className","variant","as"]),d=Object(c.a)(n,"card-img");return l.a.createElement(f,Object(r.a)({ref:t,className:a()(u?d+"-"+u:d,i)},p))}));s.displayName="CardImg",s.defaultProps={variant:null},t.a=s},function(e,t,n){e.exports=n(154)},function(e,t,n){"use strict";n.r(t),function(e){var r=n(102),o=e.powerbi,i={name:"cardsList55FB9B0494D540179EBAEAFE64FCDE54",displayName:"CardsList",class:"Visual",apiVersion:"2.6.0",create:function(e){if(r.a)return new r.a(e);throw"Visual instance not found"},custom:!0};void 0!==o&&(o.visuals=o.visuals||{},o.visuals.plugins=o.visuals.plugins||{},o.visuals.plugins.cardsList55FB9B0494D540179EBAEAFE64FCDE54=i),t.default=i}.call(this,n(41))},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(33),a=n(8),u=n(110),l=n(1),c=n(12),s=n(58),f=n(4),p=n(5),d=n(11),h=n(19),v=n(27),g=n(42),m=n(45),y=n(59),b=n(43),x=n(113),w=n(87),E=n(16),S=n(10),k=n(67),T=n(14),P=n(15),C=n(53),_=n(68),O=n(55),A=n(54),N=n(6),R=n(114),I=n(20),M=n(28),j=n(23),L=n(13).forEach,F=_("hidden"),z=N("toPrimitive"),D=j.set,U=j.getterFor("Symbol"),B=Object.prototype,V=o.Symbol,W=o.JSON,$=W&&W.stringify,Q=E.f,q=S.f,H=x.f,K=k.f,Y=C("symbols"),G=C("op-symbols"),X=C("string-to-symbol-registry"),J=C("symbol-to-string-registry"),Z=C("wks"),ee=o.QObject,te=!ee||!ee.prototype||!ee.prototype.findChild,ne=a&&l((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Q(B,t);r&&delete B[t],q(e,t,n),r&&e!==B&&q(B,t,r)}:q,re=function(e,t){var n=Y[e]=m(V.prototype);return D(n,{type:"Symbol",tag:e,description:t}),a||(n.description=t),n},oe=u&&"symbol"==typeof V.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof V},ie=function(e,t,n){e===B&&ie(G,t,n),p(e);var r=v(t,!0);return p(n),c(Y,r)?(n.enumerable?(c(e,F)&&e[F][r]&&(e[F][r]=!1),n=m(n,{enumerable:g(0,!1)})):(c(e,F)||q(e,F,g(1,{})),e[F][r]=!0),ne(e,r,n)):q(e,r,n)},ae=function(e,t){p(e);var n=h(t),r=y(n).concat(se(n));return L(r,(function(t){a&&!ue.call(n,t)||ie(e,t,n[t])})),e},ue=function(e){var t=v(e,!0),n=K.call(this,t);return!(this===B&&c(Y,t)&&!c(G,t))&&(!(n||!c(this,t)||!c(Y,t)||c(this,F)&&this[F][t])||n)},le=function(e,t){var n=h(e),r=v(t,!0);if(n!==B||!c(Y,r)||c(G,r)){var o=Q(n,r);return!o||!c(Y,r)||c(n,F)&&n[F][r]||(o.enumerable=!0),o}},ce=function(e){var t=H(h(e)),n=[];return L(t,(function(e){c(Y,e)||c(O,e)||n.push(e)})),n},se=function(e){var t=e===B,n=H(t?G:h(e)),r=[];return L(n,(function(e){!c(Y,e)||t&&!c(B,e)||r.push(Y[e])})),r};u||(P((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=A(e),n=function(e){this===B&&n.call(G,e),c(this,F)&&c(this[F],t)&&(this[F][t]=!1),ne(this,t,g(1,e))};return a&&te&&ne(B,t,{configurable:!0,set:n}),re(t,e)}).prototype,"toString",(function(){return U(this).tag})),k.f=ue,S.f=ie,E.f=le,b.f=x.f=ce,w.f=se,a&&(q(V.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),i||P(B,"propertyIsEnumerable",ue,{unsafe:!0})),R.f=function(e){return re(N(e),e)}),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:V}),L(y(Z),(function(e){I(e)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(e){var t=String(e);if(c(X,t))return X[t];var n=V(t);return X[t]=n,J[n]=t,n},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(c(J,e))return J[e]},useSetter:function(){te=!0},useSimple:function(){te=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(e,t){return void 0===t?m(e):ae(m(e),t)},defineProperty:ie,defineProperties:ae,getOwnPropertyDescriptor:le}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ce,getOwnPropertySymbols:se}),r({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(d(e))}}),W&&r({target:"JSON",stat:!0,forced:!u||l((function(){var e=V();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))}))},{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(f(t)||void 0!==e)&&!oe(e))return s(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!oe(t))return t}),r[1]=t,$.apply(W,r)}}),V.prototype[z]||T(V.prototype,z,V.prototype.valueOf),M(V,"Symbol"),O[F]=!0},function(e,t,n){(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===(void 0===t?"undefined":n(t))&&(r=t)}e.exports=r}).call(this,n(41))},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(2),a=n(12),u=n(4),l=n(10).f,c=n(108),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(p,s);var d=p.prototype=s.prototype;d.constructor=p;var h=d.toString,v="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;l(d,"description",{configurable:!0,get:function(){var e=u(this)?this.valueOf():this,t=h.call(e);if(a(f,e))return"";var n=v?t.slice(7,-1):t.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(e,t,n){n(20)("asyncIterator")},function(e,t,n){n(20)("hasInstance")},function(e,t,n){n(20)("isConcatSpreadable")},function(e,t,n){n(20)("iterator")},function(e,t,n){n(20)("match")},function(e,t,n){n(20)("replace")},function(e,t,n){n(20)("search")},function(e,t,n){n(20)("species")},function(e,t,n){n(20)("split")},function(e,t,n){n(20)("toPrimitive")},function(e,t,n){n(20)("toStringTag")},function(e,t,n){n(20)("unscopables")},function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(58),a=n(4),u=n(11),l=n(9),c=n(46),s=n(60),f=n(61),p=n(6)("isConcatSpreadable"),d=!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=f("concat"),v=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!d||!h},{concat:function(e){var t,n,r,o,i,a=u(this),f=s(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],v(i)){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&c(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(f,p++,i)}return f.length=p,f}})},function(e,t,n){var r=n(0),o=n(115),i=n(36);r({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},function(e,t,n){"use strict";var r=n(0),o=n(13).every;r({target:"Array",proto:!0,forced:n(37)("every")},{every:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){var r=n(0),o=n(88),i=n(36);r({target:"Array",proto:!0},{fill:o}),i("fill")},function(e,t,n){"use strict";var r=n(0),o=n(13).filter;r({target:"Array",proto:!0,forced:!n(61)("filter")},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(13).find,i=n(36),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(e,t,n){"use strict";var r=n(0),o=n(13).findIndex,i=n(36),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(e,t,n){"use strict";var r=n(0),o=n(116),i=n(11),a=n(9),u=n(24),l=n(60);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=a(t.length),r=l(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:u(e)),r}})},function(e,t,n){"use strict";var r=n(0),o=n(116),i=n(11),a=n(9),u=n(26),l=n(60);r({target:"Array",proto:!0},{flatMap:function(e){var t,n=i(this),r=a(n.length);return u(e),(t=l(n,0)).length=o(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},function(e,t,n){"use strict";var r=n(0),o=n(117);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(e,t,n){var r=n(0),o=n(118);r({target:"Array",stat:!0,forced:!n(70)((function(e){Array.from(e)}))},{from:o})},function(e,t,n){"use strict";var r=n(0),o=n(56).includes,i=n(36);r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(e,t,n){"use strict";var r=n(0),o=n(56).indexOf,i=n(37),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,l=i("indexOf");r({target:"Array",proto:!0,forced:u||l},{indexOf:function(e){return u?a.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(52),i=n(19),a=n(37),u=[].join,l=o!=Object,c=a("join",",");r({target:"Array",proto:!0,forced:l||c},{join:function(e){return u.call(i(this),void 0===e?",":e)}})},function(e,t,n){var r=n(0),o=n(123);r({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},function(e,t,n){"use strict";var r=n(0),o=n(13).map;r({target:"Array",proto:!0,forced:!n(61)("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(46);r({target:"Array",stat:!0,forced:o((function(){function e(){}return!(Array.of.call(e)instanceof e)}))},{of:function(){for(var e=0,t=arguments.length,n=new("function"==typeof this?this:Array)(t);t>e;)i(n,e,arguments[e++]);return n.length=t,n}})},function(e,t,n){"use strict";var r=n(0),o=n(72).left;r({target:"Array",proto:!0,forced:n(37)("reduce")},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(72).right;r({target:"Array",proto:!0,forced:n(37)("reduceRight")},{reduceRight:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(4),i=n(58),a=n(44),u=n(9),l=n(19),c=n(46),s=n(61),f=n(6)("species"),p=[].slice,d=Math.max;r({target:"Array",proto:!0,forced:!s("slice")},{slice:function(e,t){var n,r,s,h=l(this),v=u(h.length),g=a(e,v),m=a(void 0===t?v:t,v);if(i(h)&&("function"!=typeof(n=h.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[f])&&(n=void 0):n=void 0,n===Array||void 0===n))return p.call(h,g,m);for(r=new(void 0===n?Array:n)(d(m-g,0)),s=0;g<m;g++,s++)g in h&&c(r,s,h[g]);return r.length=s,r}})},function(e,t,n){"use strict";var r=n(0),o=n(13).some;r({target:"Array",proto:!0,forced:n(37)("some")},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){n(49)("Array")},function(e,t,n){"use strict";var r=n(0),o=n(44),i=n(24),a=n(9),u=n(11),l=n(60),c=n(46),s=n(61),f=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!s("splice")},{splice:function(e,t){var n,r,s,d,h,v,g=u(this),m=a(g.length),y=o(e,m),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=m-y):(n=b-2,r=p(f(i(t),0),m-y)),m+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=l(g,r),d=0;d<r;d++)(h=y+d)in g&&c(s,d,g[h]);if(s.length=r,n<r){for(d=y;d<m-r;d++)v=d+n,(h=d+r)in g?g[v]=g[h]:delete g[v];for(d=m;d>m-r+n;d--)delete g[d-1]}else if(n>r)for(d=m-r;d>y;d--)v=d+n-1,(h=d+r-1)in g?g[v]=g[h]:delete g[v];for(d=0;d<n;d++)g[d+y]=arguments[d+2];return g.length=m-r+n,s}})},function(e,t,n){n(36)("flat")},function(e,t,n){n(36)("flatMap")},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(124),a=n(49),u=i.ArrayBuffer;r({global:!0,forced:o.ArrayBuffer!==u},{ArrayBuffer:u}),a("ArrayBuffer")},function(e,t,n){var r=n(14),o=n(197),i=n(6)("toPrimitive"),a=Date.prototype;i in a||r(a,i,o)},function(e,t,n){"use strict";var r=n(5),o=n(27);e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return o(r(this),"number"!==e)}},function(e,t,n){"use strict";var r=n(4),o=n(10),i=n(29),a=n(6)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(e){if("function"!=typeof this||!r(e))return!1;if(!r(this.prototype))return e instanceof this;for(;e=i(e);)if(this.prototype===e)return!0;return!1}})},function(e,t,n){var r=n(8),o=n(10).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(e){return""}}})},function(e,t,n){var r=n(2);n(28)(r.JSON,"JSON",!0)},function(e,t,n){"use strict";var r=n(73),o=n(126);e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o,!0)},function(e,t,n){var r=n(0),o=n(127),i=Math.acosh,a=Math.log,u=Math.sqrt,l=Math.LN2;r({target:"Math",stat:!0,forced:!i||710!=Math.floor(i(Number.MAX_VALUE))||i(1/0)!=1/0},{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?a(e)+l:o(e-1+u(e-1)*u(e+1))}})},function(e,t,n){var r=n(0),o=Math.asinh,i=Math.log,a=Math.sqrt;r({target:"Math",stat:!0,forced:!(o&&1/o(0)>0)},{asinh:function e(t){return isFinite(t=+t)&&0!=t?t<0?-e(-t):i(t+a(t*t+1)):t}})},function(e,t,n){var r=n(0),o=Math.atanh,i=Math.log;r({target:"Math",stat:!0,forced:!(o&&1/o(-0)<0)},{atanh:function(e){return 0==(e=+e)?e:i((1+e)/(1-e))/2}})},function(e,t,n){var r=n(0),o=n(93),i=Math.abs,a=Math.pow;r({target:"Math",stat:!0},{cbrt:function(e){return o(e=+e)*a(i(e),1/3)}})},function(e,t,n){var r=n(0),o=Math.floor,i=Math.log,a=Math.LOG2E;r({target:"Math",stat:!0},{clz32:function(e){return(e>>>=0)?31-o(i(e+.5)*a):32}})},function(e,t,n){var r=n(0),o=n(74),i=Math.cosh,a=Math.abs,u=Math.E;r({target:"Math",stat:!0,forced:!i||i(710)===1/0},{cosh:function(e){var t=o(a(e)-1)+1;return(t+1/(t*u*u))*(u/2)}})},function(e,t,n){var r=n(0),o=n(74);r({target:"Math",stat:!0,forced:o!=Math.expm1},{expm1:o})},function(e,t,n){n(0)({target:"Math",stat:!0},{fround:n(210)})},function(e,t,n){var r=n(93),o=Math.abs,i=Math.pow,a=i(2,-52),u=i(2,-23),l=i(2,127)*(2-u),c=i(2,-126);e.exports=Math.fround||function(e){var t,n,i=o(e),s=r(e);return i<c?s*(i/c/u+1/a-1/a)*c*u:(n=(t=(1+u/a)*i)-(t-i))>l||n!=n?s*(1/0):s*n}},function(e,t,n){var r=n(0),o=Math.hypot,i=Math.abs,a=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(e,t){for(var n,r,o=0,u=0,l=arguments.length,c=0;u<l;)c<(n=i(arguments[u++]))?(o=o*(r=c/n)*r+1,c=n):o+=n>0?(r=n/c)*r:n;return c===1/0?1/0:c*a(o)}})},function(e,t,n){var r=n(0),o=n(1),i=Math.imul;r({target:"Math",stat:!0,forced:o((function(){return-5!=i(4294967295,5)||2!=i.length}))},{imul:function(e,t){var n=+e,r=+t,o=65535&n,i=65535&r;return 0|o*i+((65535&n>>>16)*i+o*(65535&r>>>16)<<16>>>0)}})},function(e,t,n){var r=n(0),o=Math.log,i=Math.LOG10E;r({target:"Math",stat:!0},{log10:function(e){return o(e)*i}})},function(e,t,n){n(0)({target:"Math",stat:!0},{log1p:n(127)})},function(e,t,n){var r=n(0),o=Math.log,i=Math.LN2;r({target:"Math",stat:!0},{log2:function(e){return o(e)/i}})},function(e,t,n){n(0)({target:"Math",stat:!0},{sign:n(93)})},function(e,t,n){var r=n(0),o=n(1),i=n(74),a=Math.abs,u=Math.exp,l=Math.E;r({target:"Math",stat:!0,forced:o((function(){return-2e-17!=Math.sinh(-2e-17)}))},{sinh:function(e){return a(e=+e)<1?(i(e)-i(-e))/2:(u(e-1)-u(-e-1))*(l/2)}})},function(e,t,n){var r=n(0),o=n(74),i=Math.exp;r({target:"Math",stat:!0},{tanh:function(e){var t=o(e=+e),n=o(-e);return t==1/0?1:n==1/0?-1:(t-n)/(i(e)+i(-e))}})},function(e,t,n){n(28)(Math,"Math",!0)},function(e,t,n){var r=n(0),o=Math.ceil,i=Math.floor;r({target:"Math",stat:!0},{trunc:function(e){return(e>0?i:o)(e)}})},function(e,t,n){"use strict";var r=n(8),o=n(2),i=n(57),a=n(15),u=n(12),l=n(25),c=n(92),s=n(27),f=n(1),p=n(45),d=n(43).f,h=n(16).f,v=n(10).f,g=n(51).trim,m=o.Number,y=m.prototype,b="Number"==l(p(y)),x=function(e){var t,n,r,o,i,a,u,l,c=s(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=g(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+c}for(a=(i=c.slice(2)).length,u=0;u<a;u++)if((l=i.charCodeAt(u))<48||l>o)return NaN;return parseInt(i,r)}return+c};if(i("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(b?f((function(){y.valueOf.call(n)})):"Number"!=l(n))?c(new m(x(t)),n,E):x(t)},S=r?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;S.length>k;k++)u(m,w=S[k])&&!u(E,w)&&v(E,w,h(m,w));E.prototype=y,y.constructor=E,a(o,"Number",E)}},function(e,t,n){n(0)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(e,t,n){n(0)({target:"Number",stat:!0},{isFinite:n(224)})},function(e,t,n){var r=n(2).isFinite;e.exports=Number.isFinite||function(e){return"number"==typeof e&&r(e)}},function(e,t,n){n(0)({target:"Number",stat:!0},{isInteger:n(128)})},function(e,t,n){n(0)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},function(e,t,n){var r=n(0),o=n(128),i=Math.abs;r({target:"Number",stat:!0},{isSafeInteger:function(e){return o(e)&&i(e)<=9007199254740991}})},function(e,t,n){n(0)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(e,t,n){n(0)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(e,t,n){var r=n(0),o=n(231);r({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},function(e,t,n){var r=n(2),o=n(51).trim,i=n(75),a=r.parseFloat,u=1/a(i+"-0")!=-1/0;e.exports=u?function(e){var t=o(String(e)),n=a(t);return 0===n&&"-"==t.charAt(0)?-0:n}:a},function(e,t,n){var r=n(0),o=n(233);r({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},function(e,t,n){var r=n(2),o=n(51).trim,i=n(75),a=r.parseInt,u=/^[+-]?0[Xx]/,l=8!==a(i+"08")||22!==a(i+"0x16");e.exports=l?function(e,t){var n=o(String(e));return a(n,t>>>0||(u.test(n)?16:10))}:a},function(e,t,n){"use strict";var r=n(0),o=n(24),i=n(235),a=n(94),u=n(1),l=1..toFixed,c=Math.floor,s=function(e,t,n){return 0===t?n:t%2==1?s(e,t-1,n*e):s(e*e,t/2,n)};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){l.call({})}))},{toFixed:function(e){var t,n,r,u,l=i(this),f=o(e),p=[0,0,0,0,0,0],d="",h="0",v=function(e,t){for(var n=-1,r=t;++n<6;)r+=e*p[n],p[n]=r%1e7,r=c(r/1e7)},g=function(e){for(var t=6,n=0;--t>=0;)n+=p[t],p[t]=c(n/e),n=n%e*1e7},m=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+a.call("0",7-n.length)+n}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(d="-",l=-l),l>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(l*s(2,69,1))-69)<0?l*s(2,-t,1):l/s(2,t,1),n*=4503599627370496,(t=52-t)>0){for(v(0,n),r=f;r>=7;)v(1e7,0),r-=7;for(v(s(10,r,1),0),r=t-1;r>=23;)g(1<<23),r-=23;g(1<<r),v(1,1),g(2),h=m()}else v(0,n),v(1<<-t,0),h=m()+a.call("0",f);return h=f>0?d+((u=h.length)<=f?"0."+a.call("0",f-u)+h:h.slice(0,u-f)+"."+h.slice(u-f)):d+h}})},function(e,t,n){var r=n(25);e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},function(e,t,n){var r=n(0),o=n(129);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(76),a=n(11),u=n(26),l=n(10);o&&r({target:"Object",proto:!0,forced:i},{__defineGetter__:function(e,t){l.f(a(this),e,{get:u(t),enumerable:!0,configurable:!0})}})},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(76),a=n(11),u=n(26),l=n(10);o&&r({target:"Object",proto:!0,forced:i},{__defineSetter__:function(e,t){l.f(a(this),e,{set:u(t),enumerable:!0,configurable:!0})}})},function(e,t,n){var r=n(0),o=n(130).entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},function(e,t,n){var r=n(0),o=n(65),i=n(1),a=n(4),u=n(47).onFreeze,l=Object.freeze;r({target:"Object",stat:!0,forced:i((function(){l(1)})),sham:!o},{freeze:function(e){return l&&a(e)?l(u(e)):e}})},function(e,t,n){var r=n(0),o=n(66),i=n(46);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){i(t,e,n)}),void 0,!0),t}})},function(e,t,n){var r=n(0),o=n(1),i=n(19),a=n(16).f,u=n(8),l=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!u||l,sham:!u},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},function(e,t,n){var r=n(0),o=n(8),i=n(84),a=n(19),u=n(16),l=n(46);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),o=u.f,c=i(r),s={},f=0;c.length>f;)void 0!==(n=o(r,t=c[f++]))&&l(s,t,n);return s}})},function(e,t,n){var r=n(0),o=n(1),i=n(113).f;r({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},function(e,t,n){var r=n(0),o=n(1),i=n(11),a=n(29),u=n(91);r({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!u},{getPrototypeOf:function(e){return a(i(e))}})},function(e,t,n){n(0)({target:"Object",stat:!0},{is:n(131)})},function(e,t,n){var r=n(0),o=n(1),i=n(4),a=Object.isExtensible;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isExtensible:function(e){return!!i(e)&&(!a||a(e))}})},function(e,t,n){var r=n(0),o=n(1),i=n(4),a=Object.isFrozen;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:function(e){return!i(e)||!!a&&a(e)}})},function(e,t,n){var r=n(0),o=n(1),i=n(4),a=Object.isSealed;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isSealed:function(e){return!i(e)||!!a&&a(e)}})},function(e,t,n){var r=n(0),o=n(11),i=n(59);r({target:"Object",stat:!0,forced:n(1)((function(){i(1)}))},{keys:function(e){return i(o(e))}})},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(76),a=n(11),u=n(27),l=n(29),c=n(16).f;o&&r({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(e){var t,n=a(this),r=u(e,!0);do{if(t=c(n,r))return t.get}while(n=l(n))}})},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(76),a=n(11),u=n(27),l=n(29),c=n(16).f;o&&r({target:"Object",proto:!0,forced:i},{__lookupSetter__:function(e){var t,n=a(this),r=u(e,!0);do{if(t=c(n,r))return t.set}while(n=l(n))}})},function(e,t,n){var r=n(0),o=n(4),i=n(47).onFreeze,a=n(65),u=n(1),l=Object.preventExtensions;r({target:"Object",stat:!0,forced:u((function(){l(1)})),sham:!a},{preventExtensions:function(e){return l&&o(e)?l(i(e)):e}})},function(e,t,n){var r=n(0),o=n(4),i=n(47).onFreeze,a=n(65),u=n(1),l=Object.seal;r({target:"Object",stat:!0,forced:u((function(){l(1)})),sham:!a},{seal:function(e){return l&&o(e)?l(i(e)):e}})},function(e,t,n){var r=n(15),o=n(256),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(e,t,n){"use strict";var r=n(69),o={};o[n(6)("toStringTag")]="z",e.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(e,t,n){var r=n(0),o=n(130).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},function(e,t,n){"use strict";var r,o,i,a,u=n(0),l=n(33),c=n(2),s=n(85),f=n(132),p=n(15),d=n(50),h=n(28),v=n(49),g=n(4),m=n(26),y=n(38),b=n(25),x=n(66),w=n(70),E=n(48),S=n(133).set,k=n(134),T=n(135),P=n(259),C=n(136),_=n(260),O=n(95),A=n(23),N=n(57),R=n(6)("species"),I="Promise",M=A.get,j=A.set,L=A.getterFor(I),F=f,z=c.TypeError,D=c.document,U=c.process,B=c.fetch,V=U&&U.versions,W=V&&V.v8||"",$=C.f,Q=$,q="process"==b(U),H=!!(D&&D.createEvent&&c.dispatchEvent),K=N(I,(function(){var e=F.resolve(1),t=function(){},n=(e.constructor={})[R]=function(e){e(t,t)};return!((q||"function"==typeof PromiseRejectionEvent)&&(!l||e.finally)&&e.then(t)instanceof n&&0!==W.indexOf("6.6")&&-1===O.indexOf("Chrome/66"))})),Y=K||!w((function(e){F.all(e).catch((function(){}))})),G=function(e){var t;return!(!g(e)||"function"!=typeof(t=e.then))&&t},X=function(e,t,n){if(!t.notified){t.notified=!0;var r=t.reactions;k((function(){for(var o=t.value,i=1==t.state,a=0;r.length>a;){var u,l,c,s=r[a++],f=i?s.ok:s.fail,p=s.resolve,d=s.reject,h=s.domain;try{f?(i||(2===t.rejection&&te(e,t),t.rejection=1),!0===f?u=o:(h&&h.enter(),u=f(o),h&&(h.exit(),c=!0)),u===s.promise?d(z("Promise-chain cycle")):(l=G(u))?l.call(u,p,d):p(u)):d(o)}catch(e){h&&!c&&h.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&Z(e,t)}))}},J=function(e,t,n){var r,o;H?((r=D.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),c.dispatchEvent(r)):r={promise:t,reason:n},(o=c["on"+e])?o(r):"unhandledrejection"===e&&P("Unhandled promise rejection",n)},Z=function(e,t){S.call(c,(function(){var n,r=t.value;if(ee(t)&&(n=_((function(){q?U.emit("unhandledRejection",r,e):J("unhandledrejection",e,r)})),t.rejection=q||ee(t)?2:1,n.error))throw n.value}))},ee=function(e){return 1!==e.rejection&&!e.parent},te=function(e,t){S.call(c,(function(){q?U.emit("rejectionHandled",e):J("rejectionhandled",e,t.value)}))},ne=function(e,t,n,r){return function(o){e(t,n,o,r)}},re=function(e,t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,X(e,t,!0))},oe=function(e,t,n,r){if(!t.done){t.done=!0,r&&(t=r);try{if(e===n)throw z("Promise can't be resolved itself");var o=G(n);o?k((function(){var r={done:!1};try{o.call(n,ne(oe,e,r,t),ne(re,e,r,t))}catch(n){re(e,r,n,t)}})):(t.value=n,t.state=1,X(e,t,!1))}catch(n){re(e,{done:!1},n,t)}}};K&&(F=function(e){y(this,F,I),m(e),r.call(this);var t=M(this);try{e(ne(oe,this,t),ne(re,this,t))}catch(e){re(this,t,e)}},(r=function(e){j(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(F.prototype,{then:function(e,t){var n=L(this),r=$(E(this,F));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=q?U.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=M(e);this.promise=e,this.resolve=ne(oe,e,t),this.reject=ne(re,e,t)},C.f=$=function(e){return e===F||e===i?new o(e):Q(e)},l||"function"!=typeof f||(a=f.prototype.then,p(f.prototype,"then",(function(e,t){var n=this;return new F((function(e,t){a.call(n,e,t)})).then(e,t)})),"function"==typeof B&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return T(F,B.apply(c,arguments))}}))),u({global:!0,wrap:!0,forced:K},{Promise:F}),h(F,I,!1,!0),v(I),i=s[I],u({target:I,stat:!0,forced:K},{reject:function(e){var t=$(this);return t.reject.call(void 0,e),t.promise}}),u({target:I,stat:!0,forced:l||K},{resolve:function(e){return T(l&&this===i?F:this,e)}}),u({target:I,stat:!0,forced:Y},{all:function(e){var t=this,n=$(t),r=n.resolve,o=n.reject,i=_((function(){var n=m(t.resolve),i=[],a=0,u=1;x(e,(function(e){var l=a++,c=!1;i.push(void 0),u++,n.call(t,e).then((function(e){c||(c=!0,i[l]=e,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=$(t),r=n.reject,o=_((function(){var o=m(t.resolve);x(e,(function(e){o.call(t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(e,t,n){var r=n(2);e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}},function(e,t,n){"use strict";var r=n(0),o=n(33),i=n(132),a=n(34),u=n(48),l=n(135),c=n(15);r({target:"Promise",proto:!0,real:!0},{finally:function(e){var t=u(this,a("Promise")),n="function"==typeof e;return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),o||"function"!=typeof i||i.prototype.finally||c(i.prototype,"finally",a("Promise").prototype.finally)},function(e,t,n){var r=n(0),o=n(34),i=n(26),a=n(5),u=n(1),l=o("Reflect","apply"),c=Function.apply;r({target:"Reflect",stat:!0,forced:!u((function(){l((function(){}))}))},{apply:function(e,t,n){return i(e),a(n),l?l(e,t,n):c.call(e,t,n)}})},function(e,t,n){var r=n(0),o=n(34),i=n(26),a=n(5),u=n(4),l=n(45),c=n(264),s=n(1),f=o("Reflect","construct"),p=s((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),d=!s((function(){f((function(){}))})),h=p||d;r({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(d&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(c.apply(e,r))}var o=n.prototype,s=l(u(o)?o:Object.prototype),h=Function.apply.call(e,s,t);return u(h)?h:s}})},function(e,t,n){"use strict";var r=n(26),o=n(4),i=[].slice,a={},u=function(e,t,n){if(!(t in a)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";a[t]=Function("C,a","return new C("+r.join(",")+")")}return a[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=i.call(arguments,1),a=function(){var r=n.concat(i.call(arguments));return this instanceof a?u(t,r.length,r):t.apply(e,r)};return o(t.prototype)&&(a.prototype=t.prototype),a}},function(e,t,n){var r=n(0),o=n(8),i=n(5),a=n(27),u=n(10);r({target:"Reflect",stat:!0,forced:n(1)((function(){Reflect.defineProperty(u.f({},1,{value:1}),1,{value:2})})),sham:!o},{defineProperty:function(e,t,n){i(e);var r=a(t,!0);i(n);try{return u.f(e,r,n),!0}catch(e){return!1}}})},function(e,t,n){var r=n(0),o=n(5),i=n(16).f;r({target:"Reflect",stat:!0},{deleteProperty:function(e,t){var n=i(o(e),t);return!(n&&!n.configurable)&&delete e[t]}})},function(e,t,n){var r=n(0),o=n(4),i=n(5),a=n(12),u=n(16),l=n(29);r({target:"Reflect",stat:!0},{get:function e(t,n){var r,c,s=arguments.length<3?t:arguments[2];return i(t)===s?t[n]:(r=u.f(t,n))?a(r,"value")?r.value:void 0===r.get?void 0:r.get.call(s):o(c=l(t))?e(c,n,s):void 0}})},function(e,t,n){var r=n(0),o=n(8),i=n(5),a=n(16);r({target:"Reflect",stat:!0,sham:!o},{getOwnPropertyDescriptor:function(e,t){return a.f(i(e),t)}})},function(e,t,n){var r=n(0),o=n(5),i=n(29);r({target:"Reflect",stat:!0,sham:!n(91)},{getPrototypeOf:function(e){return i(o(e))}})},function(e,t,n){n(0)({target:"Reflect",stat:!0},{has:function(e,t){return t in e}})},function(e,t,n){var r=n(0),o=n(5),i=Object.isExtensible;r({target:"Reflect",stat:!0},{isExtensible:function(e){return o(e),!i||i(e)}})},function(e,t,n){n(0)({target:"Reflect",stat:!0},{ownKeys:n(84)})},function(e,t,n){var r=n(0),o=n(34),i=n(5);r({target:"Reflect",stat:!0,sham:!n(65)},{preventExtensions:function(e){i(e);try{var t=o("Object","preventExtensions");return t&&t(e),!0}catch(e){return!1}}})},function(e,t,n){var r=n(0),o=n(5),i=n(4),a=n(12),u=n(10),l=n(16),c=n(29),s=n(42);r({target:"Reflect",stat:!0},{set:function e(t,n,r){var f,p,d=arguments.length<4?t:arguments[3],h=l.f(o(t),n);if(!h){if(i(p=c(t)))return e(p,n,r,d);h=s(0)}if(a(h,"value")){if(!1===h.writable||!i(d))return!1;if(f=l.f(d,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=r,u.f(d,n,f)}else u.f(d,n,s(0,r));return!0}return void 0!==h.set&&(h.set.call(d,r),!0)}})},function(e,t,n){var r=n(0),o=n(5),i=n(122),a=n(64);a&&r({target:"Reflect",stat:!0},{setPrototypeOf:function(e,t){o(e),i(t);try{return a(e,t),!0}catch(e){return!1}}})},function(e,t,n){var r=n(8),o=n(2),i=n(57),a=n(92),u=n(10).f,l=n(43).f,c=n(96),s=n(77),f=n(15),p=n(1),d=n(49),h=n(6)("match"),v=o.RegExp,g=v.prototype,m=/a/g,y=/a/g,b=new v(m)!==m;if(r&&i("RegExp",!b||p((function(){return y[h]=!1,v(m)!=m||v(y)==y||"/a/i"!=v(m,"i")})))){for(var x=function(e,t){var n=this instanceof x,r=c(e),o=void 0===t;return!n&&r&&e.constructor===x&&o?e:a(b?new v(r&&!o?e.source:e,t):v((r=e instanceof x)?e.source:e,r&&o?s.call(e):t),n?this:g,x)},w=function(e){e in x||u(x,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},E=l(v),S=0;E.length>S;)w(E[S++]);g.constructor=x,x.prototype=g,f(o,"RegExp",x)}d("RegExp")},function(e,t,n){"use strict";var r=n(0),o=n(78);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(e,t,n){var r=n(8),o=n(10),i=n(77);r&&"g"!=/./g.flags&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},function(e,t,n){"use strict";var r=n(15),o=n(5),i=n(1),a=n(77),u=RegExp.prototype,l=u.toString,c=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),s="toString"!=l.name;(c||s)&&r(RegExp.prototype,"toString",(function(){var e=o(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in u)?a.call(e):n)}),{unsafe:!0})},function(e,t,n){"use strict";var r=n(73),o=n(126);e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},function(e,t,n){"use strict";var r=n(0),o=n(79).codeAt;r({target:"String",proto:!0},{codePointAt:function(e){return o(this,e)}})},function(e,t,n){"use strict";var r=n(0),o=n(9),i=n(97),a=n(17),u=n(98),l="".endsWith,c=Math.min;r({target:"String",proto:!0,forced:!u("endsWith")},{endsWith:function(e){var t=String(a(this));i(e);var n=arguments.length>1?arguments[1]:void 0,r=o(t.length),u=void 0===n?r:c(o(n),r),s=String(e);return l?l.call(t,s,u):t.slice(u-s.length,u)===s}})},function(e,t,n){var r=n(0),o=n(44),i=String.fromCharCode,a=String.fromCodePoint;r({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function(e){for(var t,n=[],r=arguments.length,a=0;r>a;){if(t=+arguments[a++],o(t,1114111)!==t)throw RangeError(t+" is not a valid code point");n.push(t<65536?i(t):i(55296+((t-=65536)>>10),t%1024+56320))}return n.join("")}})},function(e,t,n){"use strict";var r=n(0),o=n(97),i=n(17);r({target:"String",proto:!0,forced:!n(98)("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(80),o=n(5),i=n(9),a=n(17),u=n(99),l=n(81);r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),c=String(this);if(!a.global)return l(a,c);var s=a.unicode;a.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(a,c));){var h=String(f[0]);p[d]=h,""===h&&(a.lastIndex=u(c,i(a.lastIndex),s)),d++}return 0===d?null:p}]}))},function(e,t,n){"use strict";var r=n(0),o=n(138).end;r({target:"String",proto:!0,forced:n(139)},{padEnd:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){"use strict";var r=n(0),o=n(138).start;r({target:"String",proto:!0,forced:n(139)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,n){var r=n(0),o=n(19),i=n(9);r({target:"String",stat:!0},{raw:function(e){for(var t=o(e.raw),n=i(t.length),r=arguments.length,a=[],u=0;n>u;)a.push(String(t[u++])),u<r&&a.push(String(arguments[u]));return a.join("")}})},function(e,t,n){n(0)({target:"String",proto:!0},{repeat:n(94)})},function(e,t,n){"use strict";var r=n(80),o=n(5),i=n(11),a=n(9),u=n(24),l=n(17),c=n(99),s=n(81),f=Math.max,p=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n){return[function(n,r){var o=l(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,i){var l=n(t,e,this,i);if(l.done)return l.value;var d=o(e),h=String(this),v="function"==typeof i;v||(i=String(i));var g=d.global;if(g){var m=d.unicode;d.lastIndex=0}for(var y=[];;){var b=s(d,h);if(null===b)break;if(y.push(b),!g)break;""===String(b[0])&&(d.lastIndex=c(h,a(d.lastIndex),m))}for(var x,w="",E=0,S=0;S<y.length;S++){b=y[S];for(var k=String(b[0]),T=f(p(u(b.index),h.length),0),P=[],C=1;C<b.length;C++)P.push(void 0===(x=b[C])?x:String(x));var _=b.groups;if(v){var O=[k].concat(P,T,h);void 0!==_&&O.push(_);var A=String(i.apply(void 0,O))}else A=r(k,h,T,P,_,i);T>=E&&(w+=h.slice(E,T)+A,E=T+k.length)}return w+h.slice(E)}];function r(e,n,r,o,a,u){var l=r+e.length,c=o.length,s=v;return void 0!==a&&(a=i(a),s=h),t.call(u,s,(function(t,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":u=a[i.slice(1,-1)];break;default:var s=+i;if(0===s)return t;if(s>c){var f=d(s/10);return 0===f?t:f<=c?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):t}u=o[s-1]}return void 0===u?"":u}))}}))},function(e,t,n){"use strict";var r=n(80),o=n(5),i=n(17),a=n(131),u=n(81);r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=o(e),l=String(this),c=i.lastIndex;a(c,0)||(i.lastIndex=0);var s=u(i,l);return a(i.lastIndex,c)||(i.lastIndex=c),null===s?-1:s.index}]}))},function(e,t,n){"use strict";var r=n(80),o=n(96),i=n(5),a=n(17),u=n(48),l=n(99),c=n(9),s=n(81),f=n(78),p=n(1),d=[].push,h=Math.min,v=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);for(var u,l,c,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=new RegExp(e.source,p+"g");(u=f.call(v,r))&&!((l=v.lastIndex)>h&&(s.push(r.slice(h,u.index)),u.length>1&&u.index<r.length&&d.apply(s,u.slice(1)),c=u[0].length,h=l,s.length>=i));)v.lastIndex===u.index&&v.lastIndex++;return h===r.length?!c&&v.test("")||s.push(""):s.push(r.slice(h)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var f=i(e),p=String(this),d=u(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new d(v?f:"^(?:"+f.source+")",m),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===s(y,p)?[p]:[];for(var x=0,w=0,E=[];w<p.length;){y.lastIndex=v?w:0;var S,k=s(y,v?p:p.slice(w));if(null===k||(S=h(c(y.lastIndex+(v?0:w)),p.length))===x)w=l(p,w,g);else{if(E.push(p.slice(x,w)),E.length===b)return E;for(var T=1;T<=k.length-1;T++)if(E.push(k[T]),E.length===b)return E;w=x=S}}return E.push(p.slice(x)),E}]}),!v)},function(e,t,n){"use strict";var r=n(0),o=n(9),i=n(97),a=n(17),u=n(98),l="".startsWith,c=Math.min;r({target:"String",proto:!0,forced:!u("startsWith")},{startsWith:function(e){var t=String(a(this));i(e);var n=o(c(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return l?l.call(t,r,n):t.slice(n,n+r.length)===r}})},function(e,t,n){"use strict";var r=n(0),o=n(51).trim;r({target:"String",proto:!0,forced:n(100)("trim")},{trim:function(){return o(this)}})},function(e,t,n){"use strict";var r=n(0),o=n(51).end,i=n(100)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;r({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},function(e,t,n){"use strict";var r=n(0),o=n(51).start,i=n(100)("trimStart"),a=i?function(){return o(this)}:"".trimStart;r({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("anchor")},{anchor:function(e){return o(this,"a","name",e)}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("big")},{big:function(){return o(this,"big","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("blink")},{blink:function(){return o(this,"blink","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("bold")},{bold:function(){return o(this,"b","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("fixed")},{fixed:function(){return o(this,"tt","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("fontcolor")},{fontcolor:function(e){return o(this,"font","color",e)}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("fontsize")},{fontsize:function(e){return o(this,"font","size",e)}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("italics")},{italics:function(){return o(this,"i","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("link")},{link:function(e){return o(this,"a","href",e)}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("small")},{small:function(){return o(this,"small","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("strike")},{strike:function(){return o(this,"strike","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("sub")},{sub:function(){return o(this,"sub","","")}})},function(e,t,n){"use strict";var r=n(0),o=n(21);r({target:"String",proto:!0,forced:n(22)("sup")},{sup:function(){return o(this,"sup","","")}})},function(e,t,n){n(31)("Float32",4,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Float64",8,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Int8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Int16",2,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Int32",4,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}),!0)},function(e,t,n){n(31)("Uint16",2,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){n(31)("Uint32",4,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},function(e,t,n){"use strict";var r=n(7),o=n(115),i=r.aTypedArray;r.exportProto("copyWithin",(function(e,t){return o.call(i(this),e,t,arguments.length>2?arguments[2]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(13).every,i=r.aTypedArray;r.exportProto("every",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(88),i=r.aTypedArray;r.exportProto("fill",(function(e){return o.apply(i(this),arguments)}))},function(e,t,n){"use strict";var r=n(7),o=n(13).filter,i=n(48),a=r.aTypedArray,u=r.aTypedArrayConstructor;r.exportProto("filter",(function(e){for(var t=o(a(this),e,arguments.length>1?arguments[1]:void 0),n=i(this,this.constructor),r=0,l=t.length,c=new(u(n))(l);l>r;)c[r]=t[r++];return c}))},function(e,t,n){"use strict";var r=n(7),o=n(13).find,i=r.aTypedArray;r.exportProto("find",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(13).findIndex,i=r.aTypedArray;r.exportProto("findIndex",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(13).forEach,i=r.aTypedArray;r.exportProto("forEach",(function(e){o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(101),o=n(7),i=n(141);o.exportStatic("from",i,r)},function(e,t,n){"use strict";var r=n(7),o=n(56).includes,i=r.aTypedArray;r.exportProto("includes",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(56).indexOf,i=r.aTypedArray;r.exportProto("indexOf",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(2),o=n(7),i=n(71),a=n(6)("iterator"),u=r.Uint8Array,l=i.values,c=i.keys,s=i.entries,f=o.aTypedArray,p=o.exportProto,d=u&&u.prototype[a],h=!!d&&("values"==d.name||null==d.name),v=function(){return l.call(f(this))};p("entries",(function(){return s.call(f(this))})),p("keys",(function(){return c.call(f(this))})),p("values",v,!h),p(a,v,!h)},function(e,t,n){"use strict";var r=n(7),o=r.aTypedArray,i=[].join;r.exportProto("join",(function(e){return i.apply(o(this),arguments)}))},function(e,t,n){"use strict";var r=n(7),o=n(123),i=r.aTypedArray;r.exportProto("lastIndexOf",(function(e){return o.apply(i(this),arguments)}))},function(e,t,n){"use strict";var r=n(7),o=n(13).map,i=n(48),a=r.aTypedArray,u=r.aTypedArrayConstructor;r.exportProto("map",(function(e){return o(a(this),e,arguments.length>1?arguments[1]:void 0,(function(e,t){return new(u(i(e,e.constructor)))(t)}))}))},function(e,t,n){"use strict";var r=n(7),o=n(101),i=r.aTypedArrayConstructor;r.exportStatic("of",(function(){for(var e=0,t=arguments.length,n=new(i(this))(t);t>e;)n[e]=arguments[e++];return n}),o)},function(e,t,n){"use strict";var r=n(7),o=n(72).left,i=r.aTypedArray;r.exportProto("reduce",(function(e){return o(i(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=n(72).right,i=r.aTypedArray;r.exportProto("reduceRight",(function(e){return o(i(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=r.aTypedArray,i=Math.floor;r.exportProto("reverse",(function(){for(var e,t=o(this).length,n=i(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this}))},function(e,t,n){"use strict";var r=n(7),o=n(9),i=n(140),a=n(11),u=n(1),l=r.aTypedArray,c=u((function(){new Int8Array(1).set({})}));r.exportProto("set",(function(e){l(this);var t=i(arguments.length>1?arguments[1]:void 0,1),n=this.length,r=a(e),u=o(r.length),c=0;if(u+t>n)throw RangeError("Wrong length");for(;c<u;)this[t+c]=r[c++]}),c)},function(e,t,n){"use strict";var r=n(7),o=n(48),i=n(1),a=r.aTypedArray,u=r.aTypedArrayConstructor,l=[].slice,c=i((function(){new Int8Array(1).slice()}));r.exportProto("slice",(function(e,t){for(var n=l.call(a(this),e,t),r=o(this,this.constructor),i=0,c=n.length,s=new(u(r))(c);c>i;)s[i]=n[i++];return s}),c)},function(e,t,n){"use strict";var r=n(7),o=n(13).some,i=r.aTypedArray;r.exportProto("some",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},function(e,t,n){"use strict";var r=n(7),o=r.aTypedArray,i=[].sort;r.exportProto("sort",(function(e){return i.call(o(this),e)}))},function(e,t,n){"use strict";var r=n(7),o=n(9),i=n(44),a=n(48),u=r.aTypedArray;r.exportProto("subarray",(function(e,t){var n=u(this),r=n.length,l=i(e,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+l*n.BYTES_PER_ELEMENT,o((void 0===t?r:i(t,r))-l))}))},function(e,t,n){"use strict";var r=n(2),o=n(7),i=n(1),a=r.Int8Array,u=o.aTypedArray,l=[].toLocaleString,c=[].slice,s=!!a&&i((function(){l.call(new a(1))})),f=i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])}));o.exportProto("toLocaleString",(function(){return l.apply(s?c.call(u(this)):u(this),arguments)}),f)},function(e,t,n){"use strict";var r=n(2),o=n(7),i=n(1),a=r.Uint8Array,u=a&&a.prototype,l=[].toString,c=[].join;i((function(){l.call({})}))&&(l=function(){return c.call(this)}),o.exportProto("toString",l,(u||{}).toString!=l)},function(e,t,n){"use strict";var r,o=n(2),i=n(50),a=n(47),u=n(73),l=n(142),c=n(4),s=n(23).enforce,f=n(107),p=!o.ActiveXObject&&"ActiveXObject"in o,d=Object.isExtensible,h=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},v=e.exports=u("WeakMap",h,l,!0,!0);if(f&&p){r=l.getConstructor(h,"WeakMap",!0),a.REQUIRED=!0;var g=v.prototype,m=g.delete,y=g.has,b=g.get,x=g.set;i(g,{delete:function(e){if(c(e)&&!d(e)){var t=s(this);return t.frozen||(t.frozen=new r),m.call(this,e)||t.frozen.delete(e)}return m.call(this,e)},has:function(e){if(c(e)&&!d(e)){var t=s(this);return t.frozen||(t.frozen=new r),y.call(this,e)||t.frozen.has(e)}return y.call(this,e)},get:function(e){if(c(e)&&!d(e)){var t=s(this);return t.frozen||(t.frozen=new r),y.call(this,e)?b.call(this,e):t.frozen.get(e)}return b.call(this,e)},set:function(e,t){if(c(e)&&!d(e)){var n=s(this);n.frozen||(n.frozen=new r),y.call(this,e)?x.call(this,e,t):n.frozen.set(e,t)}else x.call(this,e,t);return this}})}},function(e,t,n){"use strict";n(73)("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(142),!1,!0)},function(e,t,n){var r=n(2),o=n(143),i=n(117),a=n(14);for(var u in o){var l=r[u],c=l&&l.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(e){c.forEach=i}}},function(e,t,n){var r=n(2),o=n(143),i=n(71),a=n(14),u=n(6),l=u("iterator"),c=u("toStringTag"),s=i.values;for(var f in o){var p=r[f],d=p&&p.prototype;if(d){if(d[l]!==s)try{a(d,l,s)}catch(e){d[l]=s}if(d[c]||a(d,c,f),o[f])for(var h in i)if(d[h]!==i[h])try{a(d,h,i[h])}catch(e){d[h]=i[h]}}}},function(e,t,n){var r=n(0),o=n(2),i=n(134),a=n(25),u=o.process,l="process"==a(u);r({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function(e){var t=l&&u.domain;i(t?t.bind(e):e)}})},function(e,t,n){"use strict";n(137);var r,o=n(0),i=n(8),a=n(144),u=n(2),l=n(111),c=n(15),s=n(38),f=n(12),p=n(129),d=n(118),h=n(79).codeAt,v=n(350),g=n(28),m=n(145),y=n(23),b=u.URL,x=m.URLSearchParams,w=m.getState,E=y.set,S=y.getterFor("URL"),k=Math.floor,T=Math.pow,P=/[A-Za-z]/,C=/[\d+\-.A-Za-z]/,_=/\d/,O=/^(0x|0X)/,A=/^[0-7]+$/,N=/^\d+$/,R=/^[\dA-Fa-f]+$/,I=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,M=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,j=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,L=/[\u0009\u000A\u000D]/g,F=function(e,t){var n,r,o;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=D(t.slice(1,-1))))return"Invalid host";e.host=n}else if(H(e)){if(t=v(t),I.test(t))return"Invalid host";if(null===(n=z(t)))return"Invalid host";e.host=n}else{if(M.test(t))return"Invalid host";for(n="",r=d(t),o=0;o<r.length;o++)n+=Q(r[o],B);e.host=n}},z=function(e){var t,n,r,o,i,a,u,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(n=[],r=0;r<t;r++){if(""==(o=l[r]))return e;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=O.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?N:8==i?A:R).test(o))return e;a=parseInt(o,i)}n.push(a)}for(r=0;r<t;r++)if(a=n[r],r==t-1){if(a>=T(256,5-t))return null}else if(a>255)return null;for(u=n.pop(),r=0;r<n.length;r++)u+=n[r]*T(256,3-r);return u},D=function(e){var t,n,r,o,i,a,u,l=[0,0,0,0,0,0,0,0],c=0,s=null,f=0,p=function(){return e.charAt(f)};if(":"==p()){if(":"!=e.charAt(1))return;f+=2,s=++c}for(;p();){if(8==c)return;if(":"!=p()){for(t=n=0;n<4&&R.test(p());)t=16*t+parseInt(p(),16),f++,n++;if("."==p()){if(0==n)return;if(f-=n,c>6)return;for(r=0;p();){if(o=null,r>0){if(!("."==p()&&r<4))return;f++}if(!_.test(p()))return;for(;_.test(p());){if(i=parseInt(p(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;f++}l[c]=256*l[c]+o,2!=++r&&4!=r||c++}if(4!=r)return;break}if(":"==p()){if(f++,!p())return}else if(p())return;l[c++]=t}else{if(null!==s)return;f++,s=++c}}if(null!==s)for(a=c-s,c=7;0!=c&&a>0;)u=l[c],l[c--]=l[s+a-1],l[s+--a]=u;else if(8!=c)return;return l},U=function(e){var t,n,r,o;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=k(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=function(e){for(var t=null,n=1,r=null,o=0,i=0;i<8;i++)0!==e[i]?(o>n&&(t=r,n=o),r=null,o=0):(null===r&&(r=i),++o);return o>n&&(t=r,n=o),t}(e),n=0;n<8;n++)o&&0===e[n]||(o&&(o=!1),r===n?(t+=n?":":"::",o=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},B={},V=p({},B,{" ":1,'"':1,"<":1,">":1,"`":1}),W=p({},V,{"#":1,"?":1,"{":1,"}":1}),$=p({},W,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Q=function(e,t){var n=h(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},q={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},H=function(e){return f(q,e.scheme)},K=function(e){return""!=e.username||""!=e.password},Y=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},G=function(e,t){var n;return 2==e.length&&P.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},X=function(e){var t;return e.length>1&&G(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},J=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&G(t[0],!0)||t.pop()},Z=function(e){return"."===e||"%2e"===e.toLowerCase()},ee={},te={},ne={},re={},oe={},ie={},ae={},ue={},le={},ce={},se={},fe={},pe={},de={},he={},ve={},ge={},me={},ye={},be={},xe={},we=function(e,t,n,o){var i,a,u,l,c,s=n||ee,p=0,h="",v=!1,g=!1,m=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(j,"")),t=t.replace(L,""),i=d(t);p<=i.length;){switch(a=i[p],s){case ee:if(!a||!P.test(a)){if(n)return"Invalid scheme";s=ne;continue}h+=a.toLowerCase(),s=te;break;case te:if(a&&(C.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",s=ne,p=0;continue}if(n&&(H(e)!=f(q,h)||"file"==h&&(K(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(H(e)&&q[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?s=de:H(e)&&o&&o.scheme==e.scheme?s=re:H(e)?s=ue:"/"==i[p+1]?(s=oe,p++):(e.cannotBeABaseURL=!0,e.path.push(""),s=ye)}break;case ne:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){e.scheme=o.scheme,e.path=o.path.slice(),e.query=o.query,e.fragment="",e.cannotBeABaseURL=!0,s=xe;break}s="file"==o.scheme?de:ie;continue;case re:if("/"!=a||"/"!=i[p+1]){s=ie;continue}s=le,p++;break;case oe:if("/"==a){s=ce;break}s=me;continue;case ie:if(e.scheme=o.scheme,a==r)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query;else if("/"==a||"\\"==a&&H(e))s=ae;else if("?"==a)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query="",s=be;else{if("#"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.path.pop(),s=me;continue}e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query,e.fragment="",s=xe}break;case ae:if(!H(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,s=me;continue}s=ce}else s=le;break;case ue:if(s=le,"/"!=a||"/"!=h.charAt(p+1))continue;p++;break;case le:if("/"!=a&&"\\"!=a){s=ce;continue}break;case ce:if("@"==a){v&&(h="%40"+h),v=!0,u=d(h);for(var y=0;y<u.length;y++){var b=u[y];if(":"!=b||m){var x=Q(b,$);m?e.password+=x:e.username+=x}else m=!0}h=""}else if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&H(e)){if(v&&""==h)return"Invalid authority";p-=d(h).length+1,h="",s=se}else h+=a;break;case se:case fe:if(n&&"file"==e.scheme){s=ve;continue}if(":"!=a||g){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&H(e)){if(H(e)&&""==h)return"Invalid host";if(n&&""==h&&(K(e)||null!==e.port))return;if(l=F(e,h))return l;if(h="",s=ge,n)return;continue}"["==a?g=!0:"]"==a&&(g=!1),h+=a}else{if(""==h)return"Invalid host";if(l=F(e,h))return l;if(h="",s=pe,n==fe)return}break;case pe:if(!_.test(a)){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&H(e)||n){if(""!=h){var w=parseInt(h,10);if(w>65535)return"Invalid port";e.port=H(e)&&w===q[e.scheme]?null:w,h=""}if(n)return;s=ge;continue}return"Invalid port"}h+=a;break;case de:if(e.scheme="file","/"==a||"\\"==a)s=he;else{if(!o||"file"!=o.scheme){s=me;continue}if(a==r)e.host=o.host,e.path=o.path.slice(),e.query=o.query;else if("?"==a)e.host=o.host,e.path=o.path.slice(),e.query="",s=be;else{if("#"!=a){X(i.slice(p).join(""))||(e.host=o.host,e.path=o.path.slice(),J(e)),s=me;continue}e.host=o.host,e.path=o.path.slice(),e.query=o.query,e.fragment="",s=xe}}break;case he:if("/"==a||"\\"==a){s=ve;break}o&&"file"==o.scheme&&!X(i.slice(p).join(""))&&(G(o.path[0],!0)?e.path.push(o.path[0]):e.host=o.host),s=me;continue;case ve:if(a==r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&G(h))s=me;else if(""==h){if(e.host="",n)return;s=ge}else{if(l=F(e,h))return l;if("localhost"==e.host&&(e.host=""),n)return;h="",s=ge}continue}h+=a;break;case ge:if(H(e)){if(s=me,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=r&&(s=me,"/"!=a))continue}else e.fragment="",s=xe;else e.query="",s=be;break;case me:if(a==r||"/"==a||"\\"==a&&H(e)||!n&&("?"==a||"#"==a)){if(".."===(c=(c=h).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(J(e),"/"==a||"\\"==a&&H(e)||e.path.push("")):Z(h)?"/"==a||"\\"==a&&H(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&G(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",s=be):"#"==a&&(e.fragment="",s=xe)}else h+=Q(a,W);break;case ye:"?"==a?(e.query="",s=be):"#"==a?(e.fragment="",s=xe):a!=r&&(e.path[0]+=Q(a,B));break;case be:n||"#"!=a?a!=r&&("'"==a&&H(e)?e.query+="%27":e.query+="#"==a?"%23":Q(a,B)):(e.fragment="",s=xe);break;case xe:a!=r&&(e.fragment+=Q(a,V))}p++}},Ee=function(e){var t,n,r=s(this,Ee,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(e),u=E(r,{type:"URL"});if(void 0!==o)if(o instanceof Ee)t=S(o);else if(n=we(t={},String(o)))throw TypeError(n);if(n=we(u,a,null,t))throw TypeError(n);var l=u.searchParams=new x,c=w(l);c.updateSearchParams(u.query),c.updateURL=function(){u.query=String(l)||null},i||(r.href=ke.call(r),r.origin=Te.call(r),r.protocol=Pe.call(r),r.username=Ce.call(r),r.password=_e.call(r),r.host=Oe.call(r),r.hostname=Ae.call(r),r.port=Ne.call(r),r.pathname=Re.call(r),r.search=Ie.call(r),r.searchParams=Me.call(r),r.hash=je.call(r))},Se=Ee.prototype,ke=function(){var e=S(this),t=e.scheme,n=e.username,r=e.password,o=e.host,i=e.port,a=e.path,u=e.query,l=e.fragment,c=t+":";return null!==o?(c+="//",K(e)&&(c+=n+(r?":"+r:"")+"@"),c+=U(o),null!==i&&(c+=":"+i)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(c+="?"+u),null!==l&&(c+="#"+l),c},Te=function(){var e=S(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&H(e)?t+"://"+U(e.host)+(null!==n?":"+n:""):"null"},Pe=function(){return S(this).scheme+":"},Ce=function(){return S(this).username},_e=function(){return S(this).password},Oe=function(){var e=S(this),t=e.host,n=e.port;return null===t?"":null===n?U(t):U(t)+":"+n},Ae=function(){var e=S(this).host;return null===e?"":U(e)},Ne=function(){var e=S(this).port;return null===e?"":String(e)},Re=function(){var e=S(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Ie=function(){var e=S(this).query;return e?"?"+e:""},Me=function(){return S(this).searchParams},je=function(){var e=S(this).fragment;return e?"#"+e:""},Le=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&l(Se,{href:Le(ke,(function(e){var t=S(this),n=String(e),r=we(t,n);if(r)throw TypeError(r);w(t.searchParams).updateSearchParams(t.query)})),origin:Le(Te),protocol:Le(Pe,(function(e){var t=S(this);we(t,String(e)+":",ee)})),username:Le(Ce,(function(e){var t=S(this),n=d(String(e));if(!Y(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=Q(n[r],$)}})),password:Le(_e,(function(e){var t=S(this),n=d(String(e));if(!Y(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=Q(n[r],$)}})),host:Le(Oe,(function(e){var t=S(this);t.cannotBeABaseURL||we(t,String(e),se)})),hostname:Le(Ae,(function(e){var t=S(this);t.cannotBeABaseURL||we(t,String(e),fe)})),port:Le(Ne,(function(e){var t=S(this);Y(t)||(""==(e=String(e))?t.port=null:we(t,e,pe))})),pathname:Le(Re,(function(e){var t=S(this);t.cannotBeABaseURL||(t.path=[],we(t,e+"",ge))})),search:Le(Ie,(function(e){var t=S(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",we(t,e,be)),w(t.searchParams).updateSearchParams(t.query)})),searchParams:Le(Me),hash:Le(je,(function(e){var t=S(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",we(t,e,xe)):t.fragment=null}))}),c(Se,"toJSON",(function(){return ke.call(this)}),{enumerable:!0}),c(Se,"toString",(function(){return ke.call(this)}),{enumerable:!0}),b){var Fe=b.createObjectURL,ze=b.revokeObjectURL;Fe&&c(Ee,"createObjectURL",(function(e){return Fe.apply(b,arguments)})),ze&&c(Ee,"revokeObjectURL",(function(e){return ze.apply(b,arguments)}))}g(Ee,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Ee})},function(e,t,n){"use strict";var r=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,u=String.fromCharCode,l=function(e){return e+22+75*(e<26)},c=function(e,t,n){var r=0;for(e=n?a(e/700):e>>1,e+=a(e/t);e>455;r+=36)e=a(e/35);return a(r+36*e/(e+38))},s=function(e){var t,n,r=[],o=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),n--)}else t.push(o)}return t}(e)).length,s=128,f=0,p=72;for(t=0;t<e.length;t++)(n=e[t])<128&&r.push(u(n));var d=r.length,h=d;for(d&&r.push("-");h<o;){var v=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=s&&n<v&&(v=n);var g=h+1;if(v-s>a((2147483647-f)/g))throw RangeError(i);for(f+=(v-s)*g,s=v,t=0;t<e.length;t++){if((n=e[t])<s&&++f>2147483647)throw RangeError(i);if(n==s){for(var m=f,y=36;;y+=36){var b=y<=p?1:y>=p+26?26:y-p;if(m<b)break;var x=m-b,w=36-b;r.push(u(l(b+x%w))),m=a(x/w)}r.push(u(l(m))),p=c(f,g,h==d),f=0,++h}}++f,++s}return r.join("")};e.exports=function(e){var t,n,i=[],a=e.toLowerCase().replace(o,".").split(".");for(t=0;t<a.length;t++)n=a[t],i.push(r.test(n)?"xn--"+s(n):n);return i.join(".")}},function(e,t,n){var r=n(5),o=n(63);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},function(e,t,n){"use strict";n(0)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,n){},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(146),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,h=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function w(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||b}function E(){}function S(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==r(e)&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var k=S.prototype=new E;k.constructor=S,o(k,w.prototype),k.isPureReactComponent=!0;var T={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:T.current}}function O(e){return"object"===r(e)&&null!==e&&e.$$typeof===a}var A=/\/+/g,N=[];function R(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function M(e,t,n){return null==e?0:function e(t,n,o,i){var l=r(t);"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case u:c=!0}}if(c)return o(i,t,""===n?"."+j(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var f=n+j(l=t[s],s);c+=e(l,f,o,i)}else if(null===t||"object"!==r(t)?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),s=0;!(l=t.next()).done;)c+=e(l=l.value,f=n+j(l,s++),o,i);else if("object"===l)throw o=""+t,Error(y(31,"[object Object]"===o?"object with keys {"+Object.keys(t).join(", ")+"}":o,""));return c}(e,"",t,n)}function j(e,t){return"object"===r(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,r,n,(function(e){return e})):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n)),r.push(e))}function z(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(A,"$&/")+"/"),M(e,F,t=R(t,i,r,o)),I(t)}var D={current:null};function U(){var e=D.current;if(null===e)throw Error(y(321));return e}var B={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:T,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return z(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,L,t=R(null,null,t,n)),I(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return z(e,t,null,(function(e){return e})),t},only:function(e){if(!O(e))throw Error(y(143));return e}},t.Component=w,t.Fragment=l,t.Profiler=s,t.PureComponent=S,t.StrictMode=c,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var r=o({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=T.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)P.call(t,s)&&!C.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:a,type:e.type,key:i,ref:u,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";(function(e){
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(3),i=n(146),a=n(356);function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!o)throw Error(u(227));function l(e,t,n,r,o,i,a,u,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var c=!1,s=null,f=!1,p=null,d={onError:function(e){c=!0,s=e}};function h(e,t,n,r,o,i,a,u,f){c=!1,s=null,l.apply(d,arguments)}var v=null,g=null,m=null;function y(e,t,n){var r=e.type||"unknown-event";e.currentTarget=m(n),function(e,t,n,r,o,i,a,l,d){if(h.apply(this,arguments),c){if(!c)throw Error(u(198));var v=s;c=!1,s=null,f||(f=!0,p=v)}}(r,t,void 0,e),e.currentTarget=null}var b=null,x={};function w(){if(b)for(var e in x){var t=x[e],n=b.indexOf(e);if(!(-1<n))throw Error(u(96,e));if(!S[n]){if(!t.extractEvents)throw Error(u(97,e));for(var r in S[n]=t,n=t.eventTypes){var o=void 0,i=n[r],a=t,l=r;if(k.hasOwnProperty(l))throw Error(u(99,l));k[l]=i;var c=i.phasedRegistrationNames;if(c){for(o in c)c.hasOwnProperty(o)&&E(c[o],a,l);o=!0}else i.registrationName?(E(i.registrationName,a,l),o=!0):o=!1;if(!o)throw Error(u(98,r,e))}}}}function E(e,t,n){if(T[e])throw Error(u(100,e));T[e]=t,P[e]=t.eventTypes[n].dependencies}var S=[],k={},T={},P={};function C(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!x.hasOwnProperty(t)||x[t]!==r){if(x[t])throw Error(u(102,t));x[t]=r,n=!0}}n&&w()}var _=!(void 0===e||void 0===e.document||void 0===e.document.createElement),O=null,A=null,N=null;function R(e){if(e=g(e)){if("function"!=typeof O)throw Error(u(280));var t=e.stateNode;t&&(t=v(t),O(e.stateNode,e.type,t))}}function I(e){A?N?N.push(e):N=[e]:A=e}function M(){if(A){var e=A,t=N;if(N=A=null,R(e),t)for(e=0;e<t.length;e++)R(t[e])}}function j(e,t){return e(t)}function L(e,t,n,r,o){return e(t,n,r,o)}function F(){}var z=j,D=!1,U=!1;function B(){null===A&&null===N||(F(),M())}function V(e,t,n){if(U)return e(t,n);U=!0;try{return z(e,t,n)}finally{U=!1,B()}}var W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$=Object.prototype.hasOwnProperty,Q={},q={};function H(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(r(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){Y[e]=new K(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];Y[t]=new K(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){Y[e]=new K(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){Y[e]=new K(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){Y[e]=new K(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){Y[e]=new K(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){Y[e]=new K(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){Y[e]=new K(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){Y[e]=new K(e,5,!1,e.toLowerCase(),null,!1)}));var G=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(G,X);Y[t]=new K(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(G,X);Y[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(G,X);Y[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){Y[e]=new K(e,1,!1,e.toLowerCase(),null,!1)})),Y.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){Y[e]=new K(e,1,!1,e.toLowerCase(),null,!0)}));var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Z(e,t,n,r){var o=Y.hasOwnProperty(t)?Y[t]:null;(null!==o?0===o.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(H(t,n,o,r)&&(n=null),r||null===o?function(e){return!!$.call(q,e)||!$.call(Q,e)&&(W.test(e)?q[e]=!0:(Q[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}J.hasOwnProperty("ReactCurrentDispatcher")||(J.ReactCurrentDispatcher={current:null}),J.hasOwnProperty("ReactCurrentBatchConfig")||(J.ReactCurrentBatchConfig={suspense:null});var ee=/^(.*)[\\\/]/,te="function"==typeof Symbol&&Symbol.for,ne=te?Symbol.for("react.element"):60103,re=te?Symbol.for("react.portal"):60106,oe=te?Symbol.for("react.fragment"):60107,ie=te?Symbol.for("react.strict_mode"):60108,ae=te?Symbol.for("react.profiler"):60114,ue=te?Symbol.for("react.provider"):60109,le=te?Symbol.for("react.context"):60110,ce=te?Symbol.for("react.concurrent_mode"):60111,se=te?Symbol.for("react.forward_ref"):60112,fe=te?Symbol.for("react.suspense"):60113,pe=te?Symbol.for("react.suspense_list"):60120,de=te?Symbol.for("react.memo"):60115,he=te?Symbol.for("react.lazy"):60116,ve=te?Symbol.for("react.block"):60121,ge="function"==typeof Symbol&&Symbol.iterator;function me(e){return null===e||"object"!==r(e)?null:"function"==typeof(e=ge&&e[ge]||e["@@iterator"])?e:null}function ye(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case oe:return"Fragment";case re:return"Portal";case ae:return"Profiler";case ie:return"StrictMode";case fe:return"Suspense";case pe:return"SuspenseList"}if("object"===r(e))switch(e.$$typeof){case le:return"Context.Consumer";case ue:return"Context.Provider";case se:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case de:return ye(e.type);case ve:return ye(e.render);case he:if(e=1===e._status?e._result:null)return ye(e)}return null}function be(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=ye(e.type);n=null,r&&(n=ye(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(ee,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function xe(e){switch(r(e)){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ee(e){e._valueTracker||(e._valueTracker=function(e){var t=we(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=we(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ke(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Te(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=xe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Pe(e,t){null!=(t=t.checked)&&Z(e,"checked",t,!1)}function Ce(e,t){Pe(e,t);var n=xe(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Oe(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oe(e,t.type,xe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function _e(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Oe(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Ae(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(u(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(u(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(u(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:xe(n)}}function Me(e,t){var n=xe(t.value),r=xe(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function je(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Le="http://www.w3.org/1999/xhtml",Fe="http://www.w3.org/2000/svg";function ze(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function De(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ze(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ue,Be=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Fe||"innerHTML"in e)e.innerHTML=t;else{for((Ue=Ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function Ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function We(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $e={animationend:We("Animation","AnimationEnd"),animationiteration:We("Animation","AnimationIteration"),animationstart:We("Animation","AnimationStart"),transitionend:We("Transition","TransitionEnd")},Qe={},qe={};function He(e){if(Qe[e])return Qe[e];if(!$e[e])return e;var t,n=$e[e];for(t in n)if(n.hasOwnProperty(t)&&t in qe)return Qe[e]=n[t];return e}_&&(qe=document.createElement("div").style,"AnimationEvent"in e||(delete $e.animationend.animation,delete $e.animationiteration.animation,delete $e.animationstart.animation),"TransitionEvent"in e||delete $e.transitionend.transition);var Ke=He("animationend"),Ye=He("animationiteration"),Ge=He("animationstart"),Xe=He("transitionend"),Je="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ze=new("function"==typeof WeakMap?WeakMap:Map);function et(e){var t=Ze.get(e);return void 0===t&&(t=new Map,Ze.set(e,t)),t}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(u(188))}function ot(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return rt(o),e;if(i===r)return rt(o),t;i=i.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(3!==n.tag)throw Error(u(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function it(e,t){if(null==t)throw Error(u(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function at(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ut=null;function lt(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)y(e,t[r],n[r]);else t&&y(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function ct(e){if(null!==e&&(ut=it(ut,e)),e=ut,ut=null,e){if(at(e,lt),ut)throw Error(u(95));if(f)throw e=p,f=!1,p=null,e}}function st(t){return(t=t.target||t.srcElement||e).correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}function ft(e){if(!_)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var pt=[];function dt(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>pt.length&&pt.push(e)}function ht(e,t,n,r){if(pt.length){var o=pt.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function vt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=On(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=st(e.nativeEvent);r=e.topLevelType;var i=e.nativeEvent,a=e.eventSystemFlags;0===n&&(a|=64);for(var u=null,l=0;l<S.length;l++){var c=S[l];c&&(c=c.extractEvents(r,t,i,o,a))&&(u=it(u,c))}ct(u)}}function gt(e,t,n){if(!n.has(e)){switch(e){case"scroll":Gt(t,"scroll",!0);break;case"focus":case"blur":Gt(t,"focus",!0),Gt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ft(e)&&Gt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Je.indexOf(e)&&Yt(e,t)}n.set(e,null)}}var mt,yt,bt,xt=!1,wt=[],Et=null,St=null,kt=null,Tt=new Map,Pt=new Map,Ct=[],_t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ot="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function At(e,t,n,r,o){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:o,container:r}}function Nt(e,t){switch(e){case"focus":case"blur":Et=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pt.delete(t.pointerId)}}function Rt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e=At(t,n,r,o,i),null!==t&&(null!==(t=An(t))&&yt(t)),e):(e.eventSystemFlags|=r,e)}function It(e){var t=On(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void a.unstable_runWithPriority(e.priority,(function(){bt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;var t=en(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=An(t);return null!==n&&yt(n),e.blockedOn=t,!1}return!0}function jt(e,t,n){Mt(e)&&n.delete(t)}function Lt(){for(xt=!1;0<wt.length;){var e=wt[0];if(null!==e.blockedOn){null!==(e=An(e.blockedOn))&&mt(e);break}var t=en(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:wt.shift()}null!==Et&&Mt(Et)&&(Et=null),null!==St&&Mt(St)&&(St=null),null!==kt&&Mt(kt)&&(kt=null),Tt.forEach(jt),Pt.forEach(jt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,xt||(xt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Lt)))}function zt(e){function t(t){return Ft(t,e)}if(0<wt.length){Ft(wt[0],e);for(var n=1;n<wt.length;n++){var r=wt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Et&&Ft(Et,e),null!==St&&Ft(St,e),null!==kt&&Ft(kt,e),Tt.forEach(t),Pt.forEach(t),n=0;n<Ct.length;n++)(r=Ct[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&null===(n=Ct[0]).blockedOn;)It(n),null===n.blockedOn&&Ct.shift()}var Dt={},Ut=new Map,Bt=new Map,Vt=["abort","abort",Ke,"animationEnd",Ye,"animationIteration",Ge,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xe,"transitionEnd","waiting","waiting"];function Wt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],i="on"+(o[0].toUpperCase()+o.slice(1));i={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[r],eventPriority:t},Bt.set(r,t),Ut.set(r,i),Dt[o]=i}}Wt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Wt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Wt(Vt,2);for(var $t="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Qt=0;Qt<$t.length;Qt++)Bt.set($t[Qt],0);var qt=a.unstable_UserBlockingPriority,Ht=a.unstable_runWithPriority,Kt=!0;function Yt(e,t){Gt(t,e,!1)}function Gt(e,t,n){var r=Bt.get(t);switch(void 0===r?2:r){case 0:r=Xt.bind(null,t,1,e);break;case 1:r=Jt.bind(null,t,1,e);break;default:r=Zt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Xt(e,t,n,r){D||F();var o=Zt,i=D;D=!0;try{L(o,e,t,n,r)}finally{(D=i)||B()}}function Jt(e,t,n,r){Ht(qt,Zt.bind(null,e,t,n,r))}function Zt(e,t,n,r){if(Kt)if(0<wt.length&&-1<_t.indexOf(e))e=At(null,e,t,n,r),wt.push(e);else{var o=en(e,t,n,r);if(null===o)Nt(e,r);else if(-1<_t.indexOf(e))e=At(o,e,t,n,r),wt.push(e);else if(!function(e,t,n,r,o){switch(t){case"focus":return Et=Rt(Et,e,t,n,r,o),!0;case"dragenter":return St=Rt(St,e,t,n,r,o),!0;case"mouseover":return kt=Rt(kt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tt.set(i,Rt(Tt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pt.set(i,Rt(Pt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r)){Nt(e,r),e=ht(e,r,null,t);try{V(vt,e)}finally{dt(e)}}}}function en(e,t,n,r){if(null!==(n=On(n=st(r)))){var o=tt(n);if(null===o)n=null;else{var i=o.tag;if(13===i){if(null!==(n=nt(o)))return n;n=null}else if(3===i){if(o.stateNode.hydrate)return 3===o.tag?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null)}}e=ht(e,r,n,t);try{V(vt,e)}finally{dt(e)}return null}var tn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nn=["Webkit","ms","Moz","O"];function rn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||tn.hasOwnProperty(e)&&tn[e]?(""+t).trim():t+"px"}function on(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=rn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(tn).forEach((function(e){nn.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tn[t]=tn[e]}))}));var an=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function un(e,t){if(t){if(an[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(u(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(u(60));if("object"!==r(t.dangerouslySetInnerHTML)||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(null!=t.style&&"object"!==r(t.style))throw Error(u(62,""))}}function ln(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cn=Le;function sn(e,t){var n=et(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=P[t];for(var r=0;r<t.length;r++)gt(t[r],e,n)}function fn(){}function pn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function dn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hn(e,t){var n,r=dn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dn(r)}}function vn(){for(var t=e,n=pn();n instanceof t.HTMLIFrameElement;){try{var r="string"==typeof n.contentWindow.location.href}catch(e){r=!1}if(!r)break;n=pn((t=n.contentWindow).document)}return n}function gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var mn=null,yn=null;function bn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function xn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"===r(t.dangerouslySetInnerHTML)&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wn="function"==typeof setTimeout?setTimeout:void 0,En="function"==typeof clearTimeout?clearTimeout:void 0;function Sn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function kn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),Pn="__reactInternalInstance$"+Tn,Cn="__reactEventHandlers$"+Tn,_n="__reactContainere$"+Tn;function On(e){var t=e[Pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_n]||n[Pn]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=kn(e);null!==e;){if(n=e[Pn])return n;e=kn(e)}return t}n=(e=n).parentNode}return null}function An(e){return!(e=e[Pn]||e[_n])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Nn(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(u(33))}function Rn(e){return e[Cn]||null}function In(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Mn(e,t){var n=e.stateNode;if(!n)return null;var o=v(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(u(231,t,r(n)));return n}function jn(e,t,n){(t=Mn(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=it(n._dispatchListeners,t),n._dispatchInstances=it(n._dispatchInstances,e))}function Ln(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=In(t);for(t=n.length;0<t--;)jn(n[t],"captured",e);for(t=0;t<n.length;t++)jn(n[t],"bubbled",e)}}function Fn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=Mn(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=it(n._dispatchListeners,t),n._dispatchInstances=it(n._dispatchInstances,e))}function zn(e){e&&e.dispatchConfig.registrationName&&Fn(e._targetInst,null,e)}function Dn(e){at(e,Ln)}var Un=null,Bn=null,Vn=null;function Wn(){if(Vn)return Vn;var e,t,n=Bn,r=n.length,o="value"in Un?Un.value:Un.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Vn=o.slice(e,1<t?1-t:void 0)}function $n(){return!0}function Qn(){return!1}function qn(e,t,n,r){for(var o in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?$n:Qn,this.isPropagationStopped=Qn,this}function Hn(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function Kn(e){if(!(e instanceof this))throw Error(u(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Yn(e){e.eventPool=[],e.getPooled=Hn,e.release=Kn}i(qn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){this.isPersistent=$n},isPersistent:Qn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Qn,this._dispatchInstances=this._dispatchListeners=null}}),qn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},qn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Yn(n),n},Yn(qn);var Gn=qn.extend({data:null}),Xn=qn.extend({data:null}),Jn=[9,13,27,32],Zn=_&&"CompositionEvent"in e,er=null;_&&"documentMode"in document&&(er=document.documentMode);var tr=_&&"TextEvent"in e&&!er,nr=_&&(!Zn||er&&8<er&&11>=er),rr=String.fromCharCode(32),or={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},ir=!1;function ar(e,t){switch(e){case"keyup":return-1!==Jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ur(e){return"object"===r(e=e.detail)&&"data"in e?e.data:null}var lr=!1;var cr={eventTypes:or,extractEvents:function(e,t,n,r){var o;if(Zn)e:{switch(e){case"compositionstart":var i=or.compositionStart;break e;case"compositionend":i=or.compositionEnd;break e;case"compositionupdate":i=or.compositionUpdate;break e}i=void 0}else lr?ar(e,n)&&(i=or.compositionEnd):"keydown"===e&&229===n.keyCode&&(i=or.compositionStart);return i?(nr&&"ko"!==n.locale&&(lr||i!==or.compositionStart?i===or.compositionEnd&&lr&&(o=Wn()):(Bn="value"in(Un=r)?Un.value:Un.textContent,lr=!0)),i=Gn.getPooled(i,t,n,r),o?i.data=o:null!==(o=ur(n))&&(i.data=o),Dn(i),o=i):o=null,(e=tr?function(e,t){switch(e){case"compositionend":return ur(t);case"keypress":return 32!==t.which?null:(ir=!0,rr);case"textInput":return(e=t.data)===rr&&ir?null:e;default:return null}}(e,n):function(e,t){if(lr)return"compositionend"===e||!Zn&&ar(e,t)?(e=Wn(),Vn=Bn=Un=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nr&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Xn.getPooled(or.beforeInput,t,n,r)).data=e,Dn(t)):t=null,null===o?t:null===t?o:[o,t]}},sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!sr[e.type]:"textarea"===t}var pr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function dr(e,t,n){return(e=qn.getPooled(pr.change,e,t,n)).type="change",I(n),Dn(e),e}var hr=null,vr=null;function gr(e){ct(e)}function mr(e){if(Se(Nn(e)))return e}function yr(e,t){if("change"===e)return t}var br=!1;function xr(){hr&&(hr.detachEvent("onpropertychange",wr),vr=hr=null)}function wr(e){if("value"===e.propertyName&&mr(vr))if(e=dr(vr,e,st(e)),D)ct(e);else{D=!0;try{j(gr,e)}finally{D=!1,B()}}}function Er(e,t,n){"focus"===e?(xr(),vr=n,(hr=t).attachEvent("onpropertychange",wr)):"blur"===e&&xr()}function Sr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return mr(vr)}function kr(e,t){if("click"===e)return mr(t)}function Tr(e,t){if("input"===e||"change"===e)return mr(t)}_&&(br=ft("input")&&(!document.documentMode||9<document.documentMode));var Pr={eventTypes:pr,_isInputEventSupported:br,extractEvents:function(t,n,r,o){var i=n?Nn(n):e,a=i.nodeName&&i.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===i.type)var u=yr;else if(fr(i))if(br)u=Tr;else{u=Sr;var l=Er}else(a=i.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(u=kr);if(u&&(u=u(t,n)))return dr(u,r,o);l&&l(t,i,n),"blur"===t&&(t=i._wrapperState)&&t.controlled&&"number"===i.type&&Oe(i,"number",i.value)}},Cr=qn.extend({view:null,detail:null}),_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Or(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Ar(){return Or}var Nr=0,Rr=0,Ir=!1,Mr=!1,jr=Cr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ar,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Nr;return Nr=e.screenX,Ir?"mousemove"===e.type?e.screenX-t:0:(Ir=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Rr;return Rr=e.screenY,Mr?"mousemove"===e.type?e.screenY-t:0:(Mr=!0,0)}}),Lr=jr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Fr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},zr={eventTypes:Fr,extractEvents:function(t,n,r,o,i){var a="mouseover"===t||"pointerover"===t,u="mouseout"===t||"pointerout"===t;if(a&&0==(32&i)&&(r.relatedTarget||r.fromElement)||!u&&!a)return null;(a=o.window===o?o:(a=o.ownerDocument)?a.defaultView||a.parentWindow:e,u)?(u=n,null!==(n=(n=r.relatedTarget||r.toElement)?On(n):null)&&(n!==tt(n)||5!==n.tag&&6!==n.tag)&&(n=null)):u=null;if(u===n)return null;if("mouseout"===t||"mouseover"===t)var l=jr,c=Fr.mouseLeave,s=Fr.mouseEnter,f="mouse";else"pointerout"!==t&&"pointerover"!==t||(l=Lr,c=Fr.pointerLeave,s=Fr.pointerEnter,f="pointer");if(t=null==u?a:Nn(u),a=null==n?a:Nn(n),(c=l.getPooled(c,u,r,o)).type=f+"leave",c.target=t,c.relatedTarget=a,(r=l.getPooled(s,n,r,o)).type=f+"enter",r.target=a,r.relatedTarget=t,f=n,(o=u)&&f)e:{for(s=f,u=0,t=l=o;t;t=In(t))u++;for(t=0,n=s;n;n=In(n))t++;for(;0<u-t;)l=In(l),u--;for(;0<t-u;)s=In(s),t--;for(;u--;){if(l===s||l===s.alternate)break e;l=In(l),s=In(s)}l=null}else l=null;for(s=l,l=[];o&&o!==s&&(null===(u=o.alternate)||u!==s);)l.push(o),o=In(o);for(o=[];f&&f!==s&&(null===(u=f.alternate)||u!==s);)o.push(f),f=In(f);for(f=0;f<l.length;f++)Fn(l[f],"bubbled",c);for(f=o.length;0<f--;)Fn(o[f],"captured",r);return 0==(64&i)?[c]:[c,r]}};var Dr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Ur=Object.prototype.hasOwnProperty;function Br(e,t){if(Dr(e,t))return!0;if("object"!==r(e)||null===e||"object"!==r(t)||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!Ur.call(t,n[o])||!Dr(e[n[o]],t[n[o]]))return!1;return!0}var Vr=_&&"documentMode"in document&&11>=document.documentMode,Wr={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},$r=null,Qr=null,qr=null,Hr=!1;function Kr(t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;return Hr||null==$r||$r!==pn(r)?null:("selectionStart"in(r=$r)&&gn(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||e).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},qr&&Br(qr,r)?null:(qr=r,(t=qn.getPooled(Wr.select,Qr,t,n)).type="select",t.target=$r,Dn(t),t))}var Yr={eventTypes:Wr,extractEvents:function(t,n,r,o,i,a){if(!(a=!(i=a||(o.window===o?o.document:9===o.nodeType?o:o.ownerDocument)))){e:{i=et(i),a=P.onSelect;for(var u=0;u<a.length;u++)if(!i.has(a[u])){i=!1;break e}i=!0}a=!i}if(a)return null;switch(i=n?Nn(n):e,t){case"focus":(fr(i)||"true"===i.contentEditable)&&($r=i,Qr=n,qr=null);break;case"blur":qr=Qr=$r=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":return Hr=!1,Kr(r,o);case"selectionchange":if(Vr)break;case"keydown":case"keyup":return Kr(r,o)}return null}},Gr=qn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Xr=qn.extend({clipboardData:function(t){return"clipboardData"in t?t.clipboardData:e.clipboardData}}),Jr=Cr.extend({relatedTarget:null});function Zr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},to={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},no=Cr.extend({key:function(e){if(e.key){var t=eo[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Zr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?to[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ar,charCode:function(e){return"keypress"===e.type?Zr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Zr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ro=jr.extend({dataTransfer:null}),oo=Cr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ar}),io=qn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ao=jr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),uo={eventTypes:Dt,extractEvents:function(e,t,n,r){var o=Ut.get(e);if(!o)return null;switch(e){case"keypress":if(0===Zr(n))return null;case"keydown":case"keyup":e=no;break;case"blur":case"focus":e=Jr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ro;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=oo;break;case Ke:case Ye:case Ge:e=Gr;break;case Xe:e=io;break;case"scroll":e=Cr;break;case"wheel":e=ao;break;case"copy":case"cut":case"paste":e=Xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Lr;break;default:e=qn}return Dn(t=e.getPooled(o,t,n,r)),t}};if(b)throw Error(u(101));b=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),v=Rn,g=An,m=Nn,C({SimpleEventPlugin:uo,EnterLeaveEventPlugin:zr,ChangeEventPlugin:Pr,SelectEventPlugin:Yr,BeforeInputEventPlugin:cr});var lo=[],co=-1;function so(e){0>co||(e.current=lo[co],lo[co]=null,co--)}function fo(e,t){co++,lo[co]=e.current,e.current=t}var po={},ho={current:po},vo={current:!1},go=po;function mo(e,t){var n=e.type.contextTypes;if(!n)return po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yo(e){return null!=(e=e.childContextTypes)}function bo(){so(vo),so(ho)}function xo(e,t,n){if(ho.current!==po)throw Error(u(168));fo(ho,t),fo(vo,n)}function wo(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(u(108,ye(t)||"Unknown",o));return i({},n,{},r)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||po,go=ho.current,fo(ho,e),fo(vo,vo.current),!0}function So(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=wo(e,t,go),r.__reactInternalMemoizedMergedChildContext=e,so(vo),so(ho),fo(ho,e)):so(vo),fo(vo,n)}var ko=a.unstable_runWithPriority,To=a.unstable_scheduleCallback,Po=a.unstable_cancelCallback,Co=a.unstable_requestPaint,_o=a.unstable_now,Oo=a.unstable_getCurrentPriorityLevel,Ao=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,Ro=a.unstable_NormalPriority,Io=a.unstable_LowPriority,Mo=a.unstable_IdlePriority,jo={},Lo=a.unstable_shouldYield,Fo=void 0!==Co?Co:function(){},zo=null,Do=null,Uo=!1,Bo=_o(),Vo=1e4>Bo?_o:function(){return _o()-Bo};function Wo(){switch(Oo()){case Ao:return 99;case No:return 98;case Ro:return 97;case Io:return 96;case Mo:return 95;default:throw Error(u(332))}}function $o(e){switch(e){case 99:return Ao;case 98:return No;case 97:return Ro;case 96:return Io;case 95:return Mo;default:throw Error(u(332))}}function Qo(e,t){return e=$o(e),ko(e,t)}function qo(e,t,n){return e=$o(e),To(e,t,n)}function Ho(e){return null===zo?(zo=[e],Do=To(Ao,Yo)):zo.push(e),jo}function Ko(){if(null!==Do){var e=Do;Do=null,Po(e)}Yo()}function Yo(){if(!Uo&&null!==zo){Uo=!0;var e=0;try{var t=zo;Qo(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),zo=null}catch(t){throw null!==zo&&(zo=zo.slice(e+1)),To(Ao,Ko),t}finally{Uo=!1}}}function Go(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Xo(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Jo={current:null},Zo=null,ei=null,ti=null;function ni(){ti=ei=Zo=null}function ri(e){var t=Jo.current;so(Jo),e.type._context._currentValue=t}function oi(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function ii(e,t){Zo=e,ti=ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Ra=!0),e.firstContext=null)}function ai(e,t){if(ti!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(ti=e,t=1073741823),t={context:e,observedBits:t,next:null},null===ei){if(null===Zo)throw Error(u(308));ei=t,Zo.dependencies={expirationTime:0,firstContext:t,responders:null}}else ei=ei.next=t;return e._currentValue}var ui=!1;function li(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function ci(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function si(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function fi(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function pi(e,t){var n=e.alternate;null!==n&&ci(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function di(e,t,n,r){var o=e.updateQueue;ui=!1;var a=o.baseQueue,u=o.shared.pending;if(null!==u){if(null!==a){var l=a.next;a.next=u.next,u.next=l}a=u,o.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=u))}if(null!==a){l=a.next;var c=o.baseState,s=0,f=null,p=null,d=null;if(null!==l)for(var h=l;;){if((u=h.expirationTime)<r){var v={expirationTime:h.expirationTime,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null};null===d?(p=d=v,f=c):d=d.next=v,u>s&&(s=u)}else{null!==d&&(d=d.next={expirationTime:1073741823,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null}),ul(u,h.suspenseConfig);e:{var g=e,m=h;switch(u=t,v=n,m.tag){case 1:if("function"==typeof(g=m.payload)){c=g.call(v,c,u);break e}c=g;break e;case 3:g.effectTag=-4097&g.effectTag|64;case 0:if(null==(u="function"==typeof(g=m.payload)?g.call(v,c,u):g))break e;c=i({},c,u);break e;case 2:ui=!0}}null!==h.callback&&(e.effectTag|=32,null===(u=o.effects)?o.effects=[h]:u.push(h))}if(null===(h=h.next)||h===l){if(null===(u=o.shared.pending))break;h=a.next=u.next,u.next=l,o.baseQueue=a=u,o.shared.pending=null}}null===d?f=c:d.next=p,o.baseState=f,o.baseQueue=d,ll(s),e.expirationTime=s,e.memoizedState=c}}function hi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=o,o=n,"function"!=typeof r)throw Error(u(191,r));r.call(o)}}}var vi=J.ReactCurrentBatchConfig,gi=(new o.Component).refs;function mi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var yi={isMounted:function(e){return!!(e=e._reactInternalFiber)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ku(),o=vi.suspense;(o=si(r=Yu(r,e,o),o)).payload=t,null!=n&&(o.callback=n),fi(e,o),Gu(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ku(),o=vi.suspense;(o=si(r=Yu(r,e,o),o)).tag=1,o.payload=t,null!=n&&(o.callback=n),fi(e,o),Gu(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ku(),r=vi.suspense;(r=si(n=Yu(n,e,r),r)).tag=2,null!=t&&(r.callback=t),fi(e,r),Gu(e,n)}};function bi(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Br(n,r)||!Br(o,i))}function xi(e,t,n){var o=!1,i=po,a=t.contextType;return"object"===r(a)&&null!==a?a=ai(a):(i=yo(t)?go:ho.current,a=(o=null!=(o=t.contextTypes))?mo(e,i):po),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=yi,e.stateNode=t,t._reactInternalFiber=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function wi(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yi.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gi,li(e);var a=t.contextType;"object"===r(a)&&null!==a?i.context=ai(a):(a=yo(t)?go:ho.current,i.context=mo(e,a)),di(e,n,i,o),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(mi(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&yi.enqueueReplaceState(i,i.state,null),di(e,n,i,o),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var Si=Array.isArray;function ki(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!==r(e)){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(u(309));var o=n.stateNode}if(!o)throw Error(u(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=o.refs;t===gi&&(t=o.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Ti(e,t){if("textarea"!==e.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Pi(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=_l(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function l(t){return e&&null===t.alternate&&(t.effectTag=2),t}function c(e,t,n,r){return null===t||6!==t.tag?((t=Nl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function s(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=ki(e,t,n),r.return=e,r):((r=Ol(n.type,n.key,n.props,null,e.mode,r)).ref=ki(e,t,n),r.return=e,r)}function f(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Rl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function p(e,t,n,r,o){return null===t||7!==t.tag?((t=Al(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Nl(""+t,e.mode,n)).return=e,t;if("object"===r(t)&&null!==t){switch(t.$$typeof){case ne:return(n=Ol(t.type,t.key,t.props,null,e.mode,n)).ref=ki(e,null,t),n.return=e,n;case re:return(t=Rl(t,e.mode,n)).return=e,t}if(Si(t)||me(t))return(t=Al(t,e.mode,n,null)).return=e,t;Ti(e,t)}return null}function h(e,t,n,o){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:c(e,t,""+n,o);if("object"===r(n)&&null!==n){switch(n.$$typeof){case ne:return n.key===i?n.type===oe?p(e,t,n.props.children,o,i):s(e,t,n,o):null;case re:return n.key===i?f(e,t,n,o):null}if(Si(n)||me(n))return null!==i?null:p(e,t,n,o,null);Ti(e,n)}return null}function v(e,t,n,o,i){if("string"==typeof o||"number"==typeof o)return c(t,e=e.get(n)||null,""+o,i);if("object"===r(o)&&null!==o){switch(o.$$typeof){case ne:return e=e.get(null===o.key?n:o.key)||null,o.type===oe?p(t,e,o.props.children,i,o.key):s(t,e,o,i);case re:return f(t,e=e.get(null===o.key?n:o.key)||null,o,i)}if(Si(o)||me(o))return p(t,e=e.get(n)||null,o,i,null);Ti(t,o)}return null}function g(r,i,u,l){for(var c=null,s=null,f=i,p=i=0,g=null;null!==f&&p<u.length;p++){f.index>p?(g=f,f=null):g=f.sibling;var m=h(r,f,u[p],l);if(null===m){null===f&&(f=g);break}e&&f&&null===m.alternate&&t(r,f),i=a(m,i,p),null===s?c=m:s.sibling=m,s=m,f=g}if(p===u.length)return n(r,f),c;if(null===f){for(;p<u.length;p++)null!==(f=d(r,u[p],l))&&(i=a(f,i,p),null===s?c=f:s.sibling=f,s=f);return c}for(f=o(r,f);p<u.length;p++)null!==(g=v(f,r,p,u[p],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?p:g.key),i=a(g,i,p),null===s?c=g:s.sibling=g,s=g);return e&&f.forEach((function(e){return t(r,e)})),c}function m(r,i,l,c){var s=me(l);if("function"!=typeof s)throw Error(u(150));if(null==(l=s.call(l)))throw Error(u(151));for(var f=s=null,p=i,g=i=0,m=null,y=l.next();null!==p&&!y.done;g++,y=l.next()){p.index>g?(m=p,p=null):m=p.sibling;var b=h(r,p,y.value,c);if(null===b){null===p&&(p=m);break}e&&p&&null===b.alternate&&t(r,p),i=a(b,i,g),null===f?s=b:f.sibling=b,f=b,p=m}if(y.done)return n(r,p),s;if(null===p){for(;!y.done;g++,y=l.next())null!==(y=d(r,y.value,c))&&(i=a(y,i,g),null===f?s=y:f.sibling=y,f=y);return s}for(p=o(r,p);!y.done;g++,y=l.next())null!==(y=v(p,r,g,y.value,c))&&(e&&null!==y.alternate&&p.delete(null===y.key?g:y.key),i=a(y,i,g),null===f?s=y:f.sibling=y,f=y);return e&&p.forEach((function(e){return t(r,e)})),s}return function(e,o,a,c){var s="object"===r(a)&&null!==a&&a.type===oe&&null===a.key;s&&(a=a.props.children);var f="object"===r(a)&&null!==a;if(f)switch(a.$$typeof){case ne:e:{for(f=a.key,s=o;null!==s;){if(s.key===f){switch(s.tag){case 7:if(a.type===oe){n(e,s.sibling),(o=i(s,a.props.children)).return=e,e=o;break e}break;default:if(s.elementType===a.type){n(e,s.sibling),(o=i(s,a.props)).ref=ki(e,s,a),o.return=e,e=o;break e}}n(e,s);break}t(e,s),s=s.sibling}a.type===oe?((o=Al(a.props.children,e.mode,c,a.key)).return=e,e=o):((c=Ol(a.type,a.key,a.props,null,e.mode,c)).ref=ki(e,o,a),c.return=e,e=c)}return l(e);case re:e:{for(s=a.key;null!==o;){if(o.key===s){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(e,o.sibling),(o=i(o,a.children||[])).return=e,e=o;break e}n(e,o);break}t(e,o),o=o.sibling}(o=Rl(a,e.mode,c)).return=e,e=o}return l(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==o&&6===o.tag?(n(e,o.sibling),(o=i(o,a)).return=e,e=o):(n(e,o),(o=Nl(a,e.mode,c)).return=e,e=o),l(e);if(Si(a))return g(e,o,a,c);if(me(a))return m(e,o,a,c);if(f&&Ti(e,a),void 0===a&&!s)switch(e.tag){case 1:case 0:throw e=e.type,Error(u(152,e.displayName||e.name||"Component"))}return n(e,o)}}var Ci=Pi(!0),_i=Pi(!1),Oi={},Ai={current:Oi},Ni={current:Oi},Ri={current:Oi};function Ii(e){if(e===Oi)throw Error(u(174));return e}function Mi(e,t){switch(fo(Ri,t),fo(Ni,e),fo(Ai,Oi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:De(null,"");break;default:t=De(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}so(Ai),fo(Ai,t)}function ji(){so(Ai),so(Ni),so(Ri)}function Li(e){Ii(Ri.current);var t=Ii(Ai.current),n=De(t,e.type);t!==n&&(fo(Ni,e),fo(Ai,n))}function Fi(e){Ni.current===e&&(so(Ai),so(Ni))}var zi={current:0};function Di(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ui(e,t){return{responder:e,props:t}}var Bi=J.ReactCurrentDispatcher,Vi=J.ReactCurrentBatchConfig,Wi=0,$i=null,Qi=null,qi=null,Hi=!1;function Ki(){throw Error(u(321))}function Yi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Gi(e,t,n,r,o,i){if(Wi=i,$i=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Bi.current=null===e||null===e.memoizedState?ba:xa,e=n(r,o),t.expirationTime===Wi){i=0;do{if(t.expirationTime=0,!(25>i))throw Error(u(301));i+=1,qi=Qi=null,t.updateQueue=null,Bi.current=wa,e=n(r,o)}while(t.expirationTime===Wi)}if(Bi.current=ya,t=null!==Qi&&null!==Qi.next,Wi=0,qi=Qi=$i=null,Hi=!1,t)throw Error(u(300));return e}function Xi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===qi?$i.memoizedState=qi=e:qi=qi.next=e,qi}function Ji(){if(null===Qi){var e=$i.alternate;e=null!==e?e.memoizedState:null}else e=Qi.next;var t=null===qi?$i.memoizedState:qi.next;if(null!==t)qi=t,Qi=e;else{if(null===e)throw Error(u(310));e={memoizedState:(Qi=e).memoizedState,baseState:Qi.baseState,baseQueue:Qi.baseQueue,queue:Qi.queue,next:null},null===qi?$i.memoizedState=qi=e:qi=qi.next=e}return qi}function Zi(e,t){return"function"==typeof t?t(e):t}function ea(e){var t=Ji(),n=t.queue;if(null===n)throw Error(u(311));n.lastRenderedReducer=e;var r=Qi,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(null!==o){o=o.next,r=r.baseState;var l=a=i=null,c=o;do{var s=c.expirationTime;if(s<Wi){var f={expirationTime:c.expirationTime,suspenseConfig:c.suspenseConfig,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===l?(a=l=f,i=r):l=l.next=f,s>$i.expirationTime&&($i.expirationTime=s,ll(s))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:c.suspenseConfig,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),ul(s,c.suspenseConfig),r=c.eagerReducer===e?c.eagerState:e(r,c.action);c=c.next}while(null!==c&&c!==o);null===l?i=r:l.next=a,Dr(r,t.memoizedState)||(Ra=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ta(e){var t=Ji(),n=t.queue;if(null===n)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do{i=e(i,a.action),a=a.next}while(a!==o);Dr(i,t.memoizedState)||(Ra=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function na(e){var t=Xi();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e}).dispatch=ma.bind(null,$i,e),[t.memoizedState,e]}function ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=$i.updateQueue)?(t={lastEffect:null},$i.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function oa(){return Ji().memoizedState}function ia(e,t,n,r){var o=Xi();$i.effectTag|=e,o.memoizedState=ra(1|t,n,void 0,void 0===r?null:r)}function aa(e,t,n,r){var o=Ji();r=void 0===r?null:r;var i=void 0;if(null!==Qi){var a=Qi.memoizedState;if(i=a.destroy,null!==r&&Yi(r,a.deps))return void ra(t,n,i,r)}$i.effectTag|=e,o.memoizedState=ra(1|t,n,i,r)}function ua(e,t){return ia(516,4,e,t)}function la(e,t){return aa(516,4,e,t)}function ca(e,t){return aa(4,2,e,t)}function sa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function fa(e,t,n){return n=null!=n?n.concat([e]):null,aa(4,2,sa.bind(null,t,e),n)}function pa(){}function da(e,t){return Xi().memoizedState=[e,void 0===t?null:t],e}function ha(e,t){var n=Ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function va(e,t){var n=Ji();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ga(e,t,n){var r=Wo();Qo(98>r?98:r,(function(){e(!0)})),Qo(97<r?97:r,(function(){var r=Vi.suspense;Vi.suspense=void 0===t?null:t;try{e(!1),n()}finally{Vi.suspense=r}}))}function ma(e,t,n){var r=Ku(),o=vi.suspense;o={expirationTime:r=Yu(r,e,o),suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var i=t.pending;if(null===i?o.next=o:(o.next=i.next,i.next=o),t.pending=o,i=e.alternate,e===$i||null!==i&&i===$i)Hi=!0,o.expirationTime=Wi,$i.expirationTime=Wi;else{if(0===e.expirationTime&&(null===i||0===i.expirationTime)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,u=i(a,n);if(o.eagerReducer=i,o.eagerState=u,Dr(u,a))return}catch(e){}Gu(e,r)}}var ya={readContext:ai,useCallback:Ki,useContext:Ki,useEffect:Ki,useImperativeHandle:Ki,useLayoutEffect:Ki,useMemo:Ki,useReducer:Ki,useRef:Ki,useState:Ki,useDebugValue:Ki,useResponder:Ki,useDeferredValue:Ki,useTransition:Ki},ba={readContext:ai,useCallback:da,useContext:ai,useEffect:ua,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ia(4,2,sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var n=Xi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=ma.bind(null,$i,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Xi().memoizedState=e},useState:na,useDebugValue:pa,useResponder:Ui,useDeferredValue:function(e,t){var n=na(e),r=n[0],o=n[1];return ua((function(){var n=Vi.suspense;Vi.suspense=void 0===t?null:t;try{o(e)}finally{Vi.suspense=n}}),[e,t]),r},useTransition:function(e){var t=na(!1),n=t[0];return t=t[1],[da(ga.bind(null,t,e),[t,e]),n]}},xa={readContext:ai,useCallback:ha,useContext:ai,useEffect:la,useImperativeHandle:fa,useLayoutEffect:ca,useMemo:va,useReducer:ea,useRef:oa,useState:function(){return ea(Zi)},useDebugValue:pa,useResponder:Ui,useDeferredValue:function(e,t){var n=ea(Zi),r=n[0],o=n[1];return la((function(){var n=Vi.suspense;Vi.suspense=void 0===t?null:t;try{o(e)}finally{Vi.suspense=n}}),[e,t]),r},useTransition:function(e){var t=ea(Zi),n=t[0];return t=t[1],[ha(ga.bind(null,t,e),[t,e]),n]}},wa={readContext:ai,useCallback:ha,useContext:ai,useEffect:la,useImperativeHandle:fa,useLayoutEffect:ca,useMemo:va,useReducer:ta,useRef:oa,useState:function(){return ta(Zi)},useDebugValue:pa,useResponder:Ui,useDeferredValue:function(e,t){var n=ta(Zi),r=n[0],o=n[1];return la((function(){var n=Vi.suspense;Vi.suspense=void 0===t?null:t;try{o(e)}finally{Vi.suspense=n}}),[e,t]),r},useTransition:function(e){var t=ta(Zi),n=t[0];return t=t[1],[ha(ga.bind(null,t,e),[t,e]),n]}},Ea=null,Sa=null,ka=!1;function Ta(e,t){var n=Pl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Pa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ca(e){if(ka){var t=Sa;if(t){var n=t;if(!Pa(e,t)){if(!(t=Sn(n.nextSibling))||!Pa(e,t))return e.effectTag=-1025&e.effectTag|2,ka=!1,void(Ea=e);Ta(Ea,n)}Ea=e,Sa=Sn(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,ka=!1,Ea=e}}function _a(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Ea=e}function Oa(e){if(e!==Ea)return!1;if(!ka)return _a(e),ka=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!xn(t,e.memoizedProps))for(t=Sa;t;)Ta(e,t),t=Sn(t.nextSibling);if(_a(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Sa=Sn(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Sa=null}}else Sa=Ea?Sn(e.stateNode.nextSibling):null;return!0}function Aa(){Sa=Ea=null,ka=!1}var Na=J.ReactCurrentOwner,Ra=!1;function Ia(e,t,n,r){t.child=null===e?_i(t,null,n,r):Ci(t,e.child,n,r)}function Ma(e,t,n,r,o){n=n.render;var i=t.ref;return ii(t,o),r=Gi(e,t,n,r,i,o),null===e||Ra?(t.effectTag|=1,Ia(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Ga(e,t,o))}function ja(e,t,n,r,o,i){if(null===e){var a=n.type;return"function"!=typeof a||Cl(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ol(n.type,null,r,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,La(e,t,a,r,o,i))}return a=e.child,o<i&&(o=a.memoizedProps,(n=null!==(n=n.compare)?n:Br)(o,r)&&e.ref===t.ref)?Ga(e,t,i):(t.effectTag|=1,(e=_l(a,r)).ref=t.ref,e.return=t,t.child=e)}function La(e,t,n,r,o,i){return null!==e&&Br(e.memoizedProps,r)&&e.ref===t.ref&&(Ra=!1,o<i)?(t.expirationTime=e.expirationTime,Ga(e,t,i)):za(e,t,n,r,i)}function Fa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function za(e,t,n,r,o){var i=yo(n)?go:ho.current;return i=mo(t,i),ii(t,o),n=Gi(e,t,n,r,i,o),null===e||Ra?(t.effectTag|=1,Ia(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Ga(e,t,o))}function Da(e,t,n,o,i){if(yo(n)){var a=!0;Eo(t)}else a=!1;if(ii(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),xi(t,n,o),Ei(t,n,o,i),o=!0;else if(null===e){var u=t.stateNode,l=t.memoizedProps;u.props=l;var c=u.context,s=n.contextType;"object"===r(s)&&null!==s?s=ai(s):s=mo(t,s=yo(n)?go:ho.current);var f=n.getDerivedStateFromProps,p="function"==typeof f||"function"==typeof u.getSnapshotBeforeUpdate;p||"function"!=typeof u.UNSAFE_componentWillReceiveProps&&"function"!=typeof u.componentWillReceiveProps||(l!==o||c!==s)&&wi(t,u,o,s),ui=!1;var d=t.memoizedState;u.state=d,di(t,o,u,i),c=t.memoizedState,l!==o||d!==c||vo.current||ui?("function"==typeof f&&(mi(t,n,f,o),c=t.memoizedState),(l=ui||bi(t,n,l,o,d,c,s))?(p||"function"!=typeof u.UNSAFE_componentWillMount&&"function"!=typeof u.componentWillMount||("function"==typeof u.componentWillMount&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&u.UNSAFE_componentWillMount()),"function"==typeof u.componentDidMount&&(t.effectTag|=4)):("function"==typeof u.componentDidMount&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=c),u.props=o,u.state=c,u.context=s,o=l):("function"==typeof u.componentDidMount&&(t.effectTag|=4),o=!1)}else u=t.stateNode,ci(e,t),l=t.memoizedProps,u.props=t.type===t.elementType?l:Xo(t.type,l),c=u.context,"object"===r(s=n.contextType)&&null!==s?s=ai(s):s=mo(t,s=yo(n)?go:ho.current),(p="function"==typeof(f=n.getDerivedStateFromProps)||"function"==typeof u.getSnapshotBeforeUpdate)||"function"!=typeof u.UNSAFE_componentWillReceiveProps&&"function"!=typeof u.componentWillReceiveProps||(l!==o||c!==s)&&wi(t,u,o,s),ui=!1,c=t.memoizedState,u.state=c,di(t,o,u,i),d=t.memoizedState,l!==o||c!==d||vo.current||ui?("function"==typeof f&&(mi(t,n,f,o),d=t.memoizedState),(f=ui||bi(t,n,l,o,c,d,s))?(p||"function"!=typeof u.UNSAFE_componentWillUpdate&&"function"!=typeof u.componentWillUpdate||("function"==typeof u.componentWillUpdate&&u.componentWillUpdate(o,d,s),"function"==typeof u.UNSAFE_componentWillUpdate&&u.UNSAFE_componentWillUpdate(o,d,s)),"function"==typeof u.componentDidUpdate&&(t.effectTag|=4),"function"==typeof u.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof u.componentDidUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof u.getSnapshotBeforeUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=d),u.props=o,u.state=d,u.context=s,o=f):("function"!=typeof u.componentDidUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof u.getSnapshotBeforeUpdate||l===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),o=!1);return Ua(e,t,n,o,a,i)}function Ua(e,t,n,r,o,i){Fa(e,t);var a=0!=(64&t.effectTag);if(!r&&!a)return o&&So(t,n,!1),Ga(e,t,i);r=t.stateNode,Na.current=t;var u=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&a?(t.child=Ci(t,e.child,null,i),t.child=Ci(t,null,u,i)):Ia(e,t,u,i),t.memoizedState=r.state,o&&So(t,n,!0),t.child}function Ba(e){var t=e.stateNode;t.pendingContext?xo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&xo(0,t.context,!1),Mi(e,t.containerInfo)}var Va,Wa,$a,Qa={dehydrated:null,retryTime:0};function qa(e,t,n){var r,o=t.mode,i=t.pendingProps,a=zi.current,u=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&a)&&(null===e||null!==e.memoizedState)),r?(u=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(a|=1),fo(zi,1&a),null===e){if(void 0!==i.fallback&&Ca(t),u){if(u=i.fallback,(i=Al(null,o,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,i.child=e;null!==e;)e.return=i,e=e.sibling;return(n=Al(u,o,n,null)).return=t,i.sibling=n,t.memoizedState=Qa,t.child=i,n}return o=i.children,t.memoizedState=null,t.child=_i(t,null,o,n)}if(null!==e.memoizedState){if(o=(e=e.child).sibling,u){if(i=i.fallback,(n=_l(e,e.pendingProps)).return=t,0==(2&t.mode)&&(u=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=u;null!==u;)u.return=n,u=u.sibling;return(o=_l(o,i)).return=t,n.sibling=o,n.childExpirationTime=0,t.memoizedState=Qa,t.child=n,o}return n=Ci(t,e.child,i.children,n),t.memoizedState=null,t.child=n}if(e=e.child,u){if(u=i.fallback,(i=Al(null,o,0,null)).return=t,i.child=e,null!==e&&(e.return=i),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,i.child=e;null!==e;)e.return=i,e=e.sibling;return(n=Al(u,o,n,null)).return=t,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,t.memoizedState=Qa,t.child=i,n}return t.memoizedState=null,t.child=Ci(t,e,i.children,n)}function Ha(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),oi(e.return,t)}function Ka(e,t,n,r,o,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=o,a.lastEffect=i)}function Ya(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ia(e,t,r.children,n),0!=(2&(r=zi.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ha(e,n);else if(19===e.tag)Ha(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fo(zi,r),0==(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===Di(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ka(t,!1,o,n,i,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Di(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ka(t,!0,n,null,i,t.lastEffect);break;case"together":Ka(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ga(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&ll(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(u(153));if(null!==t.child){for(n=_l(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=_l(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xa(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ja(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return yo(t.type)&&bo(),null;case 3:return ji(),so(vo),so(ho),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Oa(t)||(t.effectTag|=4),null;case 5:Fi(t),n=Ii(Ri.current);var o=t.type;if(null!==e&&null!=t.stateNode)Wa(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(u(166));return null}if(e=Ii(Ai.current),Oa(t)){r=t.stateNode,o=t.type;var a=t.memoizedProps;switch(r[Pn]=t,r[Cn]=a,o){case"iframe":case"object":case"embed":Yt("load",r);break;case"video":case"audio":for(e=0;e<Je.length;e++)Yt(Je[e],r);break;case"source":Yt("error",r);break;case"img":case"image":case"link":Yt("error",r),Yt("load",r);break;case"form":Yt("reset",r),Yt("submit",r);break;case"details":Yt("toggle",r);break;case"input":Te(r,a),Yt("invalid",r),sn(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Yt("invalid",r),sn(n,"onChange");break;case"textarea":Ie(r,a),Yt("invalid",r),sn(n,"onChange")}for(var l in un(o,a),e=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"==typeof c?r.textContent!==c&&(e=["children",c]):"number"==typeof c&&r.textContent!==""+c&&(e=["children",""+c]):T.hasOwnProperty(l)&&null!=c&&sn(n,l)}switch(o){case"input":Ee(r),_e(r,a,!0);break;case"textarea":Ee(r),je(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=fn)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(l=9===n.nodeType?n:n.ownerDocument,e===cn&&(e=ze(o)),e===cn?"script"===o?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),"select"===o&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[Pn]=t,e[Cn]=r,Va(e,t),t.stateNode=e,l=ln(o,r),o){case"iframe":case"object":case"embed":Yt("load",e),c=r;break;case"video":case"audio":for(c=0;c<Je.length;c++)Yt(Je[c],e);c=r;break;case"source":Yt("error",e),c=r;break;case"img":case"image":case"link":Yt("error",e),Yt("load",e),c=r;break;case"form":Yt("reset",e),Yt("submit",e),c=r;break;case"details":Yt("toggle",e),c=r;break;case"input":Te(e,r),c=ke(e,r),Yt("invalid",e),sn(n,"onChange");break;case"option":c=Ae(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},c=i({},r,{value:void 0}),Yt("invalid",e),sn(n,"onChange");break;case"textarea":Ie(e,r),c=Re(e,r),Yt("invalid",e),sn(n,"onChange");break;default:c=r}un(o,c);var s=c;for(a in s)if(s.hasOwnProperty(a)){var f=s[a];"style"===a?on(e,f):"dangerouslySetInnerHTML"===a?null!=(f=f?f.__html:void 0)&&Be(e,f):"children"===a?"string"==typeof f?("textarea"!==o||""!==f)&&Ve(e,f):"number"==typeof f&&Ve(e,""+f):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(T.hasOwnProperty(a)?null!=f&&sn(n,a):null!=f&&Z(e,a,f,l))}switch(o){case"input":Ee(e),_e(e,r,!1);break;case"textarea":Ee(e),je(e);break;case"option":null!=r.value&&e.setAttribute("value",""+xe(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Ne(e,!!r.multiple,n,!1):null!=r.defaultValue&&Ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof c.onClick&&(e.onclick=fn)}bn(o,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)$a(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(u(166));n=Ii(Ri.current),Ii(Ai.current),Oa(t)?(n=t.stateNode,r=t.memoizedProps,n[Pn]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Pn]=t,t.stateNode=n)}return null;case 13:return so(zi),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Oa(t):(r=null!==(o=e.memoizedState),n||null===o||null!==(o=e.child.sibling)&&(null!==(a=t.firstEffect)?(t.firstEffect=o,o.nextEffect=a):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&zi.current)?Ou===Eu&&(Ou=Su):(Ou!==Eu&&Ou!==Su||(Ou=ku),0!==Mu&&null!==Pu&&(jl(Pu,_u),Ll(Pu,Mu)))),(n||r)&&(t.effectTag|=4),null);case 4:return ji(),null;case 10:return ri(t),null;case 17:return yo(t.type)&&bo(),null;case 19:if(so(zi),null===(r=t.memoizedState))return null;if(o=0!=(64&t.effectTag),null===(a=r.rendering)){if(o)Xa(r,!1);else if(Ou!==Eu||null!==e&&0!=(64&e.effectTag))for(a=t.child;null!==a;){if(null!==(e=Di(a))){for(t.effectTag|=64,Xa(r,!1),null!==(o=e.updateQueue)&&(t.updateQueue=o,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)a=n,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=a,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=null===a?null:{expirationTime:a.expirationTime,firstContext:a.firstContext,responders:a.responders}),r=r.sibling;return fo(zi,1&zi.current|2),t.child}a=a.sibling}}else{if(!o)if(null!==(e=Di(a))){if(t.effectTag|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Xa(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Vo()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Xa(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=r.last)?n.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Vo()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Vo(),n.sibling=null,t=zi.current,fo(zi,o?1&t|2:1&t),n):null}throw Error(u(156,t.tag))}function Za(e){switch(e.tag){case 1:yo(e.type)&&bo();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(ji(),so(vo),so(ho),0!=(64&(t=e.effectTag)))throw Error(u(285));return e.effectTag=-4097&t|64,e;case 5:return Fi(e),null;case 13:return so(zi),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return so(zi),null;case 4:return ji(),null;case 10:return ri(e),null;default:return null}}function eu(e,t){return{value:e,source:t,stack:be(t)}}Va=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Wa=function(e,t,n,r,o){var a=e.memoizedProps;if(a!==r){var u,l,c=t.stateNode;switch(Ii(Ai.current),e=null,n){case"input":a=ke(c,a),r=ke(c,r),e=[];break;case"option":a=Ae(c,a),r=Ae(c,r),e=[];break;case"select":a=i({},a,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":a=Re(c,a),r=Re(c,r),e=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(c.onclick=fn)}for(u in un(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u)for(l in c=a[u])c.hasOwnProperty(l)&&(n||(n={}),n[l]="");else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(T.hasOwnProperty(u)?e||(e=[]):(e=e||[]).push(u,null));for(u in r){var s=r[u];if(c=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&s!==c&&(null!=s||null!=c))if("style"===u)if(c){for(l in c)!c.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&c[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(e||(e=[]),e.push(u,n)),n=s;else"dangerouslySetInnerHTML"===u?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(e=e||[]).push(u,s)):"children"===u?c===s||"string"!=typeof s&&"number"!=typeof s||(e=e||[]).push(u,""+s):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(T.hasOwnProperty(u)?(null!=s&&sn(o,u),e||c===s||(e=[])):(e=e||[]).push(u,s))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}},$a=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var tu="function"==typeof WeakSet?WeakSet:Set;function nu(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=be(n)),null!==n&&ye(n.type),t=t.value,null!==e&&1===e.tag&&ye(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function ru(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){xl(e,t)}else t.current=null}function ou(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Xo(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163))}function iu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function au(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void au(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Xo(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&hi(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}hi(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&bn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&zt(n)))));case 19:case 17:case 20:case 21:return}throw Error(u(163))}function lu(e,t,n){switch("function"==typeof kl&&kl(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Qo(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var o=t;try{n()}catch(e){xl(o,e)}}e=e.next}while(e!==r)}))}break;case 1:ru(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){xl(e,t)}}(t,n);break;case 5:ru(t);break;case 4:pu(e,t,n)}}function cu(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&cu(t)}function su(e){return 5===e.tag||3===e.tag||4===e.tag}function fu(e){e:{for(var t=e.return;null!==t;){if(su(t)){var n=t;break e}t=t.return}throw Error(u(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(u(161))}16&n.effectTag&&(Ve(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||su(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var o=t.tag,i=5===o||6===o;if(i)t=i?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=fn));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var o=t.tag,i=5===o||6===o;if(i)t=i?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function pu(e,t,n){for(var r,o,i=t,a=!1;;){if(!a){a=i.return;e:for(;;){if(null===a)throw Error(u(160));switch(r=a.stateNode,a.tag){case 5:o=!1;break e;case 3:case 4:r=r.containerInfo,o=!0;break e}a=a.return}a=!0}if(5===i.tag||6===i.tag){e:for(var l=e,c=i,s=n,f=c;;)if(lu(l,f,s),null!==f.child&&4!==f.tag)f.child.return=f,f=f.child;else{if(f===c)break e;for(;null===f.sibling;){if(null===f.return||f.return===c)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}o?(l=r,c=i.stateNode,8===l.nodeType?l.parentNode.removeChild(c):l.removeChild(c)):r.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){r=i.stateNode.containerInfo,o=!0,i.child.return=i,i=i.child;continue}}else if(lu(e,i,n),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(a=!1)}i.sibling.return=i.return,i=i.sibling}}function du(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void iu(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,o=null!==e?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,null!==i){for(n[Cn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Pe(n,r),ln(e,o),t=ln(e,r),o=0;o<i.length;o+=2){var a=i[o],l=i[o+1];"style"===a?on(n,l):"dangerouslySetInnerHTML"===a?Be(n,l):"children"===a?Ve(n,l):Z(n,a,l,t)}switch(e){case"input":Ce(n,r);break;case"textarea":Me(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Ne(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Ne(n,!!r.multiple,r.defaultValue,!0):Ne(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(u(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,zt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Lu=Vo()),null!==n)e:for(e=n;;){if(5===e.tag)i=e.stateNode,r?"function"==typeof(i=i.style).setProperty?i.setProperty("display","none","important"):i.display="none":(i=e.stateNode,o=null!=(o=e.memoizedProps.style)&&o.hasOwnProperty("display")?o.display:null,i.style.display=rn("display",o));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(i=e.child.sibling).return=e,e=i;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void hu(t);case 19:return void hu(t);case 17:return}throw Error(u(163))}function hu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new tu),t.forEach((function(t){var r=El.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var vu="function"==typeof WeakMap?WeakMap:Map;function gu(e,t,n){(n=si(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zu||(zu=!0,Du=r),nu(e,t)},n}function mu(e,t,n){(n=si(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return nu(e,t),r(o)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Uu?Uu=new Set([this]):Uu.add(this),nu(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var yu,bu=Math.ceil,xu=J.ReactCurrentDispatcher,wu=J.ReactCurrentOwner,Eu=0,Su=3,ku=4,Tu=0,Pu=null,Cu=null,_u=0,Ou=Eu,Au=null,Nu=1073741823,Ru=1073741823,Iu=null,Mu=0,ju=!1,Lu=0,Fu=null,zu=!1,Du=null,Uu=null,Bu=!1,Vu=null,Wu=90,$u=null,Qu=0,qu=null,Hu=0;function Ku(){return 0!=(48&Tu)?1073741821-(Vo()/10|0):0!==Hu?Hu:Hu=1073741821-(Vo()/10|0)}function Yu(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=Wo();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&Tu))return _u;if(null!==n)e=Go(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Go(e,150,100);break;case 97:case 96:e=Go(e,5e3,250);break;case 95:e=2;break;default:throw Error(u(326))}return null!==Pu&&e===_u&&--e,e}function Gu(e,t){if(50<Qu)throw Qu=0,qu=null,Error(u(185));if(null!==(e=Xu(e,t))){var n=Wo();1073741823===t?0!=(8&Tu)&&0==(48&Tu)?tl(e):(Zu(e),0===Tu&&Ko()):Zu(e),0==(4&Tu)||98!==n&&99!==n||(null===$u?$u=new Map([[e,t]]):(void 0===(n=$u.get(e))||n>t)&&$u.set(e,t))}}function Xu(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(null===r&&3===e.tag)o=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){o=r.stateNode;break}r=r.return}return null!==o&&(Pu===o&&(ll(t),Ou===ku&&jl(o,_u)),Ll(o,t)),o}function Ju(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Ml(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Zu(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Ho(tl.bind(null,e));else{var t=Ju(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ku();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var o=e.callbackPriority;if(e.callbackExpirationTime===t&&o>=r)return;n!==jo&&Po(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Ho(tl.bind(null,e)):qo(r,el.bind(null,e),{timeout:10*(1073741821-t)-Vo()}),e.callbackNode=t}}}function el(e,t){if(Hu=0,t)return Fl(e,t=Ku()),Zu(e),null;var n=Ju(e);if(0!==n){if(t=e.callbackNode,0!=(48&Tu))throw Error(u(327));if(ml(),e===Pu&&n===_u||ol(e,n),null!==Cu){var r=Tu;Tu|=16;for(var o=al();;)try{sl();break}catch(t){il(e,t)}if(ni(),Tu=r,xu.current=o,1===Ou)throw t=Au,ol(e,n),jl(e,n),Zu(e),t;if(null===Cu)switch(o=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Ou,Pu=null,r){case Eu:case 1:throw Error(u(345));case 2:Fl(e,2<n?2:n);break;case Su:if(jl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=dl(o)),1073741823===Nu&&10<(o=Lu+500-Vo())){if(ju){var i=e.lastPingedTime;if(0===i||i>=n){e.lastPingedTime=n,ol(e,n);break}}if(0!==(i=Ju(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=wn(hl.bind(null,e),o);break}hl(e);break;case ku:if(jl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=dl(o)),ju&&(0===(o=e.lastPingedTime)||o>=n)){e.lastPingedTime=n,ol(e,n);break}if(0!==(o=Ju(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Ru?r=10*(1073741821-Ru)-Vo():1073741823===Nu?r=0:(r=10*(1073741821-Nu)-5e3,0>(r=(o=Vo())-r)&&(r=0),(n=10*(1073741821-n)-o)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bu(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=wn(hl.bind(null,e),r);break}hl(e);break;case 5:if(1073741823!==Nu&&null!==Iu){i=Nu;var a=Iu;if(0>=(r=0|a.busyMinDurationMs)?r=0:(o=0|a.busyDelayMs,r=(i=Vo()-(10*(1073741821-i)-(0|a.timeoutMs||5e3)))<=o?0:o+r-i),10<r){jl(e,n),e.timeoutHandle=wn(hl.bind(null,e),r);break}}hl(e);break;default:throw Error(u(329))}if(Zu(e),e.callbackNode===t)return el.bind(null,e)}}return null}function tl(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&Tu))throw Error(u(327));if(ml(),e===Pu&&t===_u||ol(e,t),null!==Cu){var n=Tu;Tu|=16;for(var r=al();;)try{cl();break}catch(t){il(e,t)}if(ni(),Tu=n,xu.current=r,1===Ou)throw n=Au,ol(e,t),jl(e,t),Zu(e),n;if(null!==Cu)throw Error(u(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Pu=null,hl(e),Zu(e)}return null}function nl(e,t){var n=Tu;Tu|=1;try{return e(t)}finally{0===(Tu=n)&&Ko()}}function rl(e,t){var n=Tu;Tu&=-2,Tu|=8;try{return e(t)}finally{0===(Tu=n)&&Ko()}}function ol(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,En(n)),null!==Cu)for(n=Cu.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&bo();break;case 3:ji(),so(vo),so(ho);break;case 5:Fi(r);break;case 4:ji();break;case 13:case 19:so(zi);break;case 10:ri(r)}n=n.return}Pu=e,Cu=_l(e.current,null),_u=t,Ou=Eu,Au=null,Ru=Nu=1073741823,Iu=null,Mu=0,ju=!1}function il(e,t){for(;;){try{if(ni(),Bi.current=ya,Hi)for(var n=$i.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}if(Wi=0,qi=Qi=$i=null,Hi=!1,null===Cu||null===Cu.return)return Ou=1,Au=t,Cu=null;e:{var i=e,a=Cu.return,u=Cu,l=t;if(t=_u,u.effectTag|=2048,u.firstEffect=u.lastEffect=null,null!==l&&"object"===r(l)&&"function"==typeof l.then){var c=l;if(0==(2&u.mode)){var s=u.alternate;s?(u.updateQueue=s.updateQueue,u.memoizedState=s.memoizedState,u.expirationTime=s.expirationTime):(u.updateQueue=null,u.memoizedState=null)}var f=0!=(1&zi.current),p=a;do{var d;if(d=13===p.tag){var h=p.memoizedState;if(null!==h)d=null!==h.dehydrated;else{var v=p.memoizedProps;d=void 0!==v.fallback&&(!0!==v.unstable_avoidThisFallback||!f)}}if(d){var g=p.updateQueue;if(null===g){var m=new Set;m.add(c),p.updateQueue=m}else g.add(c);if(0==(2&p.mode)){if(p.effectTag|=64,u.effectTag&=-2981,1===u.tag)if(null===u.alternate)u.tag=17;else{var y=si(1073741823,null);y.tag=2,fi(u,y)}u.expirationTime=1073741823;break e}l=void 0,u=t;var b=i.pingCache;if(null===b?(b=i.pingCache=new vu,l=new Set,b.set(c,l)):void 0===(l=b.get(c))&&(l=new Set,b.set(c,l)),!l.has(u)){l.add(u);var x=wl.bind(null,i,c,u);c.then(x,x)}p.effectTag|=4096,p.expirationTime=t;break e}p=p.return}while(null!==p);l=Error((ye(u.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+be(u))}5!==Ou&&(Ou=2),l=eu(l,u),p=a;do{switch(p.tag){case 3:c=l,p.effectTag|=4096,p.expirationTime=t,pi(p,gu(p,c,t));break e;case 1:c=l;var w=p.type,E=p.stateNode;if(0==(64&p.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===Uu||!Uu.has(E)))){p.effectTag|=4096,p.expirationTime=t,pi(p,mu(p,c,t));break e}}p=p.return}while(null!==p)}Cu=pl(Cu)}catch(e){t=e;continue}break}}function al(){var e=xu.current;return xu.current=ya,null===e?ya:e}function ul(e,t){e<Nu&&2<e&&(Nu=e),null!==t&&e<Ru&&2<e&&(Ru=e,Iu=t)}function ll(e){e>Mu&&(Mu=e)}function cl(){for(;null!==Cu;)Cu=fl(Cu)}function sl(){for(;null!==Cu&&!Lo();)Cu=fl(Cu)}function fl(e){var t=yu(e.alternate,e,_u);return e.memoizedProps=e.pendingProps,null===t&&(t=pl(e)),wu.current=null,t}function pl(e){Cu=e;do{var t=Cu.alternate;if(e=Cu.return,0==(2048&Cu.effectTag)){if(t=Ja(t,Cu,_u),1===_u||1!==Cu.childExpirationTime){for(var n=0,r=Cu.child;null!==r;){var o=r.expirationTime,i=r.childExpirationTime;o>n&&(n=o),i>n&&(n=i),r=r.sibling}Cu.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Cu.firstEffect),null!==Cu.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Cu.firstEffect),e.lastEffect=Cu.lastEffect),1<Cu.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Cu:e.firstEffect=Cu,e.lastEffect=Cu))}else{if(null!==(t=Za(Cu)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Cu.sibling))return t;Cu=e}while(null!==Cu);return Ou===Eu&&(Ou=5),null}function dl(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function hl(e){var t=Wo();return Qo(99,vl.bind(null,e,t)),null}function vl(t,n){do{ml()}while(null!==Vu);if(0!=(48&Tu))throw Error(u(327));var r=t.finishedWork,o=t.finishedExpirationTime;if(null===r)return null;if(t.finishedWork=null,t.finishedExpirationTime=0,r===t.current)throw Error(u(177));t.callbackNode=null,t.callbackExpirationTime=0,t.callbackPriority=90,t.nextKnownPendingLevel=0;var i=dl(r);if(t.firstPendingTime=i,o<=t.lastSuspendedTime?t.firstSuspendedTime=t.lastSuspendedTime=t.nextKnownPendingLevel=0:o<=t.firstSuspendedTime&&(t.firstSuspendedTime=o-1),o<=t.lastPingedTime&&(t.lastPingedTime=0),o<=t.lastExpiredTime&&(t.lastExpiredTime=0),t===Pu&&(Cu=Pu=null,_u=0),1<r.effectTag?null!==r.lastEffect?(r.lastEffect.nextEffect=r,i=r.firstEffect):i=r:i=r.firstEffect,null!==i){var a=Tu;Tu|=32,wu.current=null,mn=Kt;var l=vn();if(gn(l)){if("selectionStart"in l)var c={start:l.selectionStart,end:l.selectionEnd};else e:{var s=(c=(c=l.ownerDocument)&&c.defaultView||e).getSelection&&c.getSelection();if(s&&0!==s.rangeCount){c=s.anchorNode;var f=s.anchorOffset,p=s.focusNode;s=s.focusOffset;try{c.nodeType,p.nodeType}catch(e){c=null;break e}var d=0,h=-1,v=-1,g=0,m=0,y=l,b=null;t:for(;;){for(var x;y!==c||0!==f&&3!==y.nodeType||(h=d+f),y!==p||0!==s&&3!==y.nodeType||(v=d+s),3===y.nodeType&&(d+=y.nodeValue.length),null!==(x=y.firstChild);)b=y,y=x;for(;;){if(y===l)break t;if(b===c&&++g===f&&(h=d),b===p&&++m===s&&(v=d),null!==(x=y.nextSibling))break;b=(y=b).parentNode}y=x}c=-1===h||-1===v?null:{start:h,end:v}}else c=null}c=c||{start:0,end:0}}else c=null;yn={activeElementDetached:null,focusedElem:l,selectionRange:c},Kt=!1,Fu=i;do{try{gl()}catch(e){if(null===Fu)throw Error(u(330));xl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);Fu=i;do{try{for(l=t,c=n;null!==Fu;){var w=Fu.effectTag;if(16&w&&Ve(Fu.stateNode,""),128&w){var E=Fu.alternate;if(null!==E){var S=E.ref;null!==S&&("function"==typeof S?S(null):S.current=null)}}switch(1038&w){case 2:fu(Fu),Fu.effectTag&=-3;break;case 6:fu(Fu),Fu.effectTag&=-3,du(Fu.alternate,Fu);break;case 1024:Fu.effectTag&=-1025;break;case 1028:Fu.effectTag&=-1025,du(Fu.alternate,Fu);break;case 4:du(Fu.alternate,Fu);break;case 8:pu(l,f=Fu,c),cu(f)}Fu=Fu.nextEffect}}catch(e){if(null===Fu)throw Error(u(330));xl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);if(S=yn,E=vn(),w=S.focusedElem,c=S.selectionRange,E!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==c&&gn(w)&&(E=c.start,void 0===(S=c.end)&&(S=E),"selectionStart"in w?(w.selectionStart=E,w.selectionEnd=Math.min(S,w.value.length)):(S=(E=w.ownerDocument||document)&&E.defaultView||e).getSelection&&(S=S.getSelection(),f=w.textContent.length,l=Math.min(c.start,f),c=void 0===c.end?l:Math.min(c.end,f),!S.extend&&l>c&&(f=c,c=l,l=f),f=hn(w,l),p=hn(w,c),f&&p&&(1!==S.rangeCount||S.anchorNode!==f.node||S.anchorOffset!==f.offset||S.focusNode!==p.node||S.focusOffset!==p.offset)&&((E=E.createRange()).setStart(f.node,f.offset),S.removeAllRanges(),l>c?(S.addRange(E),S.extend(p.node,p.offset)):(E.setEnd(p.node,p.offset),S.addRange(E))))),E=[];for(S=w;S=S.parentNode;)1===S.nodeType&&E.push({element:S,left:S.scrollLeft,top:S.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<E.length;w++)(S=E[w]).element.scrollLeft=S.left,S.element.scrollTop=S.top}Kt=!!mn,yn=mn=null,t.current=r,Fu=i;do{try{for(w=t;null!==Fu;){var k=Fu.effectTag;if(36&k&&uu(w,Fu.alternate,Fu),128&k){E=void 0;var T=Fu.ref;if(null!==T){var P=Fu.stateNode;switch(Fu.tag){case 5:E=P;break;default:E=P}"function"==typeof T?T(E):T.current=E}}Fu=Fu.nextEffect}}catch(e){if(null===Fu)throw Error(u(330));xl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);Fu=null,Fo(),Tu=a}else t.current=r;if(Bu)Bu=!1,Vu=t,Wu=n;else for(Fu=i;null!==Fu;)n=Fu.nextEffect,Fu.nextEffect=null,Fu=n;if(0===(n=t.firstPendingTime)&&(Uu=null),1073741823===n?t===qu?Qu++:(Qu=0,qu=t):Qu=0,"function"==typeof Sl&&Sl(r.stateNode,o),Zu(t),zu)throw zu=!1,t=Du,Du=null,t;return 0!=(8&Tu)||Ko(),null}function gl(){for(;null!==Fu;){var e=Fu.effectTag;0!=(256&e)&&ou(Fu.alternate,Fu),0==(512&e)||Bu||(Bu=!0,qo(97,(function(){return ml(),null}))),Fu=Fu.nextEffect}}function ml(){if(90!==Wu){var e=97<Wu?97:Wu;return Wu=90,Qo(e,yl)}}function yl(){if(null===Vu)return!1;var e=Vu;if(Vu=null,0!=(48&Tu))throw Error(u(331));var t=Tu;for(Tu|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:iu(5,n),au(5,n)}}catch(t){if(null===e)throw Error(u(330));xl(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return Tu=t,Ko(),!0}function bl(e,t,n){fi(e,t=gu(e,t=eu(n,t),1073741823)),null!==(e=Xu(e,1073741823))&&Zu(e)}function xl(e,t){if(3===e.tag)bl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){bl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Uu||!Uu.has(r))){fi(n,e=mu(n,e=eu(t,e),1073741823)),null!==(n=Xu(n,1073741823))&&Zu(n);break}}n=n.return}}function wl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Pu===e&&_u===n?Ou===ku||Ou===Su&&1073741823===Nu&&Vo()-Lu<500?ol(e,_u):ju=!0:Ml(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Zu(e)))}function El(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=Yu(t=Ku(),e,null)),null!==(e=Xu(e,t))&&Zu(e)}yu=function(e,t,n){var o=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||vo.current)Ra=!0;else{if(o<n){switch(Ra=!1,t.tag){case 3:Ba(t),Aa();break;case 5:if(Li(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:yo(t.type)&&Eo(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:o=t.memoizedProps.value,i=t.type._context,fo(Jo,i._currentValue),i._currentValue=o;break;case 13:if(null!==t.memoizedState)return 0!==(o=t.child.childExpirationTime)&&o>=n?qa(e,t,n):(fo(zi,1&zi.current),null!==(t=Ga(e,t,n))?t.sibling:null);fo(zi,1&zi.current);break;case 19:if(o=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(o)return Ya(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),fo(zi,zi.current),!o)return null}return Ga(e,t,n)}Ra=!1}}else Ra=!1;switch(t.expirationTime=0,t.tag){case 2:if(o=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=mo(t,ho.current),ii(t,n),i=Gi(null,t,o,e,i,n),t.effectTag|=1,"object"===r(i)&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,yo(o)){var a=!0;Eo(t)}else a=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,li(t);var l=o.getDerivedStateFromProps;"function"==typeof l&&mi(t,o,l,e),i.updater=yi,t.stateNode=i,i._reactInternalFiber=t,Ei(t,o,e,n),t=Ua(null,t,o,!0,a,n)}else t.tag=0,Ia(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,a=t.tag=function(e){if("function"==typeof e)return Cl(e)?1:0;if(null!=e){if((e=e.$$typeof)===se)return 11;if(e===de)return 14}return 2}(i),e=Xo(i,e),a){case 0:t=za(null,t,i,e,n);break e;case 1:t=Da(null,t,i,e,n);break e;case 11:t=Ma(null,t,i,e,n);break e;case 14:t=ja(null,t,i,Xo(i.type,e),o,n);break e}throw Error(u(306,i,""))}return t;case 0:return o=t.type,i=t.pendingProps,za(e,t,o,i=t.elementType===o?i:Xo(o,i),n);case 1:return o=t.type,i=t.pendingProps,Da(e,t,o,i=t.elementType===o?i:Xo(o,i),n);case 3:if(Ba(t),o=t.updateQueue,null===e||null===o)throw Error(u(282));if(o=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ci(e,t),di(t,o,null,n),(o=t.memoizedState.element)===i)Aa(),t=Ga(e,t,n);else{if((i=t.stateNode.hydrate)&&(Sa=Sn(t.stateNode.containerInfo.firstChild),Ea=t,i=ka=!0),i)for(n=_i(t,null,o,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Ia(e,t,o,n),Aa();t=t.child}return t;case 5:return Li(t),null===e&&Ca(t),o=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,xn(o,i)?l=null:null!==a&&xn(o,a)&&(t.effectTag|=16),Fa(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ia(e,t,l,n),t=t.child),t;case 6:return null===e&&Ca(t),null;case 13:return qa(e,t,n);case 4:return Mi(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=Ci(t,null,o,n):Ia(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,Ma(e,t,o,i=t.elementType===o?i:Xo(o,i),n);case 7:return Ia(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ia(e,t,t.pendingProps.children,n),t.child;case 10:e:{o=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value;var c=t.type._context;if(fo(Jo,c._currentValue),c._currentValue=a,null!==l)if(c=l.value,0===(a=Dr(c,a)?0:0|("function"==typeof o._calculateChangedBits?o._calculateChangedBits(c,a):1073741823))){if(l.children===i.children&&!vo.current){t=Ga(e,t,n);break e}}else for(null!==(c=t.child)&&(c.return=t);null!==c;){var s=c.dependencies;if(null!==s){l=c.child;for(var f=s.firstContext;null!==f;){if(f.context===o&&0!=(f.observedBits&a)){1===c.tag&&((f=si(n,null)).tag=2,fi(c,f)),c.expirationTime<n&&(c.expirationTime=n),null!==(f=c.alternate)&&f.expirationTime<n&&(f.expirationTime=n),oi(c.return,n),s.expirationTime<n&&(s.expirationTime=n);break}f=f.next}}else l=10===c.tag&&c.type===t.type?null:c.child;if(null!==l)l.return=c;else for(l=c;null!==l;){if(l===t){l=null;break}if(null!==(c=l.sibling)){c.return=l.return,l=c;break}l=l.return}c=l}Ia(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=(a=t.pendingProps).children,ii(t,n),o=o(i=ai(i,a.unstable_observedBits)),t.effectTag|=1,Ia(e,t,o,n),t.child;case 14:return a=Xo(i=t.type,t.pendingProps),ja(e,t,i,a=Xo(i.type,a),o,n);case 15:return La(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Xo(o,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,yo(o)?(e=!0,Eo(t)):e=!1,ii(t,n),xi(t,o,i),Ei(t,o,i,n),Ua(null,t,o,!0,e,n);case 19:return Ya(e,t,n)}throw Error(u(156,t.tag))};var Sl=null,kl=null;function Tl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Pl(e,t,n,r){return new Tl(e,t,n,r)}function Cl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function _l(e,t){var n=e.alternate;return null===n?((n=Pl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ol(e,t,n,o,i,a){var l=2;if(o=e,"function"==typeof e)Cl(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case oe:return Al(n.children,i,a,t);case ce:l=8,i|=7;break;case ie:l=8,i|=1;break;case ae:return(e=Pl(12,n,t,8|i)).elementType=ae,e.type=ae,e.expirationTime=a,e;case fe:return(e=Pl(13,n,t,i)).type=fe,e.elementType=fe,e.expirationTime=a,e;case pe:return(e=Pl(19,n,t,i)).elementType=pe,e.expirationTime=a,e;default:if("object"===r(e)&&null!==e)switch(e.$$typeof){case ue:l=10;break e;case le:l=9;break e;case se:l=11;break e;case de:l=14;break e;case he:l=16,o=null;break e;case ve:l=22;break e}throw Error(u(130,null==e?e:r(e),""))}return(t=Pl(l,n,t,i)).elementType=e,t.type=o,t.expirationTime=a,t}function Al(e,t,n,r){return(e=Pl(7,e,r,t)).expirationTime=n,e}function Nl(e,t,n){return(e=Pl(6,e,null,t)).expirationTime=n,e}function Rl(e,t,n){return(t=Pl(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Il(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Ml(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function jl(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Ll(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Fl(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function zl(e,t,n,r){var o=t.current,i=Ku(),a=vi.suspense;i=Yu(i,o,a);e:if(n){t:{if(tt(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(u(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(yo(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(u(171))}if(1===n.tag){var c=n.type;if(yo(c)){n=wo(n,c,l);break e}}n=l}else n=po;return null===t.context?t.context=n:t.pendingContext=n,(t=si(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),fi(o,t),Gu(o,i),i}function Dl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Ul(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Bl(e,t){Ul(e,t),(e=e.alternate)&&Ul(e,t)}function Vl(e,t,n){var r=new Il(e,t,n=null!=n&&!0===n.hydrate),o=Pl(3,null,null,2===t?7:1===t?3:0);r.current=o,o.stateNode=r,li(o),e[_n]=r.current,n&&0!==t&&function(e,t){var n=et(t);_t.forEach((function(e){gt(e,t,n)})),Ot.forEach((function(e){gt(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Wl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function $l(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i._internalRoot;if("function"==typeof o){var u=o;o=function(){var e=Dl(a);u.call(e)}}zl(t,a,e,o)}else{if(i=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Vl(e,0,t?{hydrate:!0}:void 0)}(n,r),a=i._internalRoot,"function"==typeof o){var l=o;o=function(){var e=Dl(a);l.call(e)}}rl((function(){zl(t,a,e,o)}))}return Dl(a)}function Ql(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:re,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function ql(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Wl(t))throw Error(u(200));return Ql(e,t,null,n)}Vl.prototype.render=function(e){zl(e,this._internalRoot,null,null)},Vl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;zl(null,e,null,(function(){t[_n]=null}))},mt=function(e){if(13===e.tag){var t=Go(Ku(),150,100);Gu(e,t),Bl(e,t)}},yt=function(e){13===e.tag&&(Gu(e,3),Bl(e,3))},bt=function(e){if(13===e.tag){var t=Ku();Gu(e,t=Yu(t,e,null)),Bl(e,t)}},O=function(e,t,n){switch(t){case"input":if(Ce(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Rn(r);if(!o)throw Error(u(90));Se(r),Ce(r,o)}}}break;case"textarea":Me(e,n);break;case"select":null!=(t=n.value)&&Ne(e,!!n.multiple,t,!1)}},j=nl,L=function(e,t,n,r,o){var i=Tu;Tu|=4;try{return Qo(98,e.bind(null,t,n,r,o))}finally{0===(Tu=i)&&Ko()}},F=function(){0==(49&Tu)&&(function(){if(null!==$u){var e=$u;$u=null,e.forEach((function(e,t){Fl(t,e),Zu(t)})),Ko()}}(),ml())},z=function(e,t){var n=Tu;Tu|=2;try{return e(t)}finally{0===(Tu=n)&&Ko()}};var Hl,Kl,Yl={Events:[An,Nn,Rn,C,k,Dn,function(e){at(e,zn)},I,M,Zt,ct,ml,{current:!1}]};Kl=(Hl={findFiberByHostInstance:On,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Sl=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},kl=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},Hl,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=ot(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Kl?Kl(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yl,t.createPortal=ql,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(u(188));throw Error(u(268,Object.keys(e)))}return e=null===(e=ot(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&Tu))throw Error(u(187));var n=Tu;Tu|=1;try{return Qo(99,e.bind(null,t))}finally{Tu=n,Ko()}},t.hydrate=function(e,t,n){if(!Wl(t))throw Error(u(200));return $l(null,e,t,!0,n)},t.render=function(e,t,n){if(!Wl(t))throw Error(u(200));return $l(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(u(40));return!!e._reactRootContainer&&(rl((function(){$l(null,null,e,!1,(function(){e._reactRootContainer=null,e[_n]=null}))})),!0)},t.unstable_batchedUpdates=nl,t.unstable_createPortal=function(e,t){return ql(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(u(200));if(null==e||void 0===e._reactInternalFiber)throw Error(u(38));return $l(e,t,n,!1,r)},t.version="16.13.1"}).call(this,n(41))},function(e,t,n){"use strict";e.exports=n(357)},function(e,t,n){"use strict";(function(e){
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,o,i,a,u;if(void 0===e||"function"!=typeof MessageChannel){var l=null,c=null,s=function e(){if(null!==l)try{var n=t.unstable_now();l(!0,n),l=null}catch(t){throw setTimeout(e,0),t}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(s,0))},o=function(e,t){c=setTimeout(e,t)},i=function(){clearTimeout(c)},a=function(){return!1},u=t.unstable_forceFrameRate=function(){}}else{var p=e.performance,d=e.Date,h=e.setTimeout,v=e.clearTimeout;if("undefined"!=typeof console){var g=e.cancelAnimationFrame;"function"!=typeof e.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===n(p)&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var m=d.now();t.unstable_now=function(){return d.now()-m}}var y=!1,b=null,x=-1,w=5,E=0;a=function(){return t.unstable_now()>=E},u=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var S=new MessageChannel,k=S.port2;S.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();E=e+w;try{b(!0,e)?k.postMessage(null):(y=!1,b=null)}catch(e){throw k.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,k.postMessage(null))},o=function(e,n){x=h((function(){e(t.unstable_now())}),n)},i=function(){v(x),x=-1}}function T(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<_(o,t)))break e;e[r]=t,e[n]=o,n=r}}function P(e){return void 0===(e=e[0])?null:e}function C(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],u=i+1,l=e[u];if(void 0!==a&&0>_(a,n))void 0!==l&&0>_(l,a)?(e[r]=l,e[u]=n,r=u):(e[r]=a,e[i]=n,r=i);else{if(!(void 0!==l&&0>_(l,n)))break e;e[r]=l,e[u]=n,r=u}}}return t}return null}function _(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var O=[],A=[],N=1,R=null,I=3,M=!1,j=!1,L=!1;function F(e){for(var t=P(A);null!==t;){if(null===t.callback)C(A);else{if(!(t.startTime<=e))break;C(A),t.sortIndex=t.expirationTime,T(O,t)}t=P(A)}}function z(e){if(L=!1,F(e),!j)if(null!==P(O))j=!0,r(D);else{var t=P(A);null!==t&&o(z,t.startTime-e)}}function D(e,n){j=!1,L&&(L=!1,i()),M=!0;var r=I;try{for(F(n),R=P(O);null!==R&&(!(R.expirationTime>n)||e&&!a());){var u=R.callback;if(null!==u){R.callback=null,I=R.priorityLevel;var l=u(R.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?R.callback=l:R===P(O)&&C(O),F(n)}else C(O);R=P(O)}if(null!==R)var c=!0;else{var s=P(A);null!==s&&o(z,s.startTime-n),c=!1}return c}finally{R=null,I=r,M=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var B=u;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){j||M||(j=!0,r(D))},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return P(O)},t.unstable_next=function(e){switch(I){case 1:case 2:case 3:var t=3;break;default:t=I}var n=I;I=t;try{return e()}finally{I=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=B,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=I;I=e;try{return t()}finally{I=n}},t.unstable_scheduleCallback=function(e,a,u){var l=t.unstable_now();if("object"===n(u)&&null!==u){var c=u.delay;c="number"==typeof c&&0<c?l+c:l,u="number"==typeof u.timeout?u.timeout:U(e)}else u=U(e),c=l;return e={id:N++,callback:a,priorityLevel:e,startTime:c,expirationTime:u=c+u,sortIndex:-1},c>l?(e.sortIndex=c,T(A,e),null===P(O)&&e===P(A)&&(L?i():L=!0,o(z,c-l))):(e.sortIndex=u,T(O,e),j||M||(j=!0,r(D))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();F(e);var n=P(O);return n!==R&&null!==R&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<R.expirationTime||a()},t.unstable_wrapCallback=function(e){var t=I;return function(){var n=I;I=t;try{return e.apply(this,arguments)}finally{I=n}}}}).call(this,n(41))},function(e,t){e.exports=!1},function(e,t,n){"use strict";var r=n(18),o=n(39),i=n(30),a=n.n(i),u=n(3),l=n.n(u),c=n(40),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,u=e.as,s=void 0===u?"div":u,f=e.className,p=Object(o.a)(e,["bsPrefix","fluid","as","className"]),d=Object(c.a)(n,"container"),h="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(s,Object(r.a)({ref:t},p,{className:a()(f,i?""+d+h:d)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s}]);
//# sourceMappingURL=visual.js.map