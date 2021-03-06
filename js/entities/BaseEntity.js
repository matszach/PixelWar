class BaseEntity extends Mx.Misc.GameEntity {

    constructor(x, y, viewRef, template) {
        super(x, y, {viewRef, template});
    }

    onCreate() {
        const {viewRef, template} = this.args;
        const {sheet, sx, sy, hitradius} = template;
        this.sprite = viewRef.ssl.get(sheet).get(sx, sy).place(this.x, this.y).setShadow('black', 5);
        this.add(this.sprite);
        this.hitcircle = this.createHitCircle(hitradius || 0, 'blue');
        this.getCenter = () => this.hitcircle.getCenter();
        this.isPointOver = (x, y) => this.hitcircle.isPointOver(x, y);
        // this.hitcircle.show();
    }

}