"use strict";(self.webpackChunkalbert_dev=self.webpackChunkalbert_dev||[]).push([[34],{3353:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var i=l(5043),n=l(5585),s=l(3519),r=l(2193),c=l(4574),o=l(2919),d=l(7660),a=l(5724),h=l(4331),x=l(579);const u={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:10,marginBottom:10},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:10}};const y=function(e){const t=(0,i.useContext)(c.Dx),{header:l}=e,[y,m]=(0,i.useState)(null);return(0,i.useEffect)((()=>{fetch(a.A.experiences,{method:"GET"}).then((e=>e.json())).then((e=>m(e.experiences))).catch((e=>e))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.default,{title:l,id:"experience"}),y?(0,x.jsx)("div",{className:"section-content-container",children:(0,x.jsx)(s.A,{children:(0,x.jsx)(n.Timeline,{lineColor:t.timelineLineColor,children:y.map((e=>(0,x.jsx)(o.Ay,{children:(0,x.jsxs)(n.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:u.itemStyle,bodyContainerStyle:{color:t.color},children:[(0,x.jsx)("h2",{className:"item-title",children:e.title}),(0,x.jsxs)("div",{style:u.subtitleContainerStyle,children:[(0,x.jsx)("h4",{style:{...u.subtitleStyle,color:t.accentColor},children:e.subtitle}),e.workType&&(0,x.jsxs)("h5",{style:u.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),(0,x.jsx)("ul",{style:u.ulStyle,children:e.workDescription.map((e=>(0,x.jsxs)("div",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(r.$,{children:e,components:{p:"span"}})}),(0,x.jsx)("br",{})]},e)))})]},e.title+e.dateText)})))})})}):(0,x.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=34.1eb14972.chunk.js.map