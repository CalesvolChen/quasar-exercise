(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[245],{6693:(e,l,t)=>{"use strict";t.d(l,{s:()=>a,n:()=>i});const a=[{img:"img/swiper/swiper1.jpg"},{img:"img/swiper/swiper2.jpg"},{img:"img/swiper/swiper3.jpg"},{img:"img/swiper/swiper4.jpg"}],i=[{title:"Home",caption:"首页",icon:"home",path:"/"},{title:"Github",caption:"github.com/CalesvolChen",icon:"code",link:"https://github.com/CalesvolChen"},{title:"Gallery",caption:"作品展示",icon:"collections",path:"/work"}]},1245:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>P});var a=t(3673),i=t(1959),n=t(8880),o=t(9652),u=t.n(o),p=t(2323);function r(e,l,t,i,n,o){const u=(0,a.up)("q-icon"),r=(0,a.up)("q-item-section"),s=(0,a.up)("q-item-label"),c=(0,a.up)("q-item"),m=(0,a.Q2)("ripple");return(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{clickable:"",tag:e.link?"a":"div",target:"_blank",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(r,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.title),1)])),_:1}),(0,a.Wm)(s,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["tag","href"])),[[m]])}const s=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""}}});var c=t(3414),m=t(2035),d=t(4554),w=t(2350),g=t(6489),f=t(7518),v=t.n(f);s.render=r;const k=s;v()(s,"components",{QItem:c.Z,QItemSection:m.Z,QIcon:d.Z,QItemLabel:w.Z}),v()(s,"directives",{Ripple:g.Z});var W=t(8825),h=t(9582),_=t(6693);const b=(0,a.Uk)(" Calesvol's Website "),Z=(0,a.Uk)(" Essential Links "),q=(0,a.Wm)("img",{src:u()},null,-1),Q=(0,a.Uk)("Calesvol"),y=(0,a.Uk)("📖 On study"),C=(0,a.Uk)("online"),j=(0,a.Wm)("div",{class:"text-h6"},"请输入秘钥",-1),U={expose:[],setup(e){const l=(0,h.tv)(),{notify:t}=(0,W.Z)(),o=(0,i.iH)(!1),u=(0,i.iH)(!1),p=(0,i.iH)(null),r=()=>{o.value=!o.value},s=(e,a)=>{const i=l.currentRoute.value.fullPath;if("/"!==i||"/"!==e.path)if("/"!==e.path||e.path===i){if(e.path!==i){if(a>1)return void(u.value=!0);l.push(e.path)}}else{const e=(l.getRoutes().length-1)/2-1;l.go(-e)}else t({message:"你已经在首页啦",position:"center",color:"blue",icon:"home"})},c=()=>{u.value=!1,p.value=null},m=()=>{"calesvol"===p.value?(u.value=!1,l.push("/work"),p.value=null):t({message:"秘钥错误！",position:"top",color:"red",icon:"warning"})},d=()=>{t({message:"点了又没用...",position:"center",color:"pink",icon:"warning"})},w=()=>{t({message:"别急别急，还早呢...",position:"top",color:"red",icon:"warning"})};return(e,l)=>{const t=(0,a.up)("q-btn"),g=(0,a.up)("q-toolbar-title"),f=(0,a.up)("q-toolbar"),v=(0,a.up)("q-header"),W=(0,a.up)("q-item-label"),h=(0,a.up)("q-avatar"),U=(0,a.up)("q-item-section"),V=(0,a.up)("q-item"),H=(0,a.up)("q-list"),I=(0,a.up)("q-drawer"),S=(0,a.up)("router-view"),x=(0,a.up)("q-page-container"),L=(0,a.up)("q-layout"),R=(0,a.up)("q-card-section"),z=(0,a.up)("q-input"),D=(0,a.up)("q-card-actions"),G=(0,a.up)("q-card"),K=(0,a.up)("q-dialog"),T=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(L,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)("div",{onClick:w},"建设中")])),_:1})])),_:1}),(0,a.Wm)(I,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{header:"",class:"text-grey-8"},{default:(0,a.w5)((()=>[Z])),_:1}),(0,a.wy)((0,a.Wm)(V,{clickable:"",onClick:d},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{size:"48px"},{default:(0,a.w5)((()=>[q])),_:1})])),_:1}),(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[Q])),_:1}),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[y])),_:1})])),_:1}),(0,a.Wm)(U,{side:""},{default:(0,a.w5)((()=>[C])),_:1})])),_:1},512),[[T]]),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)((0,i.SU)(_.n),((e,l)=>((0,a.wg)(),(0,a.j4)(k,(0,a.dG)({key:e.title},e,{onClick:t=>s(e,l)}),null,16,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S)])),_:1})])),_:1}),(0,a.Wm)(K,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[j])),_:1}),(0,a.Wm)(R,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{dense:"",modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=e=>p.value=e),autofocus:"",onKeyup:(0,n.D2)(m,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,a.Wm)(D,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{flat:"",label:"取消",onClick:c}),(0,a.Wm)(t,{flat:"",label:"确认",onClick:m})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var V=t(3066),H=t(3812),I=t(9570),S=t(8240),x=t(3747),L=t(507),R=t(7011),z=t(5096),D=t(2652),G=t(1477),K=t(151),T=t(5589),A=t(6805),E=t(9367);const P=U;v()(U,"components",{QLayout:V.Z,QHeader:H.Z,QToolbar:I.Z,QBtn:S.Z,QToolbarTitle:x.Z,QDrawer:L.Z,QList:R.Z,QItemLabel:w.Z,QItem:c.Z,QItemSection:m.Z,QAvatar:z.Z,QPageContainer:D.Z,QDialog:G.Z,QCard:K.Z,QCardSection:T.Z,QInput:A.Z,QCardActions:E.Z}),v()(U,"directives",{Ripple:g.Z})},9652:(e,l,t)=>{e.exports=t.p+"img/avatar.587144f1.jpg"}}]);