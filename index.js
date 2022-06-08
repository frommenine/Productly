document.querySelector('.strategies__menu-wrap > .strategies__menu-btn').onclick = function(){
    console.log(this)  // теперь this это кнопка
    this.style.background = "#FF9900"
    this.style.border = "#FF9900"
    this.style.color = "#FFFFFF";
}