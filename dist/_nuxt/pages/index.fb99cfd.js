(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(t,e,r){var content=r(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("f2fe67f8",content,!0,{sourceMap:!1})},165:function(t,e,r){var content=r(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("4906fc1e",content,!0,{sourceMap:!1})},166:function(t,e,r){"use strict";r.r(e);r(83),r(25),r(26),r(10),r(64);var n=r(44),o=(r(18),r(65));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{siteName:"Ezshp",showMenu:!1,defaultBodyStyle:""}},mounted:function(){this.defaultBodyStyle=document.body.style},watch:{showMenu:function(){!0===this.showMenu?Object.assign(document.body.style,{overflow:"hidden"}):document.body.style=this.defaultBodyStyle}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cartCount:"checkout/cartCount"})),methods:{toggleMobileMenu:function(){this.showMenu=!this.showMenu},deactivateMobileMenu:function(){this.showMenu=!1}},destroyed:function(){document.body.style=this.defaultBodyStyle}},l=(r(169),r(24)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"constraint"},[r("button",{class:{toggled:t.showMenu},attrs:{id:"mobile-menu-toggle"},on:{click:t.toggleMobileMenu}},[r("i",{staticClass:"fas",class:t.showMenu?"fa-times":"fa-bars"})]),t._v(" "),r("nav",{class:{toggled:t.showMenu},attrs:{id:"main-menu"}},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[t._v("Track Order")]),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[t._v("Support")])],1),t._v(" "),r("nuxt-link",{attrs:{id:"branding",to:"/"}},[r("img",{attrs:{src:"logo.png",alt:"Proxypods logo"}}),t._v(" "),r("h1",[t._v(t._s(t.siteName))])]),t._v(" "),r("nav",{attrs:{id:"user"}},[t.cartCount>0?r("button",{attrs:{id:"cart-btn"},on:{click:function(e){return t.$router.push("checkout")}}},[r("span",{staticClass:"total"},[t._v(t._s(t.cartCount))]),t._v(" "),r("i",{staticClass:"fas fa-shopping-cart",attrs:{"aria-hidden":"true"}})]):r("i",{staticClass:"fas fa-shopping-cart"})])],1)])}),[],!1,null,"152256b9",null);e.default=component.exports;installComponents(component,{Header:r(166).default})},167:function(t,e,r){"use strict";r.r(e);r(18);var n={data:function(){return{siteName:"Ezshp"}}},o=(r(171),r(24)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"constraint"},[this._m(0),this._v(" "),e("p",[this._v("Copyright © 2020 "+this._s(this.siteName)+". All rights reserved.")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{attrs:{id:"social-media"}},[e("a",{attrs:{href:"#",title:"Visit our Instagram page"}},[e("i",{staticClass:"fab fa-instagram"})]),this._v(" "),e("a",{attrs:{href:"#",title:"Visit our Twitter page"}},[e("i",{staticClass:"fab fa-twitter"})]),this._v(" "),e("a",{attrs:{href:"#",title:"Visit our Facebook page"}},[e("i",{staticClass:"fab fa-facebook"})])])}],!1,null,"10e8e3ca",null);e.default=component.exports;installComponents(component,{Footer:r(167).default})},168:function(t,e,r){var content=r(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("33db35e8",content,!0,{sourceMap:!1})},169:function(t,e,r){"use strict";var n=r(164);r.n(n).a},170:function(t,e,r){(e=r(62)(!1)).push([t.i,"header[data-v-152256b9]{box-sizing:border-box;font-size:1.15em;padding:20px 15px}header .constraint[data-v-152256b9]{align-items:center;display:flex;justify-content:space-between}header nav[data-v-152256b9]{max-width:300px;width:100%}header nav a[data-v-152256b9]:not(:first-child){margin-left:24px}header #user[data-v-152256b9]{justify-content:flex-end;display:flex}header #user button[data-v-152256b9]{align-items:center;background:none;border:none;color:#333;display:flex;font-size:inherit;padding:5px}header #user button>.fas[data-v-152256b9]{margin-left:5px}header #user #cart-btn>span[data-v-152256b9]{color:#47f}header a[data-v-152256b9]{color:inherit;text-decoration:none}header #branding[data-v-152256b9]{align-items:center;color:#333;display:flex;font-size:1.5em;margin:auto}header #branding img[data-v-152256b9]{max-height:2.75ch}header #branding h1[data-v-152256b9]{font-size:inherit;margin:0 0 0 5px}#mobile-menu-toggle[data-v-152256b9]{background-color:#fff;border:1px solid #fff;border-radius:5px;color:#000;color:initial;display:none;font-size:1.25em;margin-right:30px;padding:6px 10px;z-index:1}#mobile-menu-toggle.toggled[data-v-152256b9]{background:#222;border:none;color:#fff;font-size:2em;left:0;padding:10px 0 10px 22px;position:fixed;text-align:left;top:0;width:100%;z-index:999}#mobile-menu-toggle.toggled[data-v-152256b9]:focus{border:1px solid #fff}#mobile-menu-toggle .fas[data-v-152256b9]{margin:0}@media screen and (max-width:720px){header[data-v-152256b9]{padding:10px 15px}header .constraint[data-v-152256b9]{justify-content:flex-start}header #branding[data-v-152256b9]{margin:0}header #user[data-v-152256b9]{justify-content:flex-end;margin-left:auto;padding-left:20px}#mobile-menu-toggle[data-v-152256b9]{display:block}#main-menu[data-v-152256b9]:not(.toggled){display:none}#main-menu.toggled[data-v-152256b9]{-webkit-animation:fade-in-data-v-152256b9 .2s ease;animation:fade-in-data-v-152256b9 .2s ease;background-color:#222;background-color:rgba(0,0,0,.85);border-radius:0 0 8px 0;box-sizing:border-box;color:#fff;display:flex;font-size:2em;flex-direction:column;left:0;max-height:100%;max-width:100%;overflow:scroll;padding:80px 15px 40px;position:fixed;top:0;z-index:2}#main-menu.toggled a[data-v-152256b9]{margin-left:0;padding:10px}#main-menu.toggled a[data-v-152256b9]:not(:first-child){margin-top:20px}@-webkit-keyframes fade-in-data-v-152256b9{0%{opacity:0;transform:translateX(-25px) translateY(-150px)}to{opacity:1;transform:translateX(0) translateY(0)}}@keyframes fade-in-data-v-152256b9{0%{opacity:0;transform:translateX(-25px) translateY(-150px)}to{opacity:1;transform:translateX(0) translateY(0)}}}",""]),t.exports=e},171:function(t,e,r){"use strict";var n=r(165);r.n(n).a},172:function(t,e,r){(e=r(62)(!1)).push([t.i,"footer[data-v-10e8e3ca]{box-sizing:border-box;margin-top:50px;padding:10px 15px}footer .constraint[data-v-10e8e3ca]{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between}footer a[data-v-10e8e3ca]{color:inherit;text-decoration:none}footer nav a[data-v-10e8e3ca]:not(:first-child){margin-left:24px}footer #social-media[data-v-10e8e3ca]{font-size:2em}@media screen and (max-width:960px){footer>.constraint[data-v-10e8e3ca]{display:grid;justify-content:center;text-align:center}}",""]),t.exports=e},175:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("55a39a50",content,!0,{sourceMap:!1})},176:function(t,e,r){var content=r(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("e1f5e410",content,!0,{sourceMap:!1})},177:function(t,e,r){"use strict";var n=r(168);r.n(n).a},178:function(t,e,r){(e=r(62)(!1)).push([t.i,".product[data-v-d19633b4]{box-sizing:border-box;padding:20px 0}.product .constraint[data-v-d19633b4]{display:grid;grid-column-gap:50px;grid-row-gap:30px;grid-template-columns:1fr 1fr;max-width:960px;padding:0 20px}.product-images[data-v-d19633b4]{display:grid;grid-gap:8px;grid-template-columns:repeat(4,1fr)}.product-images img[data-v-d19633b4]{border:1px solid #eee;border-radius:3px;box-sizing:border-box;cursor:pointer;height:100px;-o-object-fit:cover;object-fit:cover;width:100%}.product-images .image-magnifier[data-v-d19633b4]{box-sizing:border-box;cursor:auto;grid-column:1/-1;height:auto}.product-details[data-v-d19633b4]{align-items:flex-start;justify-content:center;display:flex;flex-direction:column}.product-details .product-title[data-v-d19633b4]{color:#3a3a3a;font-size:2.5em;margin:0}.product-details .rating[data-v-d19633b4]{align-items:center;display:flex;margin:10px 0}.product-details .rating i[data-v-d19633b4]{color:#ffbf20;margin-left:1px;text-shadow:inset 0 0 1px #000}.product-details .rating .rating-count[data-v-d19633b4]{margin-left:8px}.product-details .rating .rating-count a[data-v-d19633b4]{color:inherit}.product-details .product-description[data-v-d19633b4]{color:#303030;font-size:.9em;line-height:1.5em;max-width:400px}.product-details .product-description p[data-v-d19633b4]{margin:8px 0 0}.product-details .purchase[data-v-d19633b4]{align-items:center;display:flex;margin-top:35px}.product-details .purchase .price[data-v-d19633b4]{font-size:2em;margin-left:20px;min-width:7ch}.product-details .purchase .count[data-v-d19633b4]{align-items:center;display:flex}.product-details .purchase .count button[data-v-d19633b4],.product-details .purchase .count input[data-v-d19633b4]{box-sizing:border-box}.product-details .purchase .count button[data-v-d19633b4]{align-items:center;background-color:#ddd;border:none;border-radius:5px;display:flex;height:2.25em;justify-content:center;padding:0;width:2em}.product-details .purchase .count .count-value[data-v-d19633b4]{border:1px solid #666;border-radius:5px;font-size:1.25em;margin:0 15px;padding:5px 3px;text-align:center;width:6ch}.product-details .cart-total[data-v-d19633b4]{font-size:.9em;margin:12px 0 0}.product-details .buy-btn[data-v-d19633b4]{margin-top:30px}@media screen and (max-width:720px){.product .constraint[data-v-d19633b4]{grid-template-columns:1fr}}",""]),t.exports=e},179:function(t,e,r){"use strict";r.r(e);r(83),r(25),r(26),r(10),r(64),r(15);var n=r(2),o=r(44),d=r(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["product"],components:{"image-magnifier":r(180).ImageMagnifier},data:function(){return{activeImage:0,count:1}},computed:l({},Object(d.b)({itemInCart:"checkout/itemInCart",itemIndexByUid:"checkout/itemIndexByUid",productCartCount:"checkout/productCartCount"})),methods:{addToCart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.itemInCart(t.product.uid)){e.next=5;break}return e.next=3,t.$store.dispatch("checkout/addToCart",l(l({},t.product),{},{count:t.count}));case 3:e.next=7;break;case 5:return e.next=7,t.$store.dispatch("checkout/updateProductQuantity",{itemIndex:t.itemIndexByUid(t.product.uid),count:t.productCartCount(t.product.uid)+t.count});case 7:t.$router.push("checkout");case 8:case"end":return e.stop()}}),e)})))()}}},m=(r(177),r(24)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("div",{staticClass:"constraint"},[r("div",{staticClass:"product-images"},[r("image-magnifier",{attrs:{alt:t.product.images[t.activeImage].alt,src:t.product.images[t.activeImage].src,"zoom-src":t.product.images[t.activeImage].src,width:"100%","zoom-height":"400","zoom-width":"450"}}),t._v(" "),t._l(t.product.images,(function(image,e){return r("img",{key:image.src,attrs:{alt:image.alt,src:image.src},on:{click:function(r){t.activeImage=e}}})}))],2),t._v(" "),r("div",{staticClass:"product-details"},[r("h2",{staticClass:"product-title"},[t._v(t._s(t.product.title))]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"product-description"},t._l(t.product.description,(function(text){return r("p",{key:text},[t._v(t._s(text))])})),0),t._v(" "),r("div",{staticClass:"purchase"},[r("div",{staticClass:"count"},[r("button",{attrs:{disabled:1===t.count},on:{click:function(e){t.count--}}},[r("i",{staticClass:"fas fa-minus"})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"count-value",attrs:{type:"number"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),t._v(" "),r("button",{on:{click:function(e){t.count++}}},[r("i",{staticClass:"fas fa-plus"})])]),t._v(" "),r("div",{staticClass:"price"},[t._v("$"+t._s(t.product.price))])]),t._v(" "),t.itemInCart(t.product.uid)?r("p",{staticClass:"cart-total"},[t._v("\n        You currently have "+t._s(t.productCartCount(t.product.uid))+" in your\n        "),r("nuxt-link",{attrs:{to:"checkout"}},[t._v("cart")])],1):t._e(),t._v(" "),r("button",{staticClass:"buy-btn",on:{click:t.addToCart}},[t._v("Add to Cart")])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star-half-alt"}),t._v(" "),r("i",{staticClass:"far fa-star"}),t._v(" "),r("span",{staticClass:"rating-count"},[t._v("("),r("a",{attrs:{href:"#"}},[t._v("163")]),t._v(")")])])}],!1,null,"d19633b4",null);e.default=component.exports},185:function(t,e,r){"use strict";var n=r(175);r.n(n).a},186:function(t,e,r){(e=r(62)(!1)).push([t.i,"#banner[data-v-6bb64b77]{overflow:hidden}#banner .constraint[data-v-6bb64b77]{display:flex;flex-direction:column;align-items:center;padding-bottom:30px;position:relative}#banner h1[data-v-6bb64b77]{bottom:200px;color:#f6f6f6;font-size:20em;margin:0;position:absolute;text-transform:uppercase;top:2vw}#featured-image[data-v-6bb64b77]{margin-top:50px;max-width:400px;z-index:1}#arrow-down[data-v-6bb64b77]{background-color:#fff;border:none;border-radius:5px;margin-top:25px;outline:none;padding:8px 15px}#arrow-down[data-v-6bb64b77]:focus{box-shadow:1px 3px 15px rgba(0,0,0,.08)}#arrow-down[data-v-6bb64b77]:hover{-webkit-animation:bounce-data-v-6bb64b77 .75s ease infinite;animation:bounce-data-v-6bb64b77 .75s ease infinite}#arrow-down img[data-v-6bb64b77]{max-height:6em;opacity:.75}@-webkit-keyframes bounce-data-v-6bb64b77{50%{transform:translateY(10px)}75%{transform:translateY(-2px)}to{transform:translateY(0)}}@keyframes bounce-data-v-6bb64b77{50%{transform:translateY(10px)}75%{transform:translateY(-2px)}to{transform:translateY(0)}}",""]),t.exports=e},187:function(t,e,r){"use strict";var n=r(176);r.n(n).a},188:function(t,e,r){(e=r(62)(!1)).push([t.i,"#features[data-v-20e542ea]{background-color:#f0f0f0;box-sizing:border-box;padding:30px 15px}#features .constraint[data-v-20e542ea]{align-items:center;display:grid;grid-column-gap:20px;grid-row-gap:50px;grid-template-columns:3fr 2fr}#features #description[data-v-20e542ea]{padding-left:50px;z-index:1}#features h2[data-v-20e542ea]{font-size:2.75em;font-weight:300;margin:0 0 20px}#features #info[data-v-20e542ea]{border-left:1px solid #ddd;padding:5px 0 5px 20px}#features #info p[data-v-20e542ea]{line-height:1.5em;margin:0;max-width:400px}#features #info p[data-v-20e542ea]:not(:first-child){margin-top:12px}#features button[data-v-20e542ea]{margin-top:20px}#features #images[data-v-20e542ea]{display:flex;height:auto;position:relative;top:-15px}#features #images img[data-v-20e542ea]{-webkit-animation:float 3s ease infinite;animation:float 3s ease infinite;height:auto;max-width:90%;transform:rotate(20deg)}#specs[data-v-20e542ea]{background-color:#fff;border-radius:3px;display:grid;grid-column:1/-1;grid-template-columns:repeat(3,1fr);justify-items:center;margin-top:10px;padding:10px 40px}#specs>div[data-v-20e542ea]{padding:25px 15px}#specs .big[data-v-20e542ea]{display:block;font-size:2.5em;margin:2px 0 4px}#specs p[data-v-20e542ea]{margin:0}@media screen and (max-width:980px){#features[data-v-20e542ea]{padding:35px 25px}#features h2[data-v-20e542ea]{font-size:2em}#features #description[data-v-20e542ea]{padding-left:0}#features #specs[data-v-20e542ea]{margin-top:20px;text-align:center}}@media screen and (max-width:720px){#features .constraint[data-v-20e542ea]{grid-template-columns:1fr}#features #description[data-v-20e542ea]{order:2}#features #images[data-v-20e542ea]{display:none}#features #specs[data-v-20e542ea]{grid-template-columns:1fr}}",""]),t.exports=e},190:function(t,e,r){"use strict";r.r(e);r(18);var n={data:function(){return{siteName:"Ezshp"}},methods:{scrollToNextComponent:function(){var t=this.$el.nextSibling.nextSibling;t.scrollIntoView({behavior:"smooth"});var e=t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0];setTimeout((function(){e.focus()}),500)}}},o=(r(185),r(24)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner"}},[e("div",{staticClass:"constraint"},[e("h1",[this._v(this._s(this.siteName))]),this._v(" "),e("img",{attrs:{alt:"Ezshp inside case",id:"featured-image",src:"ui/ezshp-pro-in-case.png"}}),this._v(" "),e("button",{attrs:{id:"arrow-down"},on:{click:this.scrollToNextComponent}},[e("img",{attrs:{alt:"skip to product description",src:"ui/arrow-down.png"}})])])])}),[],!1,null,"6bb64b77",null);e.default=component.exports},191:function(t,e,r){"use strict";r.r(e);r(18);var n={data:function(){return{siteName:"Ezshp"}},methods:{scrollToId:function(t){var e=document.getElementById(t);e.scrollIntoView({behavior:"smooth"});var r=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0];setTimeout((function(){r.focus()}),500)}}},o=(r(187),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"features"}},[r("div",{staticClass:"constraint"},[r("div",{attrs:{id:"description"}},[t._m(0),t._v(" "),r("div",{attrs:{id:"info"}},[r("p",[t._v("\n          "+t._s(t.siteName)+" Pro uses the latest Airoha 1562A chipset\n          to provide a better listening experience.\n        ")])]),t._v(" "),r("button",{staticClass:"buy-btn",on:{click:function(e){return t.$router.push("ezshp-pro")}}},[t._v("Buy Now")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Clearly "),e("br"),this._v("Superior Sound.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"images"}},[e("img",{attrs:{alt:"Ezshp Pro earbud closeup",src:"ui/ezshp-pro-earbud-closeup.png"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"specs"}},[r("div",[r("small",[t._v("More Power")]),t._v(" "),r("span",{staticClass:"big"},[t._v("12hr.")]),t._v(" "),r("p",[t._v("of battery life with charging case")])]),t._v(" "),r("div",[r("small",[t._v("Up To")]),t._v(" "),r("span",{staticClass:"big"},[t._v("3hr.")]),t._v(" "),r("p",[t._v("of battery life on one charge")])]),t._v(" "),r("div",[r("small",[t._v("Fast Recharging")]),t._v(" "),r("span",{staticClass:"big"},[t._v("15min.")]),t._v(" "),r("p",[t._v("of charging equals 3 hours of battery life")])])])}],!1,null,"20e542ea",null);e.default=component.exports},193:function(t,e,r){"use strict";r.r(e);r(83),r(25),r(26),r(10),r(64);var n=r(44),o=r(65);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={computed:c(c({},Object(o.b)({getProductByUid:"products/getProductByUid"})),{},{ezshpPro:function(){return this.getProductByUid(1)}})},f=r(24),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("Header"),this._v(" "),e("Banner"),this._v(" "),e("Features"),this._v(" "),e("Product",{attrs:{id:"featured-product",product:this.ezshpPro}}),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(166).default,Banner:r(190).default,Features:r(191).default,Product:r(179).default,Footer:r(167).default})}}]);