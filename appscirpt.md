const SHEETS_NAME = "Sheet1";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEETS_NAME);
    
    if (!sheet) {
      sheet = doc.insertSheet(SHEETS_NAME);
    }

    // Nếu Sheet trống, tạo tiêu đề có cột STT
    if (sheet.getLastRow() === 0) {
      const headers = ["STT", "Thời gian", "Họ và tên", "Số điện thoại", "Địa chỉ", "Gói liệu trình", "Ghi chú", "Nguồn đơn hàng"];
      sheet.getRange(1, 1, 1, headers.length)
           .setValues([headers])
           .setFontWeight("bold")
           .setBackground("#bc6c25")
           .setFontColor("white")
           .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    const lastRow = sheet.getLastRow();
    const stt = lastRow; 

    const rowData = [
      stt, 
      new Date(),
      e.parameter.name || "",
      "'" + (e.parameter.phone || ""),
      e.parameter.address || "",
      e.parameter.package || "",
      e.parameter.note || "",
      e.parameter.sourceUrl || "" // Lưu link web chạy đơn hàng
    ];

    sheet.appendRow(rowData);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } 
  catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } 
  finally {
    lock.releaseLock();
  }
}
