import{j as s}from"./jsx-runtime-BZf_YgVj.js";const i=({primary:e=!1,size:t="medium",backgroundColor:o,label:r,...a})=>{const n=e?"storybook-button--primary":"storybook-button--secondary";return s.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${t}`,n].join(" "),style:{backgroundColor:o},...a,children:r})};i.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{i as B};