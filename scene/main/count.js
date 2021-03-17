class Count extends GameScene{
    constructor(game) {
        super(game)
        this.game = game
        this.count = 0
        console.log('this.count in Count', this.count)
        let score = new GameImage(this.game, `f${this.count}`)
        this.addElement(score)
    }
    static new(game) {
        return new this(game)
    }
    througth() {
        this.count += 1
    }
    update() {
    }
    draw() {
    }
}