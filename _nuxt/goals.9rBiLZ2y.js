import{_ as z}from"./Title.1mAO0gU2.js";import{_ as D}from"./Btn.dcHiYtOT.js";import{f as d,n as h,o as l,c as y,q as g,s as k,_ as w,j as u,w as s,d as c,b as t,p as I,e as j,a as r,r as x,t as A,x as V,y as N,i as B,h as G,F as $,l as L,z as M}from"./entry.5B871UGT.js";import{_ as F}from"./Subtitle.APw2QcAk.js";import{_ as v,a as P,b as R,c as q}from"./Card.vue.7SY_lLT1.js";import"./Icon.vue.JWFmyXHw.js";import"./IconTw.vue.az_ZJukF.js";import"./IconSvg.BwFhCSYJ.js";const S=d({__name:"Badge",props:{outline:{type:Boolean},size:{},lg:{type:Boolean},md:{type:Boolean},sm:{type:Boolean},xs:{type:Boolean},color:{},neutral:{type:Boolean},primary:{type:Boolean},secondary:{type:Boolean},accent:{type:Boolean},info:{type:Boolean},success:{type:Boolean},warning:{type:Boolean},error:{type:Boolean},ghost:{type:Boolean}},setup(a){const e=a,o=h(()=>({"badge-outline":e.outline,"badge-ghost":e.ghost,"badge-lg":e.lg||e.size==="lg","badge-md":e.md||e.size==="md","badge-sm":e.sm||e.size==="sm","badge-xs":e.xs||e.size==="xs","badge-neutral":e.neutral||e.color==="neutral","badge-primary":e.primary||e.color==="primary","badge-secondary":e.secondary||e.color==="secondary","badge-accent":e.accent||e.color==="accent","badge-info":e.info||e.color==="info","badge-success":e.success||e.color==="success","badge-warning":e.warning||e.color==="warning","badge-error":e.error||e.color==="error"}));return(n,i)=>(l(),y("div",{class:k(["badge",o.value])},[g(n.$slots,"default")],2))}}),E={};function U(a,e){const o=S;return l(),u(o,{lg:"",class:"mt-4 text-xs font-semibold text-white leading-relaxed flex flex-nowrap text-nowrap bg-slate-400"},{default:s(()=>[g(a.$slots,"default")]),_:3})}const W=w(E,[["render",U]]),Z=d({__name:"CardActions",props:{is:{default:"div"}},setup(a){return(e,o)=>(l(),u(v,{is:e.is,class:"card-actions"},{default:s(()=>[g(e.$slots,"default")]),_:3},8,["is"]))}}),H=a=>(I("data-v-c5bbb271"),a=a(),j(),a),J=H(()=>r("div",{class:"liner"},null,-1)),K=d({__name:"Card",props:{type:{type:String,default:"default"},value:{type:Number},color:{type:String}},setup(a){const e=a;return h(()=>{switch(e.type){case"default":return"bg-primary text-primary-content";case"neutral":return"bg-succes text-neutral-content";case"warning":return"bg-warning text-warning-content"}}),(o,n)=>{const i=P,_=S,m=Z,f=R,p=q;return l(),u(p,{class:k(["relative overflow-hidden",`bg-${e.color}`])},{default:s(()=>[J,t(f,null,{default:s(()=>[t(i,{is:"h2",class:"text-white"},{default:s(()=>[c(" Card title! ")]),_:1}),t(_,{size:"lg",class:"mt-4"},{default:s(()=>[c("test for test")]),_:1}),t(m,{class:"justify-end card-actions"})]),_:1})]),_:1},8,["class"])}}}),O=w(K,[["__scopeId","data-v-c5bbb271"]]),Q=d({__name:"LabelText",props:{is:{default:"span"}},setup(a){return(e,o)=>(l(),u(v,{is:e.is,class:"label-text"},{default:s(()=>[g(e.$slots,"default")]),_:3},8,["is"]))}}),X=d({__name:"Label",props:{is:{default:"label"}},setup(a){return(e,o)=>(l(),u(v,{is:e.is,class:"label"},{default:s(()=>[g(e.$slots,"default")]),_:3},8,["is"]))}}),Y=["aria-label"],ee=d({__name:"Task",props:{task:{}},setup(a){x(!1);const e=a,o=h({get:()=>e.task.status,set:n=>emit("update:moddel-value",n)});return(n,i)=>{const _=Q,m=X;return l(),u(m,{class:"cursor-pointer bg-white rounded-md px-4 py-4"},{default:s(()=>[t(_,{class:"text-lg font-bold"},{default:s(()=>[c(A(e.task.name),1)]),_:1}),G(r("input",{"onUpdate:modelValue":i[0]||(i[0]=f=>V(o)?o.value=f:null),type:"checkbox","aria-label":e.task.status?"Done!":"Doning",class:"btn"},null,8,Y),[[N,B(o)]])]),_:1})}}}),te={class:"container"},se={class:"flex items-center justify-between mb-8"},ae={class:"flex items-center justify-between mb-8"},oe={class:"grid grid-cols-1 md:grid-cols-4 gap-8"},ne={class:"mt-8"},re={class:"flex justify-between item-center mb-4"},le=r("div",{class:"text-2xl font-bold mb-4"},"Day Tasks",-1),ce=r("div",{class:"grid mt-8"},null,-1),be=d({__name:"goals",setup(a){x([{id:1,title:"Reading",currentState:"Stage - 4",description:"Syrian Improvments",level:1},{id:2,title:"Algorithms Course",currentState:"Stage - 3",description:"Testing and Practicing",level:2},{id:3,title:"Memorizing",currentState:"Poem 4",description:"Ibn Zaidon",level:2},{id:4,title:"Documentries",currentState:"Docs 5",description:"Apucalips 5",level:3},{id:5,title:"Study",currentState:"term 2",description:"term 2",level:3}]);const e=x([{id:1,name:"Task - 1",status:!0},{id:2,name:"Task - 2",status:!1},{id:3,name:"Task - 3",status:!0},{id:4,name:"Task - 4",status:!1}]);return(o,n)=>{const i=z,_=D,m=W,f=F,p=O,C=ee,T=M;return l(),y($,null,[r("div",te,[r("div",se,[t(i,null,{default:s(()=>[c("Goals")]),_:1}),t(_,{icon:"heroicons:plus-16-solid",onClick:n[0]||(n[0]=b=>o.$router.push("/goals/add"))},{default:s(()=>[c("Add Goal")]),_:1})]),r("div",ae,[t(f,null,{default:s(()=>[c("Weekly Goals "),t(m,null,{default:s(()=>[c("week-2")]),_:1})]),_:1}),t(_,{primary:""},{default:s(()=>[c("Monthly")]),_:1})]),r("div",oe,[t(p,{color:"primary",value:50}),t(p,{color:"info",value:25}),t(p,{color:"warning",value:75}),t(p,{class:"bg-error",type:"",value:15})]),r("div",ne,[r("div",re,[le,t(_,{primary:"",onClick:n[1]||(n[1]=b=>o.$router.push("/goals/add-task"))},{default:s(()=>[c("Add Task")]),_:1})]),(l(!0),y($,null,L(B(e),b=>(l(),u(C,{key:b.id,task:b,class:"mb-4"},null,8,["task"]))),128))]),ce]),t(T)],64)}}});export{be as default};