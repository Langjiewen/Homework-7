class TaskService
{
    private observerList: Observer[];
    private taskList: Task[];

    finish(id: string): ErrorCode
    {}

    accept(id: string): void
    {}

    getTaskByCustomRole(rule: Function): Task 
    {}

    notify() :void
    {}  
}