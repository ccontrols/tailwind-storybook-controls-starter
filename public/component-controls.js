/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {



const path = __webpack_require__(2);


const configJSON = undefined;
const contexts = [];
contexts.push({
        folder: "/Users/atanasster/tw-sb-cc-starter/src", 
        req: __webpack_require__(4)
    });

const store = {"stores":[{"filePath":"/Users/atanasster/tw-sb-cc-starter/src/lib/components/button/button.stories.tsx","stories":{"Primary":{"args":{"variant":"primary"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Primary","id":"Primary","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"Success":{"args":{"variant":"success"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Success","id":"Success","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"Warn":{"args":{"variant":"warn"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Warn","id":"Warn","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"Danger":{"args":{"variant":"danger"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Danger","id":"Danger","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"FullWidth":{"args":{"fullWidth":true},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"FullWidth","id":"FullWidth","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"Medium":{"args":{"size":"medium"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Medium","id":"Medium","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"},"Small":{"args":{"size":"small"},"loc":{"start":{"column":37,"line":13},"end":{"column":86,"line":13}},"name":"Small","id":"Small","arguments":[{"value":"args","name":"args","loc":{"start":{"line":0,"column":1},"end":{"line":0,"column":5}},"usage":[{"loc":{"start":{"line":0,"column":22},"end":{"line":0,"column":26}}}]}],"source":"(args) => <Button {...args}>Button Label</Button>"}},"doc":{"title":"Components/Button","component":"Button","argTypes":{},"components":{},"componentsLookup":{"Button":"42c5cc39754801f65cdd8c4c603e4459"},"package":"97fd2516a5caebe0aad8caa4b21e2edf","dateModified":"2020-11-21T04:12:55.182Z","date":"2020-11-21T04:12:55.182Z","fileName":"/Users/atanasster/tw-sb-cc-starter/src/lib/components/button/button.stories.tsx"}}],"components":{"42c5cc39754801f65cdd8c4c603e4459":{"name":"Button","from":"./button","request":"/Users/atanasster/tw-sb-cc-starter/src/lib/components/button/button.tsx","imports":{"react":[{"name":"React","importedName":"default"}],"clsx":[{"name":"clsx","importedName":"default"}]},"importedName":"Button","source":"import React from 'react';\nimport clsx from 'clsx';\n\nexport interface ButtonProps extends React.ComponentProps<'button'> {\n  variant?: 'primary' | 'success' | 'warn' | 'danger';\n  size?: 'small' | 'medium';\n  fullWidth?: boolean;\n}\n\nexport const Button: React.FC<ButtonProps> = ({\n  children,\n  size = 'medium',\n  type = 'button',\n  variant = 'primary',\n  fullWidth,\n  className,\n  ...props\n}) => (\n  <button\n    // eslint-disable-next-line react/button-has-type\n    type={type}\n    className={clsx(\n      'rounded-md focus:outline-none focus:shadow-outline',\n      { 'bg-primary-500 text-white hover:bg-primary-600': variant === 'primary' },\n      { 'bg-green-500 text-white hover:bg-green-600': variant === 'success' },\n      { 'bg-yellow-500 text-white hover:bg-yellow-600': variant === 'warn' },\n      { 'bg-red-500 text-white hover:bg-red-600': variant === 'danger' },\n      { 'py-2 px-6': size === 'small' },\n      { 'py-4 px-8': size === 'medium' },\n      { 'w-full': fullWidth },\n      className,\n    )}\n    {...props}\n  >\n    {children}\n  </button>\n);\n","loc":{"start":{"line":10,"column":45},"end":{"line":37,"column":1}},"package":"42c5cc39754801f65cdd8c4c603e4459","info":{"description":"","displayName":"Button","methods":[],"props":{"variant":{"parentName":"ButtonProps","defaultValue":"primary","type":{"name":"union","value":[{"name":"primary"},{"name":"success"},{"name":"warn"},{"name":"danger"}],"raw":"\"primary\" | \"success\" | \"warn\" | \"danger\""}},"size":{"parentName":"ButtonProps","defaultValue":"medium","type":{"name":"union","value":[{"name":"small"},{"name":"medium"}],"raw":"\"small\" | \"medium\""}},"fullWidth":{"parentName":"ButtonProps","type":{"name":"boolean","raw":"boolean"}},"ref":{"parentName":"ClassAttributes","type":{"name":"function","raw":"string | ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},"key":{"parentName":"Attributes","type":{"name":"union","value":[{"name":"string"},{"name":"number"},{"name":"null"}],"raw":"string | number | null"}},"autoFocus":{"parentName":"ButtonHTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"disabled":{"parentName":"ButtonHTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"form":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"formAction":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"formEncType":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"formMethod":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"formNoValidate":{"parentName":"ButtonHTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"formTarget":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"name":{"parentName":"ButtonHTMLAttributes","type":{"name":"string","raw":"string"}},"type":{"parentName":"ButtonHTMLAttributes","defaultValue":"button","type":{"name":"union","value":[{"name":"button"},{"name":"submit"},{"name":"reset"}],"raw":"\"button\" | \"submit\" | \"reset\""}},"value":{"parentName":"ButtonHTMLAttributes","type":{"name":"array","value":[{"name":"string | number | readonly string"}],"raw":"string | number | readonly string[]"}},"defaultChecked":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"defaultValue":{"parentName":"HTMLAttributes","type":{"name":"array","value":[{"name":"string | number | readonly string"}],"raw":"string | number | readonly string[]"}},"suppressContentEditableWarning":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"suppressHydrationWarning":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"accessKey":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"className":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"contentEditable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"inherit"}],"raw":"boolean | \"true\" | \"false\" | \"inherit\""}},"contextMenu":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"dir":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"draggable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"hidden":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"id":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"lang":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"placeholder":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"slot":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"spellCheck":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"style":{"parentName":"HTMLAttributes","type":{"name":"CSSProperties","raw":"CSSProperties"}},"tabIndex":{"parentName":"HTMLAttributes","type":{"name":"number","raw":"number"}},"title":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"translate":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"yes"},{"name":"no"}],"raw":"\"yes\" | \"no\""}},"radioGroup":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"role":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"about":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"datatype":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"inlist":{"parentName":"HTMLAttributes","type":{"name":"any","raw":"any"}},"prefix":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"property":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"resource":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"typeof":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"vocab":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoCapitalize":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoCorrect":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"autoSave":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"color":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemProp":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemScope":{"parentName":"HTMLAttributes","type":{"name":"boolean","raw":"boolean"}},"itemType":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemID":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"itemRef":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"results":{"parentName":"HTMLAttributes","type":{"name":"number","raw":"number"}},"security":{"parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"unselectable":{"parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"on"},{"name":"off"}],"raw":"\"on\" | \"off\""}},"inputMode":{"description":"Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https ://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute","parentName":"HTMLAttributes","type":{"name":"union","value":[{"name":"text"},{"name":"none"},{"name":"tel"},{"name":"url"},{"name":"email"},{"name":"numeric"},{"name":"decimal"},{"name":"search"}],"raw":"\"text\" | \"none\" | \"tel\" | \"url\" | \"email\" | \"numeric\" | \"decimal\" | \"search\""}},"is":{"description":"Specify that a standard HTML element should behave like a defined custom built-in element\n@see https ://html.spec.whatwg.org/multipage/custom-elements.html#attr-is","parentName":"HTMLAttributes","type":{"name":"string","raw":"string"}},"aria-activedescendant":{"description":"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-atomic":{"description":"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-autocomplete":{"description":"Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"none"},{"name":"inline"},{"name":"list"},{"name":"both"}],"raw":"\"none\" | \"inline\" | \"list\" | \"both\""}},"aria-busy":{"description":"Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-checked":{"description":"Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"mixed"}],"raw":"boolean | \"true\" | \"false\" | \"mixed\""}},"aria-colcount":{"description":"Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-colindex":{"description":"Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-colspan":{"description":"Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-controls":{"description":"Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-current":{"description":"Indicates the element that represents the current item within a container or set of related elements.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"time"},{"name":"true"},{"name":"false"},{"name":"page"},{"name":"step"},{"name":"location"},{"name":"date"}],"raw":"boolean | \"time\" | \"true\" | \"false\" | \"page\" | \"step\" | \"location\" | \"date\""}},"aria-describedby":{"description":"Identifies the element (or elements) that describes the object.\n@see aria-labelledby","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-details":{"description":"Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-disabled":{"description":"Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-dropeffect":{"description":"Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"link"},{"name":"none"},{"name":"copy"},{"name":"execute"},{"name":"move"},{"name":"popup"}],"raw":"\"link\" | \"none\" | \"copy\" | \"execute\" | \"move\" | \"popup\""}},"aria-errormessage":{"description":"Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-expanded":{"description":"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-flowto":{"description":"Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-grabbed":{"description":"Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-haspopup":{"description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"dialog"},{"name":"menu"},{"name":"true"},{"name":"false"},{"name":"listbox"},{"name":"tree"},{"name":"grid"}],"raw":"boolean | \"dialog\" | \"menu\" | \"true\" | \"false\" | \"listbox\" | \"tree\" | \"grid\""}},"aria-hidden":{"description":"Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-invalid":{"description":"Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"grammar"},{"name":"spelling"}],"raw":"boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\""}},"aria-keyshortcuts":{"description":"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-label":{"description":"Defines a string value that labels the current element.\n@see aria-labelledby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-labelledby":{"description":"Identifies the element (or elements) that labels the current element.\n@see aria-describedby.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-level":{"description":"Defines the hierarchical level of an element within a structure.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-live":{"description":"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"off"},{"name":"assertive"},{"name":"polite"}],"raw":"\"off\" | \"assertive\" | \"polite\""}},"aria-modal":{"description":"Indicates whether an element is modal when displayed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-multiline":{"description":"Indicates whether a text box accepts multiple lines of input or only a single line.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-multiselectable":{"description":"Indicates that the user may select more than one item from the current selectable descendants.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-orientation":{"description":"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"horizontal"},{"name":"vertical"}],"raw":"\"horizontal\" | \"vertical\""}},"aria-owns":{"description":"Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-placeholder":{"description":"Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-posinset":{"description":"Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-pressed":{"description":"Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"},{"name":"mixed"}],"raw":"boolean | \"true\" | \"false\" | \"mixed\""}},"aria-readonly":{"description":"Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-relevant":{"description":"Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"text"},{"name":"additions"},{"name":"additions removals"},{"name":"additions text"},{"name":"all"},{"name":"removals"},{"name":"removals additions"},{"name":"removals text"},{"name":"text additions"},{"name":"text removals"}],"raw":"\"text\" | \"additions\" | \"additions removals\" | \"additions text\" | \"all\" | \"removals\" | \"removals additions\" | \"removals text\" | \"text additions\" | \"text removals\""}},"aria-required":{"description":"Indicates that user input is required on the element before a form may be submitted.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-roledescription":{"description":"Defines a human-readable, author-localized description for the role of an element.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"aria-rowcount":{"description":"Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-rowindex":{"description":"Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-rowspan":{"description":"Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-selected":{"description":"Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"boolean"},{"name":"true"},{"name":"false"}],"raw":"boolean | \"true\" | \"false\""}},"aria-setsize":{"description":"Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-sort":{"description":"Indicates if items in a table or grid are sorted in ascending or descending order.","parentName":"AriaAttributes","type":{"name":"union","value":[{"name":"none"},{"name":"ascending"},{"name":"descending"},{"name":"other"}],"raw":"\"none\" | \"ascending\" | \"descending\" | \"other\""}},"aria-valuemax":{"description":"Defines the maximum allowed value for a range widget.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuemin":{"description":"Defines the minimum allowed value for a range widget.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuenow":{"description":"Defines the current value for a range widget.\n@see aria-valuetext.","parentName":"AriaAttributes","type":{"name":"number","raw":"number"}},"aria-valuetext":{"description":"Defines the human readable text alternative of aria-valuenow for a range widget.","parentName":"AriaAttributes","type":{"name":"string","raw":"string"}},"dangerouslySetInnerHTML":{"parentName":"DOMAttributes","type":{"name":"object","raw":"{ __html: string; }"}},"onCopy":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onCopyCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onCut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onCutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onPaste":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onPasteCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},"onCompositionEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onCompositionEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onCompositionStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onCompositionStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onCompositionUpdate":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onCompositionUpdateCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: CompositionEvent<HTMLButtonElement>) => void)"}},"onFocus":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLButtonElement>) => void)"}},"onFocusCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLButtonElement>) => void)"}},"onBlur":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLButtonElement>) => void)"}},"onBlurCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FocusEvent<HTMLButtonElement>) => void)"}},"onChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onBeforeInput":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onBeforeInputCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onInput":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onInputCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onReset":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onResetCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onSubmit":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onSubmitCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onInvalid":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onInvalidCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: FormEvent<HTMLButtonElement>) => void)"}},"onLoad":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onError":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onErrorCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onKeyDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onKeyDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onKeyPress":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onKeyPressCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onKeyUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onKeyUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: KeyboardEvent<HTMLButtonElement>) => void)"}},"onAbort":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onAbortCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onCanPlay":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onCanPlayCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onCanPlayThrough":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onCanPlayThroughCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onDurationChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onDurationChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEmptied":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEmptiedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEncrypted":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEncryptedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEnded":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onEndedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadedData":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadedDataCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadedMetadata":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadedMetadataCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onLoadStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPause":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPauseCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPlay":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPlayCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPlaying":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onPlayingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onProgress":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onProgressCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onRateChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onRateChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSeeked":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSeekedCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSeeking":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSeekingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onStalled":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onStalledCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSuspend":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSuspendCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onTimeUpdate":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onTimeUpdateCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onVolumeChange":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onVolumeChangeCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onWaiting":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onWaitingCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onAuxClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onAuxClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onContextMenu":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onContextMenuCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onDoubleClick":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onDoubleClickCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onDrag":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragEnterCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragExit":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragExitCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragLeaveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDragStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDrop":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onDropCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: DragEvent<HTMLButtonElement>) => void)"}},"onMouseDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseOut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseOutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onMouseUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},"onSelect":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onSelectCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: SyntheticEvent<HTMLButtonElement, Event>) => void)"}},"onTouchCancel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchCancelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onTouchStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TouchEvent<HTMLButtonElement>) => void)"}},"onPointerDown":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerDownCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerMove":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerMoveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerUp":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerUpCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerCancel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerCancelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerEnter":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerEnterCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerLeave":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerLeaveCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerOver":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerOverCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerOut":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onPointerOutCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onGotPointerCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onGotPointerCaptureCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onLostPointerCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onLostPointerCaptureCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: PointerEvent<HTMLButtonElement>) => void)"}},"onScroll":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: UIEvent<HTMLButtonElement, UIEvent>) => void)"}},"onScrollCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: UIEvent<HTMLButtonElement, UIEvent>) => void)"}},"onWheel":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: WheelEvent<HTMLButtonElement>) => void)"}},"onWheelCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: WheelEvent<HTMLButtonElement>) => void)"}},"onAnimationStart":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onAnimationStartCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onAnimationEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onAnimationEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onAnimationIteration":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onAnimationIterationCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: AnimationEvent<HTMLButtonElement>) => void)"}},"onTransitionEnd":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TransitionEvent<HTMLButtonElement>) => void)"}},"onTransitionEndCapture":{"parentName":"DOMAttributes","type":{"name":"function","raw":"((event: TransitionEvent<HTMLButtonElement>) => void)"}}}}}},"packages":{"42c5cc39754801f65cdd8c4c603e4459":{"fileHash":"42c5cc39754801f65cdd8c4c603e4459","name":"tailwind-storybook-controls","version":"0.1.0","repository":{},"dependencies":{"clsx":"^1.1.1","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"^4.0.1","typescript":"^4.0.3","web-vitals":"^0.2.4"},"devDependencies":{"@babel/core":"^7.12.3","@commitlint/cli":"^11.0.0","@commitlint/config-conventional":"^11.0.0","@component-controls/axe-plugin":"^1.42.4","@component-controls/jest-snapshots":"^1.42.4","@component-controls/storybook":"^1.42.4","@component-controls/viewport-plugin":"^1.42.4","@fullhuman/postcss-purgecss":"^3.0.0","@storybook/addon-essentials":"^6.1.4","@storybook/preset-create-react-app":"^3.1.5","@storybook/react":"^6.1.4","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^16.9.53","@types/react-dom":"^16.9.8","@typescript-eslint/eslint-plugin":"^4.6.1","@typescript-eslint/parser":"^4.6.1","eslint":"^7.13.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^6.15.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest-dom":"^3.2.4","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.10.0","husky":"^4.3.0","lint-staged":"^10.5.1","postcss-cli":"^8.2.0","prettier":"^2.1.2","react-is":"^17.0.1","tailwindcss":"^1.9.6"}},"97fd2516a5caebe0aad8caa4b21e2edf":{"fileHash":"97fd2516a5caebe0aad8caa4b21e2edf","name":"tailwind-storybook-controls","version":"0.1.0","repository":{},"dependencies":{"clsx":"^1.1.1","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"^4.0.1","typescript":"^4.0.3","web-vitals":"^0.2.4"},"devDependencies":{"@babel/core":"^7.12.3","@commitlint/cli":"^11.0.0","@commitlint/config-conventional":"^11.0.0","@component-controls/axe-plugin":"^1.42.4","@component-controls/jest-snapshots":"^1.42.4","@component-controls/storybook":"^1.42.4","@component-controls/viewport-plugin":"^1.42.4","@fullhuman/postcss-purgecss":"^3.0.0","@storybook/addon-essentials":"^6.1.4","@storybook/preset-create-react-app":"^3.1.5","@storybook/react":"^6.1.4","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^16.9.53","@types/react-dom":"^16.9.8","@typescript-eslint/eslint-plugin":"^4.6.1","@typescript-eslint/parser":"^4.6.1","eslint":"^7.13.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^6.15.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest-dom":"^3.2.4","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.10.0","husky":"^4.3.0","lint-staged":"^10.5.1","postcss-cli":"^8.2.0","prettier":"^2.1.2","react-is":"^17.0.1","tailwindcss":"^1.9.6"}}},"config":{},"buildConfig":{"siteRoot":"/","siteMap":{"pages":{"home":{"priority":1},"index":{"priority":0.8},"doc":{"priority":0.5}}},"categories":["author","tags"],"ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md"],"pages":{"story":{"basePath":"docs/","sideNav":{"storyPaths":true,"collapseSingle":true},"tabs":[{"route":"page"}]},"blog":{"basePath":"blogs/"},"author":{"basePath":"authors/"},"page":{"basePath":"pages/"},"tags":{"basePath":"tags/"}},"stories":["../src/**/*.stories.@(js|jsx|ts|tsx)"],"addons":["@storybook/addon-essentials","@storybook/preset-create-react-app",{"name":"@component-controls/storybook","options":{"pages":["/Users/atanasster/tw-sb-cc-starter/node_modules/@component-controls/storybook/full-page.js","/Users/atanasster/tw-sb-cc-starter/.storybook/testing-page.js"]}}]}};

