webpackJsonp([48050446922739],{97:function(e,t,n){(function(a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(2),c=(r(l),n(9)),o=r(c),i=n(67),m=function(e){var t=e.item,n=e.add,r=e.remove;return a.createElement("div",{className:"itemRow"},a.createElement("div",{className:"item-decrement"},a.createElement("a",{onClick:function(){return r(t,1)}}," - ")),a.createElement("div",{className:"item-quantity"},t.quantity),a.createElement("div",{className:"item-increment"},a.createElement("a",{onClick:function(){return n(t,1)}},"+")),a.createElement("div",{className:"item-systemname"},t.content,"l ",t.name),a.createElement("div",{className:"item-price"},"€",t.price.toFixed(2)),a.createElement("div",{className:"item-total"},"€",t.total.toFixed(2)),a.createElement("div",{className:"item-remove"},a.createElement("a",{className:"cart-anchor",onClick:function(){return r(t,t.quantity)}},"X")))},s=function(e){var t=e.checkout,n=e.count,r=e.shipping,l=e.total,c=e.grandTotal,o=e.items,i=e.add,s=e.remove,u=e.clear;return n>0&&a.createElement("div",{className:"cart "+(t?"checkout":""),role:"button",ref:function(e){e&&e.addEventListener("click",function(){return!0})}},a.createElement("div",{className:"summary"},a.createElement("div",{className:"quantity simpleCart_quantity"},n),a.createElement("span",{className:"icon-i_basket"}),a.createElement("div",{className:"grand-total simpleCart_grandTotal"},"€",c.toFixed(2))),a.createElement("div",{className:"details"},a.createElement("a",{className:"empty-cart simpleCart_empty cart-anchor",onClick:u},"X Korb leeren"),a.createElement("div",{className:"cart-items"},a.createElement("div",{className:"simpleCart_items"},a.createElement("div",null,o.map(function(e,t){return a.createElement(m,{item:e,key:t,add:i,remove:s})})))),a.createElement("div",{className:"simpleCart_total"},"€",l.toFixed(2)),a.createElement("div",{className:"simpleCart_quantity"},n),a.createElement("div",{className:"simpleCart_shipping"},"€",r.toFixed(2)),a.createElement("div",{className:"simpleCart_grandTotal"},"€",c.toFixed(2)),a.createElement("div",{className:"checkout-button"},a.createElement("a",{href:"../checkout"},"> Bestellen"))))};s.propTypes={count:o.default.number.isRequired,shipping:o.default.number.isRequired,total:o.default.number.isRequired,grandTotal:o.default.number.isRequired,items:o.default.array.isRequired,add:o.default.func.isRequired,clear:o.default.func.isRequired,remove:o.default.func.isRequired};var u=function(e){var t=e.count,n=e.items,a=e.shipping,r=e.total,l=e.grandTotal;return{count:t,items:n,shipping:a,total:r,grandTotal:l}},d=function(e){return{add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e({type:"ADD",payload:{item:t,quantity:n}})},remove:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e({type:"REMOVE",payload:{item:t,quantity:n}})},clear:function(){return e({type:"CLEAR"})}}};t.default=(0,i.connect)(u,d)(s),e.exports=t.default}).call(t,n(6))},298:function(e,t,n){(function(a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),m=r(i),s=n(67),u=n(65),d=n(17),p=r(d),f=n(97),h=r(f),E="undefined"!=typeof window&&window,g="https://newtonidev-api.herokuapp.com/payment/checkout",b=function(e){function t(){l(this,t);var n=c(this,e.call(this));return n.handleSubmit=n.handleSubmit.bind(n),n.reset=n.reset.bind(n),n}return o(t,e),t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();for(var n=e.target,a=new FormData(n),r=[],l=a.keys(),c=Array.isArray(l),o=0,l=c?l:l[Symbol.iterator]();;){var i;if(c){if(o>=l.length)break;i=l[o++]}else{if(o=l.next(),o.done)break;i=o.value}var m=i,s=encodeURIComponent(m),d=encodeURIComponent(a.get(m));r.push(s+"="+d)}this.props.items.map(function(e,t){r.push(encodeURIComponent("items["+t+"][name]")+"="+encodeURIComponent((e.packaging&&(e.packaging.displayName||e.packaging.measure+e.packaging.unitOfMeasure))+" "+e.name+" "+e.varietal)),r.push(encodeURIComponent("items["+t+"][price]")+"="+encodeURIComponent(e.price.toFixed(2))),r.push(encodeURIComponent("items["+t+"][quantity]")+"="+encodeURIComponent(e.quantity)),r.push(encodeURIComponent("items["+t+"][currency]")+"="+encodeURIComponent("EUR")),r.push(encodeURIComponent("items["+t+"][packaging]")+"="+JSON.stringify(e.packaging)),r.push(encodeURIComponent("items["+t+"][varietal]")+"="+encodeURIComponent(e.varietal)),r.push(encodeURIComponent("items["+t+"][wineId]")+"="+encodeURIComponent(e.id))});r.push(encodeURIComponent("shipping")+"="+encodeURIComponent(this.props.shipping.toFixed(2))),r.push(encodeURIComponent("subtotal")+"="+encodeURIComponent(this.props.total.toFixed(2))),r.push(encodeURIComponent("total")+"="+encodeURIComponent(this.props.grandTotal.toFixed(2))),r=r.join("&"),fetch(g,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},body:r}).then(function(e){return e.json()}).then(function(e){t.props.clear(),E&&(document.location.href=e.href)}).catch(function(e){t.props.clear(),(0,u.navigateTo)("/danke")})},t.prototype.reset=function(){console.log("reset")},t.prototype.render=function(){return a.createElement("div",{className:"content-container"},a.createElement("div",{className:"checkout"},a.createElement(p.default,null),a.createElement(h.default,{checkout:!0}),a.createElement("form",{onSubmit:this.handleSubmit,id:"appnavigation"},a.createElement("p",null,"Bitte beachten Sie bei Ihrer Bestellung: Wir liefern in"," ",a.createElement("strong",null,"6"),"er, ",a.createElement("strong",null,"12"),"er oder"," ",a.createElement("strong",null,"18"),"er Kartons!",a.createElement("br",null),a.createElement("br",null)),a.createElement("fieldset",{className:"personal"},a.createElement("legend",null,"Ihre Daten:"),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"realname"},"Name:",a.createElement("span",{className:"hint"},"*")),a.createElement("input",{type:"text",id:"realname",name:"realname",className:"required form-control",required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"street"},"Straße, Haus-Nr:",a.createElement("span",{className:"hint"},"*")),a.createElement("input",{type:"text",name:"street",id:"street",className:"required form-control",required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"zip"},"PLZ:",a.createElement("span",{className:"hint"},"*")),a.createElement("input",{type:"text",name:"zip",id:"zip",className:"required form-control",required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"city"},"Wohnort:",a.createElement("span",{className:"hint"},"*")),a.createElement("input",{type:"text",name:"city",id:"city",className:"required form-control",required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"email",id:"email"},"Email:",a.createElement("span",{className:"hint"},"*")),a.createElement("input",{type:"email",name:"email",className:"required email form-control",required:!0})),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"phone"},"Telefon (optional, bei evtl. Rückfragen):"),a.createElement("input",{type:"text",name:"phone",id:"phone",className:"form-control"}))),a.createElement("fieldset",null,a.createElement("div",{className:"form-check"},a.createElement("label",{className:"form-check-label",htmlFor:"agreement-1"},a.createElement("input",{type:"checkbox",className:"form-check-input",required:!0,id:"agreement-1",name:"agreement[1]",value:"1"}),"Ich habe die"," ",a.createElement("a",{href:"/agb",target:"_blank"},"AGB")," ","und die Informationen zum"," ",a.createElement("a",{href:"/datenschutz",target:"_blank"},"Datenschutz")," ","gelesen und akzeptiert."),a.createElement("br",null)),a.createElement("div",{className:"form-check"},a.createElement("label",{className:"form-check-label",htmlFor:"agreement-2"},a.createElement("input",{type:"checkbox",className:"form-check-input",required:!0,id:"agreement-2",name:"agreement[3]",value:"1"}),"Ich bestätige, dass ich volljährig bin"),a.createElement("br",null),a.createElement("br",null)),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"message"},"Bemerkungen:"),a.createElement("textarea",{name:"message",id:"message",className:"form-control"})),a.createElement("p",null,a.createElement("br",null),a.createElement("br",null),a.createElement("strong",null,"Keine Abgabe an Jugendliche unter 18Jahren."),a.createElement("br",null),a.createElement("br",null)),a.createElement("div",{className:"form-group"},a.createElement("input",{type:"reset",value:"Zurück",className:"btn btn-link btn-secondary",onClick:this.reset}),a.createElement("input",{type:"submit",name:"button",id:"submitter",className:"btn btn-lg btn-primary",value:"Bestellung abschicken"}),a.createElement("input",{type:"reset",value:"Zurücksetzen",id:"order",className:"hidden"}))))))},t}(m.default.Component),v=function(e){var t=e.count,n=e.items,a=e.shipping,r=e.total,l=e.grandTotal;return{count:t,items:n,shipping:a,total:r,grandTotal:l}},y=function(e){return{clear:function(){return e({type:"CLEAR"})}}};t.default=(0,s.connect)(v,y)(b),e.exports=t.default}).call(t,n(6))}});
//# sourceMappingURL=component---src-pages-checkout-js-d782f88928b7c43e8792.js.map