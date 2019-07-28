function GameVar(varName) {
    this.varName = varName;
    this.oldValue = false;
}

GameVar.prototype.checkVar = function () {
    if (get(this.varName) !== this.oldValue) {
        // alert("Имя переменной: "+this.varName+".\nСтарое занчение: "+this.oldValue+".\nНовое значение: "+get(this.varName));
        this.oldValue = get(this.varName);
        go(this.varName, this.oldValue);
    }
}
function initVars() {
    console.log("initVars");
    gameVars = new Map()
        .set("delo_1_s1", new GameVar("delo_1_s1"))
        .set("delo_2_s1", new GameVar("delo_2_s1"))
        .set("delo_3_s1", new GameVar("delo_3_s1"))
        .set("delo_4_s1", new GameVar("delo_4_s1"))
        .set("delo_5_s1", new GameVar("delo_5_s1"))
        .set("delo_6_s1", new GameVar("delo_6_s1"))
        .set("delo_7_s1", new GameVar("delo_7_s1"))
        .set("delo_8_s1", new GameVar("delo_8_s1"))
        .set("delo_9_s1", new GameVar("delo_9_s1"))
        .set("delo_10_s1", new GameVar("delo_10_s1"))
        .set("prizn_1_s1", new GameVar("prizn_1_s1"))
        .set("prizn_2_s1", new GameVar("prizn_2_s1"))
        .set("prizn_3_s1", new GameVar("prizn_3_s1"))
        .set("prizn_4_s1", new GameVar("prizn_4_s1"))
        .set("prizn_5_s1", new GameVar("prizn_5_s1"))
        .set("prizn_6_s1", new GameVar("prizn_6_s1"))
        .set("prizn_7_s1", new GameVar("prizn_7_s1"))
        .set("prizn_8_s1", new GameVar("prizn_8_s1"))
        .set("prizn_9_s1", new GameVar("prizn_9_s1"))
        .set("prizn_10_s1", new GameVar("prizn_10_s1"))
        .set("lyudi_1_s1", new GameVar("lyudi_1_s1"))
        .set("lyudi_2_s1", new GameVar("lyudi_2_s1"))
        .set("lyudi_3_s1", new GameVar("lyudi_3_s1"))
        .set("lyudi_4_s1", new GameVar("lyudi_4_s1"))
        .set("lyudi_5_s1", new GameVar("lyudi_5_s1"))
        .set("lyudi_6_s1", new GameVar("lyudi_6_s1"))
        .set("lyudi_7_s1", new GameVar("lyudi_7_s1"))
        .set("lyudi_8_s1", new GameVar("lyudi_8_s1"))
        .set("lyudi_9_s1", new GameVar("lyudi_9_s1"))
        .set("lyudi_10_s1", new GameVar("lyudi_10_s1"))
        .set("komf_1_s1", new GameVar("komf_1_s1"))
        .set("komf_2_s1", new GameVar("komf_2_s1"))
        .set("komf_3_s1", new GameVar("komf_3_s1"))
        .set("komf_4_s1", new GameVar("komf_4_s1"))
        .set("komf_5_s1", new GameVar("komf_5_s1"))
        .set("komf_6_s1", new GameVar("komf_6_s1"))
        .set("komf_7_s1", new GameVar("komf_7_s1"))
        .set("komf_8_s1", new GameVar("komf_8_s1"))
        .set("komf_9_s1", new GameVar("komf_9_s1"))
        .set("komf_10_s1", new GameVar("komf_10_s1"))
        .set("delo_1_s2", new GameVar("delo_1_s2"))
        .set("delo_2_s2", new GameVar("delo_2_s2"))
        .set("delo_3_s2", new GameVar("delo_3_s2"))
        .set("delo_4_s2", new GameVar("delo_4_s2"))
        .set("delo_5_s2", new GameVar("delo_5_s2"))
        .set("delo_6_s2", new GameVar("delo_6_s2"))
        .set("delo_7_s2", new GameVar("delo_7_s2"))
        .set("delo_8_s2", new GameVar("delo_8_s2"))
        .set("delo_9_s2", new GameVar("delo_9_s2"))
        .set("delo_10_s2", new GameVar("delo_10_s2"))
        .set("prizn_1_s2", new GameVar("prizn_1_s2"))
        .set("prizn_2_s2", new GameVar("prizn_2_s2"))
        .set("prizn_3_s2", new GameVar("prizn_3_s2"))
        .set("prizn_4_s2", new GameVar("prizn_4_s2"))
        .set("prizn_5_s2", new GameVar("prizn_5_s2"))
        .set("prizn_6_s2", new GameVar("prizn_6_s2"))
        .set("prizn_7_s2", new GameVar("prizn_7_s2"))
        .set("prizn_8_s2", new GameVar("prizn_8_s2"))
        .set("prizn_9_s2", new GameVar("prizn_9_s2"))
        .set("prizn_10_s2", new GameVar("prizn_10_s2"))
        .set("lyudi_1_s2", new GameVar("lyudi_1_s2"))
        .set("lyudi_2_s2", new GameVar("lyudi_2_s2"))
        .set("lyudi_3_s2", new GameVar("lyudi_3_s2"))
        .set("lyudi_4_s2", new GameVar("lyudi_4_s2"))
        .set("lyudi_5_s2", new GameVar("lyudi_5_s2"))
        .set("lyudi_6_s2", new GameVar("lyudi_6_s2"))
        .set("lyudi_7_s2", new GameVar("lyudi_7_s2"))
        .set("lyudi_8_s2", new GameVar("lyudi_8_s2"))
        .set("lyudi_9_s2", new GameVar("lyudi_9_s2"))
        .set("lyudi_10_s2", new GameVar("lyudi_10_s2"))
        .set("komf_1_s2", new GameVar("komf_1_s2"))
        .set("komf_2_s2", new GameVar("komf_2_s2"))
        .set("komf_3_s2", new GameVar("komf_3_s2"))
        .set("komf_4_s2", new GameVar("komf_4_s2"))
        .set("komf_5_s2", new GameVar("komf_5_s2"))
        .set("komf_6_s2", new GameVar("komf_6_s2"))
        .set("komf_7_s2", new GameVar("komf_7_s2"))
        .set("komf_8_s2", new GameVar("komf_8_s2"))
        .set("komf_9_s2", new GameVar("komf_9_s2"))
        .set("komf_10_s2", new GameVar("komf_10_s2"))
        .set("prizn_1_s3", new GameVar("prizn_1_s3"))
        .set("prizn_2_s3", new GameVar("prizn_2_s3"))
        .set("prizn_3_s3", new GameVar("prizn_3_s3"))
        .set("prizn_4_s3", new GameVar("prizn_4_s3"))
        .set("prizn_5_s3", new GameVar("prizn_5_s3"))
        .set("prizn_6_s3", new GameVar("prizn_6_s3"))
        .set("prizn_7_s3", new GameVar("prizn_7_s3"))
        .set("prizn_8_s3", new GameVar("prizn_8_s3"))
        .set("prizn_9_s3", new GameVar("prizn_9_s3"))
        .set("prizn_10_s3", new GameVar("prizn_10_s3"))
        .set("komf_1_s3", new GameVar("komf_1_s3"))
        .set("komf_2_s3", new GameVar("komf_2_s3"))
        .set("komf_3_s3", new GameVar("komf_3_s3"))
        .set("komf_4_s3", new GameVar("komf_4_s3"))
        .set("komf_5_s3", new GameVar("komf_5_s3"))
        .set("komf_6_s3", new GameVar("komf_6_s3"))
        .set("komf_7_s3", new GameVar("komf_7_s3"))
        .set("komf_8_s3", new GameVar("komf_8_s3"))
        .set("komf_9_s3", new GameVar("komf_9_s3"))
        .set("komf_10_s3", new GameVar("komf_10_s3"))
        .set("delo_1_s3", new GameVar("delo_1_s3"))
        .set("delo_2_s3", new GameVar("delo_2_s3"))
        .set("delo_3_s3", new GameVar("delo_3_s3"))
        .set("delo_4_s3", new GameVar("delo_4_s3"))
        .set("delo_5_s3", new GameVar("delo_5_s3"))
        .set("delo_6_s3", new GameVar("delo_6_s3"))
        .set("delo_7_s3", new GameVar("delo_7_s3"))
        .set("delo_8_s3", new GameVar("delo_8_s3"))
        .set("delo_9_s3", new GameVar("delo_9_s3"))
        .set("delo_10_s3", new GameVar("delo_10_s3"))
        .set("lyudi_1_s3", new GameVar("lyudi_1_s3"))
        .set("lyudi_2_s3", new GameVar("lyudi_2_s3"))
        .set("lyudi_3_s3", new GameVar("lyudi_3_s3"))
        .set("lyudi_4_s3", new GameVar("lyudi_4_s3"))
        .set("lyudi_5_s3", new GameVar("lyudi_5_s3"))
        .set("lyudi_6_s3", new GameVar("lyudi_6_s3"))
        .set("lyudi_7_s3", new GameVar("lyudi_7_s3"))
        .set("lyudi_8_s3", new GameVar("lyudi_8_s3"))
        .set("lyudi_9_s3", new GameVar("lyudi_9_s3"))
        .set("lyudi_10_s3", new GameVar("lyudi_10_s3"))
        .set("prizn_1_s4", new GameVar("prizn_1_s4"))
        .set("prizn_2_s4", new GameVar("prizn_2_s4"))
        .set("prizn_3_s4", new GameVar("prizn_3_s4"))
        .set("prizn_4_s4", new GameVar("prizn_4_s4"))
        .set("prizn_5_s4", new GameVar("prizn_5_s4"))
        .set("prizn_6_s4", new GameVar("prizn_6_s4"))
        .set("prizn_7_s4", new GameVar("prizn_7_s4"))
        .set("prizn_8_s4", new GameVar("prizn_8_s4"))
        .set("prizn_9_s4", new GameVar("prizn_9_s4"))
        .set("prizn_10_s4", new GameVar("prizn_10_s4"))
        .set("komf_1_s4", new GameVar("komf_1_s4"))
        .set("komf_2_s4", new GameVar("komf_2_s4"))
        .set("komf_3_s4", new GameVar("komf_3_s4"))
        .set("komf_4_s4", new GameVar("komf_4_s4"))
        .set("komf_5_s4", new GameVar("komf_5_s4"))
        .set("komf_6_s4", new GameVar("komf_6_s4"))
        .set("komf_7_s4", new GameVar("komf_7_s4"))
        .set("komf_8_s4", new GameVar("komf_8_s4"))
        .set("komf_9_s4", new GameVar("komf_9_s4"))
        .set("komf_10_s4", new GameVar("komf_10_s4"))
        .set("delo_1_s4", new GameVar("delo_1_s4"))
        .set("delo_2_s4", new GameVar("delo_2_s4"))
        .set("delo_3_s4", new GameVar("delo_3_s4"))
        .set("delo_4_s4", new GameVar("delo_4_s4"))
        .set("delo_5_s4", new GameVar("delo_5_s4"))
        .set("delo_6_s4", new GameVar("delo_6_s4"))
        .set("delo_7_s4", new GameVar("delo_7_s4"))
        .set("delo_8_s4", new GameVar("delo_8_s4"))
        .set("delo_9_s4", new GameVar("delo_9_s4"))
        .set("delo_10_s4", new GameVar("delo_10_s4"))
        .set("lyudi_1_s4", new GameVar("lyudi_1_s4"))
        .set("lyudi_2_s4", new GameVar("lyudi_2_s4"))
        .set("lyudi_3_s4", new GameVar("lyudi_3_s4"))
        .set("lyudi_4_s4", new GameVar("lyudi_4_s4"))
        .set("lyudi_5_s4", new GameVar("lyudi_5_s4"))
        .set("lyudi_6_s4", new GameVar("lyudi_6_s4"))
        .set("lyudi_7_s4", new GameVar("lyudi_7_s4"))
        .set("lyudi_8_s4", new GameVar("lyudi_8_s4"))
        .set("lyudi_9_s4", new GameVar("lyudi_9_s4"))
        .set("lyudi_10_s4", new GameVar("lyudi_10_s4"))
        .set("komf_1_s5", new GameVar("komf_1_s5"))
        .set("komf_2_s5", new GameVar("komf_2_s5"))
        .set("komf_3_s5", new GameVar("komf_3_s5"))
        .set("komf_4_s5", new GameVar("komf_4_s5"))
        .set("komf_5_s5", new GameVar("komf_5_s5"))
        .set("komf_6_s5", new GameVar("komf_6_s5"))
        .set("komf_7_s5", new GameVar("komf_7_s5"))
        .set("komf_8_s5", new GameVar("komf_8_s5"))
        .set("komf_9_s5", new GameVar("komf_9_s5"))
        .set("komf_10_s5", new GameVar("komf_10_s5"))
        .set("prizn_1_s5", new GameVar("prizn_1_s5"))
        .set("prizn_2_s5", new GameVar("prizn_2_s5"))
        .set("prizn_3_s5", new GameVar("prizn_3_s5"))
        .set("prizn_4_s5", new GameVar("prizn_4_s5"))
        .set("prizn_5_s5", new GameVar("prizn_5_s5"))
        .set("prizn_6_s5", new GameVar("prizn_6_s5"))
        .set("prizn_7_s5", new GameVar("prizn_7_s5"))
        .set("prizn_8_s5", new GameVar("prizn_8_s5"))
        .set("prizn_9_s5", new GameVar("prizn_9_s5"))
        .set("prizn_10_s5", new GameVar("prizn_10_s5"))
        .set("lyudi_1_s5", new GameVar("lyudi_1_s5"))
        .set("lyudi_2_s5", new GameVar("lyudi_2_s5"))
        .set("lyudi_3_s5", new GameVar("lyudi_3_s5"))
        .set("lyudi_4_s5", new GameVar("lyudi_4_s5"))
        .set("lyudi_5_s5", new GameVar("lyudi_5_s5"))
        .set("lyudi_6_s5", new GameVar("lyudi_6_s5"))
        .set("lyudi_7_s5", new GameVar("lyudi_7_s5"))
        .set("lyudi_8_s5", new GameVar("lyudi_8_s5"))
        .set("lyudi_9_s5", new GameVar("lyudi_9_s5"))
        .set("lyudi_10_s5", new GameVar("lyudi_10_s5"))
        .set("delo_1_s5", new GameVar("delo_1_s5"))
        .set("delo_2_s5", new GameVar("delo_2_s5"))
        .set("delo_3_s5", new GameVar("delo_3_s5"))
        .set("delo_4_s5", new GameVar("delo_4_s5"))
        .set("delo_5_s5", new GameVar("delo_5_s5"))
        .set("delo_6_s5", new GameVar("delo_6_s5"))
        .set("delo_7_s5", new GameVar("delo_7_s5"))
        .set("delo_8_s5", new GameVar("delo_8_s5"))
        .set("delo_9_s5", new GameVar("delo_9_s5"))
        .set("delo_10_s5", new GameVar("delo_10_s5"))
        .set("komf_1_s6", new GameVar("komf_1_s6"))
        .set("komf_2_s6", new GameVar("komf_2_s6"))
        .set("komf_3_s6", new GameVar("komf_3_s6"))
        .set("komf_4_s6", new GameVar("komf_4_s6"))
        .set("komf_5_s6", new GameVar("komf_5_s6"))
        .set("komf_6_s6", new GameVar("komf_6_s6"))
        .set("komf_7_s6", new GameVar("komf_7_s6"))
        .set("komf_8_s6", new GameVar("komf_8_s6"))
        .set("komf_9_s6", new GameVar("komf_9_s6"))
        .set("komf_10_s6", new GameVar("komf_10_s6"))
        .set("prizn_1_s6", new GameVar("prizn_1_s6"))
        .set("prizn_2_s6", new GameVar("prizn_2_s6"))
        .set("prizn_3_s6", new GameVar("prizn_3_s6"))
        .set("prizn_4_s6", new GameVar("prizn_4_s6"))
        .set("prizn_5_s6", new GameVar("prizn_5_s6"))
        .set("prizn_6_s6", new GameVar("prizn_6_s6"))
        .set("prizn_7_s6", new GameVar("prizn_7_s6"))
        .set("prizn_8_s6", new GameVar("prizn_8_s6"))
        .set("prizn_9_s6", new GameVar("prizn_9_s6"))
        .set("prizn_10_s6", new GameVar("prizn_10_s6"))
        .set("lyudi_1_s6", new GameVar("lyudi_1_s6"))
        .set("lyudi_2_s6", new GameVar("lyudi_2_s6"))
        .set("lyudi_3_s6", new GameVar("lyudi_3_s6"))
        .set("lyudi_4_s6", new GameVar("lyudi_4_s6"))
        .set("lyudi_5_s6", new GameVar("lyudi_5_s6"))
        .set("lyudi_6_s6", new GameVar("lyudi_6_s6"))
        .set("lyudi_7_s6", new GameVar("lyudi_7_s6"))
        .set("lyudi_8_s6", new GameVar("lyudi_8_s6"))
        .set("lyudi_9_s6", new GameVar("lyudi_9_s6"))
        .set("lyudi_10_s6", new GameVar("lyudi_10_s6"))
        .set("delo_1_s6", new GameVar("delo_1_s6"))
        .set("delo_2_s6", new GameVar("delo_2_s6"))
        .set("delo_3_s6", new GameVar("delo_3_s6"))
        .set("delo_4_s6", new GameVar("delo_4_s6"))
        .set("delo_5_s6", new GameVar("delo_5_s6"))
        .set("delo_6_s6", new GameVar("delo_6_s6"))
        .set("delo_7_s6", new GameVar("delo_7_s6"))
        .set("delo_8_s6", new GameVar("delo_8_s6"))
        .set("delo_9_s6", new GameVar("delo_9_s6"))
        .set("delo_10_s6", new GameVar("delo_10_s6"))
        .set("lyudi_1_s7", new GameVar("lyudi_1_s7"))
        .set("lyudi_2_s7", new GameVar("lyudi_2_s7"))
        .set("lyudi_3_s7", new GameVar("lyudi_3_s7"))
        .set("lyudi_4_s7", new GameVar("lyudi_4_s7"))
        .set("lyudi_5_s7", new GameVar("lyudi_5_s7"))
        .set("lyudi_6_s7", new GameVar("lyudi_6_s7"))
        .set("lyudi_7_s7", new GameVar("lyudi_7_s7"))
        .set("lyudi_8_s7", new GameVar("lyudi_8_s7"))
        .set("lyudi_9_s7", new GameVar("lyudi_9_s7"))
        .set("lyudi_10_s7", new GameVar("lyudi_10_s7"))
        .set("delo_1_s7", new GameVar("delo_1_s7"))
        .set("delo_2_s7", new GameVar("delo_2_s7"))
        .set("delo_3_s7", new GameVar("delo_3_s7"))
        .set("delo_4_s7", new GameVar("delo_4_s7"))
        .set("delo_5_s7", new GameVar("delo_5_s7"))
        .set("delo_6_s7", new GameVar("delo_6_s7"))
        .set("delo_7_s7", new GameVar("delo_7_s7"))
        .set("delo_8_s7", new GameVar("delo_8_s7"))
        .set("delo_9_s7", new GameVar("delo_9_s7"))
        .set("delo_10_s7", new GameVar("delo_10_s7"))
        .set("komf_1_s7", new GameVar("komf_1_s7"))
        .set("komf_2_s7", new GameVar("komf_2_s7"))
        .set("komf_3_s7", new GameVar("komf_3_s7"))
        .set("komf_4_s7", new GameVar("komf_4_s7"))
        .set("komf_5_s7", new GameVar("komf_5_s7"))
        .set("komf_6_s7", new GameVar("komf_6_s7"))
        .set("komf_7_s7", new GameVar("komf_7_s7"))
        .set("komf_8_s7", new GameVar("komf_8_s7"))
        .set("komf_9_s7", new GameVar("komf_9_s7"))
        .set("komf_10_s7", new GameVar("komf_10_s7"))
        .set("prizn_1_s7", new GameVar("prizn_1_s7"))
        .set("prizn_2_s7", new GameVar("prizn_2_s7"))
        .set("prizn_3_s7", new GameVar("prizn_3_s7"))
        .set("prizn_4_s7", new GameVar("prizn_4_s7"))
        .set("prizn_5_s7", new GameVar("prizn_5_s7"))
        .set("prizn_6_s7", new GameVar("prizn_6_s7"))
        .set("prizn_7_s7", new GameVar("prizn_7_s7"))
        .set("prizn_8_s7", new GameVar("prizn_8_s7"))
        .set("prizn_9_s7", new GameVar("prizn_9_s7"))
        .set("prizn_10_s7", new GameVar("prizn_10_s7"))
        .set("lyudi_1_s8", new GameVar("lyudi_1_s8"))
        .set("lyudi_2_s8", new GameVar("lyudi_2_s8"))
        .set("lyudi_3_s8", new GameVar("lyudi_3_s8"))
        .set("lyudi_4_s8", new GameVar("lyudi_4_s8"))
        .set("lyudi_5_s8", new GameVar("lyudi_5_s8"))
        .set("lyudi_6_s8", new GameVar("lyudi_6_s8"))
        .set("lyudi_7_s8", new GameVar("lyudi_7_s8"))
        .set("lyudi_8_s8", new GameVar("lyudi_8_s8"))
        .set("lyudi_9_s8", new GameVar("lyudi_9_s8"))
        .set("lyudi_10_s8", new GameVar("lyudi_10_s8"))
        .set("delo_1_s8", new GameVar("delo_1_s8"))
        .set("delo_2_s8", new GameVar("delo_2_s8"))
        .set("delo_3_s8", new GameVar("delo_3_s8"))
        .set("delo_4_s8", new GameVar("delo_4_s8"))
        .set("delo_5_s8", new GameVar("delo_5_s8"))
        .set("delo_6_s8", new GameVar("delo_6_s8"))
        .set("delo_7_s8", new GameVar("delo_7_s8"))
        .set("delo_8_s8", new GameVar("delo_8_s8"))
        .set("delo_9_s8", new GameVar("delo_9_s8"))
        .set("delo_10_s8", new GameVar("delo_10_s8"))
        .set("komf_1_s8", new GameVar("komf_1_s8"))
        .set("komf_2_s8", new GameVar("komf_2_s8"))
        .set("komf_3_s8", new GameVar("komf_3_s8"))
        .set("komf_4_s8", new GameVar("komf_4_s8"))
        .set("komf_5_s8", new GameVar("komf_5_s8"))
        .set("komf_6_s8", new GameVar("komf_6_s8"))
        .set("komf_7_s8", new GameVar("komf_7_s8"))
        .set("komf_8_s8", new GameVar("komf_8_s8"))
        .set("komf_9_s8", new GameVar("komf_9_s8"))
        .set("komf_10_s8", new GameVar("komf_10_s8"))
        .set("prizn_1_s8", new GameVar("prizn_1_s8"))
        .set("prizn_2_s8", new GameVar("prizn_2_s8"))
        .set("prizn_3_s8", new GameVar("prizn_3_s8"))
        .set("prizn_4_s8", new GameVar("prizn_4_s8"))
        .set("prizn_5_s8", new GameVar("prizn_5_s8"))
        .set("prizn_6_s8", new GameVar("prizn_6_s8"))
        .set("prizn_7_s8", new GameVar("prizn_7_s8"))
        .set("prizn_8_s8", new GameVar("prizn_8_s8"))
        .set("prizn_9_s8", new GameVar("prizn_9_s8"))
        .set("prizn_10_s8", new GameVar("prizn_10_s8"))
        .set("task_2_1_1_chief", new GameVar("task_2_1_1_chief"))
        .set("task_2_1_2_chief", new GameVar("task_2_1_2_chief"))
        .set("task_2_1_3_chief", new GameVar("task_2_1_3_chief"))
        .set("task_2_1_4_chief", new GameVar("task_2_1_4_chief"))
        .set("task_2_1_5_chief", new GameVar("task_2_1_5_chief"))
        .set("task_2_1_6_chief", new GameVar("task_2_1_6_chief"))
        .set("task_3_2_1_chief", new GameVar("task_3_2_1_chief"))
        .set("task_3_2_2_chief", new GameVar("task_3_2_2_chief"))
        .set("task_3_2_3_chief", new GameVar("task_3_2_3_chief"))
        .set("task_3_2_4_chief", new GameVar("task_3_2_4_chief"))
        .set("task_3_2_5_chief", new GameVar("task_3_2_5_chief"))
        .set("task_3_2_6_chief", new GameVar("task_3_2_6_chief"))
        .set("task_4_3_1_chief", new GameVar("task_4_3_1_chief"))
        .set("task_4_3_2_chief", new GameVar("task_4_3_2_chief"))
        .set("task_4_3_3_chief", new GameVar("task_4_3_3_chief"))
        .set("task_4_3_4_chief", new GameVar("task_4_3_4_chief"))
        .set("task_4_3_5_chief", new GameVar("task_4_3_5_chief"))
        .set("task_4_3_6_chief", new GameVar("task_4_3_6_chief"))
        .set("task_2_1_1_s1", new GameVar("task_2_1_1_s1"))
        .set("task_2_1_2_s1", new GameVar("task_2_1_2_s1"))
        .set("task_2_1_3_s1", new GameVar("task_2_1_3_s1"))
        .set("task_2_1_4_s1", new GameVar("task_2_1_4_s1"))
        .set("task_2_1_5_s1", new GameVar("task_2_1_5_s1"))
        .set("task_2_1_6_s1", new GameVar("task_2_1_6_s1"))
        .set("task_3_2_1_s1", new GameVar("task_3_2_1_s1"))
        .set("task_3_2_2_s1", new GameVar("task_3_2_2_s1"))
        .set("task_3_2_3_s1", new GameVar("task_3_2_3_s1"))
        .set("task_3_2_4_s1", new GameVar("task_3_2_4_s1"))
        .set("task_3_2_5_s1", new GameVar("task_3_2_5_s1"))
        .set("task_3_2_6_s1", new GameVar("task_3_2_6_s1"))
        .set("task_4_3_1_s1", new GameVar("task_4_3_1_s1"))
        .set("task_4_3_2_s1", new GameVar("task_4_3_2_s1"))
        .set("task_4_3_3_s1", new GameVar("task_4_3_3_s1"))
        .set("task_4_3_4_s1", new GameVar("task_4_3_4_s1"))
        .set("task_4_3_5_s1", new GameVar("task_4_3_5_s1"))
        .set("task_4_3_6_s1", new GameVar("task_4_3_6_s1"))
        .set("task_2_1_1_s2", new GameVar("task_2_1_1_s2"))
        .set("task_2_1_2_s2", new GameVar("task_2_1_2_s2"))
        .set("task_2_1_3_s2", new GameVar("task_2_1_3_s2"))
        .set("task_2_1_4_s2", new GameVar("task_2_1_4_s2"))
        .set("task_2_1_5_s2", new GameVar("task_2_1_5_s2"))
        .set("task_2_1_6_s2", new GameVar("task_2_1_6_s2"))
        .set("task_3_2_1_s2", new GameVar("task_3_2_1_s2"))
        .set("task_3_2_2_s2", new GameVar("task_3_2_2_s2"))
        .set("task_3_2_3_s2", new GameVar("task_3_2_3_s2"))
        .set("task_3_2_4_s2", new GameVar("task_3_2_4_s2"))
        .set("task_3_2_5_s2", new GameVar("task_3_2_5_s2"))
        .set("task_3_2_6_s2", new GameVar("task_3_2_6_s2"))
        .set("task_4_3_1_s2", new GameVar("task_4_3_1_s2"))
        .set("task_4_3_2_s2", new GameVar("task_4_3_2_s2"))
        .set("task_4_3_3_s2", new GameVar("task_4_3_3_s2"))
        .set("task_4_3_4_s2", new GameVar("task_4_3_4_s2"))
        .set("task_4_3_5_s2", new GameVar("task_4_3_5_s2"))
        .set("task_4_3_6_s2", new GameVar("task_4_3_6_s2"))
        .set("task_2_1_1_s3", new GameVar("task_2_1_1_s3"))
        .set("task_2_1_2_s3", new GameVar("task_2_1_2_s3"))
        .set("task_2_1_3_s3", new GameVar("task_2_1_3_s3"))
        .set("task_2_1_4_s3", new GameVar("task_2_1_4_s3"))
        .set("task_2_1_5_s3", new GameVar("task_2_1_5_s3"))
        .set("task_2_1_6_s3", new GameVar("task_2_1_6_s3"))
        .set("task_3_2_1_s3", new GameVar("task_3_2_1_s3"))
        .set("task_3_2_2_s3", new GameVar("task_3_2_2_s3"))
        .set("task_3_2_3_s3", new GameVar("task_3_2_3_s3"))
        .set("task_3_2_4_s3", new GameVar("task_3_2_4_s3"))
        .set("task_3_2_5_s3", new GameVar("task_3_2_5_s3"))
        .set("task_3_2_6_s3", new GameVar("task_3_2_6_s3"))
        .set("task_4_3_1_s3", new GameVar("task_4_3_1_s3"))
        .set("task_4_3_2_s3", new GameVar("task_4_3_2_s3"))
        .set("task_4_3_3_s3", new GameVar("task_4_3_3_s3"))
        .set("task_4_3_4_s3", new GameVar("task_4_3_4_s3"))
        .set("task_4_3_5_s3", new GameVar("task_4_3_5_s3"))
        .set("task_4_3_6_s3", new GameVar("task_4_3_6_s3"))
        .set("task_2_1_1_s4", new GameVar("task_2_1_1_s4"))
        .set("task_2_1_2_s4", new GameVar("task_2_1_2_s4"))
        .set("task_2_1_3_s4", new GameVar("task_2_1_3_s4"))
        .set("task_2_1_4_s4", new GameVar("task_2_1_4_s4"))
        .set("task_2_1_5_s4", new GameVar("task_2_1_5_s4"))
        .set("task_2_1_6_s4", new GameVar("task_2_1_6_s4"))
        .set("task_3_2_1_s4", new GameVar("task_3_2_1_s4"))
        .set("task_3_2_2_s4", new GameVar("task_3_2_2_s4"))
        .set("task_3_2_3_s4", new GameVar("task_3_2_3_s4"))
        .set("task_3_2_4_s4", new GameVar("task_3_2_4_s4"))
        .set("task_3_2_5_s4", new GameVar("task_3_2_5_s4"))
        .set("task_3_2_6_s4", new GameVar("task_3_2_6_s4"))
        .set("task_4_3_1_s4", new GameVar("task_4_3_1_s4"))
        .set("task_4_3_2_s4", new GameVar("task_4_3_2_s4"))
        .set("task_4_3_3_s4", new GameVar("task_4_3_3_s4"))
        .set("task_4_3_4_s4", new GameVar("task_4_3_4_s4"))
        .set("task_4_3_5_s4", new GameVar("task_4_3_5_s4"))
        .set("task_4_3_6_s4", new GameVar("task_4_3_6_s4"))
        .set("task_2_1_1_s5", new GameVar("task_2_1_1_s5"))
        .set("task_2_1_2_s5", new GameVar("task_2_1_2_s5"))
        .set("task_2_1_3_s5", new GameVar("task_2_1_3_s5"))
        .set("task_2_1_4_s5", new GameVar("task_2_1_4_s5"))
        .set("task_2_1_5_s5", new GameVar("task_2_1_5_s5"))
        .set("task_2_1_6_s5", new GameVar("task_2_1_6_s5"))
        .set("task_3_2_1_s5", new GameVar("task_3_2_1_s5"))
        .set("task_3_2_2_s5", new GameVar("task_3_2_2_s5"))
        .set("task_3_2_3_s5", new GameVar("task_3_2_3_s5"))
        .set("task_3_2_4_s5", new GameVar("task_3_2_4_s5"))
        .set("task_3_2_5_s5", new GameVar("task_3_2_5_s5"))
        .set("task_3_2_6_s5", new GameVar("task_3_2_6_s5"))
        .set("task_4_3_1_s5", new GameVar("task_4_3_1_s5"))
        .set("task_4_3_2_s5", new GameVar("task_4_3_2_s5"))
        .set("task_4_3_3_s5", new GameVar("task_4_3_3_s5"))
        .set("task_4_3_4_s5", new GameVar("task_4_3_4_s5"))
        .set("task_4_3_5_s5", new GameVar("task_4_3_5_s5"))
        .set("task_4_3_6_s5", new GameVar("task_4_3_6_s5"))
        .set("task_2_1_1_s6", new GameVar("task_2_1_1_s6"))
        .set("task_2_1_2_s6", new GameVar("task_2_1_2_s6"))
        .set("task_2_1_3_s6", new GameVar("task_2_1_3_s6"))
        .set("task_2_1_4_s6", new GameVar("task_2_1_4_s6"))
        .set("task_2_1_5_s6", new GameVar("task_2_1_5_s6"))
        .set("task_2_1_6_s6", new GameVar("task_2_1_6_s6"))
        .set("task_3_2_1_s6", new GameVar("task_3_2_1_s6"))
        .set("task_3_2_2_s6", new GameVar("task_3_2_2_s6"))
        .set("task_3_2_3_s6", new GameVar("task_3_2_3_s6"))
        .set("task_3_2_4_s6", new GameVar("task_3_2_4_s6"))
        .set("task_3_2_5_s6", new GameVar("task_3_2_5_s6"))
        .set("task_3_2_6_s6", new GameVar("task_3_2_6_s6"))
        .set("task_4_3_1_s6", new GameVar("task_4_3_1_s6"))
        .set("task_4_3_2_s6", new GameVar("task_4_3_2_s6"))
        .set("task_4_3_3_s6", new GameVar("task_4_3_3_s6"))
        .set("task_4_3_4_s6", new GameVar("task_4_3_4_s6"))
        .set("task_4_3_5_s6", new GameVar("task_4_3_5_s6"))
        .set("task_4_3_6_s6", new GameVar("task_4_3_6_s6"))
        .set("task_2_1_1_s7", new GameVar("task_2_1_1_s7"))
        .set("task_2_1_2_s7", new GameVar("task_2_1_2_s7"))
        .set("task_2_1_3_s7", new GameVar("task_2_1_3_s7"))
        .set("task_2_1_4_s7", new GameVar("task_2_1_4_s7"))
        .set("task_2_1_5_s7", new GameVar("task_2_1_5_s7"))
        .set("task_2_1_6_s7", new GameVar("task_2_1_6_s7"))
        .set("task_3_2_1_s7", new GameVar("task_3_2_1_s7"))
        .set("task_3_2_2_s7", new GameVar("task_3_2_2_s7"))
        .set("task_3_2_3_s7", new GameVar("task_3_2_3_s7"))
        .set("task_3_2_4_s7", new GameVar("task_3_2_4_s7"))
        .set("task_3_2_5_s7", new GameVar("task_3_2_5_s7"))
        .set("task_3_2_6_s7", new GameVar("task_3_2_6_s7"))
        .set("task_4_3_1_s7", new GameVar("task_4_3_1_s7"))
        .set("task_4_3_2_s7", new GameVar("task_4_3_2_s7"))
        .set("task_4_3_3_s7", new GameVar("task_4_3_3_s7"))
        .set("task_4_3_4_s7", new GameVar("task_4_3_4_s7"))
        .set("task_4_3_5_s7", new GameVar("task_4_3_5_s7"))
        .set("task_4_3_6_s7", new GameVar("task_4_3_6_s7"))
        .set("task_2_1_1_s8", new GameVar("task_2_1_1_s8"))
        .set("task_2_1_2_s8", new GameVar("task_2_1_2_s8"))
        .set("task_2_1_3_s8", new GameVar("task_2_1_3_s8"))
        .set("task_2_1_4_s8", new GameVar("task_2_1_4_s8"))
        .set("task_2_1_5_s8", new GameVar("task_2_1_5_s8"))
        .set("task_2_1_6_s8", new GameVar("task_2_1_6_s8"))
        .set("task_3_2_1_s8", new GameVar("task_3_2_1_s8"))
        .set("task_3_2_2_s8", new GameVar("task_3_2_2_s8"))
        .set("task_3_2_3_s8", new GameVar("task_3_2_3_s8"))
        .set("task_3_2_4_s8", new GameVar("task_3_2_4_s8"))
        .set("task_3_2_5_s8", new GameVar("task_3_2_5_s8"))
        .set("task_3_2_6_s8", new GameVar("task_3_2_6_s8"))
        .set("task_4_3_1_s8", new GameVar("task_4_3_1_s8"))
        .set("task_4_3_2_s8", new GameVar("task_4_3_2_s8"))
        .set("task_4_3_3_s8", new GameVar("task_4_3_3_s8"))
        .set("task_4_3_4_s8", new GameVar("task_4_3_4_s8"))
        .set("task_4_3_5_s8", new GameVar("task_4_3_5_s8"))
        .set("task_4_3_6_s8", new GameVar("task_4_3_6_s8"));
}