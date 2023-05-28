import{u as n,r as x,o as s,c as a,a as i,b as h,d as m,e,F as l,f as u,g,w as p,v as _,n as f,t as v,_ as b}from"./index-031c3c6b.js";const k=g('<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto"><h2 class="text-3xl font-bold text-gray-900 mb-8">关于这个项目</h2><p class="text-lg text-gray-500 leading-7"> 这是一个类似推特的项目<br> 为什么要写这个项目？<br> 一个是为了练习，此项目前端使用vuejs，后端使用nodejs<br> 另一个就是 <span class="text-green-500 hover:text-green-600"><a href="https://liuyandong.com/">栋哥</a></span> 写过一个类似的项目，这个是对栋哥拙劣的模仿<br></p></div><div class="max-w-3xl mx-auto mt-12"><h2 class="text-3xl font-bold text-gray-900 mb-8">关于我</h2><p class="text-lg text-gray-500 leading-7"> 我是一个前端开发工程师，目前在北京工作，主要使用vuejs和reactjs，偶尔也会写一些nodejs<br></p></div><div class="max-w-3xl mx-auto"><p class="text-lg text-gray-500 leading-7 mt-4"> 👆上面其实都是AI写的，我并不是一个开发者，能写出这个项目，ChatGPT帮助了我很多， 相比以前来说，ChatGPT可以让我这样的小白写出一个小项目，不用去慢慢的看繁琐的文档，告诉需求， 然后交给ChatGPT，极大的提升了开发速度。如果没有ChatGPT，css已经让我头脑爆炸了。 </p></div></div>',1),y={class:"max-w-3xl mx-auto mt-12"},w=e("h2",{class:"text-3xl font-bold text-gray-900 mb-8"},"接下来要做的",-1),C={class:"bg-white rounded-lg shadow divide-y divide-gray-200"},j=["onUpdate:modelValue"],S={__name:"About",setup(V){const c=n(),o=x([{text:"实现图片上传",checked:!1},{text:"支持markdown",checked:!1},{text:"实现用户之间的关注功能",checked:!1},{text:"随机推荐推文",checked:!1},{text:"推文的评论点赞功能",checked:!1}]);return(B,G)=>(s(),a(l,null,[i(c).isLoggedIn?(s(),h(b,{key:0})):m("",!0),k,e("div",y,[w,e("ul",C,[(s(!0),a(l,null,u(o.value,(t,r)=>(s(),a("li",{key:r,class:"flex items-center px-6 py-4"},[p(e("input",{type:"checkbox",class:"mr-3 h-5 w-5","onUpdate:modelValue":d=>t.checked=d},null,8,j),[[_,t.checked]]),e("span",{class:f({"text-lg font-medium text-gray-900":!0,"line-through":t.checked})},v(t.text),3)]))),128))])])],64))}};export{S as default};