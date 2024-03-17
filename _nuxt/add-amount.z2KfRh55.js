import{_ as N}from"./Label.Sh4j5nOL.js";import{_ as D,a as E}from"./Dialog.vue.3CQavNKu.js";import{f as g,r as y,o as s,c as p,F as x,l as V,t as S,j as b,w as i,b as u,a,m as L,bJ as $,d,i as t}from"./entry.5B871UGT.js";import{_ as O}from"./Icon.vue.JWFmyXHw.js";import{_ as P}from"./Btn.dcHiYtOT.js";import{u as T}from"./payment.4iYPt_dP.js";import{u as R}from"./payment_field.WydetsG6.js";import{u as U}from"./asyncData.3rvefR7X.js";import"./IconTw.vue.az_ZJukF.js";import"./IconSvg.BwFhCSYJ.js";const j=["value"],q=g({__name:"Select",props:{options:{}},emits:["update:model-value"],setup(h,{emit:l}){const n=y(null),r=l,e=()=>{var c;r("update:model-value",Number((c=n.value)==null?void 0:c.value))};return(c,f)=>(s(),p("select",{ref_key:"selectEl",ref:n,class:"select select-bordered w-full",onChange:e},[(s(!0),p(x,null,V(c.options,m=>(s(),p("option",{selected:"",value:m.id},S(m.title),9,j))),256))],544))}}),z={class:"flex items-center text-lg"},I={class:"ms-2"},J=g({__name:"SelectBtn",props:{active:{type:Boolean},option:{}},setup(h){return(l,n)=>{const r=O,e=P;return s(),b(e,{square:"",primary:l.active,class:"btn-md w-24"},{default:i(()=>[a("div",z,[u(r,{name:"heroicons:currency-dollar-solid"}),a("div",I,S(l.option.title),1)])]),_:1},8,["primary"])}}}),G={class:"gird grid-cols-1"},H={class:"mt-4"},K={class:"flex flex-wrap gap-2 mt-2"},ne=g({__name:"add-amount",setup(h){const l=L(),n=T(),r=R(),{payment:e}=$(n),{fields:c}=$(r);U(()=>r.list(),"$riLn2D1g3h");const f=y(!1),m=async()=>{f.value=!0;try{await n.create()}finally{f.value=!1}},k=y([{title:"1000",value:1e3},{title:"2000",value:2e3},{title:"10000",value:1e4},{title:"20000",value:2e4},{title:"30000",value:3e4},{title:"40000",value:4e4},{title:"50000",value:5e4},{title:"Other",value:0}]),w=()=>{l.push("/payment")};return(M,_)=>{const v=N,B=E,C=q,A=J,F=D;return s(),b(F,{"model-value":!0,onSave:m,onClose:w},{title:i(()=>[d("Add Payment Amount!")]),body:i(()=>[a("div",G,[a("div",null,[u(v,null,{default:i(()=>[d("Title")]),_:1}),u(B,{modelValue:t(e).title,"onUpdate:modelValue":_[0]||(_[0]=o=>t(e).title=o),class:"mt-2 w-full",bordered:""},null,8,["modelValue"])]),a("div",null,[u(v,null,{default:i(()=>[d("Category")]),_:1}),u(C,{modelValue:t(e).payment_filed,"onUpdate:modelValue":_[1]||(_[1]=o=>t(e).payment_filed=o),class:"mt-2",options:t(c)},null,8,["modelValue","options"])]),a("div",H,[u(v,null,{default:i(()=>[d("Amount")]),_:1}),a("div",K,[(s(!0),p(x,null,V(t(k),o=>(s(),b(A,{option:o,active:o.value==t(e).amount,onClick:Q=>t(e).amount=o.value},null,8,["option","active","onClick"]))),256))])])])]),_:1})}}});export{ne as default};