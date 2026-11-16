/**
 * Google Sheets lead webhook for the Renom Video VSL page.
 * Sheet: "Renom Video – Meta Ad Leads". Every lead is added as a row on the first tab.
 *
 * Setup:
 *  1. Open the sheet. Extensions > Apps Script. Delete what's there, paste this file, Save.
 *  2. Deploy > New deployment > type "Web app".
 *       Execute as: Me      Who has access: Anyone
 *  3. Authorize, then copy the Web app URL (ends in /exec).
 *  4. Paste it into leadWebhookUrl in config.js.
 *
 * If you change this script later: Deploy > Manage deployments > edit > New version
 * (keeps the same URL).
 */

var SCRIPT_VERSION = 'Renom v1';
var COLUMNS = [
  'submitted_at', 'name', 'first_name', 'last_name', 'email', 'phone',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'fbclid', 'source', 'page_url'
];

// Open the /exec URL in a browser to check the setup.
function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var msg = ss
    ? 'OK: lead webhook ' + SCRIPT_VERSION + ' is live and connected to the sheet "' + ss.getName() + '".'
    : 'NOT CONNECTED: this script is not attached to a Google Sheet. ' +
      'Open your sheet, go to Extensions > Apps Script, paste the script there, and deploy it from there.';
  return ContentService.createTextOutput(msg);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var p = (e && e.parameter) || {};
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    if (sheet.getFrozenRows() === 0) sheet.setFrozenRows(1);
    sheet.appendRow(COLUMNS.map(function (c) {
      var v = p[c] || '';
      // Stop Sheets from treating values like "+16105551234" or "=..." as formulas
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    }));
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
