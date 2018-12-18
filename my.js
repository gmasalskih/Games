function exportToExcel() {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017, 12, 19)
    };

    wb.SheetNames.push("Result");

    var ws_data = [
        ['Текст мотиватора', 'Введенный пользователем текст'],
        [get("notebook_note_1_name"), get("notebook_note_1")],
        [get("notebook_note_2_name"), get("notebook_note_2")],
        [get("notebook_note_3_name"), get("notebook_note_3")],
        [get("notebook_note_4_name"), get("notebook_note_4")],
        [get("notebook_note_5_name"), get("notebook_note_5")],
        [get("notebook_note_6_name"), get("notebook_note_6")],
        [get("notebook_note_7_name"), get("notebook_note_7")],
        [get("notebook_note_8_name"), get("notebook_note_8")],
        [get("notebook_note_9_name"), get("notebook_note_9")],
        [get("notebook_note_10_name"), get("notebook_note_10")],
        [get("notebook_note_11_name"), get("notebook_note_11")],
        [get("notebook_note_12_name"), get("notebook_note_12")],
        [get("notebook_note_13_name"), get("notebook_note_13")],
        [get("notebook_note_14_name"), get("notebook_note_14")],
        [get("notebook_note_15_name"), get("notebook_note_15")],
        [get("notebook_note_16_name"), get("notebook_note_16")],
        [get("notebook_note_17_name"), get("notebook_note_17")],
        [get("notebook_note_18_name"), get("notebook_note_18")],
        [get("notebook_note_19_name"), get("notebook_note_19")],
        [get("notebook_note_20_name"), get("notebook_note_20")],
        [get("notebook_note_21_name"), get("notebook_note_21")],
        [get("notebook_note_22_name"), get("notebook_note_22")],
        [get("notebook_note_23_name"), get("notebook_note_23")],
        [get("notebook_note_24_name"), get("notebook_note_24")],
        [get("notebook_note_25_name"), get("notebook_note_25")],
        [get("notebook_note_26_name"), get("notebook_note_26")],
        [get("notebook_note_27_name"), get("notebook_note_27")],
        [get("notebook_note_28_name"), get("notebook_note_28")],
        [get("notebook_note_29_name"), get("notebook_note_29")],
        [get("notebook_note_30_name"), get("notebook_note_30")],
        [get("notebook_note_31_name"), get("notebook_note_31")],
        [get("notebook_note_32_name"), get("notebook_note_32")],
        [get("notebook_note_33_name"), get("notebook_note_33")],
        [get("notebook_note_34_name"), get("notebook_note_34")],
        [get("notebook_note_35_name"), get("notebook_note_35")],
        [get("notebook_note_36_name"), get("notebook_note_36")],
        [get("notebook_note_37_name"), get("notebook_note_37")],
        [get("notebook_note_38_name"), get("notebook_note_38")],
        [get("notebook_note_39_name"), get("notebook_note_39")],
        [get("notebook_note_40_name"), get("notebook_note_40")]
    ];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Result"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {

        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;

    }
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'notebook.xlsx');
}