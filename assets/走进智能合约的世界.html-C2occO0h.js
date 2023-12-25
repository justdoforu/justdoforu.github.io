import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-cbOojWoE.js";const t="/assets/image/compilation-details.png",p={},i=e(`<h1 id="走进智能合约的世界" tabindex="-1"><a class="header-anchor" href="#走进智能合约的世界" aria-hidden="true">#</a> 走进智能合约的世界</h1><h2 id="solidity学习网站" tabindex="-1"><a class="header-anchor" href="#solidity学习网站" aria-hidden="true">#</a> solidity学习网站</h2><ul><li>官网：https://www.wtf.academy/</li><li>github：https://github.com/AmazingAng/WTF-Solidity</li><li>ethers: https://github.com/WTFAcademy/WTF-Ethers</li></ul><h2 id="solidity语法" tabindex="-1"><a class="header-anchor" href="#solidity语法" aria-hidden="true">#</a> solidity语法</h2><h3 id="基础部分" tabindex="-1"><a class="header-anchor" href="#基础部分" aria-hidden="true">#</a> 基础部分</h3><p>类似前端的document</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译器的版本</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看本地编译器的版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>solcjs --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-hello-solidity-sol" tabindex="-1"><a class="header-anchor" href="#_1-hello-solidity-sol" aria-hidden="true">#</a> 1.hello solidity.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0  </span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token string">&quot;hardhat/console.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token comment">// 状态，类似前端的变量</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> Msg<span class="token punctuation">;</span> 

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不能输出中文</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Solidity&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Msg <span class="token operator">=</span> <span class="token string">&quot;Hello Solidity&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Hardhat对solidity做了扩充，比如console，另外，solidity也对合约进行审计。</p></div><h4 id="_2-数据类型-sol" tabindex="-1"><a class="header-anchor" href="#_2-数据类型-sol" aria-hidden="true">#</a> 2.数据类型.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 1.string utf-8编码的字符串 &quot;a&quot; == &quot;a&quot;
 * 2.bool
 * 3.uint 无符号整数 负数 uint256 2的8次幂 0-255
 * uint8，uint16，uint24……uint256，int8，int16，int24……int256，bytes1，bytes2，bytes3……bytes32，
 * 4.byte 字节类型 1个字节 0x1a
 * 5.bytes 字节数组
 * 6.int 有符号整数
 * 7.address 代表了用户地址
 * 8.payable 这个函数可以花钱 这个用户可以花他的钱
 * 9.常量 const
 * &lt;A&gt; as ... payable(msg.owner)
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-状态变量-sol" tabindex="-1"><a class="header-anchor" href="#_3-状态变量-sol" aria-hidden="true">#</a> 3.状态变量.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// 1.状态变量</span>
<span class="token comment">// 1.1.存储状态变量</span>
<span class="token comment">// 1.2.内存状态变量</span>
<span class="token comment">// 1.3.常量状态变量</span>
<span class="token comment">// 1.4.视图状态变量</span>
<span class="token comment">// 1.5.公共状态变量</span>
<span class="token comment">// 1.6.私有状态变量</span>
<span class="token comment">// 1.7.内部状态变量</span>
<span class="token comment">// 1.8.外部状态变量</span>

<span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">hello</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> <span class="token keyword">public</span> Msg<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">private</span> age<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> difficulty<span class="token punctuation">;</span>
    <span class="token builtin">bytes4</span> <span class="token keyword">constant</span> fid <span class="token operator">=</span> <span class="token number">0xfa913621</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Msg <span class="token operator">=</span> <span class="token string">&quot;Hello Solitidy&quot;</span><span class="token punctuation">;</span>
        age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        difficulty <span class="token operator">=</span> block<span class="token punctuation">.</span>difficulty<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getDoubleAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> dage <span class="token operator">=</span> age <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>block是全局变量</p><p>函数中的view关键字只对当前的状态读取，不进行任何修改，即视图函数</p></div><h4 id="_4-全局变量-sol" tabindex="-1"><a class="header-anchor" href="#_4-全局变量-sol" aria-hidden="true">#</a> 4.全局变量.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> Msg<span class="token punctuation">;</span>
    <span class="token builtin">bytes</span> <span class="token keyword">public</span> Msg2<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Msg <span class="token operator">=</span> block<span class="token punctuation">.</span>coinbase<span class="token punctuation">;</span>
        <span class="token comment">// - block.difficulty (uint):当前块的难度系数</span>
        <span class="token comment">// - block.gaslimit (uint):当前块gas的上限</span>
        <span class="token comment">// - block.number (uint):当前块编号</span>
        <span class="token comment">// - block.blockhash (function(uint) returns (bytes32)):函数，返回指定块的哈希值，已经被内建函数blockhash所代替</span>
        <span class="token comment">// - block.timestamp (uint):当前块的时间戳</span>
        <span class="token comment">// 用户和你之间的消息的传递</span>
        Msg2 <span class="token operator">=</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token comment">// - msg.gas (uint):剩余的gas量</span>
        <span class="token comment">// - msg.sender (address):消息的发送方(调用者)</span>
        <span class="token comment">// - msg.sig (bytes4):calldata的前四个字节(即函数标识符)</span>
        <span class="token comment">// - msg.value (uint):所发送的消息中的Wei （以太坊激励体系内最小的虚拟数字货币单位）数量</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-函数和函数修饰符-sol" tabindex="-1"><a class="header-anchor" href="#_5-函数和函数修饰符-sol" aria-hidden="true">#</a> 5.函数和函数修饰符.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// function func_name(paramlist...) modifiers returns (returnlist...)</span>

<span class="token comment">// - public	最大的访问权限，子类可以继承、可以访问，当前类能访问</span>
<span class="token comment">// - private  只有该合约可以调用 仅限内部访问，子类不能继承、不能访问</span>
<span class="token comment">// - internal  内部函数 内部正常访问，外部无法访问。子类可以继承、可以访问，当前类可以访问</span>
<span class="token comment">// - external  外部函数。内部不能访问。子类可以继承、可以访问，当前类不能访问</span>

