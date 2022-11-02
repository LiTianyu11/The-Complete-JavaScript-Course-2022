# 06-Model 记录

## Element.classList

```javascript
<div class="modal hidden"> </div>;

const modal = document.querySelector('.modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
```

## querySelectorAll 配合 for 循环遍历添加功能

```javascript
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); //🔴注意这里的OpenModal后面没有加()，否则会立即执行
```

## KeyboardEvent()

**⭐[Element: keydown event:](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)**
按下键盘按键时触发

```javascript
document.addEventListener('keydown', function (e) {
  //e.key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

**[Element: keyup event:](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)**
松开键盘时触发

## DOMTokenList.contains()

[MDN DOMTokenList.contains()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains)

```javascript
//Syntax
contains(token);

//Example
<span class="a b c"></span>; //html

const span = document.querySelector('span');
span.textContent = span.classList.contains('c')
  ? "The classList contains 'c'"
  : "The classList does not contain 'c'";
//The classList contains 'c'
```
