import{f as o}from"./index-DEh8bWyY.js";import{j as e}from"./jsx-runtime-BZf_YgVj.js";import"./index-Bqoxw6Vv.js";import"./index-CEThVCg_.js";function g({task:{id:r,title:n,state:f},onArchiveTask:D,onPinTask:_}){return e.jsx("div",{className:"list-item",children:e.jsx("label",{htmlFor:`title-${r}`,"aria-label":n,children:e.jsx("input",{type:"text",value:n,readOnly:!0,name:"title",id:`title-${r}`})})})}g.__docgenInfo={description:"",methods:[],displayName:"Task"};const A={onArchiveTask:o(),onPinTask:o()},I={component:g,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...A}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},a={args:{task:{...s.args.task,state:"TASK_PINNED"}}},t={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,k,T;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const v=["ActionsData","Default","Pinned","Archived"];export{A as ActionsData,t as Archived,s as Default,a as Pinned,v as __namedExportsOrder,I as default};