<span class="token comment">// - view 对状态变量只读，这里的状态变量还包含区块链的内建对象数据、时间戳等</span>
<span class="token comment">// - pure 既不修改，也不读取状态变量的值，纯函数</span>
<span class="token comment">// - const 合约不修改状态变量的值，但是可以读取状态变量的值</span>
<span class="token comment">// - payable 设计以太币的转移 （资金控制类的）</span>
<span class="token comment">// - 自定义修饰符 支持自定义修饰符号 自定义控制类</span>
<span class="token comment">// 顺序  public &lt; external &lt; internal &lt; private。</span>

<span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">func_demo</span> <span class="token punctuation">{</span>
    <span class="token comment">// for循环的写法</span>
    <span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//for循环</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> i<span class="token punctuation">;</span> <span class="token comment">//累加求和</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// while循环的写法</span>
    <span class="token keyword">function</span> <span class="token function">getSum2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//for循环</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> i<span class="token punctuation">;</span> <span class="token comment">//累加求和</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-修饰符-sol" tabindex="-1"><a class="header-anchor" href="#_5-1-修饰符-sol" aria-hidden="true">#</a> 5-1.修饰符.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./libs/Test.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">DoTest</span> <span class="token keyword">is</span> Test <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span> a<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> xx<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xx <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">test2</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- use this.</span>
        <span class="token keyword">return</span> xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">test_3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xx <span class="token operator">=</span> <span class="token function">test3</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">test_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xx <span class="token operator">=</span> <span class="token function">test4</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- compile error</span>
        <span class="token keyword">return</span> xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-数组-sol" tabindex="-1"><a class="header-anchor" href="#_6-数组-sol" aria-hidden="true">#</a> 6.数组.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">array_demo</span> <span class="token punctuation">{</span>
    <span class="token comment">//定长数组 T[N]</span>
    <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token keyword">public</span> names<span class="token punctuation">;</span>

    <span class="token comment">//动态数组</span>
    <span class="token builtin">uint256</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">public</span> ages<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;yideng&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//定长数组不允许push</span>
        <span class="token comment">// names.push(&quot;yideng2&quot;);</span>

        <span class="token comment">//动态数组不允许不存在的下标</span>
        <span class="token comment">// ages[0] = 110;</span>
        ages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setNames</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> index<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        names<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>names<span class="token punctuation">.</span>length<span class="token punctuation">,</span> ages<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于变长的数据必须写memory</p></div><h4 id="_7-mapping-sol" tabindex="-1"><a class="header-anchor" href="#_7-mapping-sol" aria-hidden="true">#</a> 7.mapping.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">map_demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> addr_names<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//msg.sender部署合约的人 owner</span>
        addr_names<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;laoyuan&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setNames</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        addr_names<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> _name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> addr_names<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-自定义结构-sol" tabindex="-1"><a class="header-anchor" href="#_8-自定义结构-sol" aria-hidden="true">#</a> 8.自定义结构.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> name<span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> age<span class="token punctuation">;</span>
    <span class="token builtin">string</span> sex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">struct_demo</span> <span class="token punctuation">{</span>
    User user<span class="token punctuation">;</span>
    User<span class="token punctuation">[</span><span class="token punctuation">]</span> users<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setUser</span><span class="token punctuation">(</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span>
        <span class="token builtin">uint8</span> _age<span class="token punctuation">,</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _sex
    <span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// user.name = _name;</span>
        <span class="token comment">// user.age = _age;</span>
        <span class="token comment">// user.sex = _sex;</span>
        user <span class="token operator">=</span> <span class="token function">User</span><span class="token punctuation">(</span>_name<span class="token punctuation">,</span> _age<span class="token punctuation">,</span> _sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>User <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">findPerson</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _index<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>User <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> users<span class="token punctuation">[</span>_index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-事物控制与异常-sol" tabindex="-1"><a class="header-anchor" href="#_9-事物控制与异常-sol" aria-hidden="true">#</a> 9.事物控制与异常.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">/**
 * 1.revert 事物回滚 会消耗gas
 * 2.error 消耗gas最低
    2-1 error既可以告知用户抛出异常的原因，又能省gas。
 * 3.assert 错误判断 会消耗光gas assert(bool,cond_expr);
    3-1 一般不对外 内部变量判断 pure函数 用于检测系统级别的错误 代码层面的错误
    函数结尾或者函数头部 入参和必要条件检测
 * 4.require(bool cond_expr, string msg); 退还gas
    4-1 跟用户打交道的 require(input_var&gt;100);
    4-2 合约掉合约 require(合约地址!=address(0));
 */</span>

<span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;hardhat/console.sol&quot;</span><span class="token punctuation">;</span>
error <span class="token function">TransferNotOwner</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义error</span>

<span class="token keyword">contract</span> <span class="token class-name">struct_demo</span> <span class="token punctuation">{</span>
    User user<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;laoyuan&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setUser</span><span class="token punctuation">(</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span>
        <span class="token builtin">uint8</span> _age<span class="token punctuation">,</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> _sex
    <span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行不了，得硬编码</span>
        <span class="token comment">// if(_name !== user.name){</span>
        <span class="token comment">//     user.name = _name;</span>
        <span class="token comment">// }</span>
        <span class="token comment">// require(</span>
        <span class="token comment">//     keccak256(abi.encodePacked(user.name)) !=</span>
        <span class="token comment">//         keccak256(abi.encodePacked(_name)),</span>
        <span class="token comment">//     &quot;user send name is not allowed&quot;</span>
        <span class="token comment">// );</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
            <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span>
            <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">TransferNotOwner</span><span class="token punctuation">(</span>_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// revert\`sss\`;</span>
        <span class="token punctuation">}</span>
        user<span class="token punctuation">.</span>name <span class="token operator">=</span> _name<span class="token punctuation">;</span>

        user<span class="token punctuation">.</span>age <span class="token operator">=</span> _age<span class="token punctuation">;</span>
        user<span class="token punctuation">.</span>sex <span class="token operator">=</span> _sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>不能直接比较字符串，必须是sha256，在以太坊上使用的是keccak256</p></div><h4 id="_10-自定义修饰符-sol" tabindex="-1"><a class="header-anchor" href="#_10-自定义修饰符-sol" aria-hidden="true">#</a> 10.自定义修饰符.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">modifier_demo</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> admin<span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> amount<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        admin <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        amount <span class="token operator">=</span> <span class="token number">101</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> admin<span class="token punctuation">,</span> <span class="token string">&quot;only admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">public</span> onlyAdmin <span class="token punctuation">{</span>
        amount <span class="token operator">=</span> _amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>modifier修饰符</p></div><h4 id="_11-storage与memory-sol" tabindex="-1"><a class="header-anchor" href="#_11-storage与memory-sol" aria-hidden="true">#</a> 11.storage与memory.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">/**
    1.对于临时变量，编译器会自动选择memory(按值传递)或storage(引用址)。变长数据类型二选一
    2.如果返回数据类型长度是变长的 需要memory修饰一下，如string、byte、数组自定义结构的
    3.storage（引用址） c++指针
    4.memory修饰的临时变量相当于右值的一个拷贝，对其进行的修改不会影响到本尊。
 */</span>
<span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> name<span class="token punctuation">;</span>
    <span class="token builtin">uint8</span> age<span class="token punctuation">;</span>
    <span class="token builtin">string</span> sex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">storage_demo</span> <span class="token punctuation">{</span>
    User adminUser<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">uint8</span> _age<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> _sex<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        adminUser<span class="token punctuation">.</span>name <span class="token operator">=</span> _name<span class="token punctuation">;</span>
        adminUser<span class="token punctuation">.</span>age <span class="token operator">=</span> _age<span class="token punctuation">;</span>
        adminUser<span class="token punctuation">.</span>sex <span class="token operator">=</span> _sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>User <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> adminUser<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setAge1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> _age<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token punctuation">{</span>
        User <span class="token keyword">memory</span> user <span class="token operator">=</span> adminUser<span class="token punctuation">;</span>
        user<span class="token punctuation">.</span>age <span class="token operator">=</span> _age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setAge2</span><span class="token punctuation">(</span><span class="token builtin">uint8</span> _age<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        User <span class="token keyword">storage</span> user <span class="token operator">=</span> adminUser<span class="token punctuation">;</span>
        user<span class="token punctuation">.</span>age <span class="token operator">=</span> _age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-pure和if等-sol" tabindex="-1"><a class="header-anchor" href="#_12-pure和if等-sol" aria-hidden="true">#</a> 12.pure和if等.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">random_demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes32</span> hashA <span class="token operator">=</span> <span class="token function">keccak256</span><span class="token punctuation">(</span>abi<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> block<span class="token punctuation">.</span>number<span class="token punctuation">,</span> <span class="token string">&#39;yideng&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span>hashA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isEqual</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> a<span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token keyword">memory</span> b<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断是不是空</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> aa <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> bb <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>aa<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> bb<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>aa<span class="token punctuation">.</span>length <span class="token operator">!=</span> bb<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> aa<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>aa<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> bb<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>if终止不了合约，如果要终止合约需要用到assert</p></div><h4 id="_13-interface-sol" tabindex="-1"><a class="header-anchor" href="#_13-interface-sol" aria-hidden="true">#</a> 13.interface.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">animalEat</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">AA</span> <span class="token keyword">is</span> animalEat <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> override <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-payable-sol" tabindex="-1"><a class="header-anchor" href="#_14-payable-sol" aria-hidden="true">#</a> 14.payable.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">color_demo</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> owner<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 部署合约的人</span>
        owner <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 存钱</span>
    <span class="token keyword">function</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;must be greater than 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取钱</span>
    <span class="token keyword">function</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 必须是本人</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> owner<span class="token punctuation">,</span> <span class="token string">&#39;only owner can withdraw&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 小于当前账户余额</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>amount <span class="token operator">&lt;=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">,</span> <span class="token string">&#39;not enough balance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用合约的人</span>
        <span class="token keyword">payable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-事件-sol" tabindex="-1"><a class="header-anchor" href="#_15-事件-sol" aria-hidden="true">#</a> 15.事件.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Events</span> <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> _balances<span class="token punctuation">;</span>
    <span class="token comment">// EVM 日志的抽象 Ether.js交互</span>
    <span class="token comment">// 带有indexed属性的这个状态是存储在一个 topics</span>
    <span class="token comment">// 0 索引</span>
    <span class="token comment">// {</span>
    <span class="token comment">//      topics: [</span>
    <span class="token comment">//          0: 函数方法的签名</span>
    <span class="token comment">//          1: indexed</span>
    <span class="token comment">//          2: to</span>
    <span class="token comment">//          3: 最后indexed</span>
    <span class="token comment">//      ]</span>
    <span class="token comment">// }</span>

    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> _form<span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">_transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// 转账地址转一些基础的代币</span>
        _balances<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">;</span>
        _balances<span class="token punctuation">[</span><span class="token keyword">from</span><span class="token punctuation">]</span> <span class="token operator">-=</span> amount<span class="token punctuation">;</span>
        _balances<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+=</span> amount<span class="token punctuation">;</span>

        <span class="token keyword">emit</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-other-sol" tabindex="-1"><a class="header-anchor" href="#_16-other-sol" aria-hidden="true">#</a> 16.other.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
    1.Solidity是一个专为EVM虚拟机运行而设计的高级语言，它是一个静态的、面向对象的语言。
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提升部分" tabindex="-1"><a class="header-anchor" href="#提升部分" aria-hidden="true">#</a> 提升部分</h3><h4 id="_1-函数的重载-sol" tabindex="-1"><a class="header-anchor" href="#_1-函数的重载-sol" aria-hidden="true">#</a> 1.函数的重载.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// SPDX-License-Identifier: GPL-3.0
pragma solidity &gt;=0.7.0 &lt;0.9.0;

contract hello {
    function saySomething() public pure returns (string memory) {
        return &#39;hello world&#39;;
    }

    function saySomething(string memory something) public pure returns (string memory) {
        return something;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-库合约-sol" tabindex="-1"><a class="header-anchor" href="#_2-库合约-sol" aria-hidden="true">#</a> 2.库合约.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token comment">/**
    省GAS 好用的寒暑假的集合 lodash 大神的函数库
    1.不能存状态变量
    2.不能继承或被继承
    3.不能payable 不能接收eth
    4.不可以被销毁
 */</span>

<span class="token keyword">library</span> <span class="token class-name">Strings</span> <span class="token punctuation">{</span>
    <span class="token builtin">bytes16</span> <span class="token keyword">private</span> <span class="token keyword">constant</span> _HEX_SYMBOLS <span class="token operator">=</span> <span class="token string">&quot;0123456789abcdef&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` decimal representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Inspired by OraclizeAPI&#39;s implementation - MIT licence</span>
        <span class="token comment">// https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">uint256</span> temp <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> digits<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            digits<span class="token operator">++</span><span class="token punctuation">;</span>
            temp <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            digits <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            buffer<span class="token punctuation">[</span>digits<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">48</span> <span class="token operator">+</span> <span class="token builtin">uint256</span><span class="token punctuation">(</span>value <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            value <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;0x00&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">uint256</span> temp <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            length<span class="token operator">++</span><span class="token punctuation">;</span>
            temp <span class="token operator">&gt;&gt;=</span> <span class="token number">8</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">toHexString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation with fixed length.
     */</span>
    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> value<span class="token punctuation">,</span> <span class="token builtin">uint256</span> length<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> length <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
        buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            buffer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> _HEX_SYMBOLS<span class="token punctuation">[</span>value <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            value <span class="token operator">&gt;&gt;=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Strings: hex length insufficient&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token builtin">string</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">Strings</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-import-sol" tabindex="-1"><a class="header-anchor" href="#_3-import-sol" aria-hidden="true">#</a> 3.import.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 引入node-modules
// import &quot;hardhat/console.sol&quot;;

// 通过网址引入
// import &#39;https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol&#39;;

// import {aa} from &#39;aa.sol&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-调用合约" tabindex="-1"><a class="header-anchor" href="#_4-调用合约" aria-hidden="true">#</a> 4.调用合约</h4><h5 id="yideng-sol" tabindex="-1"><a class="header-anchor" href="#yideng-sol" aria-hidden="true">#</a> Yideng.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;hardhat/console.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Laoyuan</span> <span class="token punctuation">{</span>
    <span class="token keyword">event</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token builtin">string</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;yideng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-new调用-sol" tabindex="-1"><a class="header-anchor" href="#_4-1-new调用-sol" aria-hidden="true">#</a> 4-1.new调用.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Laoyuan <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Yideng.sol&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Import</span> <span class="token punctuation">{</span>
    Laoyuan yd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Laoyuan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        yd<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-继承调用-sol" tabindex="-1"><a class="header-anchor" href="#_4-2-继承调用-sol" aria-hidden="true">#</a> 4-2.继承调用.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./Yideng.sol&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">test</span> <span class="token keyword">is</span> Laoyuan <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">callParentSuper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        super<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-3-合约地址的调用-sol" tabindex="-1"><a class="header-anchor" href="#_4-3-合约地址的调用-sol" aria-hidden="true">#</a> 4-3.合约地址的调用.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IYideng</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">setX</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> x<span class="token punctuation">)</span> <span class="token keyword">external</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">CallContract</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">callSetX</span><span class="token punctuation">(</span><span class="token builtin">address</span> _Address<span class="token punctuation">,</span> <span class="token builtin">uint256</span> x<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        IYideng yideng <span class="token operator">=</span> <span class="token function">IYideng</span><span class="token punctuation">(</span>_Address<span class="token punctuation">)</span><span class="token punctuation">;</span>
        yideng<span class="token punctuation">.</span><span class="token function">setX</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">callGetX</span><span class="token punctuation">(</span>IYideng _Address<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> _Address<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-4-call-sol" tabindex="-1"><a class="header-anchor" href="#_4-4-call-sol" aria-hidden="true">#</a> 4-4.call.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Call</span> <span class="token punctuation">{</span>
    <span class="token comment">// (bool,data) = 目标合约地址.call{gas:xxx,value:钱}(二进制编码);</span>
    <span class="token comment">// 二进制编码 = abi.encodeWithSignature(&quot;setX(uint256)&quot;, 10,XX)</span>
    <span class="token comment">//  (bool,data) = 目标合约地址.call{value:发送数额, gas:gas数额}(abi.encodeWithSignature(&quot;setX(uint256)&quot;, 10,XX));</span>
    <span class="token keyword">event</span> <span class="token function">Response</span><span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">callSetX</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _addr<span class="token punctuation">,</span> <span class="token builtin">uint256</span> x<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// (bool success, bytes memory data) = _addr.call{value: 0, gas: 1000000}(</span>
        <span class="token comment">//     abi.encodeWithSignature(&quot;setX(uint256)&quot;, x)</span>
        <span class="token comment">// );</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token operator">=</span> _addr<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;setX(uint256)&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Response</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">callGetX</span><span class="token punctuation">(</span><span class="token builtin">address</span> _addr<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token operator">=</span> _addr<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;getX()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> abi<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-5-staticcall-sol" tabindex="-1"><a class="header-anchor" href="#_4-5-staticcall-sol" aria-hidden="true">#</a> 4-5.staticcall.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">SoldityTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">callHello</span><span class="token punctuation">(</span><span class="token builtin">address</span> addr<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token operator">=</span> addr<span class="token punctuation">.</span><span class="token function">staticcall</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;hello()&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> abi<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>staticcall只能调用值，不能写</p><p>call中</p><pre><code>当前合约的msg.sender只能是你本人，
别的合约的msg.sender只能是合约地址
</code></pre><p>delegatecall 代理call</p><pre><code>当前合约的msg.sender只能是你本人，
别的合约的msg.sender也是你
</code></pre></div><h5 id="_4-6-delegatecall-sol" tabindex="-1"><a class="header-anchor" href="#_4-6-delegatecall-sol" aria-hidden="true">#</a> 4-6.delegatecall.sol</h5><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token comment">// delegatecall和call类似，都是低级函数</span>
<span class="token comment">// call: B call C, 语境为 C (msg.sender = B, C中的状态变量受影响)</span>
<span class="token comment">// delegatecall: B delegatecall C, 语境为B (msg.sender = A, B中的状态变量受影响)</span>

<span class="token keyword">contract</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> num<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> sender<span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">Response</span><span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 通过call来调用C的setVars()函数，将改变合约C里的状态变量</span>
    <span class="token keyword">function</span> <span class="token function">callSetVars</span><span class="token punctuation">(</span><span class="token builtin">address</span> _addr<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _num<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token operator">=</span> _addr<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;setVars(uint256)&quot;</span><span class="token punctuation">,</span> _num<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Response</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 通过delegatecall来调用C的setVars()函数，将改变合约B里的状态变量</span>
    <span class="token keyword">function</span> <span class="token function">delegatecallSetVars</span><span class="token punctuation">(</span><span class="token builtin">address</span> _addr<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _num<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data<span class="token punctuation">)</span> <span class="token operator">=</span> _addr<span class="token punctuation">.</span><span class="token function">delegatecall</span><span class="token punctuation">(</span>
            abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token string">&quot;setVars(uint256)&quot;</span><span class="token punctuation">,</span> _num<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;call failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Response</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>delegatecall不能修改目标合约的值</p></div><h4 id="_5-approve-sol" tabindex="-1"><a class="header-anchor" href="#_5-approve-sol" aria-hidden="true">#</a> 5.approve.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;@openzeppelin/contract/token/ERC20/ERC20.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">exampleContract</span> <span class="token punctuation">{</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balanceOf<span class="token punctuation">;</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">public</span> allowance<span class="token punctuation">;</span>
    ERC20 USDTToken <span class="token operator">=</span> <span class="token function">ERC20</span><span class="token punctuation">(</span><span class="token string">&quot;0xdac17f958d2ee523a2206206994597c13d831ec7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        USDTToken<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> _amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> _spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        allowance<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>_spender<span class="token punctuation">]</span> <span class="token operator">=</span> _value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>approve是一个规则，当你买东西时需要把你的余额授权给平台。 注意：小心某些平台会把余额填满，别人会把钱全部转走。</p></div><h4 id="_6-燃烧代币-sol" tabindex="-1"><a class="header-anchor" href="#_6-燃烧代币-sol" aria-hidden="true">#</a> 6.燃烧代币.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">USDTContract</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> totalSupply<span class="token punctuation">;</span> <span class="token comment">// 发行量</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> balanceOf<span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">Burn</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 正如其名, 这个是烧币的.. ,用于把创建者的 token 烧掉</span>
    <span class="token keyword">function</span> <span class="token function">burn</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _value<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必须要有这么多</span>
        balanceOf<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">-=</span> _value<span class="token punctuation">;</span>
        totalSupply <span class="token operator">-=</span> _value<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">Burn</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">burn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token punctuation">{</span>
        <span class="token comment">//合约转账 黑洞合约</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-接收eth-receive和fallback-sol" tabindex="-1"><a class="header-anchor" href="#_7-接收eth-receive和fallback-sol" aria-hidden="true">#</a> 7. 接收ETH receive和fallback.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">/* 
    触发fallback() 还是 receive()?
           接收ETH
              |
         msg.data是空？
            /  \\
          是    否
          /      \\
receive()存在?   fallback()
        / \\
      是  否
    /     \\
receive()  fallback   
*/</span>

<span class="token comment">// SPDX-License-Identifier: GPL-3.0</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Fallback</span> <span class="token punctuation">{</span>
    <span class="token keyword">event</span> <span class="token function">receivedCalled</span><span class="token punctuation">(</span><span class="token builtin">address</span> Sender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> Vallue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">fallbackCalled</span><span class="token punctuation">(</span><span class="token builtin">address</span> Sender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> Value<span class="token punctuation">,</span> <span class="token builtin">bytes</span> Data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">//不要去写 业务太复杂执行时间长</span>
        <span class="token keyword">emit</span> <span class="token function">receivedCalled</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">emit</span> <span class="token function">fallbackCalled</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-发送eth-sol" tabindex="-1"><a class="header-anchor" href="#_8-发送eth-sol" aria-hidden="true">#</a> 8.发送eth.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token comment">// 3种方法发送ETH</span>
<span class="token comment">// transfer: 2300 gas, revert</span>
<span class="token comment">// send: 2300 gas, return bool</span>
<span class="token comment">// call: all gas, return (bool, data)</span>

<span class="token keyword">contract</span> <span class="token class-name">SendETH</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构造函数，payable使得部署的时候可以转eth进去</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// receive方法，接收eth时被触发</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 用transfer()发送ETH</span>
    <span class="token keyword">function</span> <span class="token function">transferETH</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        _to<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// send()发送ETH</span>
    <span class="token keyword">function</span> <span class="token function">sendETH</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理下send的返回值，如果失败，revert交易并发送error</span>
        <span class="token builtin">bool</span> success <span class="token operator">=</span> _to<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">SendFailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// call()发送ETH</span>
    <span class="token keyword">function</span> <span class="token function">callETH</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">payable</span> _to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理下call的返回值，如果失败，revert交易并发送error</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token operator">=</span> _to<span class="token punctuation">.</span>call<span class="token punctuation">{</span>value<span class="token punctuation">:</span> amount<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">revert</span> <span class="token function">CallFailed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">ReceiveETH</span> <span class="token punctuation">{</span>
    <span class="token comment">// 收到eth事件，记录amount和gas</span>
    <span class="token keyword">event</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> amount<span class="token punctuation">,</span> <span class="token builtin">uint256</span> gas<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// receive方法，接收eth时被触发</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token keyword">emit</span> <span class="token function">Log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回合约ETH余额</span>
    <span class="token keyword">function</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-合约内部创建合约-sol" tabindex="-1"><a class="header-anchor" href="#_9-合约内部创建合约-sol" aria-hidden="true">#</a> 9.合约内部创建合约.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Pair</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> factory<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token0<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> token1<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        factory <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token builtin">address</span> _tokenA<span class="token punctuation">,</span> <span class="token builtin">address</span> _tokenB<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> factory<span class="token punctuation">,</span> <span class="token string">&quot;UniswapV2: FORBIDDEN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sufficient check</span>
        token0 <span class="token operator">=</span> _tokenA<span class="token punctuation">;</span>
        token1 <span class="token operator">=</span> _tokenB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">PairFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">//通过token0和token1的地址，获取到对应的pair合约地址</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=&gt;</span> <span class="token builtin">address</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">public</span> getPair<span class="token punctuation">;</span>
    <span class="token comment">//所有的pair合约地址</span>
    <span class="token builtin">address</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">public</span> allPairs<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">createPair</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> _tokenA<span class="token punctuation">,</span>
        <span class="token builtin">address</span> _tokenB
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> pairAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Pair pair <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pair<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>_tokenA<span class="token punctuation">,</span> _tokenB<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pairAddress <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span>pair<span class="token punctuation">)</span><span class="token punctuation">;</span>
        allPairs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pairAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        getPair<span class="token punctuation">[</span>_tokenA<span class="token punctuation">]</span><span class="token punctuation">[</span>_tokenB<span class="token punctuation">]</span> <span class="token operator">=</span> pairAddress<span class="token punctuation">;</span>
        getPair<span class="token punctuation">[</span>_tokenB<span class="token punctuation">]</span><span class="token punctuation">[</span>_tokenA<span class="token punctuation">]</span> <span class="token operator">=</span> pairAddress<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-create2-sol" tabindex="-1"><a class="header-anchor" href="#_10-create2-sol" aria-hidden="true">#</a> 10.Create2.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>todo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_11-删除合约-sol" tabindex="-1"><a class="header-anchor" href="#_11-删除合约-sol" aria-hidden="true">#</a> 11. 删除合约.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">DeleteContract</span> <span class="token punctuation">{</span>
    <span class="token comment">//析构函数，销毁合约时被调用</span>
    <span class="token keyword">function</span> <span class="token function">deleteContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用selfdestruct销毁合约，并把剩余的ETH转给msg.sender</span>
        <span class="token keyword">selfdestruct</span><span class="token punctuation">(</span><span class="token keyword">payable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-abi-sol" tabindex="-1"><a class="header-anchor" href="#_12-abi-sol" aria-hidden="true">#</a> 12.ABI.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">//Application Binary Interface</span>
<span class="token comment">//ABI是一种JSON格式的接口描述语言，用于描述智能合约中的公共方法和事件</span>

<span class="token comment">/**
 * 1.ABI编码 abi.encode, abi.encodePacked, abi.encodeWithSignature, abi.encodeWithSelector
 * 2.ABI解码 abi.decode
 */</span>

<span class="token comment">// 数据是必须编码成字节码才能和智能合约交互！！！！</span>

<span class="token comment">//0xd6abfc7b000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000043078414100000000000000000000000000000000000000000000000000000000</span>

<span class="token keyword">contract</span> <span class="token class-name">ABIEncode</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token builtin">address</span> addr <span class="token operator">=</span> <span class="token number">0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token string">&quot;0xAA&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin">uint256</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> name<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 一堆东西打包到一块</span>
    <span class="token keyword">function</span> <span class="token function">encodePacked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">encodePacked</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> name<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 对函数签名进行打包</span>
    <span class="token keyword">function</span> <span class="token function">encodeWithSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">encodeWithSignature</span><span class="token punctuation">(</span>
            <span class="token string">&quot;foo(uint256,address,string,uint256[2])&quot;</span><span class="token punctuation">,</span>
            x<span class="token punctuation">,</span>
            addr<span class="token punctuation">,</span>
            name<span class="token punctuation">,</span>
            array
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">encodeWithSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">encodeWithSelector</span><span class="token punctuation">(</span>
            <span class="token comment">//函数选择器</span>
            <span class="token comment">//0xd6abfc7b000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000043078414100000000000000000000000000000000000000000000000000000000</span>
            <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token function">keccak256</span><span class="token punctuation">(</span><span class="token string">&quot;foo(uint256,address,string,uint256[2])&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            x<span class="token punctuation">,</span>
            addr<span class="token punctuation">,</span>
            name<span class="token punctuation">,</span>
            array
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-hash-sol" tabindex="-1"><a class="header-anchor" href="#_13-hash-sol" aria-hidden="true">#</a> 13.hash.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Hash {
    function hash(
        uint256 _num,
        string memory _string,
        address _addr
    ) public pure returns (bytes32) {
        //sha256
        return keccak256(abi.encodePacked(_num, _string, _addr));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-函数选择器-selector-sol" tabindex="-1"><a class="header-anchor" href="#_14-函数选择器-selector-sol" aria-hidden="true">#</a> 14.函数选择器（selector）.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Selector {
    event Log(bytes data);

    // 输入参数 to: 0x2c44b726ADF1963cA47Af88B284C06f30380fC78
    function mint(address /*to*/) external {
        emit Log(msg.data);
    }

    // 输出selector
    // &quot;mint(address)&quot;： 0x6a627842
    function mintSelector() external pure returns (bytes4 mSelector) {
        return bytes4(keccak256(&quot;mint(address)&quot;));
    }

    // 使用selector来调用函数
    function callWithSignature() external returns (bool, bytes memory) {
        // 只需要利用\`abi.encodeWithSelector\`将\`mint\`函数的\`selector\`和参数打包编码
        (bool success, bytes memory data) = address(this).call(
            abi.encodeWithSelector(
                0x6a627842,
                &quot;0x2c44b726ADF1963cA47Af88B284C06f30380fC78&quot;
            )
        );
        return (success, data);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-trycatch-sol" tabindex="-1"><a class="header-anchor" href="#_15-trycatch-sol" aria-hidden="true">#</a> 15.TryCatch.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">OnlyEven</span><span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;invalid number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onlyEven</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> b<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 输入奇数时revert</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>b <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Ups! Reverting&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        success <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">contract</span> <span class="token class-name">TryCatch</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成功event</span>
    <span class="token keyword">event</span> <span class="token function">SuccessEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 失败event</span>
    <span class="token keyword">event</span> <span class="token function">CatchEvent</span><span class="token punctuation">(</span><span class="token builtin">string</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">CatchByte</span><span class="token punctuation">(</span><span class="token builtin">bytes</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明OnlyEven合约变量</span>
    OnlyEven even<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        even <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OnlyEven</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 在external call中使用try-catch</span>
    <span class="token comment">// execute(0)会成功并释放\`SuccessEvent\`</span>
    <span class="token comment">// execute(1)会失败并释放\`CatchEvent\`</span>
    <span class="token keyword">function</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token builtin">uint</span> amount<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        try even<span class="token punctuation">.</span><span class="token function">onlyEven</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token builtin">bool</span> _success<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// call成功的情况下</span>
            <span class="token keyword">emit</span> <span class="token function">SuccessEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> _success<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> catch <span class="token function">Error</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> reason<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// call不成功的情况下</span>
            <span class="token keyword">emit</span> <span class="token function">CatchEvent</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 在创建新合约中使用try-catch （合约创建被视为external call）</span>
    <span class="token comment">// executeNew(0)会失败并释放\`CatchEvent\`</span>
    <span class="token comment">// executeNew(1)会失败并释放\`CatchByte\`</span>
    <span class="token comment">// executeNew(2)会成功并释放\`SuccessEvent\`</span>
    <span class="token keyword">function</span> <span class="token function">executeNew</span><span class="token punctuation">(</span><span class="token builtin">uint</span> a<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        try <span class="token keyword">new</span> <span class="token class-name">OnlyEven</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">returns</span><span class="token punctuation">(</span>OnlyEven _even<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// call成功的情况下</span>
            <span class="token keyword">emit</span> <span class="token function">SuccessEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            success <span class="token operator">=</span> _even<span class="token punctuation">.</span><span class="token function">onlyEven</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> catch <span class="token function">Error</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// catch revert(&quot;reasonString&quot;) 和 require(false, &quot;reasonString&quot;)</span>
            <span class="token keyword">emit</span> <span class="token function">CatchEvent</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> catch <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// catch失败的assert assert失败的错误类型是Panic(uint256) 不是Error(string)类型 故会进入该分支</span>
            <span class="token keyword">emit</span> <span class="token function">CatchByte</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-assembly-sol" tabindex="-1"><a class="header-anchor" href="#_16-assembly-sol" aria-hidden="true">#</a> 16.assembly.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">addAssembly</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> x<span class="token punctuation">,</span> <span class="token builtin">uint256</span> y<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">pure</span> <span class="token punctuation">{</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> result <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
            <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17-calldata-sol" tabindex="-1"><a class="header-anchor" href="#_17-calldata-sol" aria-hidden="true">#</a> 17.calldata.sol</h4><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.4</span><span class="token punctuation">;</span>

<span class="token comment">//EVM不能修calldata</span>
<span class="token keyword">contract</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span><span class="token punctuation">[</span><span class="token punctuation">]</span> owners<span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">addOwners</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">calldata</span> _newOwners<span class="token punctuation">)</span> <span class="token keyword">public</span> <span class="token punctuation">{</span>
        <span class="token comment">// We pass _newOwners on as a calldata array.</span>
        <span class="token function">checkUnique</span><span class="token punctuation">(</span>_newOwners<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _newOwners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            owners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_newOwners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/// 内部函数可以遍历 calldata 的数组，而不用再复制到内存了。</span>

    <span class="token keyword">function</span> <span class="token function">checkUnique</span><span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">calldata</span> _newOwners<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token punctuation">{</span>
        <span class="token comment">// address[] memory a = _newOwners;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _newOwners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _newOwners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">require</span><span class="token punctuation">(</span>_newOwners<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> _newOwners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用部分" tabindex="-1"><a class="header-anchor" href="#应用部分" aria-hidden="true">#</a> 应用部分</h3><h4 id="红包合约-sol" tabindex="-1"><a class="header-anchor" href="#红包合约-sol" aria-hidden="true">#</a> 红包合约.sol</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// SPDX-License-Identifier: GPL-3.0
pragma solidity &gt;=0.7.0 &lt;0.9.0;

contract RedPacket {
    //定义一个发红包的主体
    address payable public yideng;
    //红包的金额
    uint256 public totalAmount;
    //红包的数量
    uint256 public count;
    //是否是等额红包
    bool isEqual;
    //临时变量
    uint256 public temp = 0;

    // 是否被领取过了
    mapping(address =&gt; bool) isGrabbed;

    constructor(uint256 c, bool _isEqual) payable {
        require(msg.value &gt; 0, &quot;amount must be greater than 0&quot;);
        //部署合约的人就是发红包的人
        yideng = payable(msg.sender);
        count = c;
        isEqual = _isEqual;
        totalAmount = msg.value;
    }

    //展示一下钱包的余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function grabRedPacket() public {
        require(count &gt; 0, &quot;red packet is empty&quot;);
        require(totalAmount &gt; 0, &quot;red packet is empty&quot;);
        require(!isGrabbed[msg.sender], &quot;you have grabbed red packet&quot;);
        //已经抢过这个红包了
        isGrabbed[msg.sender] = true;

        if (count == 1) {
            temp = totalAmount / 1000000000000000000;
            payable(msg.sender).transfer(totalAmount);
        } else {
            if (isEqual) {
                uint256 amount = totalAmount / count;
                totalAmount -= amount;
                payable(msg.sender).transfer(amount);
            } else {
                //如果不是一个等额红包 计算一个10以内的随机数
                uint256 random = (uint256(
                    keccak256(
                        abi.encodePacked(
                            msg.sender,
                            yideng,
                            count,
                            totalAmount,
                            block.timestamp
                        )
                    )
                ) % 8) + 1;
                uint256 amount = (totalAmount * random) / 10;
                payable(msg.sender).transfer(amount);
                totalAmount -= amount;
            }
        }
        count--;
    }
}
#### 数据上链.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 字符串转16进制 function str2hex(str) { if (str === &#39;&#39;) { return &#39;&#39;; } var arr = []; arr.push(&#39;0x&#39;); for (var i = 0; i &lt; str.length; i++) { arr.push(str.charCodeAt(i).toString(16)); } return arr.join(&#39;&#39;); }</p><p>// console.log(str2hex(&#39;test data&#39;));</p><p>// 16进制转字符串 function hex2str(hex) { var trimedStr = hex.trim(); var rawStr = trimedStr.substr(0, 2).toLowerCase() === &#39;0x&#39; ? trimedStr.substr(2) : trimedStr; var len = rawStr.length; if (len % 2 !== 0) { alert(&#39;Illegal Format ASCII Code!&#39;); return &#39;&#39;; } var curCharCode; var resultStr = []; for (var i = 0; i &lt; len; i = i + 2) { curCharCode = parseInt(rawStr.substr(i, 2), 16); resultStr.push(String.fromCharCode(curCharCode)); } return resultStr.join(&#39;&#39;); }</p><p>console.log(hex2str(&#39;0x746573742064617461&#39;));</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="合约的两个重要网站" tabindex="-1"><a class="header-anchor" href="#合约的两个重要网站" aria-hidden="true">#</a> 合约的两个重要网站</h2><ul><li><p>chainlink 预言机 Chainlink Nodes 去中心化节点</p></li><li><p>thegraph 访问全球的区块链数据 可对链上数据进行查询 https://thegraph.com/docs/zh/</p></li><li><p>https://www.openzeppelin.com/</p></li><li><p>安装：npm openzeppelin 查看 ERC20.sol</p></li></ul><h3 id="erc20-sol" tabindex="-1"><a class="header-anchor" href="#erc20-sol" aria-hidden="true">#</a> ERC20.sol</h3><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token comment">// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/IERC20.sol)</span>

<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">&gt;=</span><span class="token version number">0.7.0</span> <span class="token operator">&lt;</span><span class="token version number">0.9.0</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @dev ERC20合约接口
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IERC20</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * 释放条件：当value单位的货币从账户from转移到账户to时，触发此事件
     * Note that \`value\` may be zero.
     */</span>
    <span class="token keyword">event</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token keyword">indexed</span> <span class="token keyword">from</span><span class="token punctuation">,</span> <span class="token builtin">address</span> <span class="token keyword">indexed</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 释放条件：当owner账户授权spender账户可以从自己的账户转移value单位的货币时，触发此事件
     */</span>
    <span class="token keyword">event</span> <span class="token function">Approval</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> <span class="token keyword">indexed</span> owner<span class="token punctuation">,</span>
        <span class="token builtin">address</span> <span class="token keyword">indexed</span> spender<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> value
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 返回代币的总供给 一共mint 1万个 yideng token
     */</span>
    <span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 返回账户accout所持有的代币数量 余额
     */</span>
    <span class="token keyword">function</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span><span class="token builtin">address</span> account<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 转账amount个代币到账户to
     * 如果成功了 返回true
     */</span>
    <span class="token keyword">function</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token builtin">address</span> to<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 返回账户owner授权给spender账户可以从自己的账户转移的代币数量
     */</span>
    <span class="token keyword">function</span> <span class="token function">allowance</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> owner<span class="token punctuation">,</span>
        <span class="token builtin">address</span> spender
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 返回owner账户授权给spender账户额度 默认是0
     * 当approve或transferFrom被调用时候 allowance发生变化
     */</span>
    <span class="token keyword">function</span> <span class="token function">approve</span><span class="token punctuation">(</span><span class="token builtin">address</span> spender<span class="token punctuation">,</span> <span class="token builtin">uint256</span> value<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * @dev 通过授权机制 从from账户到to账户转移amount个代币 转移的这部分钱会扣除allowance
     */</span>
    <span class="token keyword">function</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span>
        <span class="token builtin">address</span> <span class="token keyword">from</span><span class="token punctuation">,</span>
        <span class="token builtin">address</span> to<span class="token punctuation">,</span>
        <span class="token builtin">uint256</span> value
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合约ide" tabindex="-1"><a class="header-anchor" href="#合约ide" aria-hidden="true">#</a> 合约IDE</h2><p>https://remix.ethereum.org/</p><p>compilation details可以帮助我们生成abi <img src="`+t+'" alt="An image" loading="lazy"></p><p>deploy 浅蓝色按钮不要钱 黄色按钮花gas 红色按钮花账户中的钱和gas</p><h2 id="查询合约地址是否开源" tabindex="-1"><a class="header-anchor" href="#查询合约地址是否开源" aria-hidden="true">#</a> 查询合约地址是否开源</h2><p>https://etherscan.io/</p>',120),o=[i];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","走进智能合约的世界.html.vue"]]);export{k as default};
