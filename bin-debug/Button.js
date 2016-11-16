var Button = (function (_super) {
    __extends(Button, _super);
    function Button(ad) {
        _super.call(this);
        this.body = new egret.Bitmap();
        this.body.texture = RES.getRes(ad);
        this.addChild(this.body);
        this.touchEnabled = true;
    }
    var d = __define,c=Button,p=c.prototype;
    return Button;
}(egret.DisplayObjectContainer));
egret.registerClass(Button,'Button');
//# sourceMappingURL=Button.js.map