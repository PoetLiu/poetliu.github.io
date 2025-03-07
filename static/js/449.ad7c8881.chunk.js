"use strict";(self.webpackChunkalbert_dev=self.webpackChunkalbert_dev||[]).push([[449],{4282:(e,a,r)=>{r.d(a,{A:()=>c});var s=r(8139),t=r.n(s),l=r(5043),d=r(4140),o=r(7852),n=r(579);const i=l.forwardRef(((e,a)=>{let{as:r,bsPrefix:s,variant:l="primary",size:i,active:c=!1,disabled:f=!1,className:m,...x}=e;const b=(0,o.oU)(s,"btn"),[y,{tagName:u}]=(0,d.Am)({tagName:r,disabled:f,...x}),N=u;return(0,n.jsx)(N,{...y,...x,ref:a,disabled:f,className:t()(m,b,c&&"active",l&&`${b}-${l}`,i&&`${b}-${i}`,x.href&&f&&"disabled")})}));i.displayName="Button";const c=i},4449:(e,a,r)=>{r.r(a),r.d(a,{default:()=>O});var s=r(5043),t=r(8602),l=r(8139),d=r.n(l),o=r(7852),n=r(579);const i=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t="div",...l}=e;return s=(0,o.oU)(s,"card-body"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));i.displayName="CardBody";const c=i,f=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t="div",...l}=e;return s=(0,o.oU)(s,"card-footer"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));f.displayName="CardFooter";const m=f;var x=r(1778);const b=s.forwardRef(((e,a)=>{let{bsPrefix:r,className:t,as:l="div",...i}=e;const c=(0,o.oU)(r,"card-header"),f=(0,s.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,n.jsx)(x.A.Provider,{value:f,children:(0,n.jsx)(l,{ref:a,...i,className:d()(t,c)})})}));b.displayName="CardHeader";const y=b,u=s.forwardRef(((e,a)=>{let{bsPrefix:r,className:s,variant:t,as:l="img",...i}=e;const c=(0,o.oU)(r,"card-img");return(0,n.jsx)(l,{ref:a,className:d()(t?`${c}-${t}`:c,s),...i})}));u.displayName="CardImg";const N=u,p=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t="div",...l}=e;return s=(0,o.oU)(s,"card-img-overlay"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));p.displayName="CardImgOverlay";const g=p,v=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t="a",...l}=e;return s=(0,o.oU)(s,"card-link"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));v.displayName="CardLink";const h=v;var j=r(4488);const $=(0,j.A)("h6"),C=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t=$,...l}=e;return s=(0,o.oU)(s,"card-subtitle"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));C.displayName="CardSubtitle";const P=C,w=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t="p",...l}=e;return s=(0,o.oU)(s,"card-text"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));w.displayName="CardText";const S=w,k=(0,j.A)("h5"),R=s.forwardRef(((e,a)=>{let{className:r,bsPrefix:s,as:t=k,...l}=e;return s=(0,o.oU)(s,"card-title"),(0,n.jsx)(t,{ref:a,className:d()(r,s),...l})}));R.displayName="CardTitle";const U=R,T=s.forwardRef(((e,a)=>{let{bsPrefix:r,className:s,bg:t,text:l,border:i,body:f=!1,children:m,as:x="div",...b}=e;const y=(0,o.oU)(r,"card");return(0,n.jsx)(x,{ref:a,...b,className:d()(s,y,t&&`bg-${t}`,l&&`text-${l}`,i&&`border-${i}`),children:f?(0,n.jsx)(c,{children:m}):m})}));T.displayName="Card";const B=Object.assign(T,{Img:N,Title:U,Subtitle:P,Body:c,Link:h,Text:S,Header:y,Footer:m,ImgOverlay:g});var A=r(4282);const I=s.forwardRef(((e,a)=>{let{bsPrefix:r,bg:s="primary",pill:t=!1,text:l,className:i,as:c="span",...f}=e;const m=(0,o.oU)(r,"badge");return(0,n.jsx)(c,{ref:a,...f,className:d()(i,m,t&&"rounded-pill",l&&`text-${l}`,s&&`bg-${s}`)})}));I.displayName="Badge";const F=I;var V=r(4574),H=r(2193);const L={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},O=e=>{var a;const r=(0,s.useContext)(V.Dx),{project:l}=e;return(0,n.jsx)(t.A,{children:(0,n.jsxs)(B,{style:{...L.cardStyle,backgroundColor:r.cardBackground,borderColor:r.cardBorderColor},text:r.bsSecondaryVariant,children:[(0,n.jsx)(B.Img,{variant:"top",src:null===l||void 0===l?void 0:l.image}),(0,n.jsxs)(B.Body,{children:[(0,n.jsx)(B.Title,{style:L.cardTitleStyle,children:l.title}),(0,n.jsx)(B.Text,{style:L.cardTextStyle,children:(d=l.bodyText,(0,n.jsx)(H.$,{children:d}))})]}),(0,n.jsx)(B.Body,{children:null===l||void 0===l||null===(a=l.links)||void 0===a?void 0:a.map((e=>(0,n.jsx)(A.A,{style:L.buttonStyle,variant:"outline-"+r.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),l.tags&&(0,n.jsx)(B.Footer,{style:{backgroundColor:r.cardFooterBackground},children:l.tags.map((e=>(0,n.jsx)(F,{pill:!0,bg:r.bsSecondaryVariant,text:r.bsPrimaryVariant,style:L.badgeStyle,children:e},e)))})]})});var d}},8602:(e,a,r)=>{r.d(a,{A:()=>i});var s=r(8139),t=r.n(s),l=r(5043),d=r(7852),o=r(579);const n=l.forwardRef(((e,a)=>{const[{className:r,...s},{as:l="div",bsPrefix:n,spans:i}]=function(e){let{as:a,bsPrefix:r,className:s,...l}=e;r=(0,d.oU)(r,"col");const o=(0,d.gy)(),n=(0,d.Jm)(),i=[],c=[];return o.forEach((e=>{const a=l[e];let s,t,d;delete l[e],"object"===typeof a&&null!=a?({span:s,offset:t,order:d}=a):s=a;const o=e!==n?`-${e}`:"";s&&i.push(!0===s?`${r}${o}`:`${r}${o}-${s}`),null!=d&&c.push(`order${o}-${d}`),null!=t&&c.push(`offset${o}-${t}`)})),[{...l,className:t()(s,...i,...c)},{as:a,bsPrefix:r,spans:i}]}(e);return(0,o.jsx)(l,{...s,ref:a,className:t()(r,!i.length&&n)})}));n.displayName="Col";const i=n}}]);
//# sourceMappingURL=449.ad7c8881.chunk.js.map