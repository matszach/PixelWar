class UnitEntity extends BaseEntity {

    onCreate() {
        super.onCreate();
        this.target = null;
        const {hp, def, power, speed, value, atkRange, atkCooldown, atkFrames} = this.args.template;
        this.hp = new Mx.Misc.Resource(hp);
        this.attr = Mx.Misc.Attribute.group(['def', def, 0], ['power', power, 0], ['speed', speed, 0]);
        this.value = value;
        this.attack = new Attack(this, atkRange, atkCooldown, atkFrames);
    }

}