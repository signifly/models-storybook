"use strict";(self.webpackChunkmodels_storybook=self.webpackChunkmodels_storybook||[]).push([[4921],{"./stories/AgencyTypeBanner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultWithManyTags:()=>DefaultWithManyTags,Hover:()=>Hover,HoverWithManyTags:()=>HoverWithManyTags,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AgencyTypeBanner_stories});var dom=__webpack_require__("./utilities/dom.js");const AgencyTypeBanner_stories={title:"Agency/Agency Type Banner",argTypes:{imgSrc:{control:"text"},url:{control:"text"},title:{control:"text"},titleTag:{control:"select",options:["h1","h2","h3","h4","h5","h6","p"]},tags:{control:"array"},hoverTitle:{control:"text"},hoverTags:{control:"array"},hoverButtonText:{control:"text"},isHover:{control:"boolean"}}},Template=args=>(({imgSrc,url,title,titleTag,tags,hoverTitle,hoverTags,hoverButtonText,isHover})=>(0,dom.k)(`\n\t\t<a href="${url}" class="sb-agency-type-banner ${isHover?"sb-agency-type-banner--hover":""}">\n\t\t\t<div class="sb-agency-type-banner__image">\n\t\t\t\t<img src="${imgSrc}" alt="${title}" />\n\t\t\t</div>\n\t\t\t<div class="sb-agency-type-banner__content">\n\t\t\t\t<${titleTag} class="sb-agency-type-banner__title">${title}</${titleTag}>\n\t\t\t\t<div class="sb-agency-type-banner__tags">\n\t\t\t\t\t${tags.map((tag=>`<span class="sb-agency-type-banner__tag">${tag}</span>`)).join("")}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sb-agency-type-banner__hover">\n\t\t\t\t<div class="sb-agency-type-banner__hover-content">\n\t\t\t\t\t<p class="sb-agency-type-banner__title sb-agency-type-banner__hover-title">${title}</p>\n\t\t\t\t\t<div class="sb-agency-type-banner__hover-tags">\n\t\t\t\t\t\t<p class="sb-agency-type-banner__hover-tags-title">${hoverTitle}</p>\n\t\t\t\t\t\t<div class="sb-agency-type-banner__hover-tags-list">\n\t\t\t\t\t\t\t${hoverTags.map((tag=>`<span class="sb-agency-type-banner__tag sb-agency-type-banner__hover-tag">${tag}</span>`)).join("")}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="sb-agency-type-banner__hover-button">\n\t\t\t\t\t\t<span>${hoverButtonText}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</a>\n\t`))(args),Default=Template.bind({});Default.args={imgSrc:"https://picsum.photos/800/960",url:"#",title:"Modeling & Acting <br />Agencies",titleTag:"p",tags:["Models","Actors"],hoverTitle:"All Agency Types",hoverTags:["Models","Actors"],hoverButtonText:"View all agencies"};const DefaultWithManyTags=Template.bind({});DefaultWithManyTags.args={...Default.args,title:"Production & Creative Services",tags:["Art Direction","Casting","+8"],hoverTags:["Art Direction","Casting","Creative Direction","Fashion Styling","Hair Styling","Makeup","Photography","Production","Wardrobe Styling"]};const Hover=Template.bind({});Hover.args={...Default.args,isHover:!0};const HoverWithManyTags=Template.bind({});HoverWithManyTags.args={...DefaultWithManyTags.args,isHover:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => createAgencyTypeBanner(args)",...Default.parameters?.docs?.source}}},DefaultWithManyTags.parameters={...DefaultWithManyTags.parameters,docs:{...DefaultWithManyTags.parameters?.docs,source:{originalSource:"args => createAgencyTypeBanner(args)",...DefaultWithManyTags.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"args => createAgencyTypeBanner(args)",...Hover.parameters?.docs?.source}}},HoverWithManyTags.parameters={...HoverWithManyTags.parameters,docs:{...HoverWithManyTags.parameters?.docs,source:{originalSource:"args => createAgencyTypeBanner(args)",...HoverWithManyTags.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DefaultWithManyTags","Hover","HoverWithManyTags"]},"./utilities/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function strToDom(str){return(new DOMParser).parseFromString(str,"text/html").body}function domToStr(dom){return(new XMLSerializer).serializeToString(dom)}__webpack_require__.d(__webpack_exports__,{k:()=>strToDom,y:()=>domToStr})}}]);