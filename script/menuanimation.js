class HamburguerAnimation {
    constructor (MenuHamburguer, MenuList, CorpoFundo, QuemSou) {
        this.MenuHamburguer = document.querySelector(MenuHamburguer);
        this.MenuList = document.querySelector(MenuList);
        this.CorpoFundo = document.querySelector(CorpoFundo);
        this.QuemSou = document.querySelector(QuemSou);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.QuemSou.classList.toggle(this.activeClass);
        this.CorpoFundo.classList.toggle(this.activeClass);
        this.MenuList.classList.toggle(this.activeClass);
        this.MenuHamburguer.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.MenuHamburguer.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.MenuHamburguer) {
            this.addClickEvent();
        }
        return this;
    }
} 

const AnimationHamburguer = new HamburguerAnimation(
    // tem que ser em sequencia de acordo com css
    "#menumobile",
    "#menulista",
    "#corpo",
    "#quemsou"
);
    AnimationHamburguer.init();