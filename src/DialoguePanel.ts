//对话面板只在点击NPC的时候出现
class DialoguePanel extends egret.DisplayObjectContainer 
{

    public button: Button;
    public textField: egret.TextField;
    public body: egret.Shape;

    constructor(text: string) 
    {
        super();
        this.body = new egret.Shape();
        this.body.graphics.beginFill(0x000000, 0.5);
        this.body.graphics.drawRect(0, 0, 800, 172);
        this.body.graphics.endFill();
        this.body.y = 1000;

        this.textField = new egret.TextField();
        this.textField.text = text;
        this.textField.x = 160;
        this.textField.y = 1050;

        this.button = new Button("继续_png");
        this.button.width = 40;
        this.button.height = 40;
        this.button.x = 500;
        this.button.y = 1000;
        this.button.touchEnabled = true;
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }

    public showDpanel(): void 
    {
        this.addChild(this.body);
        this.addChild(this.button);
        this.addChild(this.textField);
    }

    public removeDpanel(): void 
    {
        this.removeChild(this.body);
        this.removeChild(this.button);
        this.removeChild(this.textField);
    }


    public onButtonClick(): void 
    {
        this.removeDpanel();
        switch (TaskService.getInstance().taskList["000"].getStatus()) {
            case TaskStatus.ACCEPTABLE:
                TaskService.getInstance().accept("000");
                break;
            case TaskStatus.CAN_SUBMIT:
                TaskService.getInstance().finish("000");
                break;
            default:
                return
        }
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    }
    
}