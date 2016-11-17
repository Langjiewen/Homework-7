var NPC = (function (_super) {
    __extends(NPC, _super);
    function NPC(id, ad, x, y, dp) {
        _super.call(this);
        this.dialoguePanel = dp;
        this.id = id;
        this.x = x;
        this.y = y;
        this.touchEnabled = true;
        this.body = new egret.Bitmap();
        this.body.texture = RES.getRes(ad);
        this.body.width = this.body.width / 3;
        this.body.height = this.body.height / 3;
        this.body.x = this.x;
        this.body.y = this.y;
        this.emoji = new egret.Bitmap();
        this.emoji.texture = RES.getRes("问号_png");
        this.emoji.width = this.emoji.width / 10;
        this.emoji.height = this.emoji.height / 10;
        this.emoji.x = this.x;
        this.emoji.y = this.y + 50;
        this.emoji.alpha = 0;
        this.addChild(this.body);
        this.addChild(this.emoji);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onNPCClick, this);
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onChange = function (task) {
        if (task.getStatus() == TaskStatus.ACCEPTABLE && this.id == task.fromNpcId) {
            this.emoji.alpha = 1;
        }
        if (task.getStatus() == TaskStatus.CAN_SUBMIT && this.id == task.fromNpcId) {
            this.emoji.alpha = 0;
        }
        if (task.getStatus() == TaskStatus.CAN_SUBMIT && this.id == task.toNpcId) {
            this.emoji.texture = RES.getRes("感叹号_png");
            this.emoji.alpha = 1;
        }
        if (task.getStatus() == TaskStatus.SUBMITED && this.id == task.toNpcId) {
            this.emoji.alpha = 0;
        }
    };
    p.onNPCClick = function () {
        this.dialoguePanel.showDpanel();
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
//# sourceMappingURL=NPC.js.map