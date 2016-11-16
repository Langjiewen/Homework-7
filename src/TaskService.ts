class TaskService
{

    private static instance: TaskService;
    private static count: number = 0;

    public taskList: {
        [index: string]: Task
    } = {};
    public observerList: Observer[] = [];

    constructor() {
        TaskService.count ++;
        if (TaskService.count > 1) 
        {
            throw "!!!";
        }
    }

    public static getInstance(): TaskService 
    {
        if (TaskService.instance == null) 
        {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    }

    public getTaskByCustomRule(): Task 
    {
        for (var id in this.taskList) 
        {
            var task = this.taskList[id];
            if (task.getStatus() == TaskStatus.CAN_SUBMIT)
                return task;
        }
    }

    public accept(id: string): ErrorCode 
    {
        if (!id) 
        {
            return ErrorCode.MISSING_TASK;
        }

        let task = this.taskList[id];
        if (task.getId() == id) 
        {
            task.setStatus(TaskStatus.CAN_SUBMIT);
            this.notify(this.taskList[id]);
            return ErrorCode.SUCCESS;
        }
        else 
        {
            return ErrorCode.MISSING_TASK;
        }

    }

    public finish(id: string): ErrorCode 
    {
        if (!id) 
        {
            return ErrorCode.MISSING_TASK;
        }

        let task = this.taskList[id];
        if (task.getId() == id) 
        {
            task.setStatus(TaskStatus.SUBMITED);
            this.notify(this.taskList[id]);
            return ErrorCode.SUCCESS;
        }
        else 
        {
            return ErrorCode.MISSING_TASK;
        }
    }

    public notify(task: Task) 
    {
        for (var observer of this.observerList) 
        {
            observer.onChange(task);
        }
    }

    public addTask(task: Task)
     {
        this.taskList[task.getId()] = task;
    }

    public addObserver(observer: Observer) 
    {
        for (var i = 0; i < this.observerList.length; i++) 
        {
            if (observer == this.observerList[i])
                return ErrorCode.REPEAT_OBSERVER;
        }
        this.observerList.push(observer);
    }
}