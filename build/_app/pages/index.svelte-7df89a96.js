import{S as M,i as U,s as X,J as le,B as J,e as E,c as T,a as y,d as h,O as Y,P as se,f as V,G,K as ae,L as re,M as ne,p as oe,x as A,u as B,Q,R as ie,T as be,t as w,g as I,b as $,F as _,h as z,k as S,j as F,n as H,m as q,U as ce,o as K,V as ge,v as L,W as $e,I as Ee,X as fe,Y as Te,Z as ye,H as W,l as R,r as De,w as we,_ as Z,$ as ue}from"../chunks/vendor-d9025133.js";function Ie(n){let e,t,l,s;const o=n[3].default,r=le(o,n,n[2],null);let c=[{class:n[0]},n[1]],u={};for(let a=0;a<c.length;a+=1)u=J(u,c[a]);return{c(){e=E("button"),r&&r.c(),this.h()},l(a){e=T(a,"BUTTON",{class:!0});var f=y(e);r&&r.l(f),f.forEach(h),this.h()},h(){Y(e,u),se(e,"svelte-3399zc",!0)},m(a,f){V(a,e,f),r&&r.m(e,null),e.autofocus&&e.focus(),t=!0,l||(s=G(e,"click",n[4]),l=!0)},p(a,[f]){r&&r.p&&(!t||f&4)&&ae(r,o,a,a[2],t?ne(o,a[2],f,null):re(a[2]),null),Y(e,u=oe(c,[(!t||f&1)&&{class:a[0]},f&2&&a[1]])),se(e,"svelte-3399zc",!0)},i(a){t||(A(r,a),t=!0)},o(a){B(r,a),t=!1},d(a){a&&h(e),r&&r.d(a),l=!1,s()}}}function Ve(n,e,t){const l=["color"];let s=Q(e,l),{$$slots:o={},$$scope:r}=e,{color:c="green"}=e;function u(a){be.call(this,n,a)}return n.$$set=a=>{e=J(J({},e),ie(a)),t(1,s=Q(e,l)),"color"in a&&t(0,c=a.color),"$$scope"in a&&t(2,r=a.$$scope)},[c,s,r,o,u]}class x extends M{constructor(e){super();U(this,e,Ve,Ie,X,{color:0})}}function _e(n){let e,t;return{c(){e=E("div"),t=w(n[1]),this.h()},l(l){e=T(l,"DIV",{class:!0});var s=y(e);t=I(s,n[1]),s.forEach(h),this.h()},h(){$(e,"class","warning svelte-vh4gfm")},m(l,s){V(l,e,s),_(e,t)},p(l,s){s&2&&z(t,l[1])},d(l){l&&h(e)}}}function Pe(n){let e;return{c(){e=w("Submit")},l(t){e=I(t,"Submit")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function Se(n){let e,t,l,s,o,r,c,u,a,f,d=n[1]&&_e(n);return c=new x({props:{type:"submit",$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){e=E("div"),t=E("div"),l=E("form"),d&&d.c(),s=S(),o=E("textarea"),r=S(),F(c.$$.fragment),this.h()},l(m){e=T(m,"DIV",{class:!0});var k=y(e);t=T(k,"DIV",{class:!0});var D=y(t);l=T(D,"FORM",{method:!0,class:!0});var g=y(l);d&&d.l(g),s=H(g),o=T(g,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),y(o).forEach(h),r=H(g),q(c.$$.fragment,g),g.forEach(h),D.forEach(h),k.forEach(h),this.h()},h(){$(o,"name","data"),$(o,"id","data"),$(o,"cols","30"),$(o,"rows","10"),$(o,"class","svelte-vh4gfm"),$(l,"method","post"),$(l,"class","svelte-vh4gfm"),$(t,"class","form"),$(e,"class","container min-h-[20rem] svelte-vh4gfm")},m(m,k){V(m,e,k),_(e,t),_(t,l),d&&d.m(l,null),_(l,s),_(l,o),ce(o,n[0]),_(l,r),K(c,l,null),u=!0,a||(f=[G(o,"input",n[3]),G(l,"submit",ge(n[2]))],a=!0)},p(m,[k]){m[1]?d?d.p(m,k):(d=_e(m),d.c(),d.m(l,s)):d&&(d.d(1),d=null),k&1&&ce(o,m[0]);const D={};k&32&&(D.$$scope={dirty:k,ctx:m}),c.$set(D)},i(m){u||(A(c.$$.fragment,m),u=!0)},o(m){B(c.$$.fragment,m),u=!1},d(m){m&&h(e),d&&d.d(),L(c),a=!1,$e(f)}}}let he=4;function He(n,e,t){let l,s;const o=Ee();function r(){if(l){let u=/^\d+$/.test(l);l.length<he?t(1,s="Peringatan! jumlah minimum karakter: "+he):u?t(1,s="tolong gunakan karakter alpha-numeric"):o("submit",l)}else t(1,s="Tolong masukan input")}function c(){l=this.value,t(0,l)}return[l,s,r,c]}class Oe extends M{constructor(e){super();U(this,e,He,Se,X,{})}}function Ae(n){let e,t,l,s,o,r,c,u,a,f,d,m,k,D;const g=n[2].default,i=le(g,n,n[1],null);let v=[n[0]],p={};for(let b=0;b<v.length;b+=1)p=J(p,v[b]);return{c(){e=E("table"),t=E("thead"),l=E("tr"),s=E("th"),o=w("Skor"),r=S(),c=E("th"),u=w("Kalimat"),a=S(),f=E("th"),d=w("per-kata"),m=S(),k=E("tbody"),i&&i.c(),this.h()},l(b){e=T(b,"TABLE",{});var P=y(e);t=T(P,"THEAD",{});var N=y(t);l=T(N,"TR",{});var O=y(l);s=T(O,"TH",{class:!0});var j=y(s);o=I(j,"Skor"),j.forEach(h),r=H(O),c=T(O,"TH",{class:!0});var C=y(c);u=I(C,"Kalimat"),C.forEach(h),a=H(O),f=T(O,"TH",{class:!0});var ee=y(f);d=I(ee,"per-kata"),ee.forEach(h),O.forEach(h),N.forEach(h),m=H(P),k=T(P,"TBODY",{class:!0});var te=y(k);i&&i.l(te),te.forEach(h),P.forEach(h),this.h()},h(){$(s,"class","svelte-1syzwml"),$(c,"class","svelte-1syzwml"),$(f,"class","svelte-1syzwml"),$(k,"class","svelte-1syzwml"),Y(e,p)},m(b,P){V(b,e,P),_(e,t),_(t,l),_(l,s),_(s,o),_(l,r),_(l,c),_(c,u),_(l,a),_(l,f),_(f,d),_(e,m),_(e,k),i&&i.m(k,null),D=!0},p(b,[P]){i&&i.p&&(!D||P&2)&&ae(i,g,b,b[1],D?ne(g,b[1],P,null):re(b[1]),null),Y(e,p=oe(v,[P&1&&b[0]]))},i(b){D||(A(i,b),D=!0)},o(b){B(i,b),D=!1},d(b){b&&h(e),i&&i.d(b)}}}function Be(n,e,t){const l=[];let s=Q(e,l),{$$slots:o={},$$scope:r}=e;return n.$$set=c=>{e=J(J({},e),ie(c)),t(0,s=Q(e,l)),"$$scope"in c&&t(1,r=c.$$scope)},[s,r,o]}class Ne extends M{constructor(e){super();U(this,e,Be,Ae,X,{})}}async function ze(n,e){const t=await fetch(n,{method:"POST",body:JSON.stringify({data:e}),headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*"}}),l=await t.json();if(t.ok)return l;throw new Error(l)}function de(n,e,t){const l=n.slice();return l[8]=e[t],l}function me(n,e,t){const l=n.slice();return l[11]=e[t],l}function Je(n){let e,t=n[14].message+"",l;return{c(){e=E("p"),l=w(t),this.h()},l(s){e=T(s,"P",{style:!0});var o=y(e);l=I(o,t),o.forEach(h),this.h()},h(){ye(e,"color","red")},m(s,o){V(s,e,o),_(e,l)},p(s,o){o&4&&t!==(t=s[14].message+"")&&z(l,t)},i:W,o:W,d(s){s&&h(e)}}}function Re(n){let e,t,l,s;const o=[Ce,je],r=[];function c(u,a){return u[1]?0:1}return e=c(n),t=r[e]=o[e](n),{c(){t.c(),l=R()},l(u){t.l(u),l=R()},m(u,a){r[e].m(u,a),V(u,l,a),s=!0},p(u,a){let f=e;e=c(u),e===f?r[e].p(u,a):(De(),B(r[f],1,1,()=>{r[f]=null}),we(),t=r[e],t?t.p(u,a):(t=r[e]=o[e](u),t.c()),A(t,1),t.m(l.parentNode,l))},i(u){s||(A(t),s=!0)},o(u){B(t),s=!1},d(u){r[e].d(u),u&&h(l)}}}function je(n){let e,t,l,s,o,r,c,u;return t=new x({props:{color:"blue",$$slots:{default:[Fe]},$$scope:{ctx:n}}}),t.$on("click",n[6]),c=new Ne({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){e=E("div"),F(t.$$.fragment),l=S(),s=E("p"),o=w("klik untuk melihat versi mentah."),r=S(),F(c.$$.fragment),this.h()},l(a){e=T(a,"DIV",{class:!0});var f=y(e);q(t.$$.fragment,f),l=H(f),s=T(f,"P",{class:!0});var d=y(s);o=I(d,"klik untuk melihat versi mentah."),d.forEach(h),f.forEach(h),r=H(a),q(c.$$.fragment,a),this.h()},h(){$(s,"class","text-blue-800"),$(e,"class","flex gap-1")},m(a,f){V(a,e,f),K(t,e,null),_(e,l),_(e,s),_(s,o),V(a,r,f),K(c,a,f),u=!0},p(a,f){const d={};f&32768&&(d.$$scope={dirty:f,ctx:a}),t.$set(d);const m={};f&32772&&(m.$$scope={dirty:f,ctx:a}),c.$set(m)},i(a){u||(A(t.$$.fragment,a),A(c.$$.fragment,a),u=!0)},o(a){B(t.$$.fragment,a),B(c.$$.fragment,a),u=!1},d(a){a&&h(e),L(t),a&&h(r),L(c,a)}}}function Ce(n){let e,t,l,s,o,r,c,u,a,f,d=JSON.stringify(n[2])+"",m,k,D,g;return t=new x({props:{color:"blue",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),t.$on("click",n[4]),{c(){e=E("div"),F(t.$$.fragment),l=S(),s=E("p"),o=w("klik text untuk meng-copy hasil ke "),r=E("i"),c=w("clipboard"),u=w("."),a=S(),f=E("div"),m=w(d),this.h()},l(i){e=T(i,"DIV",{class:!0});var v=y(e);q(t.$$.fragment,v),l=H(v),s=T(v,"P",{class:!0});var p=y(s);o=I(p,"klik text untuk meng-copy hasil ke "),r=T(p,"I",{});var b=y(r);c=I(b,"clipboard"),b.forEach(h),u=I(p,"."),p.forEach(h),v.forEach(h),a=H(i),f=T(i,"DIV",{id:!0,class:!0});var P=y(f);m=I(P,d),P.forEach(h),this.h()},h(){$(s,"class","text-blue-800"),$(e,"class","flex gap-1"),$(f,"id","hasil-analisa"),$(f,"class","svelte-exsr75")},m(i,v){V(i,e,v),K(t,e,null),_(e,l),_(e,s),_(s,o),_(s,r),_(r,c),_(s,u),V(i,a,v),V(i,f,v),_(f,m),k=!0,D||(g=G(f,"click",n[5]),D=!0)},p(i,v){const p={};v&32768&&(p.$$scope={dirty:v,ctx:i}),t.$set(p),(!k||v&4)&&d!==(d=JSON.stringify(i[2])+"")&&z(m,d)},i(i){k||(A(t.$$.fragment,i),k=!0)},o(i){B(t.$$.fragment,i),k=!1},d(i){i&&h(e),L(t),i&&h(a),i&&h(f),D=!1,g()}}}function Fe(n){let e;return{c(){e=w("Json")},l(t){e=I(t,"Json")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function pe(n){let e,t,l=n[11].freq+"",s,o,r=n[11].kata+"",c,u,a,f;return{c(){e=E("div"),t=E("p"),s=w(l),o=w("("),c=w(r),u=w(")"),a=S(),this.h()},l(d){e=T(d,"DIV",{class:!0});var m=y(e);t=T(m,"P",{});var k=y(t);s=I(k,l),o=I(k,"("),c=I(k,r),u=I(k,")"),k.forEach(h),a=H(m),m.forEach(h),this.h()},h(){$(e,"class",f=""+(Z(n[11].label=="1"?"blue":"red")+" svelte-exsr75"))},m(d,m){V(d,e,m),_(e,t),_(t,s),_(t,o),_(t,c),_(t,u),_(e,a)},p(d,m){m&4&&l!==(l=d[11].freq+"")&&z(s,l),m&4&&r!==(r=d[11].kata+"")&&z(c,r),m&4&&f!==(f=""+(Z(d[11].label=="1"?"blue":"red")+" svelte-exsr75"))&&$(e,"class",f)},d(d){d&&h(e)}}}function ve(n){let e,t,l,s=n[8].skor+"",o,r,c,u,a=n[8].kalimat+"",f,d,m,k,D=n[8].perkata,g=[];for(let i=0;i<D.length;i+=1)g[i]=pe(me(n,D,i));return{c(){e=E("tr"),t=E("td"),l=E("div"),o=w(s),c=S(),u=E("td"),f=w(a),d=S(),m=E("td");for(let i=0;i<g.length;i+=1)g[i].c();k=S(),this.h()},l(i){e=T(i,"TR",{class:!0});var v=y(e);t=T(v,"TD",{class:!0});var p=y(t);l=T(p,"DIV",{class:!0});var b=y(l);o=I(b,s),b.forEach(h),p.forEach(h),c=H(v),u=T(v,"TD",{class:!0});var P=y(u);f=I(P,a),P.forEach(h),d=H(v),m=T(v,"TD",{class:!0});var N=y(m);for(let O=0;O<g.length;O+=1)g[O].l(N);N.forEach(h),k=H(v),v.forEach(h),this.h()},h(){$(l,"class",r=""+(Z(n[8].label=="1"?"blue":"red")+" svelte-exsr75")),$(t,"class","skor svelte-exsr75"),$(u,"class","perkalimat svelte-exsr75"),$(m,"class","perkata svelte-exsr75"),$(e,"class","svelte-exsr75")},m(i,v){V(i,e,v),_(e,t),_(t,l),_(l,o),_(e,c),_(e,u),_(u,f),_(e,d),_(e,m);for(let p=0;p<g.length;p+=1)g[p].m(m,null);_(e,k)},p(i,v){if(v&4&&s!==(s=i[8].skor+"")&&z(o,s),v&4&&r!==(r=""+(Z(i[8].label=="1"?"blue":"red")+" svelte-exsr75"))&&$(l,"class",r),v&4&&a!==(a=i[8].kalimat+"")&&z(f,a),v&4){D=i[8].perkata;let p;for(p=0;p<D.length;p+=1){const b=me(i,D,p);g[p]?g[p].p(b,v):(g[p]=pe(b),g[p].c(),g[p].m(m,null))}for(;p<g.length;p+=1)g[p].d(1);g.length=D.length}},d(i){i&&h(e),ue(g,i)}}}function qe(n){let e,t=n[2].perkalimat,l=[];for(let s=0;s<t.length;s+=1)l[s]=ve(de(n,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=R()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=R()},m(s,o){for(let r=0;r<l.length;r+=1)l[r].m(s,o);V(s,e,o)},p(s,o){if(o&4){t=s[2].perkalimat;let r;for(r=0;r<t.length;r+=1){const c=de(s,t,r);l[r]?l[r].p(c,o):(l[r]=ve(c),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(s){ue(l,s),s&&h(e)}}}function Ke(n){let e;return{c(){e=w("Tabel")},l(t){e=I(t,"Tabel")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function Le(n){let e,t=n[0]&&ke();return{c(){t&&t.c(),e=R()},l(l){t&&t.l(l),e=R()},m(l,s){t&&t.m(l,s),V(l,e,s)},p(l,s){l[0]?t||(t=ke(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:W,o:W,d(l){t&&t.d(l),l&&h(e)}}}function ke(n){let e;return{c(){e=w("..loading")},l(t){e=I(t,"..loading")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function Me(n){let e,t,l,s,o,r,c,u,a,f,d,m,k,D,g;c=new Oe({}),c.$on("submit",n[3]);let i={ctx:n,current:null,token:null,hasCatch:!0,pending:Le,then:Re,catch:Je,value:2,error:14,blocks:[,,,]};return fe(D=n[2],i),{c(){e=E("div"),t=E("div"),l=E("p"),s=w("input teks yang ingin di-analisis:"),o=S(),r=E("div"),F(c.$$.fragment),u=S(),a=E("div"),f=E("p"),d=w("hasil anailsis:"),m=S(),k=E("div"),i.block.c(),this.h()},l(v){e=T(v,"DIV",{class:!0});var p=y(e);t=T(p,"DIV",{class:!0});var b=y(t);l=T(b,"P",{class:!0});var P=y(l);s=I(P,"input teks yang ingin di-analisis:"),P.forEach(h),o=H(b),r=T(b,"DIV",{class:!0});var N=y(r);q(c.$$.fragment,N),N.forEach(h),b.forEach(h),u=H(p),a=T(p,"DIV",{class:!0});var O=y(a);f=T(O,"P",{class:!0});var j=y(f);d=I(j,"hasil anailsis:"),j.forEach(h),m=H(O),k=T(O,"DIV",{class:!0});var C=y(k);i.block.l(C),C.forEach(h),O.forEach(h),p.forEach(h),this.h()},h(){$(l,"class","text-left"),$(r,"class","form-berita"),$(t,"class","lg:min-w-[50%]"),$(f,"class","text-left"),$(k,"class","hasil min-h-[20rem] svelte-exsr75"),$(a,"class","lg:min-w-[50%]"),$(e,"class","container lg:flex gap-2")},m(v,p){V(v,e,p),_(e,t),_(t,l),_(l,s),_(t,o),_(t,r),K(c,r,null),_(e,u),_(e,a),_(a,f),_(f,d),_(a,m),_(a,k),i.block.m(k,i.anchor=null),i.mount=()=>k,i.anchor=null,g=!0},p(v,[p]){n=v,i.ctx=n,p&4&&D!==(D=n[2])&&fe(D,i)||Te(i,n,p)},i(v){g||(A(c.$$.fragment,v),A(i.block),g=!0)},o(v){B(c.$$.fragment,v);for(let p=0;p<3;p+=1){const b=i.blocks[p];B(b)}g=!1},d(v){v&&h(e),L(c),i.block.d(),i.token=null,i=null}}}function Ue(){var n=document.getElementById("hasil-analisa").innerText;navigator.clipboard.writeText(n),alert("Hasil analisis telah tersimpan dalam clipboard")}function Xe(n,e,t){let l,s=!1,o=!1,r=Promise.all([]);function c(d){//! delete address:port before build
const m="/api/1/predict/";l=d.detail,l&&(t(2,r=ze(m,l)),t(0,s=!s))}return[s,o,r,c,()=>t(1,o=!o),()=>Ue(),()=>t(1,o=!o)]}class Ge extends M{constructor(e){super();U(this,e,Xe,Me,X,{})}}export{Ge as default};
