(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},36:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),s=n.n(c),r=(n(36),n(22)),l=n(23),o=n(29),u=n(24),h=n(7),d=n(28),p=n(46),m=n(49),f=n(47),g=n(26),b=n(51),E=n(50),R=n(48),v=(n(37),n(38),n(14)),y=["f9ca635dd36148128474e808f56ca996","bc971f99f0344848a295b37d2d04d829","053c403cb3f34a599d8b22c9afa1293b"],w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={ingredients:[],resultingRecipes:[],showRecipe:!1},n.handleSearch=n.handleSearch.bind(Object(h.a)(n)),n.handleIngredientChange=n.handleIngredientChange.bind(Object(h.a)(n)),n.buildRequest=n.buildRequest.bind(Object(h.a)(n)),n.showRecipes=n.showRecipes.bind(Object(h.a)(n)),n.closeRecipes=n.closeRecipes.bind(Object(h.a)(n)),n.fetchResults=n.fetchResults.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("spoonacularExampleResponse.json").then((function(e){return e.json()})).then((function(t){e.setState({resultingRecipes:t})})).catch((function(e){console.log(e)}))}},{key:"handleIngredientChange",value:function(e){this.setState({ingredients:e.target.value.split(",")})}},{key:"buildRequest",value:function(e){var t,n="";for(t=0;t<this.state.ingredients.length;t++)n+=0===t?this.state.ingredients[t]+",":"+"+this.state.ingredients[t]+",";return"https://api.spoonacular.com/recipes/findByIngredients?ingredients="+(n=n.replace(/,\s*$/,""))+"&number="+3..toString()+"&apiKey="+e}},{key:"handleSearch",value:function(e){var t=this;e.preventDefault(),this.state.ingredients.length>0&&this.fetchResults(y.length).then((function(e){return e.json()})).then((function(e){t.setState({resultingRecipes:e})})).catch((function(e){console.log(e)}))}},{key:"fetchResults",value:function(e){var t=this,n=this.buildRequest(y[e-1]);return fetch(n).then((function(e){if(e.ok)return e;throw new Error("Not valid")})).catch((function(n){if(e-1<0)throw n;return t.fetchResults(e-1)}))}},{key:"showRecipes",value:function(){this.setState({showRecipe:!0})}},{key:"closeRecipes",value:function(){this.setState({showRecipe:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,null,i.a.createElement("br",null),i.a.createElement(m.a,{onSubmit:this.handleSearch},i.a.createElement(f.a,{className:"justify-content-md-center"},i.a.createElement(g.a,{style:{paddingRight:0}},i.a.createElement(m.a.Group,{controlId:"validateIngredients"},i.a.createElement(m.a.Control,{required:!0,type:"ingredients",placeholder:"Enter ingredients..",onChange:this.handleIngredientChange}),i.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please select atleast one ingredient!"))),i.a.createElement(g.a,{md:"auto",style:{paddingLeft:0}},i.a.createElement(b.a,{variant:"primary",type:"submit"},"Search")))),i.a.createElement("br",null),i.a.createElement("h2",null,"Searched recipes:"),i.a.createElement(f.a,{className:"justify-content-md-center"},this.state.resultingRecipes.map((function(t){return i.a.createElement(E.a,{key:t.id,style:{width:"18rem"}},i.a.createElement("br",null),i.a.createElement("div",{className:"text-center"},i.a.createElement(R.a,{width:256,height:256,src:t.image,alt:t.title,fluid:!0})),i.a.createElement(E.a.Body,{className:"flex-column d-flex"},i.a.createElement(E.a.Title,null,t.title),i.a.createElement(b.a,{className:"mt-auto",variant:"success",onClick:e.showRecipes},"View full recipe")))})),i.a.createElement(v.a,{show:this.state.showRecipe,onHide:this.closeRecipes},i.a.createElement(v.a.Header,{closeButton:!0},i.a.createElement(v.a.Title,null,"Recipe Title")),i.a.createElement(v.a.Body,null,"Recipe/Instructions?"),i.a.createElement(v.a.Footer,null,i.a.createElement(b.a,{variant:"primary",onClick:this.closeRecipes},"Close"))))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.cda04f55.chunk.js.map