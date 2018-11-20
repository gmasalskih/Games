function exportToExcel() {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date(2017, 12, 19)
    };

    wb.SheetNames.push("Result");
    var player = GetPlayer();

    var ws_data = [
        ['Текст мотиватора', 'Введенный пользователем текст'],
        [player.GetVar("notebook_note_1_name"), player.GetVar("notebook_note_1")],
        [player.GetVar("notebook_note_2_name"), player.GetVar("notebook_note_2")],
        [player.GetVar("notebook_note_3_name"), player.GetVar("notebook_note_3")],
        [player.GetVar("notebook_note_4_name"), player.GetVar("notebook_note_4")],
        [player.GetVar("notebook_note_5_name"), player.GetVar("notebook_note_5")]
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

