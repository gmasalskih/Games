setTimeout(init, 5000);

function go(varName, value) {
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
    chief.doJob();
    chief.setEmployeeMotiv();
    chief.setTime();
    if (get("round_count") === 10){
        parent.SetScore(80, 100, 0);
        parent.SCORM2004_CallSetValue("cmi.completion_status", "completed");
        parent.SCORM2004_CallSetValue("cmi.success_status", "passed");
        parent.SCORM2004_CallCommit();
    }
    if (get("round_count") === 15){
        parent.SetScore(120, 120, 0);
        parent.SCORM2004_CallSetValue("cmi.completion_status", "completed");
        parent.SCORM2004_CallSetValue("cmi.success_status", "passed");
        parent.SCORM2004_CallCommit();
    }
}

function init() {
    initVars();
    get = GetPlayer().GetVar;
    set = GetPlayer().SetVar;
    chief = new Chief();
}

function addEvent(varName) {
    //Это костыль
    if (varName === "isRandom") {
        if (get("isRandom") && chief.time >= 1) {
            chief.time--;
            set(chief.varTime, chief.time);
        }
        if (!get("isRandom") && chief.time >= 2) {
            chief.time -= 2;
            set(chief.varTime, chief.time);
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
    this.isDone = false;
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
    this.time = 8;
    set(this.varTime, this.time);
    this.employee.forEach(
        (employee, name) => {
            employee.setTime();
        }
    );
};
Chief.prototype.addSelfTask = function (task) {
    if (task.includes(this.name)) {
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
    set(task.substring(0, 11) + "note_done", false);
    this.tasks.delete(task);
};
Chief.prototype.addEmployeeTask = function (task) {
    if (this.time >= 1) {
        this.employee.forEach(
            (employee, name) => {
                if (task.includes(name) && employee.addTask(task)) {
                    if (get("round_count") !== 0) this.time--;
                    set(this.varTime, this.time);
                }
            }
        );
    }
};
Chief.prototype.delEmployeeTask = function (task) {
    this.employee.forEach(
        (employee, name) => {
            if (task.includes(name)) {
                employee.delTask(task);
            }
        }
    );
};
Chief.prototype.addEmployeeMotiv = function (motiv) {
    if (this.time >= 1) {
        this.employee.forEach(
            (employee, name) => {
                if (motiv.includes(name) && employee.addMotiv(motiv)) {
                    if (!get(motiv.split("_")[0] + "_group_" + name)) {
                        this.time--;
                        set(this.varTime, this.time);
                    }
                }
            }
        );
    }
};
Chief.prototype.addMany = function (many) {
    this.many += many;
    set(this.varMoney, this.many);
};
Chief.prototype.doJob = function () {
    // this.many -= 20;
    // if (this.many < 0) this.many = 0;
    set(this.varMoney, this.many);
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
                this.addMany(task.many);
                set(task.name.substring(0, 11) + "note_done", false);
                // this.tasks.delete(task.name);
                console.log(task.name+" $$ false");
            } else {
                set(task.name.substring(0, 11) + "note_done", true);
                console.log(task.name+" $$ true");
            }
        }
    );
    this.employee.forEach(
        (employee, name) => {
            employee.doJob();
        }
    );
    this.many = 0;
}
Chief.prototype.setEmployeeMotiv = function () {
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
    if (this.time >= 1 && motiv.includes(this.name)) {
        this.time--;
        this.setTimeFormat();
        if (motiv.includes("delo")) this.motiv += this.delo;
        if (motiv.includes("prizn")) this.motiv += this.prizn;
        if (motiv.includes("lyudi")) this.motiv += this.lyudi;
        if (motiv.includes("komf")) this.motiv += this.komf;
        if (this.motiv > 17) this.motiv = 17;
        set(this.varMotiv, this.motiv);
        set(motiv, true);
        return true;
    }
    return false;
};
Employee.prototype.addTask = function (task) {
    if (this.time >= 1 && task.includes(this.name)) {
        if (task.includes("task_2_1")) {
            this.tasks.set(task, new Task(task, 2, 1));
            if (get("round_count") !== 0) this.time--;
            this.setTimeFormat();
            return true;
        }
        if (task.includes("task_3_2")) {
            this.tasks.set(task, new Task(task, 3, 2));
            if (get("round_count") !== 0) this.time--;
            this.setTimeFormat();
            return true;
        }
        if (task.includes("task_4_3")) {
            this.tasks.set(task, new Task(task, 4, 3));
            if (get("round_count") !== 0) this.time--;
            this.setTimeFormat();
            return true;
        }
    }
    return false;
};
Employee.prototype.delTask = function (task) {
    if (task.includes(this.name)) {
        set(task.substring(0, 11) + "note_done", false);
        set(task, false);
        return this.tasks.delete(task);
    }
};
Employee.prototype.setTime = function () {
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
    }
};

