class AppSpriteSheetLoader extends Mx.SpriteSheetLoader {

    constructor() {
        super(
            './assets/img/',
            [
                ['player-units', 48, 48, 0, 2],
                ['enemy-units', 48, 48, 0, 2],
            ]
        )
    }

}