(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"100":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(4)),i=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(99)),s=a(98);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(101);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.default.Component),l(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(s.View,{"className":"doc-header"},i.default.createElement(s.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"101":function(e,t,a){},"399":function(e,t,a){},"48":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(4),i=_interopRequireDefault(n),r=_interopRequireDefault(a(1)),s=a(98),c=a(105),o=_interopRequireDefault(a(100));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(399);var u=function(e){function ButtonPage(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonPage);for(var l=arguments.length,n=Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=a=_possibleConstructorReturn(this,(e=ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call.apply(e,[this].concat(n))),a.config={"navigationBarTitleText":"Taro UI"},a.state={"isWEAPP":i.default.getEnv()===i.default.ENV_TYPE.WEAPP,"isALIPAY":i.default.getEnv()===i.default.ENV_TYPE.ALIPAY},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonPage,i.default.Component),l(ButtonPage,[{"key":"onButtonClick","value":function onButtonClick(){var e=[].concat(Array.prototype.slice.call(arguments)).find(function(e){return"string"==typeof e}),t=i.default.getEnv();"WEAPP"===t?(0,n.showModal)({"content":e||"\b您点击了按钮！","showCancel":!1}):"WEB"===t&&alert(e||"\b您点击了按钮！")}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"Taro UI","path":"/pages/index/index","imageUrl":"http://storage.360buyimg.com/mtd/home/share1535013100318.jpg"}}},{"key":"onContact","value":function onContact(){console.log("呼起客服回调")}},{"key":"onSubmit","value":function onSubmit(){(0,n.showModal)({"content":"submit event detail: "+JSON.stringify(arguments[0].detail),"showCancel":!1})}},{"key":"onReset","value":function onReset(){(0,n.showModal)({"content":"reset event detail: "+JSON.stringify(arguments[0].detail||"无数据"),"showCancel":!1})}},{"key":"onGetUserInfo","value":function onGetUserInfo(){console.log("onGetUserInfo",arguments)}},{"key":"render","value":function render(){var e=this.state,t=e.isWEAPP,a=e.isALIPAY;return r.default.createElement(s.View,{"className":"page"},r.default.createElement(o.default,{"title":"Button 按钮"}),r.default.createElement(s.View,{"className":"doc-body"},r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"主操作"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","onClick":this.onButtonClick.bind(this)},"主操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","loading":!0,"onClick":this.onButtonClick.bind(this)},"Loading")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","disabled":!0},"不可操作")))),r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"次要操作"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary"},"次操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","loading":!0},"Loading")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","disabled":!0},"不可操作")))),r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"次次要操作"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,null,"次次要操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"loading":!0},"Loading")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"disabled":!0},"不可操作")))),r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"通栏按钮"),r.default.createElement(s.View,{"className":"panel__content","style":"padding:0"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","full":!0},"主操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","full":!0},"次操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"full":!0},"次次要操作按钮")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"disabled":!0,"full":!0},"不可操作")))),r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"小按钮"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small"},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small"},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small"},"按钮"))),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","loading":!0})),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","loading":!0})),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","loading":!0}))),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","disabled":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","disabled":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","disabled":!0},"按钮"))))),r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"圆角按钮"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","circle":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","circle":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","loading":!0,"circle":!0})),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","loading":!0,"circle":!0})),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","loading":!0,"circle":!0}))),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(s.View,{"className":"subitem"},r.default.createElement(c.AtButton,{"size":"small","disabled":!0,"circle":!0},"按钮"))))),!a&&r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"浮动按钮"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"at-article__p"},"右侧是浮动操作按钮👉"),r.default.createElement(s.View,{"className":"btn-demo-fab"},r.default.createElement(c.AtFab,{"onClick":this.onButtonClick.bind(this)},r.default.createElement(s.Text,{"className":"at-fab__icon at-icon at-icon-menu"}))))),t&&r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"微信小程序 button 属性"),r.default.createElement(s.View,{"className":"panel__content"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"openType":"share","type":"primary"},"分享")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","openType":"contact","onContact":this.onContact.bind(this)},"联系 Taro UI 客服")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(s.Form,{"reportSubmit":!0,"onSubmit":this.onSubmit.bind(this),"onReset":this.onReset.bind(this)},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"primary","formType":"submit"},"form submit")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"type":"secondary","formType":"reset"},"form reset")))))),a&&r.default.createElement(s.View,{"className":"panel"},r.default.createElement(s.View,{"className":"panel__title"},"支付宝小程序 button 属性"),r.default.createElement(s.View,{"className":"panel__content demo-button"},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"openType":"share","type":"primary"},"分享")),r.default.createElement(c.AtForm,{"onSubmit":this.onSubmit.bind(this),"onReset":this.onReset.bind(this)},r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"formType":"submit","type":"primary"},"form submit")),r.default.createElement(s.View,{"className":"btn-item"},r.default.createElement(c.AtButton,{"formType":"reset","type":"primary"},"form reset")))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),ButtonPage}();t.default=u}}]);