store.config =  configJSON;
store.buildConfig = {"siteRoot":"/","siteMap":{"pages":{"home":{"priority":1},"index":{"priority":0.8},"doc":{"priority":0.5}}},"categories":["author","tags"],"ignore":["readme.md","changelog.md","code_of_conduct.md","contributing.md","license.md"],"pages":{"story":{"basePath":"docs/","sideNav":{"storyPaths":true,"collapseSingle":true},"tabs":[{"route":"page"}]},"blog":{"basePath":"blogs/"},"author":{"basePath":"authors/"},"page":{"basePath":"pages/"},"tags":{"basePath":"tags/"}},"stories":["../src/**/*.stories.@(js|jsx|ts|tsx)"],"addons":["@storybook/addon-essentials","@storybook/preset-create-react-app",{"name":"@component-controls/storybook","options":{"pages":["/Users/atanasster/tw-sb-cc-starter/node_modules/@component-controls/storybook/full-page.js","/Users/atanasster/tw-sb-cc-starter/.storybook/testing-page.js"]}}]};

  const assignProps = (obj, { storyName, story, ...props}) => {
    //preserve component and subcomponents as strings
    const componentName = obj.component;
    const subcomponentsName = obj.subcomponents;
    Object.assign(obj, props);
    if (componentName !== undefined) {
      obj.component = componentName;
    }  
    if (subcomponentsName !== undefined) {
      obj.subcomponents = subcomponentsName;
    }
    if (storyName) {
      obj.name = storyName;
    }
  }
  for (let i = 0; i < store.stores.length; i+= 1) {
    const s =  store.stores[i];
    const doc = s.doc;
    if (doc) {
      let exports = null;
      for (const context of contexts) {
        const key = context.req.keys().find(k => {
          const fullPath = path.join(context.folder, k);
          const normalizedPath = context.folder.indexOf('\\') >= 0 ? fullPath.split('/').join('\\') : fullPath;
          return doc.fileName === normalizedPath;
        });
        if (key) {
          exports = context.req(key);
          break;
        }
      }
      if (exports) {
        try {
          if (exports.default) {
            const { storySource, ...rest } = exports.default;
            assignProps(doc, rest);
          }
          Object.keys(exports).filter(key => key !== 'default').forEach(key => {
            const exported = exports[key];
            const story = s.stories[key];
            if (story) {
              story.renderFn = typeof exported === 'function' ? exported : (doc.template || exported);
              assignProps(story, exported);
              if (exported.story) {
                assignProps(story, exported.story);
              }
            }
          });
        } catch (e) {
          console.error(`unable to load module ${doc.moduleId}`, e);
        }
      } else {
        //file could not be found
        store.stores.splice(i, 1);
        i -= 1; 
      }
    }  
  }

