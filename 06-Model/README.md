# 06-Model 记录

## Element.classList

[MDN Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## ⭐querySelectorAll 配合 for 循环遍历添加功能

```javascript
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); //🔴注意这里的OpenModal后面没有加()，否则会立即执行
```
