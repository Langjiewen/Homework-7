class Task {

    private id: string;
    private name: string;
    private status: TaskStatus;

    public fromNpcId: string;
    public toNpcId: string;
    public desc: string;

    constructor(id: string, name: string) 
    {
        this.id = id;
        this.name = name;
    }

    public setStatus(value: TaskStatus): void 
    {
        this.status = value;
    }

    public setNme(name: string): void 
    {
        this.name = name;
    }

    public setId(id: string): void 
    {
        this.id = id;
    }

    public getStatus(): TaskStatus 
    {
        return this.status;
    }

    public getId(): string 
    {
        return this.id;
    }

    public getName(): string 
    {
        return this.name;
    }
    
}
