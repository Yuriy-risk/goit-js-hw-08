!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(N,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function N(){var e=p();if(j(e))return h(e);f=setTimeout(N,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?y(e):(i=o=void 0,u)}function w(){var e=p(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(N,t),y(l)}return void 0===f&&(f=setTimeout(N,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O,j,N=document.querySelector('input[type="email"]'),h=document.querySelector('textarea[name="message"]'),w=document.querySelector("form.feedback-form"),T="feedback-form-state",x={email:"",message:""};null===JSON.parse(localStorage.getItem(T,JSON.stringify(x)))?(O=x.email,j=x.message):(O=JSON.parse(localStorage.getItem(T,JSON.stringify(x))).email,j=JSON.parse(localStorage.getItem(T,JSON.stringify(x))).message,N.value=O,h.value=j,x.email=O,x.message=j),w.addEventListener("input",n((function(){x.email=N.value,x.message=h.value,localStorage.setItem(T,JSON.stringify(x))}),500)),w.addEventListener("submit",(function(e){return function(e){e.preventDefault(),console.log(x),x.email="",x.message="",localStorage.removeItem(T),N.value="",h.value=""}(e)}))}();
//# sourceMappingURL=03-feedback.e8dcde8b.js.map
