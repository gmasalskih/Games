setTimeout(init, 5000);

function go(varName, value) {
    // console.log("go - " + varName + " - "+ value);
    if (value === true) {
        if (varName.includes("delo") || varName.includes("prizn") || varName.includes("lyudi") || varName.includes("komf")) {
            chief.addEmployeeMotiv(varName);
        }
        if (varName.includes("task") && varName.includes("chief")) {
            chief.addSelfTask(varName);
        }
        if (varName.includes("task") && !varName.includes("chief")) {
            chief.addEmployeeTask(varName);
        }
    }
    if (value === false && varName.includes("task")) {
        if (varName.includes("chief")) {
            chief.delSelfTask(varName);
        } else {
            chief.delEmployeeTask(varName);
        }
    }
}

function completed() {
    console.log("completed");
    set("task_2_1_2_note_done", false);
    set("task_2_1_1_note_done", false);
    set("task_2_1_3_note_done", false);
    set("task_2_1_4_note_done", false);
    set("task_2_1_5_note_done", false);
    set("task_2_1_6_note_done", false);
    set("task_3_2_1_note_done", false);
    set("task_3_2_2_note_done", false);
    set("task_3_2_3_note_done", false);
    set("task_3_2_4_note_done", false);
    set("task_3_2_5_note_done", false);
    set("task_3_2_6_note_done", false);
    set("task_4_3_1_note_done", false);
    set("task_4_3_2_note_done", false);
    set("task_4_3_3_note_done", false);
    set("task_4_3_4_note_done", false);
    set("task_4_3_5_note_done", false);
    set("task_4_3_6_note_done", false);
    chief.doJob();
    chief.setEmployeeMotiv();
    chief.setTime();
}

function init() {
    console.log("init");
    initVars();
    get = GetPlayer().GetVar;
    set = GetPlayer().SetVar;
    chief = new Chief();
}

function addEvent(varName) {
    //Это костыль
    console.log("addEvent -" + varName);
    if (varName === "isRandom") {
        if (get("isRandom") && chief.time >= 1) {
            chief.time--;
            set(chief.varTime, chief.time);
            return;
        }
        if (!get("isRandom") && chief.time >= 2) {
            chief.time -= 2;
            set(chief.varTime, chief.time);
            return;
        }
    }
    gameVars.forEach(
        (value, key) => {
            value.checkVar();
        }
    );
}

//   ---GAMES---
function Task(name, time, many) {
    this.name = name;
    this.time = time;
    this.many = many;
}

function Chief() {
    this.name = "chief";
    this.varTime = "chief_time";
    this.varMoney = "money";
    this.many = 0;
    this.time = 8;
    this.employee = new Map()
        .set("s1", new Employee("s1", "s1_time", "s1_motiv", 6, 4, 4, 2))
        .set("s2", new Employee("s2", "s2_time", "s2_motiv", 6, 4, 4, 2))
        .set("s3", new Employee("s3", "s3_time", "s3_motiv", 4, 6, 2, 4))
        .set("s4", new Employee("s4", "s4_time", "s4_motiv", 4, 6, 2, 4))
        .set("s5", new Employee("s5", "s5_time", "s5_motiv", 2, 4, 4, 6))
        .set("s6", new Employee("s6", "s6_time", "s6_motiv", 2, 4, 4, 6))
        .set("s7", new Employee("s7", "s7_time", "s7_motiv", 4, 2, 6, 4))
        .set("s8", new Employee("s8", "s8_time", "s8_motiv", 4, 2, 6, 4));
    this.tasks = new Map();
}

