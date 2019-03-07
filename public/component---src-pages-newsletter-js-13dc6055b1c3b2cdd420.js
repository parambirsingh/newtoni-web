webpackJsonp([0x727e02a13cdc],{97:function(e,t,a){(function(n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(2),i=(r(s),a(9)),c=r(i),l=a(67),o=function(e){var t=e.item,a=e.add,r=e.remove;return n.createElement("div",{className:"itemRow"},n.createElement("div",{className:"item-decrement"},n.createElement("a",{onClick:function(){return r(t,1)}}," - ")),n.createElement("div",{className:"item-quantity"},t.quantity),n.createElement("div",{className:"item-increment"},n.createElement("a",{onClick:function(){return a(t,1)}},"+")),n.createElement("div",{className:"item-systemname"},t.content,"l ",t.name),n.createElement("div",{className:"item-price"},"€",t.price.toFixed(2)),n.createElement("div",{className:"item-total"},"€",t.total.toFixed(2)),n.createElement("div",{className:"item-remove"},n.createElement("a",{className:"cart-anchor",onClick:function(){return r(t,t.quantity)}},"X")))},u=function(e){var t=e.checkout,a=e.count,r=e.shipping,s=e.total,i=e.grandTotal,c=e.items,l=e.add,u=e.remove,m=e.clear;return a>0&&n.createElement("div",{className:"cart "+(t?"checkout":""),role:"button",ref:function(e){e&&e.addEventListener("click",function(){return!0})}},n.createElement("div",{className:"summary"},n.createElement("div",{className:"quantity simpleCart_quantity"},a),n.createElement("span",{className:"icon-i_basket"}),n.createElement("div",{className:"grand-total simpleCart_grandTotal"},"€",i.toFixed(2))),n.createElement("div",{className:"details"},n.createElement("a",{className:"empty-cart simpleCart_empty cart-anchor",onClick:m},"X Korb leeren"),n.createElement("div",{className:"cart-items"},n.createElement("div",{className:"simpleCart_items"},n.createElement("div",null,c.map(function(e,t){return n.createElement(o,{item:e,key:t,add:l,remove:u})})))),n.createElement("div",{className:"simpleCart_total"},"€",s.toFixed(2)),n.createElement("div",{className:"simpleCart_quantity"},a),n.createElement("div",{className:"simpleCart_shipping"},"€",r.toFixed(2)),n.createElement("div",{className:"simpleCart_grandTotal"},"€",i.toFixed(2)),n.createElement("div",{className:"checkout-button"},n.createElement("a",{href:"../checkout"},"> Bestellen"))))};u.propTypes={count:c.default.number.isRequired,shipping:c.default.number.isRequired,total:c.default.number.isRequired,grandTotal:c.default.number.isRequired,items:c.default.array.isRequired,add:c.default.func.isRequired,clear:c.default.func.isRequired,remove:c.default.func.isRequired};var m=function(e){var t=e.count,a=e.items,n=e.shipping,r=e.total,s=e.grandTotal;return{count:t,items:a,shipping:n,total:r,grandTotal:s}},d=function(e){return{add:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e({type:"ADD",payload:{item:t,quantity:a}})},remove:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e({type:"REMOVE",payload:{item:t,quantity:a}})},clear:function(){return e({type:"CLEAR"})}}};t.default=(0,l.connect)(m,d)(u),e.exports=t.default}).call(t,a(6))},306:function(e,t,a){(function(n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(65),o=(r(l),a(2)),u=r(o),m=(a(67),a(17)),d=r(m),f=a(97),p=(r(f),"undefined"!=typeof window&&window,"https://newtonidev-api.herokuapp.com/newsletters"),h=function(e){function t(){s(this,t);var a=i(this,e.call(this));return a.state={email:"",successMessage:"",errorMessage:""},a.handleChange=a.handleChange.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a}return c(t,e),t.prototype.handleChange=function(e){this.setState({email:e.target.value})},t.prototype.handleSubmit=function(e){var t=this;this.setState({successMessage:"",errorMessage:""}),e.preventDefault();var a={email:this.state.email,isSubscribed:!0};this.state.email?fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){e.error?"422"===e.error.statusCode?t.setState({successMessage:"Bereits abonniert."}):t.setState({errorMessage:e.error.message}):t.setState({successMessage:"Abonnement Erfolgreich."})}).catch(function(e){"422"===e.error.stausCode?t.setState({successMessage:"Bereits abonniert."}):t.setState({errorMessage:e.error.message})}):this.setState({errorMessage:"Bitte geben Sie zuerst eine E-Mail an."})},t.prototype.render=function(){var e=this;return n.createElement("div",{className:"content-container news-letter"},n.createElement(d.default,null),n.createElement("div",{className:"news-box"},n.createElement("form",null,n.createElement("h3",{style:{color:"white"}},"Ingressu u vostru email à subscribe for the newletter"),n.createElement("input",{type:"email",name:"email",placeholder:"Email...",onChange:function(t){return e.handleChange(t)}}),n.createElement("br",null),n.createElement("button",{onClick:function(t){return e.handleSubmit(t)}},"Abonniere jetzt")),n.createElement("h5",{className:"success"},this.state.successMessage),n.createElement("h5",{className:"error"},this.state.errorMessage)))},t}(u.default.Component);t.default=h,e.exports=t.default}).call(t,a(6))}});
//# sourceMappingURL=component---src-pages-newsletter-js-13dc6055b1c3b2cdd420.js.map