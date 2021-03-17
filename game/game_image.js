class GameImage {
    constructor(game, name, x, y) {
        this.game = game
        this.texture = game.textureByName(name)
        if (x === undefined) {
            x = 0
        }
        if (y === undefined) {
            y = 0
        }
        this.x = x
        this.y = y
        console.log('this.texture', this.texture)
        this.w = this.texture.width
        this.h = this.texture.height
        this.flipY = false
        this.rotation = 0
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}
// class Player extends GameImage{
//     constructor(game, name) {
//         super(game, name);
//     }
// }