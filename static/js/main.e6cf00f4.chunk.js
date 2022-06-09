(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(t,e,r){t.exports={button:"CartButton_button__105SA",badge:"CartButton_badge__vCbV7"}},18:function(t,e,r){t.exports={card:"Card_card__bNVw0"}},19:function(t,e,r){t.exports={cart:"Cart_cart__3U-qZ"}},20:function(t,e,r){t.exports={header:"MainHeader_header__3L41Y"}},21:function(t,e,r){t.exports={products:"Products_products__20IJ8"}},34:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var c=r(15),n=r.n(c),a=r(2),s=r(6),i=r(4),o=Object(s.b)({name:"cart",initialState:{cartItems:[],numberOfCartItems:0,isCartShown:!1,isCartChanged:!1},reducers:{replaceCart:function(t,e){t.cartItems=e.payload.cartItems,t.numberOfCartItems=e.payload.numberOfCartItems},addItemToCart:function(t,e){var r=e.payload;t.isCartChanged=!0,t.cartItems||(t.cartItems=[]);var c=t.cartItems.find((function(t){return t.id===r.id}));c?(c.quantity++,c.total+=r.price):t.cartItems.push(Object(i.a)(Object(i.a)({},r),{},{quantity:1,total:r.price})),t.numberOfCartItems++},removeItemFromCart:function(t,e){var r=e.payload;t.isCartChanged=!0;var c=t.cartItems.findIndex((function(t){return t.id===r})),n=t.cartItems[c];1===n.quantity?t.cartItems=t.cartItems.filter((function(t){return t.id!==r})):t.cartItems[c]=Object(i.a)(Object(i.a)({},n),{},{quantity:n.quantity-1,total:n.total-n.price}),t.numberOfCartItems--},toggleCart:function(t){t.isCartShown=!t.isCartShown}}}),u=o.actions,d=o.reducer,j=Object(s.b)({name:"UI",initialState:{notification:null},reducers:{showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),l=j.actions,b=j.reducer,p=Object(s.a)({reducer:{cart:d,UI:b}}),m=(r(34),r(1)),f=r(18),h=r.n(f),O=r(0),x=function(t){return Object(O.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},_=r(19),C=r.n(_),I=r(5),v=r.n(I),y=function(t){var e=t.item,r=e.id,c=e.title,n=e.quantity,s=e.total,i=e.price,o=Object(a.b)();return Object(O.jsxs)("li",{className:v.a.item,children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h3",{children:c}),Object(O.jsxs)("div",{className:v.a.price,children:["$",s.toFixed(2)," ",Object(O.jsxs)("span",{className:v.a.itemprice,children:["($",i.toFixed(2),"/item)"]})]})]}),Object(O.jsxs)("div",{className:v.a.details,children:[Object(O.jsxs)("div",{className:v.a.quantity,children:["x ",Object(O.jsx)("span",{children:n})]}),Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{onClick:function(){o(u.removeItemFromCart(r))},children:"-"}),Object(O.jsx)("button",{onClick:function(){o(u.addItemToCart(t.item))},children:"+"})]})]})]})},g=function(t){var e=Object(a.c)((function(t){return t.cart.cartItems})),r=Object(a.c)((function(t){return t.cart.numberOfCartItems}));return Object(O.jsxs)(x,{className:C.a.cart,children:[Object(O.jsx)("h2",{children:"Your Shopping Cart"}),Object(O.jsx)("ul",{children:e.map((function(t){return Object(O.jsx)(y,{item:t},t.id)}))}),0===r&&Object(O.jsx)("p",{children:"You cart is empty! Go shopping!"})]})},N=r(13),w=r.n(N),S=function(t){var e=Object(a.b)(),r=Object(a.c)((function(t){return t.cart.numberOfCartItems}));return Object(O.jsxs)("button",{onClick:function(){e(u.toggleCart())},className:w.a.button,children:[Object(O.jsx)("span",{children:"My Cart"}),Object(O.jsx)("span",{className:w.a.badge,children:r})]})},k=r(20),q=r.n(k),F=function(t){return Object(O.jsxs)("header",{className:q.a.header,children:[Object(O.jsx)("h1",{children:"Gadget Shop"}),Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(S,{})})})})]})},P=function(t){return Object(O.jsxs)(m.Fragment,{children:[Object(O.jsx)(F,{}),Object(O.jsx)("main",{children:t.children})]})},E=r(8),T=r.n(E),U=function(t){var e=t.title,r=t.price,c=t.description,n=t.id,s=Object(a.b)();return Object(O.jsx)("li",{className:T.a.item,children:Object(O.jsxs)(x,{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h3",{children:e}),Object(O.jsxs)("div",{className:T.a.price,children:["$",r.toFixed(2)]})]}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("div",{className:T.a.actions,children:Object(O.jsx)("button",{onClick:function(){s(u.addItemToCart({id:n,title:e,price:r}))},children:"Add to Cart"})})]})})},A=r(21),B=r.n(A),J=function(t){return Object(O.jsxs)("section",{className:B.a.products,children:[Object(O.jsx)("h2",{children:"Buy your favorite gadget"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(U,{id:"p1",title:"Laptop Pro",price:1999,description:"The prefect laptop for professionals."}),Object(O.jsx)(U,{id:"p2",title:"Phone Ultra",price:999,description:"The ultimate machine money can buy!"}),Object(O.jsx)(U,{id:"p3",title:"Gentle Earbuds",price:149,description:"A handy tool to improve and ease your music-listening."}),Object(O.jsx)(U,{id:"p4",title:"Adaptive Stylus",price:99,description:"A stylus fitting both laptops and smartphones, easy to buy - easy to use."})]})]})},G=r(9),M=r.n(G),R=function(t){var e="";"error"===t.status&&(e=M.a.error),"success"===t.status&&(e=M.a.success);var r="".concat(M.a.notification," ").concat(e);return Object(O.jsxs)("section",{className:r,children:[Object(O.jsx)("h2",{children:t.title}),Object(O.jsx)("p",{children:t.message})]})},Y=r(3),$=r(7),K=!0,L=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.cart.isCartShown})),r=Object(a.c)((function(t){return t.cart.cartItems})),c=Object(a.c)((function(t){return t.cart.numberOfCartItems})),n=Object(a.c)((function(t){return t.cart.isCartChanged})),s=Object(a.c)((function(t){return t.UI.notification}));return Object(m.useEffect)((function(){t(function(){var t=Object($.a)(Object(Y.a)().mark((function t(e){var r,c;return Object(Y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=Object($.a)(Object(Y.a)().mark((function t(){var e,r;return Object(Y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Couldn't fetch cart data!");case 5:return t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,r();case 4:c=t.sent,e(u.replaceCart({cartItems:c.cartItems||[],numberOfCartItems:c.numberOfCartItems})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(l.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(m.useEffect)((function(){K?K=!1:n&&t(function(t,e){return function(){var r=Object($.a)(Object(Y.a)().mark((function r(c){var n;return Object(Y.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(l.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),n=function(){var r=Object($.a)(Object(Y.a)().mark((function r(){return Object(Y.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItems:t,numberOfCartItems:e})});case 2:if(r.sent.ok){r.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),r.prev=2,r.next=5,n();case 5:c(l.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),c(l.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return r.stop()}}),r,null,[[2,8]])})));return function(t){return r.apply(this,arguments)}}()}(r,c))}),[r,c,n,t]),Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)(R,{status:s.status,title:s.title,message:s.message}),Object(O.jsxs)(P,{children:[e&&Object(O.jsx)(g,{}),Object(O.jsx)(J,{})]})]})};n.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(a.a,{store:p,children:Object(O.jsx)(L,{})}))},5:function(t,e,r){t.exports={item:"CartItem_item__3bq5P",details:"CartItem_details__3ewtQ",quantity:"CartItem_quantity__2-N0s",price:"CartItem_price__1cuOF",itemprice:"CartItem_itemprice__Rya7x",actions:"CartItem_actions__10dzf"}},8:function(t,e,r){t.exports={item:"ProductItem_item__3PXKC",price:"ProductItem_price__3MD4h",actions:"ProductItem_actions__1jir9"}},9:function(t,e,r){t.exports={notification:"Notification_notification__2F_y0",error:"Notification_error__FK3Ri",success:"Notification_success__1c8Ts"}}},[[36,1,2]]]);
//# sourceMappingURL=main.e6cf00f4.chunk.js.map