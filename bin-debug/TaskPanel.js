//任务列表面板实现Observer接口，永远显示
var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel(x, y) {
        _super.call(this);
        this.x = x;
        this.y = y;
        this.body = new egret.Shape();
        this.textField = new egret.TextField();
        this.body.graphics.beginFill(0x000000, 0.4);
        this.body.graphics.endFill();
        this.textField.text = "   任务进程    ";
        this.textField.x = x;
        this.textField.x = y;
        this.textField2 = new egret.TextField();
        this.textField2.x = 0;
        this.textField2.y = 98;
        this.addChild(this.body);
        this.addChild(this.textField);
        this.addChild(this.textField2);
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        this.textField.text = task.desc;
        this.textField2.text = task.getName() + " :" + task.getStatus().toString();
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=TaskPanel.js.map