module.exports = store;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lib/components/button/button.stories.tsx": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Primary", function() { return /* binding */ Primary; });
__webpack_require__.d(__webpack_exports__, "Success", function() { return /* binding */ Success; });
__webpack_require__.d(__webpack_exports__, "Warn", function() { return /* binding */ Warn; });
__webpack_require__.d(__webpack_exports__, "Danger", function() { return /* binding */ Danger; });
__webpack_require__.d(__webpack_exports__, "FullWidth", function() { return /* binding */ FullWidth; });
__webpack_require__.d(__webpack_exports__, "Medium", function() { return /* binding */ Medium; });
__webpack_require__.d(__webpack_exports__, "Small", function() { return /* binding */ Small; });

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ var clsx_m = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});

// CONCATENATED MODULE: ./src/lib/components/button/button.tsx
var _jsxFileName = "/Users/atanasster/tw-sb-cc-starter/src/lib/components/button/button.tsx";


const Button = ({
  children,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  fullWidth,
  className,
  ...props
}) => /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", Object.assign({
  // eslint-disable-next-line react/button-has-type
  type: type,
  className: clsx_m('rounded-md focus:outline-none focus:shadow-outline', {
    'bg-primary-500 text-white hover:bg-primary-600': variant === 'primary'
  }, {
    'bg-green-500 text-white hover:bg-green-600': variant === 'success'
  }, {
    'bg-yellow-500 text-white hover:bg-yellow-600': variant === 'warn'
  }, {
    'bg-red-500 text-white hover:bg-red-600': variant === 'danger'
  }, {
    'py-2 px-6': size === 'small'
  }, {
    'py-4 px-8': size === 'medium'
  }, {
    'w-full': fullWidth
  }, className)
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}), children);
// CONCATENATED MODULE: ./src/lib/components/button/button.stories.tsx
var button_stories_jsxFileName = "/Users/atanasster/tw-sb-cc-starter/src/lib/components/button/button.stories.tsx";

/* eslint-disable import/no-unresolved */


/* harmony default export */ var button_stories = __webpack_exports__["default"] = ({
  title: 'Components/Button',
  component: Button,
  argTypes: {}
});

const Template = args => /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Button, Object.assign({}, args, {
  __self: undefined,
  __source: {
    fileName: button_stories_jsxFileName,
    lineNumber: 13,
    columnNumber: 48
  }
}), "Button Label");

const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};
const Success = Template.bind({});
Success.args = {
  variant: 'success'
};
const Warn = Template.bind({});
Warn.args = {
  variant: 'warn'
};
const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};
const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};
const Small = Template.bind({});
Small.args = {
  size: 'small'
};

/***/ })
/******/ ]);
});