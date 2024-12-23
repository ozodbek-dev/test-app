import{u as c,a as p,l as t,b as m,j as a,P as x,A as j,T as h,c as C,d as u,V as y,e as A,D as _,U as f}from"./index-eTQgwI9E.js";function z(){const{navigate:d,query:n,qs:o}=c(),{data:l,isLoading:g}=p({url:"quiz",name:"quiz_list",params:{page:t.get(n,"page",1),limit:t.get(n,"limit",20)}}),{onModalOpen:r}=m();return a.jsxs("div",{className:"w-full",children:[a.jsxs("div",{className:"flex w-full justify-between",children:[a.jsx(x,{children:"Quiz"}),a.jsx(j,{onClick:()=>r({type:"create_quiz"}),children:"Create Quiz"})]}),a.jsx("div",{children:a.jsx(h,{items:t.get(l,"data",[]),columns:[{title:"№",render:(i,e,s)=>a.jsx("span",{children:s+1})},{title:"ID",dataIndex:"id",width:300,render:(i,e)=>a.jsx("div",{onClick:()=>C(t.get(e,"id","")),className:"line-clamp-1",children:t.get(e,"id","-")??"-"})},{title:"Text",width:300,render:(i,e)=>a.jsx("div",{className:"line-clamp-2",children:t.get(e,"text","")??"-"})},{title:"Language",width:50,render:(i,e)=>a.jsx(a.Fragment,{children:t.get(e,"language","-")??"-"})},{title:"SubCategory",render:(i,e)=>t.get(e,"subCategory.title","")!==null?t.get(e,"subCategory.title"):"-"},{title:"UpdatedAt",dataIndex:"updatedAt",render:(i,e)=>t.get(e,"updatedAt","")!==null?u(t.get(e,"updatedAt")).format("DD-MM-YYYY HH:mm"):"-"},{title:"CreatedAt",dataIndex:"createdAt",render:(i,e)=>t.get(e,"updatedAt","")!==null?u(t.get(e,"createdAt")).format("DD-MM-YYYY HH:mm"):"-"},{title:"Actions",render:(i,e)=>a.jsxs("div",{className:"flex gap-1",children:[a.jsx(y,{onClick:()=>d(`${t.get(e,"id")}`)}),a.jsx(A,{title:"Add Option",onClick:()=>{console.log(t.get(e,"id","")),r({type:"create_option",data:{quizId:t.get(e,"id","")}})}}),a.jsx(_,{onClick:()=>{const s=o.stringify({...n,...e});d({search:s}),r({type:"delete_quiz",data:null})}}),a.jsx(f,{onClick:()=>r({type:"update_quiz",data:e})})]})}],meta:{currentPage:t.get(n,"page",1),totalCount:+t.get(l,"meta.total"),perPage:t.get(n,"limit",20),pageCount:t.get(l,"meta.totalPages")},isLoading:g})})]})}function Y(){return a.jsx(z,{})}export{Y as default};
