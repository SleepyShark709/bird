class Scene extends GameScene{
    constructor(game) {
        super(game);
        // 背景
        let bg = new GameImage(game, 'bg')
        this.addElement(bg)
        // 加入水管
        this.pipe = new Pipes(game)
        this.addElement(this.pipe)
        // 循环移动的地面
        this.grouds = []
        for (let i = 0; i < 30; i++) {
            let g = new GameImage(game, 'land')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grouds.push(g)
        }
        this.skipCount = 5
        // 小鸟
        let b = new GameAnimation(game)
        b.x = 100
        b.y = 200
        this.b = b
        this.addElement(b)
        this.setupInputs()
        let ct = new Count(game)
        this.count = ct
        let aaa = new GameImage(this.game, `f0`,140, 20)
        this.addElement(aaa)
    }
    update() {
        super.update();
        // 让地面移动
        this.skipCount--
        let offset = -5
        if (this.skipCount === 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 30; i++) {
            let g = this.grouds[i]
            g.x += offset
        }

        // 下面是加入碰撞后结束游戏的功能
        let bird = this.b
        for (let i = 0; i < this.grouds.length; i++) {
            let groud = this.grouds[i]
            bird.pengzhuang(groud)
        }
        for (let i = 0; i < this.pipe.pipes.length; i++) {
            let pipe = this.pipe.pipes[i]
            bird.pengzhuang(pipe)
            // 下面是鸟经过管子

            if (bird.x === pipe.x) {
                this.count.througth()
                if (this.count.count < 10) {
                    this.popElement()
                    let aaa = new GameImage(this.game, `f${this.count.count}`, 140, 20)
                    this.addElement(aaa)
                } else {
                    if (this.count.count === 10) {
                        this.popElement()
                    } else {
                        this.popElement()
                        this.popElement()
                    }
                    let gewei = this.count.count % 10
                    let shiwei = (this.count.count - gewei) / 10
                    let a = new GameImage(this.game, `f${gewei}`, 150, 20)
                    let b = new GameImage(this.game, `f${shiwei}`, 130, 20)
                    this.addElement(a)
                    this.addElement(b)
                }

                // console.log('this.count.count', this.count.count)
                break
            }
        }
    }

    setupInputs() {
        let self = this
        self.game.registerAction('a', () => {
            this.b.move(-2)
        })
        self.game.registerAction('d', () => {
            this.b.move(2)
        })
        self.game.registerAction('j', () => {
            this.b.jump()
        })
    }
}
