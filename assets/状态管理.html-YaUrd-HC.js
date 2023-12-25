import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c,b as n,d as s,e as t,a as p}from"./app-cbOojWoE.js";const l={},r=n("h1",{id:"状态管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#状态管理","aria-hidden":"true"},"#"),s(" 状态管理")],-1),u=n("h2",{id:"安装jotai-atomic-state",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装jotai-atomic-state","aria-hidden":"true"},"#"),s(" 安装jotai - atomic state")],-1),d={href:"https://jotai.org/",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add jotai jotai-immer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="什么是状态撕裂" tabindex="-1"><a class="header-anchor" href="#什么是状态撕裂" aria-hidden="true">#</a> 什么是状态撕裂</h3><p>&quot;状态撕裂&quot;通常指的是在异步操作中，由于状态更新不同步而导致的问题。这个问题通常在 React 或其他前端框架中经常遇到。</p><p>在前端应用中，当进行异步操作（如网络请求、定时器等）并尝试更新组件的状态时，可能会遇到以下情况：</p><ol><li><p><strong>状态更新时机不同步</strong>： 异步操作完成后，尝试更新组件状态，但此时组件可能已经被卸载或处于其他不同步的状态。</p></li><li><p><strong>闭包问题</strong>： 在异步回调函数中，可能会涉及到闭包，导致回调函数中的状态访问的是旧的状态而不是最新的状态。</p></li></ol><p>这种不同步导致的问题称为&quot;状态撕裂&quot;，可能会导致一系列的错误，如界面显示不一致、数据不准确等。</p><p>解决&quot;状态撕裂&quot;的一些常见方法包括：</p><ol><li><strong>使用 useEffect 的清理函数</strong>： 在 useEffect 中进行异步操作时，确保在清理函数中取消异步操作或清理相关资源。这样可以避免在组件已经卸载后仍然尝试更新状态。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步操作</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataFromServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 清理函数</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消异步操作或清理资源</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>使用 async/await</strong>： 如果使用异步函数，确保使用 async/await 语法，以便更清晰地处理异步操作和状态更新。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fetchDataAndUpdateState</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDataFromServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fetchDataAndUpdateState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>使用 useRef 进行状态检查</strong>： 使用 useRef 来保存状态的引用，并在异步操作中检查引用是否仍然是最新的状态。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const isMounted = useRef(true);

useEffect(() =&gt; {
  return () =&gt; {
    isMounted.current = false;
  };
}, []);

const fetchDataAndUpdateState = async () =&gt; {
  try {
    const data = await fetchDataFromServer();
    if (isMounted.current) {
      setData(data);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchDataAndUpdateState();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些方法有助于减少在异步操作中发生状态撕裂的可能性，确保状态更新的同步性和准确性。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>jotai为了解决状态撕裂的问题，强行执行组件两次，以保证状态的更新</p></div><h2 id="zustand" tabindex="-1"><a class="header-anchor" href="#zustand" aria-hidden="true">#</a> zustand</h2>`,16),k={href:"https://zustand-demo.pmnd.rs/",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"xstate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xstate","aria-hidden":"true"},"#"),s(" xstate")],-1),b={href:"https://xstate.js.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://jotai.org/docs/extensions/redux",target:"_blank",rel:"noopener noreferrer"};function f(g,_){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,u,n("p",null,[s("组件内状态 "),n("a",d,[s("jotai官网"),t(a)])]),v,n("p",null,[s("组件外状态 "),n("a",k,[s("zustand官网"),t(a)])]),m,n("p",null,[s("状态机 "),n("a",b,[s("xstate官网"),t(a)])]),n("p",null,[n("a",h,[s("支持对之前项目状态的迁移"),t(a)])])])}const w=e(l,[["render",f],["__file","状态管理.html.vue"]]);export{w as default};
