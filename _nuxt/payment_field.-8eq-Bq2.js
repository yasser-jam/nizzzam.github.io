import{bN as p,g as v,bJ as w,r as i,n as h}from"./entry.jsRjgOGe.js";import{u as g,i as l}from"./payment.oNVZcbJh.js";const q=p("payment_field",()=>{const r=v(),u=g(),{payments:d}=w(u),a=i(l()),o=i([]),m=()=>a.value=l(),f=async e=>{try{const{data:t}=await r.from("payment_field").select().eq("id",e);return a.value=t,a.value}catch(t){throw console.log(t),t}},n=async()=>{try{const{data:e}=await r.from("payment_field").select("*");return o.value=e,o.value=o.value.map(t=>({...t,amount:s(Number(t.id))})),o.value}catch(e){throw console.log(e),e}},s=e=>{let t=0;return d.value.forEach(c=>{c.field_id==e&&(t+=c.amount)}),t},y=h(()=>({...a.value,id:a.value.id||void 0}));return{field:a,fields:o,reset:m,get:f,list:n,create:async()=>{try{await r.from("payment_field").insert(y.value),await n()}catch(e){throw console.log(e),e}},update:async e=>{try{await r.from("payment_field").update(a.value).eq("id",e),await n()}catch(t){throw console.log(t),t}},getAmount:s}});export{q as u};