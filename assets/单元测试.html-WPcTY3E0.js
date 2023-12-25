import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as d,c as o,b as e,d as t,e as s,a as i}from"./app-cbOojWoE.js";const l="/assets/image/unit.png",c={},p=e("h1",{id:"测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#测试","aria-hidden":"true"},"#"),t(" 测试")],-1),h=e("h2",{id:"单元测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单元测试","aria-hidden":"true"},"#"),t(" 单元测试")],-1),u={href:"https://jestjs.io/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add --save-dev jest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="类型检查" tabindex="-1"><a class="header-anchor" href="#类型检查" aria-hidden="true">#</a> 类型检查</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add @types/jest -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jest-stare" tabindex="-1"><a class="header-anchor" href="#jest-stare" aria-hidden="true">#</a> jest-stare</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add jest-stare -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>jest-stare</code> 是一个用于生成 Jest 测试报告的工具。它提供了一个美观的、可定制的 HTML 报告，以便更清晰地查看 Jest 测试运行的结果。以下是一些关键特点和用法：</p><p>生成详细的 HTML 报告： jest-stare 生成一个详细的 HTML 报告，其中包含有关测试运行的各种信息，如测试用例、通过和失败的测试、测试覆盖率等。</p><ul><li><p><strong>可定制的报告</strong>： 报告的外观和内容是可定制的，你可以配置不同的主题和样式，以满足你的项目需求。</p></li><li><p><strong>支持 Jest 插件</strong>： jest-stare 支持与 Jest 插件集成，可以通过配置文件或命令行选项轻松启用或禁用特定的插件。</p></li><li><p><strong>易于集成</strong>： 安装 jest-stare 后，你可以通过运行命令行命令或在 npm 脚本中配置 jest-stare，从而轻松集成到 Jest 测试运行中。</p></li><li><p><strong>历史记录</strong>： jest-stare 会保留历史记录，允许你跟踪测试运行的变化。这有助于在代码库的不同提交之间进行比较。</p></li></ul><h3 id="需要用-swc-jest编译" tabindex="-1"><a class="header-anchor" href="#需要用-swc-jest编译" aria-hidden="true">#</a> 需要用@swc/jest编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add @swc/jest -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="majestic" tabindex="-1"><a class="header-anchor" href="#majestic" aria-hidden="true">#</a> majestic</h3><p>可视化的单元测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add majestic -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在package.json scripts中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;test:ui&quot;: &quot;majestic&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行，会启动如下项目，点击run，可执行单个单元测试</p><figure><img src="`+l+'" alt="单元测试" tabindex="0" loading="lazy"><figcaption>单元测试</figcaption></figure><h2 id="e2e测试" tabindex="-1"><a class="header-anchor" href="#e2e测试" aria-hidden="true">#</a> E2E测试</h2><p>E2E 测试（端到端测试）是一种软件测试方法，它的目标是测试整个应用程序的流程，从用户界面一端到另一端，以确保应用程序在真实用户使用的环境中能够正常运行。E2E 测试模拟用户的实际使用场景，测试应用程序的交互、功能和性能。</p><p>以下是一些关键特点和目标，E2E 测试通常涵盖了：</p><ol><li><p><strong>整体测试</strong>： E2E 测试覆盖了整个应用程序或系统，而不仅仅是单个组件或模块。它关注用户在应用程序中的完整流程，包括导航、输入、点击等。</p></li><li><p><strong>用户行为模拟</strong>： E2E 测试尝试模拟用户的实际行为。测试脚本会模拟用户在浏览器中的交互，如点击链接、填写表单、提交表单等。</p></li><li><p><strong>多端测试</strong>： E2E 测试可以在多种浏览器、不同设备和操作系统上运行，以确保应用程序在各种环境中的兼容性。</p></li><li><p><strong>性能测试</strong>： 一些 E2E 测试工具允许开发人员评估应用程序的性能，包括加载时间、响应时间等。</p></li><li><p><strong>自动化</strong>： E2E 测试通常是自动化的，测试脚本通过编程语言或测试工具自动执行。这有助于提高测试效率，尤其是在应用程序进行频繁更改时。</p></li><li><p><strong>提前发现问题</strong>： 由于 E2E 测试覆盖了整个应用程序，因此它有助于在将应用程序交付给最终用户之前发现潜在的问题，如功能错误、界面问题等。</p></li></ol><p>一些流行的 E2E 测试工具包括：</p>',23),m=e("li",null,[e("strong",null,"Selenium"),t("： 一个用于自动化浏览器操作的开源工具，支持多种编程语言。")],-1),v={href:"https://www.cypress.io/",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("strong",null,"Playwright"),t("： 一个由 Microsoft 推出的开源工具，支持多种浏览器，提供强大的自动化功能。 通过E2E 测试，开发团队可以更有信心地发布他们的应用程序，因为这种测试方法能够检测到用户可能遇到的各种问题，从而提高应用程序的质量和稳定性。")],-1),x={href:"https://rize.js.org/#getting-started",target:"_blank",rel:"noopener noreferrer"},_=i(`<h3 id="cypress" tabindex="-1"><a class="header-anchor" href="#cypress" aria-hidden="true">#</a> cypress</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install cypress --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add @chainsafe/dappeteer -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="一个ui测试库" tabindex="-1"><a class="header-anchor" href="#一个ui测试库" aria-hidden="true">#</a> 一个ui测试库</h2>`,5),f={href:"https://github.com/garris/BackstopJS",target:"_blank",rel:"noopener noreferrer"},k=i('<p>BackstopJS 是一个用于网站可视化回归测试（Visual Regression Testing）的工具。它的主要功能是捕捉网站的屏幕截图，并在将来的测试中与基准屏幕截图进行比较，以便检测任何视觉上的变化。</p><p>以下是 BackstopJS 的一些关键特性和用法：</p><ol><li><p><strong>可视化回归测试</strong>： BackstopJS 通过比较屏幕截图来执行可视化回归测试。这有助于检测页面样式、布局或内容发生的变化，尤其在进行代码更改、更新或优化时。</p></li><li><p><strong>基准截图</strong>： 在测试开始之前，你需要运行 BackstopJS 来捕捉基准屏幕截图，这些截图将用作未来测试的比较基准。这通常是在项目初期或确认页面样式稳定的时候进行的。</p></li><li><p><strong>配置文件</strong>： BackstopJS 使用一个配置文件，其中定义了测试场景、视口大小、比较设置等。你可以根据项目需求进行配置，以满足特定的测试场景。</p></li><li><p><strong>命令行工具</strong>： BackstopJS 提供了命令行工具，使其易于集成到自动化构建流程中。你可以通过命令行运行测试，并生成测试结果报告。</p></li><li><p><strong>报告和可视化</strong>： BackstopJS 生成详细的测试报告，展示页面的每个视图和检测到的差异。这有助于开发人员快速定位并解决视觉问题。</p></li><li><p><strong>支持测试回归</strong>： 可以使用 BackstopJS 进行测试回归，以确保在进行代码更改后没有引入新的视觉问题。</p></li></ol><p>使用 BackstopJS 的一般流程包括：</p><ol><li>安装 <code>BackstopJS</code> 到你的项目中。</li><li>运行 <code>backstop init</code> 初始化配置文件。</li><li>运行 <code>backstop reference</code> 捕捉基准屏幕截图。</li><li>运行 <code>backstop test</code> 执行可视化回归测试。 通过使用 BackstopJS，开发人员可以更容易地进行视觉回归测试，确保网站在进行代码更改后仍然保持预期的外观和布局。</li></ol><h2 id="https-typicode-github-io-husky" tabindex="-1"><a class="header-anchor" href="#https-typicode-github-io-husky" aria-hidden="true">#</a> https://typicode.github.io/husky/</h2><h2 id="https-www-travis-ci-com" tabindex="-1"><a class="header-anchor" href="#https-www-travis-ci-com" aria-hidden="true">#</a> https://www.travis-ci.com/</h2>',7);function E(j,J){const a=n("ExternalLinkIcon");return d(),o("div",null,[p,h,e("p",null,[e("a",u,[t("jest"),s(a)])]),g,e("ol",null,[m,e("li",null,[e("a",v,[t("Cypress"),s(a)]),t("： 一个用于现代 web 应用程序测试的 JavaScript 测试框架，具有直观的 API 和实时重新加载功能。")]),b,e("li",null,[e("a",x,[t("rize"),s(a)]),t(": 无头浏览器的端到端测试")])]),_,e("p",null,[e("a",f,[t("BackstopJS github"),s(a)])]),k])}const S=r(c,[["render",E],["__file","单元测试.html.vue"]]);export{S as default};
