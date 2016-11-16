var Task = (function () {
    function Task(id, name) {
        this.id = id;
        this.name = name;
    }
    var d = __define,c=Task,p=c.prototype;
    p.setStatus = function (value) {
        this.status = value;
    };
    p.setNme = function (name) {
        this.name = name;
    };
    p.setId = function (id) {
        this.id = id;
    };
    p.getStatus = function () {
        return this.status;
    };
    p.getId = function () {
        return this.id;
    };
    p.getName = function () {
        return this.name;
    };
    return Task;
}());
egret.registerClass(Task,'Task');
//# sourceMappingURL=Task.js.map