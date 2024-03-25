"use strict";(self.webpackChunkmodels_storybook=self.webpackChunkmodels_storybook||[]).push([[7581],{"./stories/LinkedPanel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinkedPanel:()=>LinkedPanel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkedPanel_stories});var dom=__webpack_require__("./utilities/dom.js");const LinkedPanel_stories={title:"Components/LinkedPanel",argTypes:{title:{control:"text"},titleTag:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p"]},buttonLabel:{control:"text"},buttonUrl:{control:"text"},newTab:{control:"boolean"}}},LinkedPanel=(args=>(({title,titleTag,buttonLabel,buttonUrl,newTab})=>(0,dom.k)(`\n\t\t<div class="sb-linked-panel">\n\t\t\t<${titleTag} class="sb-linked-panel__title">${title}</${titleTag}>\n\t\t\t<div class="sb-linked-panel__button-wrapper">\n\t\t\t\t<a class="sb-link sb-linked-panel__button" href="${buttonUrl}" ${newTab?'target="_blank" rel="noopener noreferrer"':""}>${buttonLabel}</a>\n\t\t\t</div>\n\t\t</div>\n\t`))(args)).bind({});LinkedPanel.args={title:"Lorem ipsum dolor sit amet",titleTag:"p",buttonLabel:"Click me",buttonUrl:"/",newTab:!1},LinkedPanel.parameters={...LinkedPanel.parameters,docs:{...LinkedPanel.parameters?.docs,source:{originalSource:"args => {\n  return createLinkedPanel(args);\n}",...LinkedPanel.parameters?.docs?.source}}};const __namedExportsOrder=["LinkedPanel"]},"./utilities/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function strToDom(str){return(new DOMParser).parseFromString(str,"text/html").body}function domToStr(dom){return(new XMLSerializer).serializeToString(dom)}__webpack_require__.d(__webpack_exports__,{k:()=>strToDom,y:()=>domToStr})}}]);