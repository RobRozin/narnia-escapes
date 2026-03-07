const NEWSLETTER_SHEET_NAME = "Newsletter";
const NEWSLETTER_HEADERS = [
  "subscribed_at",
  "email",
  "source",
  "page",
  "user_agent",
];

function doGet() {
  return jsonResponse_({
    ok: true,
    service: "narnia-newsletter",
  });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const email = normalizeEmail_(payload.email);

    if (!email || !isValidEmail_(email)) {
      return jsonResponse_({
        ok: false,
        error: "A valid email address is required.",
      });
    }

    const sheet = getNewsletterSheet_();
    const existingEmails = getExistingEmails_(sheet);

    if (!existingEmails.has(email)) {
      sheet.appendRow([
        new Date(),
        email,
        payload.source || "",
        payload.page || "",
        payload.userAgent || "",
      ]);
    }

    return jsonResponse_({
      ok: true,
      duplicate: existingEmails.has(email),
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error.message || "Unexpected error.",
    });
  }
}

function parsePayload_(e) {
  const raw = (e && e.postData && e.postData.contents) || "{}";
  return JSON.parse(raw);
}

function normalizeEmail_(value) {
  return String(value || "").trim().toLowerCase();
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getNewsletterSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(NEWSLETTER_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(NEWSLETTER_SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(NEWSLETTER_HEADERS);
  }

  return sheet;
}

function getExistingEmails_(sheet) {
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return new Set();
  }

  const values = sheet
    .getRange(2, 2, lastRow - 1, 1)
    .getValues()
    .flat()
    .map(normalizeEmail_)
    .filter(Boolean);

  return new Set(values);
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
