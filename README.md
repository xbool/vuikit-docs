<p align="center">
  <a href="https://vuikit.github.io/vuikit/#!/alert">
    <img width="150" src="https://cdn.rawgit.com/vuikit/vuikit/master/static/logo-vuikit.svg">
  </a>
</p>

> Vuikit library for Documentation Apps

VuikitDocs is a set of components, part of the Vuikit collection, crafted specifically for
building Documentation Vue Apps.

We have setup a live [demo](http://vuikit.github.io/vuikit-docs) with technical information for each component.

## Dependencies

- [Vue](http://vuejs.org/) (^1.0.24)

## Code Samples
> Note that all code examples are using ES6 syntax

VuikitDocs components are registered globally by default and ready to be used immediately.

```js
import Vue from 'vue'
import VuikitDocs from 'vuikit-docs'

Vue.use(VuikitDocs)
```
```html
<template>
  <div>
    <vk-docs-code>
      // The code to be displayed
    </vk-docs-code>
  </div>
</template>
```

Although is possible to load and register them individually.

```js
import Vue from 'vue'
import { Code } from 'vuikit-docs'

// globally
Vue.component('VkDocsCode', Code)

// or locally
new Vue({
  components: {
    VkDocsCode: Code
  }
})
```

Changing the output or adding specific features is straightforward by extending a component.

```js
import Vue from 'vue'
import { Code } from 'vuikit-code'

Vue.component('TmCode', {
  extends: Code,
  template: '', // the new output
  props: {} // new features
  ...
})
```

### NPM

```bash
npm install vuikit-docs --save
```
```js
import Vue from 'vue'
import VuikitDocs from 'vuikit-docs'

Vue.use(VuikitDocs) // or register individually
```

### Browser

Make sure Vue is loaded upfront and then load `dist/vuikit-docs.js`.

## Developers

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for distribution
npm run build
```

## License

VuikitDocs is open source and released under the [MIT License](LICENSE.md).

Copyright (c) 2016 ZOOlanders.com
