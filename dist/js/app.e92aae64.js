(function(){"use strict";var e={3232:function(e,t,n){var i=n(9242),s=n(3396);function a(e,t,n,i,a,o){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}var o={name:"App",components:{},watch:{$route:{immediate:!0,handler(e,t){document.title="테스트 : "+e.meta.title||0}}}},r=n(89);const l=(0,r.Z)(o,[["render",a]]);var u=l,c=n(6866),d=n(2483),m=n.p+"img/logo.f2b64743.svg";const p=e=>((0,s.dD)("data-v-79c631ca"),e=e(),(0,s.Cn)(),e),f={class:"min-h-full flex flex-col justify-center items-center"},v=p((()=>(0,s._)("div",{class:"title text-[1.688rem] leading-[1.19] tracking-[-0.68px] text-black font-bold"},[(0,s.Uk)(" 나는 어떨 때"),(0,s._)("br"),(0,s.Uk)("꾸벅꾸벅 졸까..? ")],-1))),g=p((()=>(0,s._)("img",{class:"img w-[38.8%]",src:m},null,-1))),h=p((()=>(0,s._)("div",{class:"sub font-thin text-xs"},"흠냐흠냐...잠이온다..",-1)));function b(e,t,n,i,a,o){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",f,[v,g,h,(0,s.Wm)(r,{class:"btn text-white text-[0.813rem] font-bold rounded-md bg-custom-blue py-4 w-[44.6%]",to:"/questions"},{default:(0,s.w5)((()=>[(0,s.Uk)("내 지루함 알아보기")])),_:1})])}var x={name:"MainPage",props:{}};const w=(0,r.Z)(x,[["render",b],["__scopeId","data-v-79c631ca"]]);var y=w,k=n(7139);const _={class:"min-h-full mx-10 flex flex-col"},q={class:"progress-bar py-10 flex-none"},j={class:"w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700"},C={class:"text-left flex-none"},D=(0,s._)("i",{class:"fa-solid fa-chevron-left"},null,-1),O=[D],A={class:"flex flex-col flex-1 justify-center"},P={class:"text-3xl font-black"},S={class:"text-2xl"},N={class:"options"};function E(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",q,[(0,s._)("div",j,[(0,s._)("div",{class:"bg-blue-600 h-3.5 rounded-full transition-all",style:(0,k.j5)({width:a.pointer/(a.questions.length-1)*100+"%"})},null,4)])]),(0,s._)("div",C,[(0,s._)("button",{onClick:t[0]||(t[0]=e=>o.ShowPrevQuestion()),class:"text-2xl text-gray-500"},O)]),(0,s._)("div",A,[(0,s._)("div",P,"Q"+(0,k.zw)(a.pointer+1),1),(0,s._)("div",S,(0,k.zw)(a.questions[a.pointer].title),1),(0,s._)("div",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.questions[a.pointer].options,(e=>((0,s.wg)(),(0,s.iD)("button",{key:e,onClick:t[1]||(t[1]=e=>o.ShowNextQuestion()),class:"border-2 rounded-lg my-5 p-5 block w-full min-h-[8rem] break-words"},(0,k.zw)(e),1)))),128))])])])}n(7658);var Q={name:"QuestionsPage",props:{},methods:{ShowNextQuestion(){this.pointer<this.questions.length-1?this.pointer+=1:this.$router.push("/loader")},ShowPrevQuestion(){this.pointer?this.pointer-=1:history.back()}},data(){return{pointer:0,questions:[{id:1,title:"아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주긴질문",options:["최소 높이 테스트","아주 긴 문장 테스트 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"]},{id:2,title:"질문2",options:["질문2의 A","질문2의 B"]},{id:3,title:"질문3",options:["질문3의 A","질문3의 B"]}]}}};const L=(0,r.Z)(Q,[["render",E]]);var T=L;const M={class:"min-h-full p-10 flex flex-col justify-center"},U=(0,s.uE)('<div class="제목"><div class="text-l font-bold">힐링은 나의 몫</div><div class="text-2xl font-bold">러스틱 라이프를 즐기는 차크닉</div></div><div class="flex justify-center"><div class="bg-gray-300 w-36 h-36">이미지</div></div><div> 힐링을 위해서 차크닉을 하며 도심으로부터 벗어나 힐링을 위해서 숲을 찾아서 차크닉을 즐겨요! </div><div class="animate-pulse my-5"><div class="flex-1 space-y-6 py-1"><div class="h-2 bg-slate-200 rounded"></div><div class="space-y-3"><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-200 rounded col-span-2"></div><div class="h-2 bg-slate-200 rounded col-span-1"></div></div><div class="h-2 bg-slate-200 rounded"></div></div></div></div>',4),Z=(0,s._)("i",{class:"fa-solid fa-rotate-left"},null,-1),$=(0,s._)("i",{class:"fa-solid fa-arrow-up-from-bracket"},null,-1);function z(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",M,[U,(0,s._)("div",{onClick:t[0]||(t[0]=e=>[o.Retry()]),class:"bg-gray-300 rounded-md py-3 my-3"},[Z,(0,s.Uk)(" 다시하기 ")]),(0,s._)("div",{onClick:t[1]||(t[1]=e=>[o.ShareLink()]),class:"bg-gray-300 rounded-md py-3 my-3"},[$,(0,s.Uk)(" 공유하기 ")])])}var B={name:"ResultPage",props:{msg:String},methods:{ShareLink(){if(navigator.share)navigator.share({title:"나의 유형 테스트",text:"설명",url:window.document.location.href,files:[]});else{let e="";const t=document.createElement("textarea");document.body.appendChild(t),e=window.document.location.href,t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("링크가 복사되었어요!")}},Retry(){this.$router.push("/main")}}};const I=(0,r.Z)(B,[["render",z]]);var R=I;const F={class:"min-h-full flex flex-col justify-center items-center"},H=(0,s._)("div",{class:"w-36"},[(0,s._)("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"},[(0,s._)("circle",{fill:"none",stroke:"#000","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"15","stroke-dasharray":"10,8",cx:"50",cy:"50",r:"47"},[(0,s._)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"3s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})])])],-1),J=(0,s._)("div",{class:"my-10 text-2xl font-bold"},"취향분석중...",-1),K=[H,J];function V(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",F,K)}var W={name:"LoaderPage",props:{},created(){setTimeout((()=>{this.$router.push("/result")}),1e3)}};const X=(0,r.Z)(W,[["render",V]]);var Y=X;const G=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:y,meta:{title:"메인"}},{path:"/questions",name:"질문",component:T,meta:{title:"질문"}},{path:"/loader",name:"로딩",component:Y,meta:{title:"분석중"}},{path:"/result",name:"결과",component:R,meta:{title:"결과"}}],ee=(0,d.p7)({history:(0,d.r5)(),routes:G});ee.afterEach(((e,t)=>{const n=void 0===e.meta.title?"DDaJa":e.meta.title;c["default"].nextTick((()=>{document.title=n}))}));var te=ee;const ne=(0,i.ri)(u);ne.use(te),ne.mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,a){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],a=e[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(r=!1,a<o&&(o=a));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,a,o=i[0],r=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunktest_mytype_vue"]=self["webpackChunktest_mytype_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3232)}));i=n.O(i)})();
//# sourceMappingURL=app.e92aae64.js.map