module.exports=function(a){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return a[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=a,n.c=t,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var o in a)n.d(e,o,function(t){return a[t]}.bind(null,o));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="",n(n.s=45)}([function(a,t){a.exports=flarum.core.compat.Model},,function(a,t,n){"use strict";function e(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}n.d(t,"a",(function(){return e}))},function(a,t){a.exports=flarum.core.compat["components/Button"]},function(a,t){a.exports=flarum.core.compat["utils/withAttr"]},function(a,t,n){"use strict";n.d(t,"a",(function(){return r}));var e=n(2),o=n(0),i=n.n(o),s=n(14),r=function(a){function t(){return a.apply(this,arguments)||this}return Object(e.a)(t,a),t}(n.n(s)()(i.a,{points:i.a.attribute("points"),name:i.a.attribute("name"),color:i.a.attribute("color")}))},function(a,t,n){"use strict";function e(a,t){void 0===t&&(t={}),t.style=t.style||{},t.className="rankLabel "+(t.className||"");var n=a.color();return t.style.backgroundColor=t.style.color=n,t.className+=" colored",m("span",t,m("span",{className:"rankLabel-text"},a.name()))}n.d(t,"a",(function(){return e}))},function(a,t){a.exports=flarum.core.compat["utils/Stream"]},,,,function(a,t){a.exports=flarum.core.compat["components/Switch"]},function(a,t,n){"use strict";n.d(t,"a",(function(){return e}));var e={Rank:n(5).a}},function(a,t,n){"use strict";n.d(t,"a",(function(){return e}));var e={rankLabel:n(6).a}},function(a,t){a.exports=flarum.core.compat["utils/mixin"]},,,,,,,,,,,,,,,,,,,,,,,,,function(a,t){a.exports=flarum.core.compat.app},function(a,t){a.exports=flarum.core.compat["components/ExtensionPage"]},function(a,t){a.exports=flarum.core.compat["utils/saveSettings"]},function(a,t){a.exports=flarum.core.compat["components/UploadImageButton"]},,,function(a,t,n){"use strict";n.r(t),n.d(t,"models",(function(){return e.a})),n.d(t,"helpers",(function(){return R.a})),n.d(t,"components",(function(){return x}));var e=n(12),o=n(39),i=n.n(o),s=n(2),r=n(40),l=n.n(r),c=n(3),p=n.n(c),u=n(41),f=n.n(u),d=n(11),g=n.n(d),h=n(4),v=n.n(h),k=n(7),b=n.n(k),y=n(42),N=function(a){function t(){return a.apply(this,arguments)||this}return Object(s.a)(t,a),t.prototype.resourceUrl=function(){return app.forum.attribute("apiUrl")+"/"+this.attrs.path},t}(n.n(y).a),P=function(a){function t(){return a.apply(this,arguments)||this}Object(s.a)(t,a);var n=t.prototype;return n.oninit=function(t){var n=this;a.prototype.oninit.call(this,t),this.fields=["convertedLikes","amountPerPost","amountPerDiscussion","postStartAmount","rankAmt","iconName","blockedUsers","pointsPlaceholder"],this.switches=["autoUpvotePosts","customRankingImages","rateLimit","showVotesOnDiscussionPage","useAlternateLayout"],this.ranks=app.store.all("ranks"),this.values={},this.settingsPrefix="fof-gamification";var e=app.data.settings;this.fields.forEach((function(a){return n.values[a]=b()(e[n.addPrefix(a)])})),this.switches.forEach((function(a){return n.values[a]=b()(!!Number(e[n.addPrefix(a)]))})),this.newRank={points:b()(""),name:b()(""),color:b()("")}},n.content=function(){var a=this;return[m("div",{className:"SettingsPage"},[m("div",{className:"container"},[m("form",{onsubmit:this.onsubmit.bind(this)},[m("div",{className:"helpText"},app.translator.trans("fof-gamification.admin.page.convert.help")),void 0===this.values.convertedLikes()?p.a.component({type:"button",className:"Button Button--warning Ranks-button",onclick:function(){app.request({url:app.forum.attribute("apiUrl")+"/fof/gamification/convert",method:"POST"}).then(a.values.convertedLikes("converting"))}},app.translator.trans("fof-gamification.admin.page.convert.button")):"converting"===this.values.convertedLikes()?m("label",{},app.translator.trans("fof-gamification.admin.page.convert.converting")):m("label",{},app.translator.trans("fof-gamification.admin.page.convert.converted",{number:this.values.convertedLikes()})),m("fieldset",{className:"SettingsPage-ranks"},[m("legend",{},app.translator.trans("fof-gamification.admin.page.ranks.title")),m("label",{},app.translator.trans("fof-gamification.admin.page.ranks.ranks")),m("div",{className:"helpText"},app.translator.trans("fof-gamification.admin.page.ranks.help.help")),m("div",{className:"Ranks--Container"},this.ranks.map((function(t){return m("div",{style:"float: left;"},[m("input",{className:"FormControl Ranks-number",type:"number",value:t.points(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.points"),oninput:v()("value",a.updatePoints.bind(a,t))}),m("input",{className:"FormControl Ranks-name",value:t.name(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:v()("value",a.updateName.bind(a,t))}),m("input",{className:"FormControl Ranks-color",value:t.color(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:v()("value",a.updateColor.bind(a,t))}),p.a.component({type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-times",onclick:a.deleteRank.bind(a,t)})])})),m("div",{style:"float: left; margin-bottom: 15px"},[m("input",{className:"FormControl Ranks-number",value:this.newRank.points(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.points"),type:"number",oninput:v()("value",this.newRank.points)}),m("input",{className:"FormControl Ranks-name",value:this.newRank.name(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:v()("value",this.newRank.name)}),m("input",{className:"FormControl Ranks-color",value:this.newRank.color(),placeholder:app.translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:v()("value",this.newRank.color)}),p.a.component({type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-plus",onclick:this.addRank.bind(this)})])),m("label",{},app.translator.trans("fof-gamification.admin.page.ranks.number_title")),m("input",{className:"FormControl Ranks-default",value:this.values.rankAmt()||"",placeholder:2,oninput:v()("value",this.values.rankAmt)}),m("legend",{},app.translator.trans("fof-gamification.admin.page.votes.title")),m("label",{},app.translator.trans("fof-gamification.admin.page.votes.icon_name")),m("div",{className:"helpText"},app.translator.trans("fof-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconName()||"",placeholder:"thumbs",oninput:v()("value",this.values.iconName)}),g.a.component({state:this.values.autoUpvotePosts()||!1,onchange:this.values.autoUpvotePosts,className:"votes-switch"},app.translator.trans("fof-gamification.admin.page.votes.auto_upvote")),g.a.component({state:this.values.rateLimit()||!1,onchange:this.values.rateLimit,className:"votes-switch"},app.translator.trans("fof-gamification.admin.page.votes.rate_limit")),g.a.component({state:this.values.showVotesOnDiscussionPage()||!1,onchange:this.values.showVotesOnDiscussionPage,className:"votes-switch"},app.translator.trans("fof-gamification.admin.page.votes.discussion_page")),g.a.component({state:this.values.useAlternateLayout()||!1,onchange:this.values.useAlternateLayout,className:"votes-switch"},app.translator.trans("fof-gamification.admin.page.votes.alternate_layout")),m("label",{},app.translator.trans("fof-gamification.admin.page.votes.points_title")),m("input",{className:"FormControl Ranks-default",value:this.values.pointsPlaceholder()||"",placeholder:app.translator.trans("fof-gamification.admin.page.votes.points_placeholder")+"{points}",oninput:v()("value",this.values.pointsPlaceholder)}),m("legend",{},app.translator.trans("fof-gamification.admin.page.rankings.title")),g.a.component({state:this.values.customRankingImages()||!1,onchange:this.values.customRankingImages,className:"votes-switch"},app.translator.trans("fof-gamification.admin.page.rankings.enable")),m("label",{},app.translator.trans("fof-gamification.admin.page.rankings.blocked.title")),m("input",{className:"FormControl Ranks-blocked",placeholder:app.translator.trans("fof-gamification.admin.page.rankings.blocked.placeholder"),value:this.values.blockedUsers()||"",oninput:v()("value",this.values.blockedUsers)}),m("div",{className:"helpText"},app.translator.trans("fof-gamification.admin.page.rankings.blocked.help"))].concat([1,2,3].map((function(a){return[m("label",{className:"Upload-label"},app.translator.trans("fof-gamification.admin.page.rankings.custom_image_"+a)),m(N,{className:"Upload-button",name:"fof-gamification.topimage"+a,path:"fof/gamification/topimage"+a}),m("br",null)]})),[p.a.component({type:"submit",className:"Button Button--primary Ranks-save",loading:this.loading,disabled:!this.changed()},app.translator.trans("fof-gamification.admin.page.save_settings"))]))])])])]},n.updateName=function(a,t){a.save({name:t})},n.updatePoints=function(a,t){a.save({points:t})},n.updateColor=function(a,t){a.save({color:t})},n.deleteRank=function(a){var t=this;a.delete(),this.ranks.some((function(n,e){if(n.data.id===a.data.id)return t.ranks.splice(e,1),!0}))},n.addRank=function(a){var t=this;app.store.createRecord("ranks").save({points:this.newRank.points(),name:this.newRank.name(),color:this.newRank.color()}).then((function(a){t.newRank.color(""),t.newRank.name(""),t.newRank.points(""),t.ranks.push(a),m.redraw()}))},n.changed=function(){var a=this,t=this.switches.some((function(t){return a.values[t]()!==("1"==app.data.settings[a.addPrefix(t)])}));return this.fields.some((function(t){return a.values[t]()!==app.data.settings[a.addPrefix(t)]}))||t},n.onsubmit=function(a){var t=this;if(a.preventDefault(),!this.loading){this.loading=!0,app.alerts.dismiss(this.successAlert);var n={};this.switches.forEach((function(a){return n[t.addPrefix(a)]=t.values[a]()})),this.fields.forEach((function(a){return n[t.addPrefix(a)]=t.values[a]()})),f()(n).then((function(){app.alerts.show({type:"success"},app.translator.trans("core.admin.basics.saved_message"))})).catch((function(){})).then((function(){t.loading=!1,window.location.reload()}))}},n.addPrefix=function(a){return this.settingsPrefix+"."+a},t}(l.a),w=n(5),R=n(13),x={SettingsPage:P};i.a.initializers.add("fof-gamification",(function(a){a.store.models.ranks=w.a,a.extensionData.for("kater-gamification").registerPermission({icon:"fas fa-thumbs-up",label:a.translator.trans("fof-gamification.admin.permissions.vote_label"),permission:"discussion.votePosts"},"reply").registerPermission({icon:"fas fa-info-circle",label:a.translator.trans("fof-gamification.admin.permissions.see_votes_label"),permission:"discussion.canSeeVotes"},"view").registerPermission({icon:"fas fa-trophy",label:a.translator.trans("fof-gamification.admin.permissions.see_ranking_page"),permission:"fof.gamification.viewRankingPage"},"view").registerPage(P)}))}]);
//# sourceMappingURL=admin.js.map