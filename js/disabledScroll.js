window.disableScroll = function () {
  const widthScroll = window.innerWidth - document.body.offsetWidth // получение ширины скролла
  document.body.dbscrollY = window.scrollY // позволяет остаться в том же месте страницы
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    padding-right: ${widthScroll}px;
  `// будет поддерживаться в браузерах на iOS 
}

window.enableScroll = function () {
  document.body.style.cssText = ``
  window.scroll({top: document.body.dbscrollY})
}