Employee.prototype.setMotiv = function () {
    if (this.time === 0) {
        this.motiv -= 2;
    } else if (this.tasks.size === 0) {
        this.motiv--;
    } else {
        var notDoneTask = new Set();
        Array.from(this.tasks.values()).forEach(
            (task) => {
                if (!task.isDone) notDoneTask.add(task);
            }
        );
        if (notDoneTask.size > 0) this.motiv -= 2;
        else this.motiv--;
    }
    if (this.motiv < 0) this.motiv = 0;
    set(this.varMotiv, this.motiv)
};
Employee.prototype.doJob = function () {
    Array.from(this.tasks.values()).sort(
        (a, b) => {
            if (a.time > b.time) return -1;
            if (a.time === b.time) return 0;
            if (a.time < b.time) return 1;
        }
    ).forEach(
        (task) => {
            console.log(task);
            if (this.time >= task.time) {
                this.time -= task.time;
                chief.addMany(task.many);
                // this.tasks.delete(task.name);
                set(task.name.substring(0, 11) + "note_done", false);
                task.isDone = true;
                console.log(task.name+" $$ false");
            } else {
                set(task.name.substring(0, 11) + "note_done", true);
                task.isDone = false;
                console.log(task.name+" $$ true");
            }
        }
    );
};

set_gen_sluchayno = new Set();

function gen_sluchayno() {
    var min = 1;
    var max = 40;
    while (true) {
        if (set_gen_sluchayno.size >= 40) {
            set("sluchayno", 0);
            return;
        }
        var score = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!set_gen_sluchayno.has(score)) {
            set_gen_sluchayno.add(score);
            if (score >= 1 && score <= 10) set_gen_opr_komf.add(score);
            if (score >= 11 && score <= 20) set_gen_opr_prizn.add(score);
            if (score >= 21 && score <= 30) set_gen_opr_delo.add(score);
            if (score >= 31 && score <= 40) set_gen_opr_lyudi.add(score);
            set("sluchayno", score);
            return;
        }
    }
}

set_gen_opr_komf = new Set();

function gen_opr_komf() {
    var min = 1;
    var max = 10;
    while (true) {
        if (set_gen_opr_komf.size >= 10) {
            set("opr_komf", 0);
            return;
        }
        var score = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!set_gen_opr_komf.has(score) && !set_gen_sluchayno.has(score)) {
            set_gen_opr_komf.add(score);
            set_gen_sluchayno.add(score);
            set("opr_komf", score);
            return;
        }
    }
}

set_gen_opr_prizn = new Set();

function gen_opr_prizn() {
    var min = 11;
    var max = 20;
    while (true) {
        if (set_gen_opr_prizn.size >= 10) {
            set("opr_prizn", 0);
            return;
        }
        var score = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!set_gen_opr_prizn.has(score) && !set_gen_sluchayno.has(score)) {
            set_gen_opr_prizn.add(score);
            set_gen_sluchayno.add(score);
            set("opr_prizn", score);
            return;
        }
    }
}

set_gen_opr_delo = new Set();

function gen_opr_delo() {
    var min = 21;
    var max = 30;
    while (true) {
        if (set_gen_opr_delo.size >= 10) {
            set("opr_delo", 0);
            return;
        }
        var score = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!set_gen_opr_delo.has(score) && !set_gen_sluchayno.has(score)) {
            set_gen_opr_delo.add(score);
            set_gen_sluchayno.add(score);
            set("opr_delo", score);
            return;
        }
    }
}

set_gen_opr_lyudi = new Set();

function gen_opr_lyudi() {
    var min = 31;
    var max = 40;
    while (true) {
        if (set_gen_opr_lyudi.size >= 10) {
            set("opr_lyudi", 0);
            return;
        }
        var score = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!set_gen_opr_lyudi.has(score) && !set_gen_sluchayno.has(score)) {
            set_gen_opr_lyudi.add(score);
            set_gen_sluchayno.add(score);
            set("opr_lyudi", score);
            return;
        }
    }
}