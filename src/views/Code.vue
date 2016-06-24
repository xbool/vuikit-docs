<template>
  <div>
    <h2>Code</h2>
    <hr class="uk-article-divider">
    <!-- DESC -->
    <div class="uk-margin-large">
      <p>The <code>vk-docs-code</code> component will copy it raw inner content,
        encode its HTML, beautify, highlight and wrapper it all in a <code>pre</code> tag.
        Provides a fast and easy way to show code examples. Currently only supports HTML.</p>
    </div>
    <vk-docs-code>
      <vk-docs-code>
        // the HTML code example
      </vk-docs-code>
    </vk-docs-code>
  </div>
</template>
