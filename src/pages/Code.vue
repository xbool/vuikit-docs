<template>
  <vk-docs-layout-page>
    <div class="uk-block">
      <h2>Code</h2>
      <hr class="uk-article-divider">
      <!-- DESC -->
      <div class="uk-margin-large">
        The <code>vk-docs-code</code> component will copy it raw inner content,
        encode its HTML, beautify, highlight and wrapper it all in a <code>pre</code> tag.
        Provides a fast and easy way to show code examples supporting <code>HTML</code>,
        <code>JSON</code> and <code>JavaScript</code>.
      </div>
      <h3>HTML Example</h3>
      <vk-docs-code language="html">{{ html }}</vk-docs-code>
      <h3>JSON Example</h3>
      <vk-docs-code language="json">{{ json }}</vk-docs-code>
      <h3>JavaScript Example</h3>
      <vk-docs-code language="javascript">{{ javascript }}</vk-docs-code>
    </div>
  </vk-docs-layout-page>
</template>

<script>
export default {
  name: 'PageCode',
  data: () => ({
    html: '<vk-docs-code language="html">{{ code }}</vk-docs-code>',
    json: '{ "code": "Code example..." }',
    javascript: 'function (arg) { console.log(arg) }'
  })
}
</script>
