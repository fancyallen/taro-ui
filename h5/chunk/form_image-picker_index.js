(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"100":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(4)),r=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(99)),l=n(98);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(101);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,i.default.Component),a(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"101":function(e,t,n){},"497":function(e,t,n){},"94":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(4)),r=_interopRequireDefault(n(1)),o=n(98),l=n(105),c=_interopRequireDefault(n(100));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(497);var u=[{"url":"https://storage.360buyimg.com/mtd/home/111543234387022.jpg"},{"url":"https://storage.360buyimg.com/mtd/home/221543234387016.jpg"},{"url":"https://storage.360buyimg.com/mtd/home/331543234387025.jpg"}],s=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"files1":Array.from(u),"files2":Array.from(u),"files3":Array.from(u),"files4":u.concat([{"url":"https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg"}])},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.default.Component),a(Index,[{"key":"onChange","value":function onChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"onFail","value":function onFail(e){console.log(e)}},{"key":"onImageClick","value":function onImageClick(e,t){console.log(e,t)}},{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(c.default,{"title":"ImagePicker 图片选择器"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础用法"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.AtImagePicker,{"files":this.state.files1,"onChange":this.onChange.bind(this,"files1")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"多选图片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.AtImagePicker,{"multiple":!0,"files":this.state.files2,"onChange":this.onChange.bind(this,"files2"),"onFail":this.onFail.bind(this),"onImageClick":this.onImageClick.bind(this)})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义每行数量"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.AtImagePicker,{"multiple":!0,"length":3,"files":this.state.files3,"onChange":this.onChange.bind(this,"files3")})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"更改图片的缩放模式"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(l.AtImagePicker,{"mode":"aspectFit","multiple":!0,"files":this.state.files4,"onChange":this.onChange.bind(this,"files4")}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Index}();t.default=s}}]);