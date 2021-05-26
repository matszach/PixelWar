class AppSpriteSheetLoader extends Mx.SpriteSheetLoader {

    constructor() {
        super(
            './assets/img/',
            [
                ['player-units', 48, 48, 0, 2],
                ['enemy-units', 48, 48, 0, 2],
                ['top-menu-background', 750, 50, 0, 2],
                ['top-menu-unit-button', 40, 50, 0, 2],
                ['blood', 16, 16, 0, 2],
            ]
        )
    }

}