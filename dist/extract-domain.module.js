function r(r,t){throw new TypeError(r)}var t=["/",":","?","#"],e=[".","/","@"];function n(i,n){"string"!=typeof i&&r(i.opts);for(var o,f=0,s=0,a=0,u=i.length,l=0;u--&&++l&&!(f&&t.indexOf(i[l])>-1);)"."===i[l]&&(++f,s=l);for(o=l,l=s;l--;)if(-1!==e.indexOf(i[l])){a=l+1;break}if(0===a&&o>3)return i;if(a>0&&a<2)return"";if(n.tld){for(var p=0,c=["/","@"],d=s;d--;)if(c.indexOf(i[d])>-1){p=d+1;break}try{return require("psl").get(i.slice(p,o))}catch(r){throw Error("You must install psl library (https://www.npmjs.com/package/psl) to use `tld` option")}}return i.slice(a,o)}function o(t,e){if(void 0===e&&(e={}),"string"==typeof t)return n(t,e);if(Array.isArray(t)){for(var o=[],f=t.length,s=0;s<f;s++)o.push(n(t[s],e));return o}r(t[i])}export{o as default};
//# sourceMappingURL=extract-domain.module.js.map