Chief.prototype.setTime = function () {
    console.log(this.name + ": setTime - ");
    this.time = 8;
    set(this.varTime, this.time);
    this.employee.forEach(
        (employee, name) => {
            employee.setTime();
        }
    );
};
Chief.prototype.addSelfTask = function (task) {
    console.log(this.name + ": addSelfTask - " + task);
    if (task.includes(this.name)) {
        set(this.varTime, this.time);
        if (task.includes("task_2_1")) {
            this.tasks.set(task, new Task(task, 2, 1));
        }
        if (task.includes("task_3_2")) {
            this.tasks.set(task, new Task(task, 3, 2));
        }
        if (task.includes("task_4_3")) {
            this.tasks.set(task, new Task(task, 4, 3));
        }
    }
};
Chief.prototype.delSelfTask = function (task) {
    console.log(this.name + ": delSelfTask - " + task);
    this.tasks.delete(task);
};
Chief.prototype.addEmployeeTask = function (task) {
    // console.log(this.name + ": addEmployeeTask - " + task);
    if (this.time >= 1) {
        this.employee.forEach(
            (employee, name) => {
                if (task.includes(name) && employee.addTask(task)) {
                    this.time--;
                    set(this.varTime, this.time);
                }
            }
        );
    }
};
Chief.prototype.delEmployeeTask = function (task) {
    console.log(this.name + ": delEmployeeTask - " + task);
    this.employee.forEach(
        (employee, name) => {
            if (task.includes(name)) {
                employee.delTask(task);
            }
        }
    );
};
Chief.prototype.addEmployeeMotiv = function (motiv) {
    console.log(this.name + ": addEmployeeMotiv - " + motiv);
    if (this.time >= 1) {
        this.employee.forEach(
            (employee, name) => {
                if (motiv.includes(name) && employee.addMotiv(motiv)) {
                    this.time--;
                    set(this.varTime, this.time);
                }
            }
        );
    }
};
Chief.prototype.addMany = function (many) {
    console.log(this.name + ": addMany - " + many);
    this.many += many;
    set(this.varMoney, this.many);
};
Chief.prototype.doJob = function () {
    this.many -= 20;
    set(this.varMoney, this.many);
    console.log(this.name + ": doJob");
    var arr = [];
    this.tasks.forEach(
        (task, taskName) => {
            arr.push(task);
        }
    );
    arr.sort(
        (a, b) => {
            if (a.time > b.time) return 1;
            if (a.time === b.time) return 0;
            if (a.time < b.time) return -1;
        }
    ).forEach(
        (task) => {
            if (this.time >= task.time) {
                this.time -= task.time;
                chief.addMany(task.many);
            } else {
                set(task.name.substring(0, 11) + "note_done", true);
            }
        }
    );
    this.employee.forEach(
        (employee, name) => {
            employee.doJob();
        }
    );
}
Chief.prototype.setEmployeeMotiv = function () {
    console.log(this.name + ": setEmployeeMotiv - ");
    this.employee.forEach(
        (employee, name) => {
            employee.setMotiv();
        }
    );
}

function Employee(name, varTime, varMotiv, delo, prizn, lyudi, komf) {
    this.name = name;
    this.varTime = varTime;
    this.varMotiv = varMotiv;
    this.motiv = get(this.varMotiv);
    this.time = 6;
    this.delo = delo;
    this.prizn = prizn;
    this.lyudi = lyudi;
    this.komf = komf;
    this.tasks = new Map();
    this.setTimeFormat();
}

Employee.prototype.addMotiv = function (motiv) {
    console.log(this.name + ": addMotiv - " + motiv);
    if (this.time >= 1 && motiv.includes(this.name)) {
        this.time--;
        this.setTimeFormat();
        if (motiv.includes("delo")) this.motiv += this.delo;
        if (motiv.includes("prizn")) this.motiv += this.prizn;
        if (motiv.includes("lyudi")) this.motiv += this.lyudi;
        if (motiv.includes("komf")) this.motiv += this.komf;
        if (this.motiv > 17) this.motiv = 17;
        set(this.varMotiv, this.motiv);
        set(motiv, false);
        return true;
    }
    return false;
};
Employee.prototype.addTask = function (task) {
    if (this.time >= 1 && task.includes(this.name)) {
        if (task.includes("task_2_1")) {
            this.tasks.set(task, new Task(task, 2, 1));
            this.time--;
            this.setTimeFormat();
            console.log(this.name + ": addTask - " + task);
            return true;
        }
        if (task.includes("task_3_2")) {
            this.tasks.set(task, new Task(task, 3, 2));
            this.time--;
            this.setTimeFormat();
            console.log(this.name + ": addTask - " + task);
            return true;
        }
        if (task.includes("task_4_3")) {
            this.tasks.set(task, new Task(task, 4, 3));
            this.time--;
            this.setTimeFormat();
            console.log(this.name + ": addTask - " + task);
            return true;
        }
    }
    return false;
};
Employee.prototype.delTask = function (task) {
    console.log(this.name + ": delTask - " + task);
    if (task.includes(this.name)) {
        set(task, false);
        return this.tasks.delete(task);
    }
};
Employee.prototype.setTime = function () {
    console.log(this.name + ": setTime - ");
    this.time = this.motiv / 2;
    this.setTimeFormat();
};

Employee.prototype.setTimeFormat = function () {
    if (this.time === Math.floor(this.time)) {
        set(this.varTime, Math.floor(this.time) + "ч 00м");
        return;
    }
    if (this.time > Math.floor(this.time)) {
        set(this.varTime, Math.floor(this.time) + "ч " + Math.round(60 * (this.time - Math.floor(this.time))) + "м");
        return;
    }
}

Employee.prototype.setMotiv = function () {
    console.log(this.name + ": setMotiv");
    if (this.tasks.size > 0 || this.time === 0) this.motiv -= 2;
    else this.motiv--;
    if (this.motiv < 0) this.motiv = 0;
    set(this.varMotiv, this.motiv)
}
Employee.prototype.doJob = function () {
    console.log(this.name + ": doJob");
    Array.from(this.tasks.values()).sort(
        (a, b) => {
            if (a.time > b.time) return 1;
            if (a.time === b.time) return 0;
            if (a.time < b.time) return -1;
        }
    ).forEach(
        (task) => {
            if (this.time >= task.time) {
                this.time -= task.time;
                chief.addMany(task.many);
            } else {
                set(task.name.substring(0, 11) + "note_done", true);
            }
        }
    );
};