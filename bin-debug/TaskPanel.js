//任务列表面板实现Observer接口，永远显示
var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel(x, y) {
        _super.call(this);
        this.x = x;
        this.y = y;
        this.body = new egret.Shape();
        this.body.graphics.beginFill(0x000000, 0.4);
        this.body.graphics.endFill();
        this.textField = new egret.TextField();
        this.textField.text = "任务进程";
        this.textField.x = x;
        this.textField.x = y;
        this.textField2 = new egret.TextField();
        this.textField2.x = x;
        this.textField2.y = y + 10;
        this.addChild(this.body);
        this.addChild(this.textField);
        this.addChild(this.textField2);
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        var str = "";
        if (task.getStatus() == TaskStatus.ACCEPTABLE) {
            str = "发现任务：" + task.getName();
        }
        else if (task.getStatus() == TaskStatus.CAN_SUBMIT) {
            str = "接收任务：" + task.getName();
        }
        else if (task.getStatus() == TaskStatus.DURING) {
            str = "进行任务：" + task.getName();
        }
        else if (task.getStatus() == TaskStatus.SUBMITED) {
            str = "完成任务：" + task.getName();
        }
        this.textField2.text = str;
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=TaskPanel.js.map