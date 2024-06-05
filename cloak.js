function cloak() {
  try {
    const domain = window.location.origin;
    const aboutBlank = window.open("about:blank", "_blank");
    if (!aboutBlank) {
      throw new Error("Failed to open new window");
    }
    aboutBlank.document.open();
    aboutBlank.document.write(
      ``
    );
    aboutBlank.document.close();
  } catch (error) {
    console.error("Error loading about:blank.html", error);
    alert("Error: " + error.message);
  }
}
