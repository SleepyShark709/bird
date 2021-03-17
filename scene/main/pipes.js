class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        // 管子上下间的间隔
        this.pipeSpace = 150
        this.管子间距 = 200
        // 让管子同时出现三根
        this.columsOfPipe = 3
        for (let i = 0; i < this.columsOfPipe; i++) {
            let p1 = GameImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.管子间距
            let p2 = GameImage.new(game, 'pipe')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    // 用来设置 y 的随机值
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(200, 400)
        p2.y = p1.y - p1.h - this.pipeSpace
    }
    debug() {
        this.管子横向间距 = config.管子横向间距.value
        this.pipeSpace = config.pipe_space.value
    }
    update() {
        // 设置 x 坐标
        for (let p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.管子间距 * this.columsOfPipe
            }
        }
    }

    draw() {
        let context = this.game.context
        for(let p of this.pipes) {
            context.save()
            let w2 = p.w / 2
            let h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            let scaleX = p.flipX ? -1 : 1
            let scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2,  -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }


}