(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a83a036"],{"3cd4":function(s,t,e){"use strict";var i=e("b84a"),a=e.n(i);a.a},a821:function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"address"},[e("van-nav-bar",{attrs:{title:"地址列表","left-arrow":""},on:{"click-left":s.goBack}}),e("Scroll",{directives:[{name:"show",rawName:"v-show",value:!s.showFlag,expression:"!showFlag"}],staticClass:"scroll",attrs:{data:s.list}},[e("div",[e("van-address-list",{attrs:{list:s.list},on:{edit:s.onEdit,select:s.onSelect},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}})],1),s.list&&s.list.length?s._e():e("div",{staticClass:"nolist"},[s._v("\n            暂无收货地址~~\n        ")])]),e("div",{staticClass:"add",on:{click:s.onAdd}},[s._v("新增地址")]),e("BaseLoding",{attrs:{showFlag:s.showFlag}})],1)},a=[],d=e("9134"),o=e("3d93"),l={name:"Address",mixins:[o["c"],o["e"]],components:{Scroll:d["a"]},data(){return{chosenAddressId:"1",list:[],isPay:!1}},methods:{onAdd(){this.$router.push("/addressEdit")},goBack(){this.$router.go(-1)},onEdit(s,t){this.setAddress(s),this.$router.push("/addressEdit")},async setDefaultAddress(s){try{const e=await this.Api.setDefaultAddress(s),i=e.data;200==i.code&&this.$toast("设置默认地址成功")}catch(t){this.$toast("网络错误")}},onSelect(s){this.isPay?(this.setAddress2(s),setTimeout(()=>{this.$router.go(-1)},500)):this.setDefaultAddress(s._id)}},async created(){try{this.showFlag=!0;const t=await this.Api.getAddress(),e=t.data;if(200==e.code){let s;this.showFlag=!1,this.list=e.address.reverse();for(let t=0;t<this.list.length;t++)1==this.list[t].isDefault?(s=this.list[t],s.id="1",this.list.splice(t,1),this.list.unshift(s)):this.list[t].id=String(t+2)}}catch(s){console.log(s),this.$toast("网络错误"),this.showFlag=!1}},beforeRouteEnter(s,t,e){e(s=>{"ShoppingPayMent"==t.name&&(s.isPay=!0)})}},n=l,r=(e("3cd4"),e("25c1")),c=Object(r["a"])(n,i,a,!1,null,"a7132012",null);c.options.__file="Address.vue";t["default"]=c.exports},b84a:function(s,t,e){}}]);