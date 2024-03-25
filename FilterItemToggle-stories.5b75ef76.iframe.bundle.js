"use strict";(self.webpackChunkmodels_storybook=self.webpackChunkmodels_storybook||[]).push([[5972],{"./stories/FilterItemToggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Off:()=>Off,OffMedium:()=>OffMedium,On:()=>On,OnMedium:()=>OnMedium,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FilterItemToggle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/FilterItemToggle.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Filter Items/Toggle",argTypes:{title:{control:{type:"text"}},isActive:{control:{type:"boolean"}},size:{control:{type:"select"},options:["small","medium"]}}},Template=args=>(0,_FilterItemToggle__WEBPACK_IMPORTED_MODULE_0__.J)(args),defaultArgs={title:"Top clients only",size:"small"},Off=Template.bind({});Off.args={...defaultArgs,isActive:!1};const OffMedium=Template.bind({});OffMedium.args={...defaultArgs,isActive:!1,size:"medium"};const On=Template.bind({});On.args={...defaultArgs,isActive:!0};const OnMedium=Template.bind({});OnMedium.args={...defaultArgs,isActive:!0,size:"medium"},Off.parameters={...Off.parameters,docs:{...Off.parameters?.docs,source:{originalSource:"args => createFilterItemToggle(args)",...Off.parameters?.docs?.source}}},OffMedium.parameters={...OffMedium.parameters,docs:{...OffMedium.parameters?.docs,source:{originalSource:"args => createFilterItemToggle(args)",...OffMedium.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:"args => createFilterItemToggle(args)",...On.parameters?.docs?.source}}},OnMedium.parameters={...OnMedium.parameters,docs:{...OnMedium.parameters?.docs,source:{originalSource:"args => createFilterItemToggle(args)",...OnMedium.parameters?.docs?.source}}};const __namedExportsOrder=["Off","OffMedium","On","OnMedium"]},"./stories/FilterItemToggle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>createFilterItemToggle});var _utilities_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./utilities/dom.js");const createFilterItemToggle=({title,isActive,size})=>(0,_utilities_dom__WEBPACK_IMPORTED_MODULE_0__.k)(`\n\t\t<label \n\t\t\tclass="sb-filter-item sb-filter-item--toggle ${size?`sb-filter-item--toggle--${size}`:""}"\n\t\t\ttabindex="0"\n\t\t\tonkeydown="if (event.key === 'Enter' || event.key === ' ') {\n\t\t\t\tevent.preventDefault();\n        const input = this.querySelector('input[type=checkbox]');\n        if (input) {\n          input.checked = !input.checked;\n        }\n      }"\n\t\t>\n\t\t\t<p class="sb-filter-item__title">${title}</p>\n\t\t\t<div class="sb-filter-item__toggle">\n\t\t\t\t<input type="checkbox" id="sb-filter-item-toggle" ${isActive?"checked":""} />\n\t\t\t\t<span class="sb-filter-item__toggle-check">\n\t\t\t\t\t<span class="sb-filter-item__toggle-check-icon">\n\t\t\t\t\t\t<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">\n\t\t          <path d="M7 1L2.875 5.125L1 3.25" stroke="white" stroke-width="1.25" stroke-linecap="square"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</label>\n\t`)},"./utilities/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function strToDom(str){return(new DOMParser).parseFromString(str,"text/html").body}function domToStr(dom){return(new XMLSerializer).serializeToString(dom)}__webpack_require__.d(__webpack_exports__,{k:()=>strToDom,y:()=>domToStr})}}]);