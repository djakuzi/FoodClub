import{r as n,j as e,c as f,u as v,L as w,a as N,b,d as F,P as y,A as E,H as L}from"./index-NZfbMkGG.js";const P="_input_u60gl_2",S="_icon_u60gl_28",d={"input-wrapper":"_input-wrapper_u60gl_2",input:P,icon:S},$="/FoodClub/assets/search-BmLR6FH6.png",k=n.forwardRef(function({isValid:t=!0,className:i,...r},o){return e.jsxs("div",{className:d["input-wrapper"],children:[e.jsx("input",{...r,ref:o,className:f(d.input,i,d.input,{[d.invalid]:!t})}),e.jsx("img",{className:d.icon,src:$,alt:"иконка лупы"})]})}),C=k,R="_head_8ulg2_1",H={head:R},I="_link_1m42m_1",A="_card_1m42m_4",M="_head_1m42m_15",T="_price_1m42m_23",W="_rating_1m42m_64",z="_footer_1m42m_88",B="_title_1m42m_92",D="_description_1m42m_100",a={link:I,card:A,head:M,price:T,"add-to-card":"_add-to-card_1m42m_43",rating:W,footer:z,title:B,description:D},q="/FoodClub/assets/cart-card-btn-TcxIqPeH.png";function U(s){const t=v(),i=r=>{r.preventDefault(),t(b.add(s.id))};return e.jsx(w,{className:a.link,to:`/FoodClub/product/${s.id}`,children:e.jsxs("div",{className:a.card,children:[e.jsxs("div",{className:a.head,style:{backgroundImage:`url('${s.image}')`},children:[e.jsxs("div",{className:a.price,children:[s.price,e.jsx("span",{children:" ₽"})]}),e.jsx("button",{className:a["add-to-card"],onClick:i,children:e.jsx("img",{src:q,alt:"добавить в корзину"})}),e.jsxs("div",{className:a.rating,children:[s.rating,e.jsx("img",{src:N,alt:"иконка звезды"})]})]}),e.jsxs("div",{className:a.footer,children:[e.jsx("div",{className:a.title,children:s.name}),e.jsx("div",{className:a.description,children:s.ingredients})]})]})})}const X="_wrapper_1bzj4_1",G={wrapper:X};function J({products:s}){return e.jsx("div",{className:G.wrapper,children:s.map(t=>e.jsx(U,{id:t.id,name:t.name,ingredients:t.ingredients.join(", "),rating:t.rating,price:t.price,image:t.image},t.id))})}function O(){const[s,t]=n.useState([]),[i,r]=n.useState(!1),[o,m]=n.useState(),[h,_]=n.useState(+document.body.offsetWidth),[u,g]=n.useState();n.useEffect(()=>{window.addEventListener("resize",function(){_(document.body.offsetWidth)})},[]),n.useEffect(()=>{p(u)},[u]);const p=async l=>{try{r(!0),await new Promise(j=>{setTimeout(()=>{j()},1e3)});const{data:c}=await F.get(y+"/products",{params:{name:l}});t(c),r(!1)}catch(c){console.error(c),c instanceof E&&(m("Данные загружены локально "+c.message),r(!1)),setTimeout(()=>m(void 0),3e3);return}},x=l=>{g(l.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:H.head,children:[e.jsx(L,{children:"Меню"}),e.jsx(C,{placeholder:h>420?"Введите блюдо или состав":"Поиск",onChange:x})]}),e.jsxs("div",{children:[o&&e.jsx(e.Fragment,{children:o}),!i&&s.length>0&&e.jsx(J,{products:s}),i&&e.jsx(e.Fragment,{children:"Загружаем продукты..."}),!i&&s.length===0&&e.jsx(e.Fragment,{children:"Не найдено блюд по запросу"})]})]})}export{O as default};