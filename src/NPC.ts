class NPC extends egret.DisplayObjectContainer implements Observer 
{
    private id: string;

    public emoji: egret.Bitmap;
    public body: egret.Bitmap;
    public dialoguePanel: DialoguePanel;

    constructor(id: string, ad: string, x: number, y: number, dp: DialoguePanel) 
    {
        super();
        this.body = new egret.Bitmap();
        this.body.texture = RES.getRes(ad);
        this.body.width = this.body.width / 3;
        this.body.height = this.body.height / 3;

        this.emoji = new egret.Bitmap();
        this.emoji.texture = RES.getRes("问号_png");
        this.emoji.width = this.emoji.width / 5;
        this.emoji.height = this.emoji.height / 5;
        this.emoji.y = -100;
        this.emoji.alpha = 0;

        this.addChild(this.body);
        this.addChild(this.emoji);

        this.dialoguePanel = dp;
        this.id = id;
        this.x = x;
        this.y = y;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onNPCClick, this);

    }

    onChange(task: Task): void 
    {
        if (task.getStatus() == TaskStatus.ACCEPTABLE && this.id == task.fromNpcId) 
        {
            this.emoji.alpha = 1;
        }

        if (task.getStatus() == TaskStatus.CAN_SUBMIT && this.id == task.fromNpcId) 
        {

            this.emoji.alpha = 0;
        }

        if (task.getStatus() == TaskStatus.CAN_SUBMIT && this.id == task.toNpcId) 
        {
            this.emoji.texture = RES.getRes("感叹号_png");
            this.emoji.alpha=1;
        }

        if (task.getStatus() == TaskStatus.SUBMITED && this.id == task.toNpcId) 
        {
            this.emoji.alpha = 0;
        }
    }

    onNPCClick() 
    {
        this.dialoguePanel.showDpanel();
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    }
}