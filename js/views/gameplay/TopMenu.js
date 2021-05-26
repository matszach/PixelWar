class TopMenu extends Mx.Gui.GuiComponent {

    constructor(x, y, viewRef) {
        super(x, y, {viewRef});
    }

    construct() {
        const {ssl, guiLayer} = this.options.viewRef;
        this.selectedUnit = null;
        this.background = guiLayer.add2(ssl.get('top-menu-background').get(0, 0).place(this.x, this.y));
        this.toolButtons = [];
        ['P_PEASANT', 'P_SWORDSMAN', 'P_WIZARD', 'P_AXEMAN', 'P_GUARD'].forEach((key, i) => {
            const button = new TopMenuUnitButton(this.x + 708 - i * 80, this.y, this.options.viewRef, this, key);
            this.toolButtons.push(guiLayer.add2(button));
        });
    }

    update() {
        const {xInCanvas, yInCanvas, justDownLeft} = this.options.viewRef.input.mouse();
        const {spawner, arenaBounds} = this.options.viewRef;
        if(justDownLeft) {
            const selected = this.selectedUnit;
            if(selected && arenaBounds.isPointOver(xInCanvas, yInCanvas)) {
                spawner.spawnPlayerUnit(selected, xInCanvas, yInCanvas);
            }
        }
    }

}
