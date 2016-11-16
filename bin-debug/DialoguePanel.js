//对话面板只在点击NPC的时候出现
var DialoguePanel = (function (_super) {
    __extends(DialoguePanel, _super);
    function DialoguePanel(talk) {
        _super.call(this);
        this.body = new egret.Shape();
        this.body.graphics.beginFill(0x000000, 0.5);
        this.body.graphics.drawRect(0, 0, 800, 172);
        this.body.graphics.endFill();
        this.body.y = 1000;
        this.textField = new egret.TextField();
        this.textField.text = talk;
        this.button = new Button("继续_png");
        this.textField.x = 160;
        this.textField.y = 1050;
        this.button.width = 40;
        this.button.height = 40;
        this.button.x = 500;
        this.button.y = 1000;
        this.button.touchEnabled = true;
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    var d = __define,c=DialoguePanel,p=c.prototype;
    p.showDpanel = function () {
        this.addChild(this.body);
        this.addChild(this.button);
        this.addChild(this.textField);
    };
    p.disshowDpanel = function () {
        this.removeChild(this.body);
        this.removeChild(this.button);
        this.removeChild(this.textField);
    };
    p.onButtonClick = function () {
        this.disshowDpanel();
        switch (TaskService.getInstance().taskList["000"].status) {
            case TaskStatus.ACCEPTABLE:
                TaskService.getInstance().accept("000");
                break;
            case TaskStatus.CAN_SUBMIT:
                TaskService.getInstance().finish("000");
                break;
            default:
                return;
        }
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    };
    return DialoguePanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DialoguePanel,'DialoguePanel');
//# sourceMappingURL=DialoguePanel.js.map