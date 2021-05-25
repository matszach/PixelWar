class TopMenuUnitButton extends Mx.Gui.GuiComponent {

    constructor(x, y, viewRef, menu, key) {
        super(x, y, {viewRef, menu, key});
    }

    isPointOver(x, y) {
        return this.background.isPointOver(x, y);
    }

    construct() {
        // elements
        const {viewRef, menu, key} = this.options;
        const sheet = viewRef.ssl.get('top-menu-unit-button');
        const {sheet: usheet, name, sx, sy} = UNIT_TEMPLATES.find('key', key);
        this.background = sheet.get(0, 0).place(this.x, this.y);
        this.container.add2(this.background);        
        this.hoverElement = sheet.get(0, 1).place(this.x, this.y).setShadow('black', 10);
        this.container.add2(this.hoverElement);   
        this.unitSprite = viewRef.ssl.get(usheet).get(sx, sy).place(this.x, this.y - 20).setShadow('black', 5).setRotation(Math.PI/2);
        this.container.add2(this.unitSprite);
        this.name = new Mx.Text(this.x, this.y + 30, name, 'white', 12, 'Arial', 0, 1, 'center');
        this.container.add2(this.name);
        // logic
        this.selected = false;
        this.on('over', () => {
            this.hoverElement.setFrame(1, 1);
        }).on('out', () => {
            this.hoverElement.setFrame(0, 1);
        }).on('up', () => {
            const wasSelected = this.selected;
            menu.selectedUnit = null;
            menu.toolButtons.forEach(b => {
                b.background.setFrame(0, 0);
                b.selected = false;
            });
            this.selected = !wasSelected;
            if(this.selected) {
                menu.selectedUnit = key;
            }
            this.background.setFrame(this.selected ? 1 : 0, 0);
        });   

    }

}
