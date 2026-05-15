/**
 * Services Layer
 */
const Services = (() => {
  /**
   * Returns a status object.
   * @return {GoogleAppsScript.Content.TextOutput}
   */
  function getStatus() {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "ok",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  return {
    getStatus,
  };
})();
