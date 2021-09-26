import{_ as t}from"./IconSfc.fde87e76.js";import{o as e,c as s,a5 as d}from"./vendor.85536c59.js";const n={components:{}},a={class:"varlet-site-doc"},c=d(`<h1>Picker</h1><div class="card"><h3>Intro</h3><p>Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Picker)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [Picker.Component.name]: Picker
  }
}
</code></pre></div><div class="card"><h3>Function Call</h3></div><div class="card"><h3>Multi-column Picker</h3><p>A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">const</span> columns = [
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
  <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index)
]
<span class="hljs-keyword">const</span> { state, texts, indexes } = <span class="hljs-keyword">await</span> Picker(columns)
</code></pre></div><div class="card"><h3>Cascade Picker</h3><p>Passing in a <code>cascade</code> attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import <code>area.json</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> columns <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/json/area.json&#39;</span>

<span class="hljs-keyword">const</span> { state, texts, indexes } = <span class="hljs-keyword">await</span> Picker({
  <span class="hljs-attr">cascade</span>: <span class="hljs-literal">true</span>,
  columns
})
</code></pre></div><div class="card"><h3>Component Call</h3></div><div class="card"><h3>Multi-column Picker</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> columns = ref([
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
      <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">20</span> }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> index),
    ])

    <span class="hljs-keyword">return</span> { columns }
  }
}
</code></pre></div><div class="card"><h3>Cascade Picker</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-picker</span> <span class="hljs-attr">cascade</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
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
</code></pre></div><div class="card"><h3>The three-level linkage between the provincial and municipal levels</h3><p>The component library provides complete provincial information and can be used directly.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> area <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/json/area.json&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> columns = ref(area)

    <span class="hljs-keyword">return</span> { columns }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Picker Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>Option height(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>Option height</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>texts</code></td><td>Text array</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>Initialize index</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Each line of text</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>children tree</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>texts: Texts(Text array), indexes: number[](picked index array)</code></td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>texts: Texts(Text array), indexes: number[](picked index array)</code></td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>texts: Texts(Text array), indexes: number[](picked index array)</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>cancel button content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>title content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>confirm button content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid #eee</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>`,21),o=[c];function r(l,i,p,h,m,u){return e(),s("div",a,o)}var b=t(n,[["render",r]]);export{b as default};
