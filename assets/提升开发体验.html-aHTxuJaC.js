import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as l,b as n,d as s,e as c,a as e}from"./app-cbOojWoE.js";const p={},r=e(`<h1 id="提升开发体验" tabindex="-1"><a class="header-anchor" href="#提升开发体验" aria-hidden="true">#</a> 提升开发体验</h1><h2 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> SourceMap</h2><h3 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么" aria-hidden="true">#</a> 为什么</h3><p>开发时我们运行的代码是经过 webpack 编译后的，例如下面这个样子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * ATTENTION: The &quot;eval&quot; devtool has been used (maybe by default in mode: &quot;development&quot;).
 * This devtool is neither made for production nor for readable output files.
 * It uses &quot;eval()&quot; calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with &quot;devtool: false&quot;.
 * If you are looking for production-ready output files, see mode: &quot;production&quot; (https://webpack.js.org/configuration/mode/).
 */</span>
<span class="token doc-comment comment">/******/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token doc-comment comment">/******/</span> 	<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span> 	<span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token doc-comment comment">/***/ &quot;./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less&quot;:
/*!**********************************************************************************************************!*\\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less ***!
  \\**********************************************************************************************************/</span>
<span class="token doc-comment comment">/***/ ((module, __webpack_exports__, __webpack_require__) =&gt; <span class="token punctuation">{</span>

eval(&quot;__webpack_require__.r(__webpack_exports__);\\n/* harmony export */</span> __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token punctuation">{</span>\\n<span class="token comment">/* harmony export */</span>   \\<span class="token string">&quot;default\\&quot;: () =&gt; (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \\&quot;./node_modules/css-loader/dist/runtime/noSourceMaps.js\\&quot;);\\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \\&quot;./node_modules/css-loader/dist/runtime/api.js\\&quot;);\\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\\n// Imports\\n\\n\\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\\n// Module\\n___CSS_LOADER_EXPORT___.push([module.id, \\&quot;.box2 {\\\\n  width: 100px;\\\\n  height: 100px;\\\\n  background-color: deeppink;\\\\n}\\\\n\\&quot;, \\&quot;\\&quot;]);\\n// Exports\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\\n\\n\\n//# sourceURL=webpack://webpack5/./src/less/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/***/ <span class="token punctuation">}</span>),
// 其他省略
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有 css 和 js 合并成了一个文件，并且多了其他代码。此时如果代码运行出错那么提示代码错误位置我们是看不懂的。一旦将来开发代码文件很多，那么很难去发现错误出现在哪里。</p><p>所以我们需要更加准确的错误提示，来帮助我们更好的开发代码。</p><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3><p>SourceMap（源代码映射）是一个用来生成源代码与构建后代码一一映射的文件的方案。</p><p>它会生成一个 xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后代码出错了，会通过 xxx.map 文件，从构建后代码出错位置找到映射后源代码出错位置，从而让浏览器提示源代码文件出错位置，帮助我们更快的找到错误根源。</p><h3 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h3>`,11),d={href:"https://webpack.docschina.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>但实际开发时我们只需要关注两种情况即可：</p><ul><li><p>开发模式：<code>cheap-module-source-map</code></p><ul><li>优点：打包编译速度快，只包含行映射</li><li>缺点：没有列映射</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他省略</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;cheap-module-source-map&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生产模式：<code>source-map</code><ul><li>优点：包含行/列映射</li><li>缺点：打包编译速度更慢</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他省略</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(m,v){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[s("通过查看"),n("a",d,[s("Webpack DevTool 文档"),c(a)]),s("可知，SourceMap 的值有很多种情况.")]),_])}const h=o(p,[["render",u],["__file","提升开发体验.html.vue"]]);export{h as default};
