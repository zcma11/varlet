import{_ as t}from"./IconSfc.fde87e76.js";import{o as d,c as s,a5 as e}from"./vendor.85536c59.js";const a={components:{}},c={class:"varlet-site-doc"},n=e(`<h1>\u591A\u5217\u9009\u62E9\u5668</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u7EC4\u4EF6\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\u3002\u540C\u65F6\u652F\u6301\u7EA7\u8054\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u591A\u7EA7\u8054\u52A8\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Picker)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [Picker.Component.name]: Picker
  }
}
</code></pre></div><div class="card"><h3>\u51FD\u6570\u8C03\u7528</h3></div><div class="card"><h3>\u591A\u5217\u6EDA\u52A8</h3><p>Picker\u4F20\u5165\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4<code>columns</code>, <code>columns</code>\u7684\u6BCF\u4E00\u9879\u5C31\u662F\u6BCF\u4E00\u5217\u7684\u5185\u5BB9\u3002 Picker\u8FD4\u56DE\u7528\u6237\u89E6\u53D1\u72B6\u6001\uFF0C\u9009\u62E9\u7684\u6587\u672C\uFF0C\u9009\u62E9\u7684\u4E0B\u6807\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">const</span> columns = [
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index)
]
<span class="hljs-keyword">const</span> { state, texts, indexes } = <span class="hljs-keyword">await</span> Picker(columns)
</code></pre></div><div class="card"><h3>\u7EA7\u8054\u6EDA\u52A8</h3><p>Picker\u4F20\u5165\u4E00\u4E2A<code>cascade</code>\u5C5E\u6027\u5F00\u542F\u7EA7\u8054\u6EDA\u52A8\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u63D0\u4F9B\u4E86\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8\uFF0C\u5F15\u5165<code>area.json</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> columns <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/json/area.json&#39;</span>

<span class="hljs-keyword">const</span> { state, texts, indexes } = <span class="hljs-keyword">await</span> Picker({
  <span class="hljs-attr">cascade</span>: <span class="hljs-literal">true</span>,
  columns
})
</code></pre></div><div class="card"><h3>\u7EC4\u4EF6\u8C03\u7528</h3></div><div class="card"><h3>\u591A\u5217\u6EDA\u52A8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> columns = ref([
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index)
    ])

    <span class="hljs-keyword">return</span> { columns }
  }
}
</code></pre></div><div class="card"><h3>\u7EA7\u8054\u6EDA\u52A8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-picker</span> <span class="hljs-attr">cascade</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> columns = ref([
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E02\u8F96\u533A&#39;</span>
          }
        ]
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6CB3\u5317\u7701&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u77F3\u5BB6\u5E84\u5E02&#39;</span>
          }
        ]
      }
    ])

    <span class="hljs-keyword">return</span> { columns }
  }
}
</code></pre></div><div class="card"><h3>\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8</h3><p>\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u7701\u5E02\u533A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> area <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/json/area.json&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> columns = ref(area)

    <span class="hljs-keyword">return</span> { columns }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Picker Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>text-key</code></td><td>\u6587\u672C\u7684\u5C5E\u6027key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancel-button-text</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>columns</code></td><td>\u5217\u5185\u5BB9</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>textKey</code></td><td>\u6587\u672C\u7684\u5C5E\u6027key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>\u9009\u9879\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u5F39\u51FA\u5C42\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5F39\u51FA\u5C42\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u56DE\u8C03</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>texts</code></td><td>\u6587\u672C\u6570\u7EC4</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>\u521D\u59CB\u5316\u7D22\u5F15</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>text</code></td><td>\u6BCF\u4E00\u884C\u7684\u6587\u672C</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>\u5B50\u7EA7</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1confirm\u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1cancel\u4E8B\u4EF6</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>texts: Texts(\u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4)\uFF0Cindexes: number[](\u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4)</code></td></tr><tr><td><code>cancel</code></td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts(\u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4)\uFF0Cindexes: number[](\u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4)</code></td></tr><tr><td><code>confirm</code></td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>texts: Texts(\u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4)\uFF0Cindexes: number[](\u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4)</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid #eee</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>`,21),o=[n];function r(l,p,h,i,m,j){return d(),s("div",c,o)}var k=t(a,[["render",r]]);export{k as default};
