import{_ as s}from"./IconSfc.fde87e76.js";import{o as t,c as e,a5 as n}from"./vendor.85536c59.js";const a={components:{}},o={class:"varlet-site-doc"},l=n(`<h1>@varlet/cli</h1><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development</p><div class="card"><h3>Feature</h3><ul><li>1.Out-of-the-box component library development environment</li><li>2.Out-of-the-box component library compilation tool, support exporting <code>esm</code> and <code>umd</code> two module codes</li><li>3.Component library document site based on configuration files, support Baidu statistics and theme customization</li><li>4.Supports <code>single file component (sfc)</code> and <code>tsx, jsx</code> two styles of component library writing styles</li><li>5.Code inspection tool out of the box</li><li>6.Unit testing tools out of the box</li><li>7.Out-of-the-box code publishing tool, publish to npm and github, and automatically generate a change log</li><li>8.Support <code>Typescript</code></li></ul></div><div class="card"><h3>Quickstart</h3><p><code>@varlet/cli</code> has built-in <code>single file component (sfc)</code> and <code>tsx, jsx</code> two styles of component library project templates, which can be directly generated by the <code>gen</code> command. To help users directly enter the development of the component itself, it is recommended to use <code>yarn</code> as a package management tool. First, make sure that <code>yarn</code> is installed and added to the system environment variables. The installation and configuration methods of <code>yarn</code> are not introduced here.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> Install <span class="hljs-built_in">command</span> line tools</span>
yarn global add @varlet/cli
<span class="hljs-meta">#</span><span class="bash"> Use the gen <span class="hljs-built_in">command</span> to generate the project</span>
varlet-cli gen projectName
cd projectName
yarn
yarn dev
</code></pre><p>Then by simply modifying some basic information of the component library template, you can start the development of the component library</p></div><h2>Advanced customization</h2><div class="card"><h3>Configuration file</h3><p>The <code>varlet.config.js</code> in the project root directory is used to manage the specific details of the entire component library project</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>Full name of the component library</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, Will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the document</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the document</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Document default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the right mobile phone preview</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>Document themes</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Document code snippet style related</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile document structure configuration</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteThemes</h4><p>Theme variables are related, because the default theme variables may be modified from time to time, subject to the theme of the <code>varlet</code> official document</p><table><thead><tr><th>Variable</th></tr></thead><tbody><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-mobile-cell-hover-background</code></td></tr></tbody></table><h4>SiteHighlight</h4><p>Code snippets are highlighted, based on <a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight\u7684css\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteAnalysis</h4><p>Statistics related to buried points</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>\u767E\u5EA6\u7EDF\u8BA1\u811A\u672C\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SitePC, SiteMobile</h4><p>The document structure is partly related, and the example configuration is as follows</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">defaultLanguage</span>: <span class="hljs-string">&#39;en-US&#39;</span>,
  <span class="hljs-attr">pc</span>: {
    <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#39;/home&#39;</span>,
    <span class="hljs-attr">title</span>: {
      <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;A components library&#39;</span>,
    },
    <span class="hljs-attr">header</span>: {
      <span class="hljs-attr">i18n</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">github</span>: <span class="hljs-string">&#39;https://github.com/haoziqaq/varlet&#39;</span>,
    },
    <span class="hljs-attr">menu</span>: [
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;Develop Guide&#39;</span>,
        },
        <span class="hljs-comment">// Sidebar menu directory</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">1</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;Basic Intro&#39;</span>,
        },
        <span class="hljs-attr">doc</span>: <span class="hljs-string">&#39;home&#39;</span>,
        <span class="hljs-comment">// Index the md document in the root directory of the project</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">3</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;Basic Component&#39;</span>,
        },
        <span class="hljs-attr">type</span>: <span class="hljs-number">1</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;Button&#39;</span>,
        },
        <span class="hljs-attr">doc</span>: <span class="hljs-string">&#39;button&#39;</span>,
        <span class="hljs-comment">// Md document in the root directory of the index component</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
  <span class="hljs-attr">mobile</span>: {
    <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#39;/home&#39;</span>,
    <span class="hljs-attr">title</span>: {
      <span class="hljs-string">&#39;en-US&#39;</span>: <span class="hljs-string">&#39;A components library&#39;</span>,
    },
    <span class="hljs-attr">header</span>: {
      <span class="hljs-attr">i18n</span>: <span class="hljs-literal">null</span>,
    },
  },
}
</code></pre></div><div class="card"><h3>Commands Intro</h3><h4>Start the development server</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli dev
</code></pre><h4>Build documentation site</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli build
</code></pre><h4>Build component library code</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli compile
</code></pre><h4>Perform all unit tests</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli test
</code></pre><h4>Execute unit tests in watch mode</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli test -w
</code></pre><h4>Lint code</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli lint
</code></pre><h4>Quickly create a component folder</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli create &lt;componentName&gt;
</code></pre><h4>Generate a project template</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli gen &lt;projectName&gt;
</code></pre></div><div class="card"><h3>babel</h3><p>To configure <code>babel</code>, first specify the target browser in <code>package.json</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;browserslist&quot;</span>: [
    <span class="hljs-string">&quot;Chrome &gt;= 51&quot;</span>,
    <span class="hljs-string">&quot;iOS &gt;= 10&quot;</span>
  ]
}
</code></pre><p>create <code>babel.config,js</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">presets</span>: [
    [
      <span class="hljs-string">&#39;@varlet/cli/preset&#39;</span>,
      {
        <span class="hljs-attr">loose</span>: <span>process.env</span>.NODE_ENV === <span class="hljs-string">&#39;compile&#39;</span>,
      },
    ],
  ],
}
</code></pre></div><div class="card"><h3>git and npm</h3><h4>git-hook</h4><p><code>husky</code>, <code>lint-staged</code> cooperate with <code>eslint</code>, <code>stylelint</code>, <code>commitlint</code> to check before commit, <code>package.json</code> configuration is as follows</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;prepare&quot;</span>: <span class="hljs-string">&quot;husky install&quot;</span>,
    <span class="hljs-attr">&quot;commit&quot;</span>: <span class="hljs-string">&quot;git-cz&quot;</span>
  },
  <span class="hljs-attr">&quot;config&quot;</span>: {
    <span class="hljs-attr">&quot;commitizen&quot;</span>: {
      <span class="hljs-attr">&quot;path&quot;</span>: <span class="hljs-string">&quot;cz-conventional-changelog&quot;</span>
    }
  },
  <span class="hljs-attr">&quot;lint-staged&quot;</span>: {
    <span class="hljs-attr">&quot;*.{ts,tsx,js,vue,less}&quot;</span>: <span class="hljs-string">&quot;prettier --write&quot;</span>,
    <span class="hljs-attr">&quot;*.{ts,tsx,js,vue}&quot;</span>: <span class="hljs-string">&quot;eslint --fix&quot;</span>,
    <span class="hljs-attr">&quot;*.{vue,css,less}&quot;</span>: <span class="hljs-string">&quot;stylelint --fix&quot;</span>
  },
  <span class="hljs-attr">&quot;eslintConfig&quot;</span>: {
    <span class="hljs-attr">&quot;root&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;ignorePatterns&quot;</span>: [
      <span class="hljs-string">&quot;es/**&quot;</span>,
      <span class="hljs-string">&quot;umd/**&quot;</span>,
      <span class="hljs-string">&quot;site/**&quot;</span>,
      <span class="hljs-string">&quot;public/**&quot;</span>,
      <span class="hljs-string">&quot;src/*/__tests__/**&quot;</span>,
      <span class="hljs-string">&quot;.varlet/**&quot;</span>
    ],
    <span class="hljs-attr">&quot;extends&quot;</span>: [
      <span class="hljs-string">&quot;@varlet&quot;</span>
    ]
  },
  <span class="hljs-attr">&quot;stylelint&quot;</span>: {
    <span class="hljs-attr">&quot;extends&quot;</span>: [
      <span class="hljs-string">&quot;@varlet/stylelint-config&quot;</span>
    ],
    <span class="hljs-attr">&quot;ignoreFiles&quot;</span>: [
      <span class="hljs-string">&quot;es/**&quot;</span>,
      <span class="hljs-string">&quot;umd/**&quot;</span>,
      <span class="hljs-string">&quot;site/**&quot;</span>,
      <span class="hljs-string">&quot;coverage/**&quot;</span>,
      <span class="hljs-string">&quot;public/**&quot;</span>,
      <span class="hljs-string">&quot;highlight/**&quot;</span>
    ]
  }
}
</code></pre><p>create <code>commitlint.config.js</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// commitlint.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">extends</span>: [<span class="hljs-string">&#39;@commitlint/config-conventional&#39;</span>],
}
</code></pre><p>create <code>.prettierignore</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
</code></pre></div><div class="card"><h3>typescript</h3><p>create <code>tsconfig.json</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {
    <span class="hljs-attr">&quot;strict&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;downlevelIteration&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;declaration&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;skipLibCheck&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;esModuleInterop&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;allowJs&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;lib&quot;</span>: [<span class="hljs-string">&quot;esnext&quot;</span>, <span class="hljs-string">&quot;dom&quot;</span>],
    <span class="hljs-attr">&quot;allowSyntheticDefaultImports&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;jsx&quot;</span>: <span class="hljs-string">&quot;preserve&quot;</span>
  }
}
</code></pre></div><div class="card"><h3>Release code</h3><p>Use <code>release-it</code> and <code>conventional-changelog</code> for code release and update log generation. The configuration of <code>package.json</code> is as follows</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;genlog&quot;</span>: <span class="hljs-string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>,
    <span class="hljs-attr">&quot;genAllLog&quot;</span>: <span class="hljs-string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;</span>,
    <span class="hljs-attr">&quot;release&quot;</span>: <span class="hljs-string">&quot;yarn compile &amp;&amp; release-it&quot;</span>
  },
  <span class="hljs-attr">&quot;release-it&quot;</span>: {
    <span class="hljs-attr">&quot;git&quot;</span>: {
      <span class="hljs-attr">&quot;changelog&quot;</span>: <span class="hljs-string">&quot;git log --pretty=format:\\&quot;* %s (%h)\\&quot; \${from}...\${to}&quot;</span>,
      <span class="hljs-attr">&quot;tagName&quot;</span>: <span class="hljs-string">&quot;v\${version}&quot;</span>,
      <span class="hljs-attr">&quot;commitMessage&quot;</span>: <span class="hljs-string">&quot;chore: release \${version}&quot;</span>,
      <span class="hljs-attr">&quot;requireCleanWorkingDir&quot;</span>: <span class="hljs-literal">false</span>
    },
    <span class="hljs-attr">&quot;plugins&quot;</span>: {
      <span class="hljs-attr">&quot;@release-it/conventional-changelog&quot;</span>: {
        <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;angular&quot;</span>,
        <span class="hljs-attr">&quot;infile&quot;</span>: <span class="hljs-string">&quot;CHANGELOG.md&quot;</span>
      }
    }
  }
}
</code></pre><h4>Note before release</h4><ul><li>1.The registry of npm and yarn must set to the official npm mirror</li><li>2.Both npm and yarn must execute the login command for user login</li></ul></div>`,11),c=[l];function r(p,i,d,h,u,m){return t(),e("div",o,c)}var q=s(a,[["render",r]]);export{q as default};
