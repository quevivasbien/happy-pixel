(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{8121:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/[level]",function(){return r(1790)}])},1790:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return B}});var s=r(5893),i=r(1163),o=r(7294),h=r(5540);class l{add(t){return new l(this.real+t.real,this.imag+t.imag)}square(){return new l(this.real*this.real-this.imag*this.imag,2*this.real*this.imag)}abs(){return Math.sqrt(this.real*this.real+this.imag*this.imag)}constructor(t,e){this.real=t,this.imag=e}}class a{static iter(t,e){let r=new l(0,0),s=0;for(;s<e&&2>r.abs();)r=r.square().add(t),s++;return s}generate(){let{x0:t,y0:e,width:r,height:s,pixelSize:i,maxIter:o}=this.props,h=Array(s);for(let n=0;n<s;n++){h[n]=Array(r);for(let s=0;s<r;s++){let r=new l(t+s*i,e+n*i);h[n][s]=a.iter(r,o)}}return h}paint(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,e=this.props.palette,r=e.map((r,s)=>(s+1)*Math.pow(this.props.maxIter,t)/e.length);return this.grid.map(s=>s.map(s=>{let i=Math.pow(s,t),o=0;for(;i>r[o];)o++;return e[o]}))}constructor(t){this.props=t,this.grid=this.generate()}}class n{constructor(t,e,r,s,i){this.x0=t,this.y0=e,this.width=r,this.height=s,this.pixelSize=i/r}}let d={easy:[new n(-2,-1.5,20,20,3)],medium:[new n(.15,0,20,30,.5),new n(-2,-1.5,30,30,3),new n(-1,-1,30,30,1)],hard:[new n(-2,-1.5,40,40,3)]};var c=r(1664),f=r.n(c);let u={top:!1,bottom:!1,left:!1,right:!1};class m{getKey(){let t=(this.borders.top?"1":"0")+(this.borders.bottom?"1":"0")+(this.borders.left?"1":"0")+(this.borders.right?"1":"0");return this.baseColor+this.color+(this.filled?"1":"0")+this.number+(this.selected?"1":"0")+t}constructor(t,e="#ffffff",r=!1,s="?",i=!1){this.borders={...u},this.baseColor=t,this.color=e,this.filled=r,this.number=s,this.selected=i}}class x{area(){return(1+this.endX-this.startX)*(1+this.endY-this.startY)}contains(t,e){return this.startX<=t&&t<=this.endX&&this.startY<=e&&e<=this.endY}constructor(t,e,r,s){if(t>r||e>s)throw Error("Invalid block bounds");this.startX=t,this.startY=e,this.endX=r,this.endY=s}}class p{static fromColors(t,e,r){let s=r.map(t=>new m(t));return new p(t,e,s)}static initImage(t,e,r){let s=p.fromColors(t,e,r);return s.init(),s}init(){let t=Math.floor(this.width*this.height*.02);for(let e=0;e<t;e++){let t=Math.floor(Math.random()*this.pixels.length),e=this.pixels[t];e.number="1",e.correctSelection=!0,e.filled=!0,e.color=e.baseColor;let r=t%this.width,s=Math.floor(t/this.width);e.holdsBlock=new x(r,s,r,s),this.paintBlock(e.holdsBlock,e.baseColor)}for(;;){let t=this.randomEmptyIndex();if(-1===t)break;this.fillMaxBlock(t)}}resetBorders(){for(let t of this.pixels)t.borders={...u};for(let t of this.pixels)t.holdsBlock&&this.setBorders(t.holdsBlock)}setBorders(t){for(let e=Math.max(0,t.startY-1);e<=Math.min(this.height-1,t.endY+1);e++)for(let r=Math.max(0,t.startX-1);r<=Math.min(this.width-1,t.endX+1);r++){let s=e*this.width+r,i=this.pixels[s];r>=t.startX&&r<=t.endX&&(e===t.startY||e===t.endY+1)&&(i.borders.top=!0),r>=t.startX&&r<=t.endX&&(e===t.endY||e===t.startY-1)&&(i.borders.bottom=!0),e>=t.startY&&e<=t.endY&&(r===t.startX||r===t.endX+1)&&(i.borders.left=!0),e>=t.startY&&e<=t.endY&&(r===t.endX||r===t.startX-1)&&(i.borders.right=!0)}}paintBlock(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];for(let s=t.startY;s<=t.endY;s++)for(let i=t.startX;i<=t.endX;i++){let t=s*this.width+i;this.pixels[t].color=e,r&&(this.pixels[t].filled=!0)}}randomEmptyIndex(){let t=[];for(let e=0;e<this.pixels.length;e++)"?"===this.pixels[e].number&&t.push(e);return 0===t.length?-1:t[Math.floor(Math.random()*t.length)]}fillMaxBlock(t){let[e,r]=this.findMaxBlockFromTopLeft(t),s="tl",[i,o]=[e,r],[h,l]=this.findMaxBlockFromTopRight(t);l>o&&([i,o]=[h,l],s="tr");let[a,n]=this.findMaxBlockFromBottomLeft(t);n>o&&([i,o]=[a,n],s="bl");let[d,c]=this.findMaxBlockFromBottomRight(t);c>o&&([i,o]=[d,c],s="br");let f=this.getBlockBounds(t,i,s);this.clearBlock(f);let u=this.pixels[t];u.number=o.toString(),1===o?(u.holdsBlock=f,u.correctSelection=!0,this.paintBlock(f,u.baseColor)):u.correctSelection=!1}getBlockBounds(t,e,r){if("tl"===r)return new x(t%this.width,Math.floor(t/this.width),e%this.width,Math.floor(e/this.width));if("tr"===r)return new x(e%this.width,Math.floor(t/this.width),t%this.width,Math.floor(e/this.width));if("bl"===r)return new x(t%this.width,Math.floor(e/this.width),e%this.width,Math.floor(t/this.width));if("br"===r)return new x(e%this.width,Math.floor(e/this.width),t%this.width,Math.floor(t/this.width));throw Error("Invalid fromDirection")}clearBlock(t){for(let e=0;e<this.width;e++)for(let r=0;r<this.height;r++){if(!t.contains(e,r))continue;let s=r*this.width+e;this.pixels[s].number=""}}getRightNeighborIndex(t){let e=t+1;return e%this.width==0||"?"!==this.pixels[e].number||this.pixels[e].baseColor!==this.pixels[t].baseColor?-1:e}getLeftNeighborIndex(t){let e=t-1;return e<0||e%this.width==this.width-1||"?"!==this.pixels[e].number||this.pixels[e].baseColor!==this.pixels[t].baseColor?-1:e}getBottomNeighborIndex(t){let e=t+this.width;return e>=this.width*this.height||"?"!==this.pixels[e].number||this.pixels[e].baseColor!==this.pixels[t].baseColor?-1:e}getTopNeighborIndex(t){let e=t-this.width;return e<0||"?"!==this.pixels[e].number||this.pixels[e].baseColor!==this.pixels[t].baseColor?-1:e}rowFromLeftIsClear(t,e){let r=t;for(let t=0;t<e;t++){let t=this.getLeftNeighborIndex(r);if(-1===t)return!1;r=t}return!0}rowFromRightIsClear(t,e){let r=t;for(let t=0;t<e;t++){let t=this.getRightNeighborIndex(r);if(-1===t)return!1;r=t}return!0}findMaxBlockFromTopLeft(t){let e=1,r=t,s=t,i=0;for(;;){[e,r]=this.stepDownFromTopLeft(s,i,e,r);let t=this.getRightNeighborIndex(s);if(-1===t)break;s=t,i++}return[r,e]}stepDownFromTopLeft(t,e,r,s){let i=0,o=t;for(;;){let t=this.getBottomNeighborIndex(o);if(-1===t||!this.rowFromLeftIsClear(t,e)){let t=(e+1)*(i+1);t>r&&(r=t,s=o);break}o=t,i++}return[r,s]}findMaxBlockFromTopRight(t){let e=1,r=t,s=t,i=0;for(;;){[e,r]=this.stepDownFromTopRight(s,i,e,r);let t=this.getLeftNeighborIndex(s);if(-1===t)break;s=t,i++}return[r,e]}stepDownFromTopRight(t,e,r,s){let i=0,o=t;for(;;){let t=this.getBottomNeighborIndex(o);if(-1===t||!this.rowFromRightIsClear(t,e)){let t=(e+1)*(i+1);t>r&&(r=t,s=o);break}o=t,i++}return[r,s]}findMaxBlockFromBottomLeft(t){let e=1,r=t,s=t,i=0;for(;;){[e,r]=this.stepUpFromBottomLeft(s,i,e,r);let t=this.getRightNeighborIndex(s);if(-1===t)break;s=t,i++}return[r,e]}stepUpFromBottomLeft(t,e,r,s){let i=0,o=t;for(;;){let t=this.getTopNeighborIndex(o);if(-1===t||!this.rowFromLeftIsClear(t,e)){let t=(e+1)*(i+1);t>r&&(r=t,s=o);break}o=t,i++}return[r,s]}findMaxBlockFromBottomRight(t){let e=1,r=t,s=t,i=0;for(;;){[e,r]=this.stepUpFromBottomRight(s,i,e,r);let t=this.getLeftNeighborIndex(s);if(-1===t)break;s=t,i++}return[r,e]}stepUpFromBottomRight(t,e,r,s){let i=0,o=t;for(;;){let t=this.getTopNeighborIndex(o);if(-1===t||!this.rowFromRightIsClear(t,e)){let t=(e+1)*(i+1);t>r&&(r=t,s=o);break}o=t,i++}return[r,s]}constructor(t,e,r){this.height=t,this.width=e,this.pixels=r}}class g extends o.Component{render(){let{baseColor:t,color:e,filled:r,number:i,selected:o,borders:l}=this.state,a=l.top?"border-t-gray-400":"border-t-gray-200",n=l.bottom?"border-b-gray-400":"border-b-gray-200",d=l.left?"border-l-gray-400":"border-l-gray-200",c=l.right?"border-r-gray-400":"border-r-gray-200",f="".concat(a," ").concat(n," ").concat(d," ").concat(c),u="flex justify-center items-center w-8 h-8 border ".concat(f," hover:border-gray-600 ").concat(r||o||""!==i?"cursor-pointer":"cursor"," select-none");if(!r&&!o)return(0,s.jsx)("div",{className:u,style:{color:h.ZP.darkenedHex(t,50)},children:i});{let t={backgroundColor:e,color:h.ZP.invertedHex(e)};return(0,s.jsx)("div",{className:u,style:t,children:i})}}constructor(t){super(t),this.state=t.props}}function w(t){let e=function(){let[t,e]=o.useState({x:0,y:0});return o.useEffect(()=>{let t=t=>{e({x:t.pageX,y:t.pageY})};return window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}},[]),t}(),r=0===e.x&&0===e.y?"none":"block";return(0,s.jsx)("div",{style:{display:r,position:"absolute",top:e.y+10,left:e.x+20},className:"bg-gray-100 border border-gray-400 rounded-md p-2",children:t.size})}function b(t){let{color:e}=t;return(0,s.jsx)("div",{className:"flex justify-center items-center w-8 h-8 cursor-none select-none",style:{background:h.ZP.darkenedHex(e,50)}})}function M(t){let[e,r]=o.useState(0),{height:i,width:h,dynPixels:l,staticPixels:a}=t,n=[];for(let t=0;t<i;t++){let r=[];for(let i=0;i<h;i++){let o=t*h+i;r.push((0,s.jsx)("div",{children:e<=o?l[o]:a[o]},"".concat(i)))}n.push((0,s.jsx)("div",{className:"flex",children:r},t))}return e<h*i&&setTimeout(()=>r(e+1),1e3/(h*i)),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"",children:n}),(0,s.jsxs)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-3 bg-gray-600 bg-opacity-90 rounded-md shadow-lg",children:[(0,s.jsx)("div",{className:"text-gray-200 text-3xl",children:"Complete!"}),(0,s.jsxs)("div",{className:"mt-3 text-gray-200 text-xl",children:["Time: ",t.timeStamp]})]})]})}class v extends o.Component{render(){if(this.state.complete)return(0,s.jsxs)("div",{children:[function(t,e){let{height:r,width:i,pixels:o}=t,h=o.map((t,e)=>(0,s.jsx)(g,{props:t},"pix".concat(e))),l=o.map((t,e)=>(0,s.jsx)(b,{color:t.color},"stat".concat(e)));return(0,s.jsx)(M,{height:r,width:i,dynPixels:h,staticPixels:l,timeStamp:e})}(this.state.renderData,this.timeElapsed()),(0,s.jsx)("div",{className:"p-4 m-4 text-center",children:(0,s.jsx)(f(),{className:"p-4 border rounded-lg bg-gray-100 hover:bg-white shadow-sm hover:shadow-none hover:text-gray-500",href:"/",children:"Play again"})})]});this.state.renderData.resetBorders();let{height:t,width:e,pixels:r}=this.state.renderData,i=[];for(let o=0;o<t;o++){let t=[];for(let i=0;i<e;i++){let h=o*e+i,l=r[h];t.push((0,s.jsx)("div",{onMouseDown:()=>this.onMouseDown(i,o),onMouseOver:()=>this.onMouseOver(i,o),children:(0,s.jsx)(g,{props:l},l.getKey())},"".concat(i)))}i.push((0,s.jsx)("div",{className:"flex",children:t},o))}let o=(0,s.jsx)("div",{onMouseUp:()=>this.onMouseUp(),children:i});return void 0!==this.state.selectSize?(0,s.jsxs)("div",{children:[o,(0,s.jsx)(w,{width:10,height:10,size:this.state.selectSize})]}):o}timeElapsed(){let t=this.state.endTime?this.state.endTime:Date.now(),e=t-this.state.startTime,r=Math.floor(e/1e3/60/60),s=(Math.floor(e/1e3/60)%60).toString().padStart(2,"0"),i=(Math.floor(e/1e3)%60).toString().padStart(2,"0");return r>0?"".concat(r,":").concat(s,":").concat(i):"".concat(s,":").concat(i)}onMouseDown(t,e){let r=this.state.renderData,s=t+r.width*e,i=r.pixels[s];i.filled&&this.unfillBlock(t,e),""!==i.number&&this.setState({selectStart:s,selectEnd:s},this.drawSelectBox)}getBlockHolderIndex(t,e){let r=this.state.renderData.pixels;for(let s=0;s<r.length;s++){let i=r[s];if(void 0!==i.holdsBlock&&i.holdsBlock.contains(t,e))return s}throw Error("no block found")}unfillBlock(t,e){let r=this.state.renderData,s=this.getBlockHolderIndex(t,e),i=r.pixels[s].holdsBlock;if(void 0===i)throw Error("this should never happen!");for(let t=i.startY;t<=i.endY;t++)for(let e=i.startX;e<=i.endX;e++){let s=t*r.width+e,i=r.pixels[s];i.filled=!1}r.pixels[s].holdsBlock=void 0,this.setState({renderData:r})}drawSelectBox(){if(void 0===this.state.selectStart||void 0===this.state.selectEnd){setTimeout(()=>this.drawSelectBox(),100);return}let t=this.state.selectStart,e=this.state.renderData.pixels[t],r=this.state.renderData,s=Math.floor(t/r.width),i=t%r.width,o=Math.floor(this.state.selectEnd/r.width),l=this.state.selectEnd%r.width,a=new x(Math.min(i,l),Math.min(s,o),Math.max(i,l),Math.max(s,o));e.holdsBlock=a;for(let t=0;t<r.height;t++)for(let s=0;s<r.width;s++){let i=r.pixels[t*r.width+s];a.contains(s,t)?(i.selected=!0,i.color=a.area()===parseInt(e.number)?h.ZP.lightenedHex(e.baseColor,50,230):h.pF.toHex()):i.selected=!1}this.setState({renderData:r,selectSize:a.area()})}clearSelectBox(){let t=this.state.renderData;for(let e=0;e<t.height;e++)for(let r=0;r<t.width;r++)t.pixels[e*t.width+r].selected=!1;let e=this.state.selectStart,r=this.state.selectEnd;if(void 0===e||void 0===r)throw Error("selectStart or selectEnd shouldn't be undefined here");let s=new x(Math.min(e%t.width,r%t.width),Math.min(Math.floor(e/t.width),Math.floor(r/t.width)),Math.max(e%t.width,r%t.width),Math.max(Math.floor(e/t.width),Math.floor(r/t.width))),i=t.pixels[e],o=s.area()===parseInt(i.number);i.correctSelection=o;let l=o?i.baseColor:h.pF.toHex();t.paintBlock(s,l),i.holdsBlock=s,this.setState({selectStart:void 0,selectEnd:void 0,selectSize:void 0,renderData:t}),this.checkIfComplete()}onMouseOver(t,e){void 0!==this.state.selectStart&&this.boxIsClear(t,e)&&this.setState({selectEnd:t+this.state.renderData.width*e},this.drawSelectBox)}boxIsClear(t,e){if(void 0===this.state.selectStart)throw Error("selectStart is undefined");let r=this.state.selectStart%this.state.renderData.width,s=Math.floor(this.state.selectStart/this.state.renderData.width);for(let i=Math.min(s,e);i<=Math.max(s,e);i++)for(let e=Math.min(r,t);e<=Math.max(r,t);e++){let t=i*this.state.renderData.width+e;if(t!==this.state.selectStart&&(""!==this.state.renderData.pixels[t].number||this.state.renderData.pixels[t].filled))return!1}return!0}onMouseUp(){void 0!==this.state.selectStart&&this.clearSelectBox()}checkIfComplete(){if(this.puzzleComplete()){let t=Date.now();this.setState({complete:!0,endTime:t})}}puzzleComplete(){let t=this.state.renderData;for(let e of t.pixels)if(""!==e.number&&!e.correctSelection)return!1;return!0}constructor(t){super(t),this.state={renderData:p.initImage(t.height,t.width,t.colors),startTime:Date.now(),complete:!1}}}let k=t=>{let{level:e}=t,[r,i]=o.useState(!1);if(o.useEffect(()=>{i(!0)},[]),!r)return(0,s.jsx)("div",{});let l=function(t){let e=d[t],r=e[Math.floor(Math.random()*e.length)];return{x0:r.x0,y0:r.y0,width:r.width,height:r.height,pixelSize:r.pixelSize,maxIter:100,palette:(0,h.q0)()}}(e),n=new a(l),c=n.paint(),f=Array(l.height*l.width);for(let t=0;t<l.height;t++)for(let e=0;e<l.width;e++){let r=c[t][e];f[t*l.width+e]=r.toHex()}return(0,s.jsx)(v,{height:l.height,width:l.width,colors:f})};function B(){let t=(0,i.useRouter)(),{level:e}=t.query;return"string"!=typeof e?(0,s.jsx)("div",{}):(0,s.jsx)("div",{className:"flex justify-center items-center p-4",children:(0,s.jsx)(k,{level:e})})}},5540:function(t,e,r){"use strict";r.d(e,{ZP:function(){return s},pF:function(){return l},q0:function(){return h}});class s{static fromHex(t){"#"===t[0]&&(t=t.slice(1));let e=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return new s(e,r,i)}toHex(){return"#"+this.r.toString(16).padStart(2,"0")+this.g.toString(16).padStart(2,"0")+this.b.toString(16).padStart(2,"0")}inverted(){return new s(255-this.r,255-this.g,255-this.b)}static invertedHex(t){return s.fromHex(t).inverted().toHex()}darkened(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new s(Math.max(e,Math.floor(this.r-t)),Math.max(e,Math.floor(this.g-t)),Math.max(e,Math.floor(this.b-t)))}static darkenedHex(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return s.fromHex(t).darkened(e,r).toHex()}lightened(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;return new s(Math.min(e,Math.floor(this.r+t)),Math.min(e,Math.floor(this.g+t)),Math.min(e,Math.floor(this.b+t)))}static lightenedHex(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return s.fromHex(t).lightened(e,r).toHex()}constructor(t,e,r){this.r=t,this.g=e,this.b=r}}class i{static fromHexes(t){return new i(t.map(t=>s.fromHex(t)))}constructor(t){this.colors=t}}let o=[i.fromHexes(["be6e46","cde7b0","a3bfa8","7286a0","59594a"]),i.fromHexes(["adbca5","e8b9ab","e09891","cb769e","8c5f66"]),i.fromHexes(["7fb069","fffbbd","e6aa68","ca3c25","1d1a05"]),i.fromHexes(["545e75","63adf2","a7cced","304d6d","82a0bc"]),i.fromHexes(["ff9fb2","fbdce2","0acdff","60ab9a","dedee0"]),i.fromHexes(["91f9e5","76f7bf","5fdd9d","499167","3f4531"]),i.fromHexes(["ffc857","e9724c","c5283d","481d24","255f85"]),i.fromHexes(["bce7fd","c492b1","af3b6e","424651","21fa90"])];function h(){return o[Math.floor(Math.random()*o.length)].colors}let l=s.fromHex("#C0C0C0")}},function(t){t.O(0,[424,774,888,179],function(){return t(t.s=8121)}),_N_E=t.O()}]);