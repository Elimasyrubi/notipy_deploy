(this.webpackJsonptareas=this.webpackJsonptareas||[]).push([[0],{35:function(e,t,n){e.exports=n(54)},40:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"traerNotes",(function(){return O})),n.d(a,"addNote",(function(){return k})),n.d(a,"remNote",(function(){return x})),n.d(a,"editNote",(function(){return _})),n.d(a,"Update",(function(){return w})),n.d(a,"cancel",(function(){return I})),n.d(a,"cambioNota",(function(){return R}));var r=n(0),o=n.n(r),c=n(19),i=n.n(c),s=n(8),u=n(9),l=n(12),p=n(11),d=(n(40),n(2)),f=n.n(d),h=n(6),m=(n(42),n(10)),y=n(34),v="notes_loading",b="notes_error",N="calcel_id_edit",E=n(21),g=n.n(E);n(49);g.a.initializeApp({apiKey:"AIzaSyC27rKyOlEb2OHQG2m8DLP3Wpqj1kakY3s",authDomain:"practica-notas.firebaseapp.com",databaseURL:"https://practica-notas.firebaseio.com",projectId:"practica-notas",storageBucket:"practica-notas.appspot.com",messagingSenderId:"650115366433",appId:"1:650115366433:web:8ce1326a50111f8fb46d60",measurementId:"G-QQ994E0GE5"});var j=g.a.firestore(),O=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.prev=1,a=[],r=function(e){a=[].concat(Object(y.a)(a),[{idN:e.id,contenido:e.data().contenido,Fecha:e.data().fecha}])},e.next=6,j.collection("Notas").orderBy("fecha").get().then((function(e){e.docs.forEach((function(e){r(e)}))}));case 6:t({type:"notes_traer",payload:a}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:b,payload:"ha ocurrido un error l traer las notas"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n,a){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v});try{r={contenido:e,fecha:new Date},j.collection("Notas").add(r)}catch(a){console.log(a),n({type:b,payload:"ha ocurrido un error al agegar la nota, intente mas tarde"})}n({type:"notes_change",payload:""}),n({type:N,payload:""});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n,a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v});try{j.collection("Notas").doc(e).delete()}catch(a){console.log("Error removing document: ",a),n({type:b,payload:"ha ocurrido un error al Eliminar la nota, intente mas tarde"})}case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(a,r){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"notes_change",payload:t}),a({type:"notes_id_edit",payload:e});case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:v});try{j.collection("Notas").doc(e).update({contenido:t})}catch(r){console.log(r),a({type:b,payload:"ha ocurrido un error al editar la nota, intente mas tarde"})}a({type:"notes_change",payload:""}),a({type:N,payload:""});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"notes_change",payload:""}),t({type:N,payload:""});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},R=function(e){return function(t){t({type:"notes_change",payload:e})}},C=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"delet",value:function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.remNote(t);case 2:this.props.traerNotes();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.contenido,e.next=3,this.props.editNote(t,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"note"},o.a.createElement("p",{className:"note_contenido"},this.props.contenido),o.a.createElement("button",{className:" button_delete",onClick:function(){return e.delet(e.props.idN)}},o.a.createElement("i",{class:"fas fa-trash-alt"})),o.a.createElement("button",{className:"button_edit",onClick:function(){return e.edit(e.props.idN)}},o.a.createElement("i",{class:"fas fa-pencil-alt"})))}}]),n}(o.a.Component),D=Object(m.b)((function(e){return{ReducersNotes:e.ReducersNotes}}),a)(C),A=(n(50),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).cambioNota=function(t){e.props.cambioNota(t.target.value)},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){this.props.ReducersNotes.notaText&&this.textInput.focus()}},{key:"AgregarBotones",value:function(){var e=this,t=this.props.ReducersNotes,n=t.id_edit,a=t.notaText;return n?o.a.createElement("div",{className:" boton_edit"},o.a.createElement("button",{className:"Update",onClick:function(){return e.upDate(n,a)}},"Update"),o.a.createElement("button",{className:"cancel",onClick:function(){return e.props.cancel()}},"Cancel")):o.a.createElement("button",{onClick:function(){return e.agregar(e.textInput.value)}},"Add Note")}},{key:"upDate",value:function(e,t){this.props.Update(e,t),this.props.traerNotes(),this.textInput.value=""}},{key:"agregar",value:function(e){e?(this.props.addNote(e),this.props.traerNotes(),this.textInput.value="",this.textInput.focus()):(this.textInput.value="",this.textInput.focus())}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Form"},o.a.createElement("textarea",{className:"Form_input",ref:function(t){e.textInput=t},type:"text",placeholder:"Write a new note",value:this.props.ReducersNotes.notaText,onChange:this.cambioNota}),this.AgregarBotones())}}]),n}(o.a.Component)),U=Object(m.b)((function(e){return{ReducersNotes:e.ReducersNotes}}),a)(A),B=(n(51),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"lds-ellipsis"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}}]),n}(o.a.Component)),T=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.ReducersNotes.notes.lengh||this.props.traerNotes()}},{key:"render",value:function(){var e=this.props.ReducersNotes.notes;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header text-aling"},o.a.createElement("h1",null," Notipy ")),o.a.createElement("div",{className:"sniper"},this.props.ReducersNotes.loading&&o.a.createElement(B,null)),o.a.createElement("div",{className:"D-flex"},o.a.createElement("div",null,o.a.createElement(U,null)),o.a.createElement("div",null,o.a.createElement("ul",{className:"note_container"},e.map((function(e,t){return o.a.createElement(D,{idN:e.idN,posId:t,contenido:e.contenido,key:t})}))))))}}]),n}(o.a.Component),F=Object(m.b)((function(e){return{ReducersNotes:e.ReducersNotes}}),a)(T),G=n(31),Q=n(13);var S=function(){return o.a.createElement(G.a,null,o.a.createElement(Q.c,null,o.a.createElement(Q.a,{exact:!0,path:"/notipy_deploy",component:F})))},z=(n(53),n(14)),J=n(15),K={loading:!1,error:"",user:{},notes:[],notaText:"",id_edit:""},L=Object(z.c)({ReducersNotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(J.a)({},e,{loading:!0});case b:return Object(J.a)({},e,{error:t.payload,loading:!1});case"notes_traer":return Object(J.a)({},e,{notes:t.payload,loading:!1});case"notes_change":return Object(J.a)({},e,{notaText:t.payload});case N:case"notes_id_edit":return Object(J.a)({},e,{id_edit:t.payload});default:return e}}}),M=n(33),W=Object(z.d)(L,{},Object(z.a)(M.a));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:W},o.a.createElement(S,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1933a878.chunk.js.map