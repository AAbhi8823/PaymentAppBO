import{u as B,j as e,I as C,B as N,G as L,d as k,e as M,f as R,g as S,a as U,o as H,r as y,F as z,L as I,R as g,h as q,i as E,k as T,l as D,H as F}from"./index-9a39d6e8.js";import{C as Z}from"./index-0a3ad37f.js";import{C as _}from"./CheckBox-9c6c6f96.js";import{u as $}from"./useGetTableData-9605a423.js";const G=r=>{const{isLoading:n}=r,{control:o,reset:s}=B();return e.jsxs("div",{className:"my-10",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6",children:[e.jsx(C,{control:o,name:"upi",id:"upi",type:"text",label:"New Upi id",placeholder:"Enter",isErrorVisible:!0}),e.jsx(C,{control:o,type:"number",name:"minDepositLimit",id:"minDepositLimit",label:"Min Deposit Limit",placeholder:"Enter",isErrorVisible:!0}),e.jsx(C,{control:o,type:"number",name:"maxDepositLimit",id:"maxDepositLimit",label:"Max Deposit Limit",placeholder:"Enter",isErrorVisible:!0})]}),e.jsxs("div",{className:"flex gap-2 mt-6 md:mt-3",children:[e.jsx(N,{variant:"primary",type:"submit",children:"Submit"}),e.jsx(N,{variant:"secondary",type:"reset",onClick:s,isDisabled:n,children:"Clear"})]})]})},f=r=>{const{type:n,title:o,description:s,icon:d,count:a}=r;return e.jsxs("div",{className:"w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("h5",{className:"mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white",children:o}),e.jsx("p",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:s}),e.jsx("ul",{className:"my-4 space-y-3",children:e.jsx("li",{children:e.jsxs("div",{className:"flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",children:[d,e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:a}),e.jsx("span",{className:"inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400",children:n})]})})})]})};function P(r){return L({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"}},{tag:"path",attr:{d:"m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"}}]})(r)}function O(r){return L({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M9.10146 13.8991C8.90419 13.9357 8.70353 13.9627 8.49999 13.9795V13H7.49999V13.9795C4.57233 13.7379 2.24067 11.3945 2.0175 8.46167H3V7.46167H2.02382C2.28141 4.56475 4.59788 2.25996 7.49999 2.02054V3H8.49999V2.02054C11.4149 2.26101 13.739 4.5851 13.9795 7.5H13V8.5H13.9795C13.9627 8.70354 13.9357 8.90419 13.8991 9.10146C14.2338 9.17833 14.5524 9.29718 14.8492 9.45217C14.948 8.98368 15 8.49791 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C8.49791 15 8.98368 14.948 9.45217 14.8492C9.29718 14.5524 9.17833 14.2338 9.10146 13.8991ZM9.90369 10.4675L6.99115 9.00874L4.96667 4.96655L9.00885 6.99103L10.4676 9.90359C10.2614 10.0724 10.0725 10.2613 9.90369 10.4675ZM9.43542 9.4353L8.48073 7.51916L6.56458 6.56447L7.51927 8.48062L9.43542 9.4353Z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3333 10.5056C11.8266 10.1759 12.4067 10 13 10C13.7954 10.001 14.5578 10.3174 15.1202 10.8798C15.6826 11.4422 15.999 12.2046 16 13C16 13.5933 15.8241 14.1734 15.4944 14.6667C15.1648 15.1601 14.6962 15.5446 14.1481 15.7716C13.5999 15.9987 12.9967 16.0581 12.4147 15.9424C11.8328 15.8266 11.2982 15.5409 10.8787 15.1213C10.4591 14.7018 10.1734 14.1672 10.0576 13.5853C9.94189 13.0033 10.0013 12.4001 10.2284 11.8519C10.4554 11.3038 10.8399 10.8352 11.3333 10.5056ZM13.0315 14.3226L14.8213 11.9363L14.0213 11.3363L12.541 13.3099L11.6655 12.6095L11.0408 13.3903L12.3192 14.413L13.0315 14.3226Z"}}]})(r)}function Q(r){return L({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15 6c1.1 0 2 .9 2 2a2 2 0 01-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6m0-2c-2.21 0-4 1.79-4 4 0 .18.03.35.05.52l3.43 3.43c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4zm1.69 10.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84zm-3.68 1.97L14.88 18H9c.08-.24.88-1.01 2.91-1.57l1.1-.3M1.41 1.71L0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71zM6 10v-.88l.88.88H6z"}}]})(r)}const J=k().shape({newUpi:M().required("New Upi is required").matches(/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/,"Please Enter valid upi"),isActive:R().nullable()}),K=r=>{const{isHidden:n,setIsHidden:o,editItem:s,refetch:d}=r,[a,{isLoading:b}]=S(),v=U({mode:"onChange",resolver:H(J),defaultValues:{isActive:!1}}),{setValue:m,control:c,formState:{isDirty:j}}=v;y.useEffect(()=>{m("newUpi",s==null?void 0:s.upi),m("isActive",!1)},[s,m]);const w=async t=>{var p,x;if(j){if((t==null?void 0:t.newUpi)===(s==null?void 0:s.upi)&&!t.isActive){g("failed to update same value","error");return}}else{g("please update any field to save","error");return}const l=s==null?void 0:s._id,u=t!=null&&t.isActive?{upi:t==null?void 0:t.newUpi,isActive:!(s!=null&&s.isActive)}:{upi:t==null?void 0:t.newUpi};try{const i=await a({id:l,reqBody:u});if((p=i==null?void 0:i.data)!=null&&p.status){g((x=i==null?void 0:i.data)==null?void 0:x.message,"success"),o(!n),d();return}g("something went wrong","error")}catch(i){throw new Error(`An unknown error occurred ${i}`)}};return e.jsxs(z,{...v,children:[b&&e.jsx(I,{}),e.jsx(Z,{isLoading:b,isHidden:n,setIsHidden:o,title:"Edit Upi",formSubmitHandler:w,children:e.jsxs("div",{className:"grid grid-cols-6 gap-6",children:[e.jsx("div",{className:"col-span-6 sm:col-span-3",children:e.jsx(C,{control:c,type:"text",name:"newUpi",id:"new upi",placeholder:"Enter",label:"Upi Id",isErrorVisible:!0})}),e.jsx("div",{className:"col-span-6 sm:col-span-3 flex align-end mt-3 ",children:e.jsx(_,{control:c,name:"isActive",label:s!=null&&s.isActive?"De Activate":"active"})})]})})]})},W=r=>{const{columns:n,data:o=[],refetch:s}=r,[d]=q(),[a,b]=y.useState({}),[v,m]=y.useState(!0),{tableData:c}=$(o),j=t=>{m(!v),b(t)},w=async t=>{var l,u,p,x;try{const i=await d(t);if((u=(l=i==null?void 0:i.data)==null?void 0:l.resData)!=null&&u.status){s(),g((x=(p=i==null?void 0:i.data)==null?void 0:p.resData)==null?void 0:x.message,"success");return}g("oops!, could not be deleted","error")}catch(i){throw new Error(`An error occurred ${i}`)}};return e.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsx("tr",{children:n&&(n==null?void 0:n.map(t=>e.jsx("th",{scope:"col",className:"px-6 py-3",children:t==null?void 0:t.name},t==null?void 0:t.id)))})}),e.jsx("tbody",{children:c&&(c==null?void 0:c.map((t,l)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e.jsx("th",{scope:"row",className:"flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white",children:e.jsx("p",{className:"text-base font-semibold",children:t==null?void 0:t.upi})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex items-center",children:t.isActive?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-2.5 w-2.5 rounded-full bg-green-500 mr-2"})," active"]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-2.5 w-2.5 rounded-full bg-red-500 mr-2"})," In Active"]})})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("button",{className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",onClick:()=>j(t),children:"Edit"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("button",{className:"ont-medium text-red-600 dark:text-red-500 hover:underline",onClick:()=>w(t._id),children:"Delete"})})]},t.id||l)))})]}),e.jsx(K,{editItem:a,isHidden:v,setIsHidden:m,refetch:s,tableData:c})]})},X=()=>({columns:[{id:1,name:"Upi Id's"},{id:2,name:"Status"},{id:3,name:"Edit Action"},{id:4,name:"Delete Action"}],data:[{id:1,upiId:"987622154@paytm",isActive:!1,editBtnText:"Edit",deleteBtnText:"Delete"},{id:2,upiId:"arbazakhter@ybl",isActive:!1,editBtnText:"Edit",deleteBtnText:"Delete"}]}),Y=r=>{const n=y.useMemo(()=>r==null?void 0:r.length,[r]),o=y.useMemo(()=>{var d;return(d=r==null?void 0:r.filter(a=>(a==null?void 0:a.isActive)===!0))==null?void 0:d.length},[r]),s=y.useMemo(()=>{var d;return(d=r==null?void 0:r.filter(a=>(a==null?void 0:a.isActive)===!1))==null?void 0:d.length},[r]);return{totalUpiCount:n,activeUpiCount:o,nonActiveUpiCount:s}},V=k().shape({upi:M().required().matches(/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/,"Please Enter valid upi"),minDepositLimit:E().required("min deposit is required").typeError("min deposit must be number").positive("min deposit 1 Rs required").integer("min deposit must be integer").max(1e5,"maximum 10000 Rs allowed"),maxDepositLimit:E().required("max deposit is required").typeError("max deposit must be number").positive("max deposit 1 Rs required").integer("max deposit must be integer").max(1e5,"maximum 10000 Rs allowed")}),ie=()=>{var t,l;const r=U({mode:"onChange",resolver:H(V)}),{handleSubmit:n}=r,{columns:o}=X(),{data:s,refetch:d,isLoading:a}=T(),{totalUpiCount:b,activeUpiCount:v,nonActiveUpiCount:m}=Y((t=s==null?void 0:s.resData)==null?void 0:t.data),[c,{isLoading:j}]=D(),w=async u=>{var p,x,i,A;try{const h=await c({upi:u.upi,min_deposit_limit:u.minDepositLimit,max_deposit_limit:u.maxDepositLimit});if((x=(p=h==null?void 0:h.data)==null?void 0:p.resData)!=null&&x.status){g((A=(i=h==null?void 0:h.data)==null?void 0:i.resData)==null?void 0:A.message,"success"),d();return}g("something went wrong","error")}catch(h){throw new Error(`An unknown error occurred ${h}`)}};return e.jsxs(y.Fragment,{children:[(j||a)&&e.jsx(I,{}),e.jsx(F,{as:"h3",children:"Manage Upi id's"}),e.jsx(z,{...r,children:e.jsx("form",{onSubmit:n(w),children:e.jsx(G,{isLoading:j})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsx(f,{icon:e.jsx(P,{color:"blue",size:"24"}),type:"All",count:b,title:"Total Upi id's count",description:"Total Upi id count including active and non active"}),e.jsx(f,{icon:e.jsx(O,{color:"green",size:"24"}),type:"Active",count:v,title:"Active Upi id's count",description:"Only Active Upi id count"}),e.jsx(f,{icon:e.jsx(Q,{color:"red",size:"24"}),type:"Inactive",count:m,title:"Inactive Upi id's count",description:"Only Inactive Upi id count"})]}),e.jsx("div",{className:"container mx-auto my-8",children:e.jsx(W,{columns:o,data:(l=s==null?void 0:s.resData)==null?void 0:l.data,refetch:d})})]})};export{ie as default};