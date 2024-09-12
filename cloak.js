function cloak() {
  try {
    const aboutBlank = open();
    if (!aboutBlank) {
      throw new Error("Failed to open about:blank");
    }
    
    aboutBlank.document.open();
    aboutBlank.document.write(
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport"content="width=device-width,initial-scale=1.0"/>
  </head>
  <body>
    <iframe src="${location.href}"
      style="
        position:fixed;
        width:100vw;
        height:100vh;
        left:0;
        top:0;
        border:0;
      "></iframe>
  </body>
</html>`
    );
    aboutBlank.document.close();
    
    location.replace("http://google.co");
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
}
