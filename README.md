<h1 align="center">@svelterialjs/svelte-extend</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/svelterialjs/svelte-extend#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/svelterialjs/svelte-extend/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/svelterialjs/svelte-extend/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/TheComputerM/@svelterialjs/svelte-extend" />
  </a>
  <a href="https://twitter.com/TheComputerM" target="_blank">
    <img alt="Twitter: TheComputerM" src="https://img.shields.io/twitter/follow/TheComputerM.svg?style=social" />
  </a>
</p>

> Generate new Svelte components by extending existing ones.

### 🏠 [Homepage](https://github.com/svelterialjs/svelte-extend#readme)

## Install

```sh
npm i -D @svelterialjs/svelte-extend
```

## Usage

```html
<script>
  import Component from './Component.svelte';
  import createComponent from '@svelterialjs/svelte-extend';
  const NewComponent = createComponent(Component, {value: 'hello'});
</script>

<!-- Both are the SAME -->
<Component value="hello" />
<NewComponent />
<!-- Even works with SSR! -->
```

## Author

👤 **TheComputerM**

* Website: https://thecomputerm.github.io/
* Twitter: [@TheComputerM](https://twitter.com/TheComputerM)
* Github: [@TheComputerM](https://github.com/TheComputerM)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/svelterialjs/svelte-extend/issues). You can also take a look at the [contributing guide](https://github.com/svelterialjs/svelte-extend/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [TheComputerM](https://github.com/TheComputerM).<br />
This project is [MIT](https://github.com/svelterialjs/svelte-extend/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
