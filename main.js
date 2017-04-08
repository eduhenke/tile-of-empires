///<reference path = "typescript/pixi"/>
///<reference path = "typescript/p2"/>
///<reference path = "typescript/phaser"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create });
    }
    SimpleGame.prototype.create = function () {
        var text = "Klock Visdado!";
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.game.add.text(0, 0, text, style);
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=main.js.map