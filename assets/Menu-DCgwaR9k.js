import{a as m,j as s,c as u,r as d,L as g,P as p}from"./index-kuMzod9n.js";const{Axios:D,AxiosError:x,CanceledError:O,isCancel:V,CancelToken:J,VERSION:U,all:X,Cancel:G,isAxiosError:K,spread:Q,toFormData:W,AxiosHeaders:Y,HttpStatusCode:Z,formToJSON:ss,getAdapter:es,mergeConfig:ts}=m,j="_h1_19ytc_1",f={h1:j};function N({children:e,className:t,...a}){return s.jsx("h1",{className:u(t,f.h1),...a,children:e})}const v="_input_nl8is_2",w="_icon_nl8is_27",c={"input-wrapper":"_input-wrapper_nl8is_2",input:v,icon:w},y="/assets/search-BmLR6FH6.png",E=d.forwardRef(function({isValid:t=!0,className:a,...n},o){return s.jsxs("div",{className:c["input-wrapper"],children:[s.jsx("input",{...n,ref:o,className:u(c.input,a,c.input,{[c.invalid]:!t})}),s.jsx("img",{className:c.icon,src:y,alt:"иконка лупы"})]})}),C=E,S="_head_8ulg2_1",$={head:S},z="_card_m4d7z_1",P="_head_m4d7z_11",F="_price_m4d7z_19",L="_rating_m4d7z_60",R="_footer_m4d7z_84",A="_title_m4d7z_88",H="_description_m4d7z_96",r={card:z,head:P,price:F,"add-to-card":"_add-to-card_m4d7z_39",rating:L,footer:R,title:A,description:H},I="/assets/cart-card-btn-TcxIqPeH.png",T="/assets/rating-CFyDsVn9.png";function b(e){return s.jsx(g,{to:`/product/${e.id}`,children:s.jsxs("div",{className:r.card,children:[s.jsxs("div",{className:r.head,style:{backgroundImage:`url('${e.image}')`},children:[s.jsxs("div",{className:r.price,children:[e.price,s.jsx("span",{children:" ₽"})]}),s.jsx("button",{className:r["add-to-card"],children:s.jsx("img",{src:I,alt:"добавить в корзину"})}),s.jsxs("div",{className:r.rating,children:[e.rating,s.jsx("img",{src:T,alt:"иконка звезды"})]})]}),s.jsxs("div",{className:r.footer,children:[s.jsx("div",{className:r.title,children:e.title}),s.jsx("div",{className:r.description,children:e.ingredients})]})]})})}const k="_wrapper_1tqpp_1",M={wrapper:k};function q({products:e}){return s.jsx("div",{className:M.wrapper,children:e.map(t=>s.jsx(b,{id:t.id,title:t.title,ingredients:t.ingredients.join(", "),rating:t.rating,price:t.price,image:t.image},t.id))})}function rs(){const[e,t]=d.useState([]),[a,n]=d.useState(!1),[o,l]=d.useState(),_=async()=>{try{n(!0),await new Promise(h=>{setTimeout(()=>{h()},1e3)});const{data:i}=await m.get(p+"/products");t(i),n(!1)}catch(i){console.error(i),i instanceof x&&(l("Данные загружены локально "+i.message),n(!1)),setTimeout(()=>l(void 0),3e3);return}};return d.useEffect(()=>{_()},[]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:$.head,children:[s.jsx(N,{children:"Меню"}),s.jsx(C,{placeholder:"Введите блюдо или состав"})]}),s.jsxs("div",{children:[o&&s.jsx(s.Fragment,{children:o}),!a&&s.jsx(q,{products:e}),a&&s.jsx(s.Fragment,{children:"Загружаем продукты..."})]})]})}export{rs as default};
