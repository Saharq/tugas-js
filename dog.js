export const dog = {
    name: "Rocky",
    owner: "Samantha",
    skin: {
        normal: "./assets/dog_normal.gif",
        sleep: "./assets/dog_sleep.gif",
        eat: "./assets/dog_eat.gif",
    },
    element: document.createElement('img'),
    width: 60,
    height: 60,
    x: 0,
    y: 0,
    speed: 15,

    show: function () {
        this.element.classList.add("dog");
        this.default();
        document.getElementById("arena").append(this.element);
    },

    default: function () {
        this.element.src = this.skin.normal;
    },

    sleep: function () {
        this.element.src = this.skin.sleep;
    },

    eat: function () {
        this.element.src = this.skin.eat;
    },

    getName: function () {
        return this.name;
    },

    getOwner: function () {
        return this.owner;
    },

    moveRight: function (x = this.speed) {
        this.x += x;
        this.element.style.left = `${this.x}px`;
    },

    moveLeft: function (x = this.speed) {
        this.x -= x;
        this.element.style.left = `${this.x}px`;
    },

    moveDown: function (y = this.speed) {
        this.y += y;
        this.element.style.top = `${this.y}px`;
    },

    moveUp: function (y = this.speed) {
        this.y -= y;
        this.element.style.top = `${this.y}px`;
    }
};