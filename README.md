# Q&A
Q: Why would I want to cloak a tab?  
A: An `about:blank` URL won't show up in your search history.
<br><br>

Q: How do I start using the cloaker in my website?  
A: Add the line
```html
<script src="https://raw.githubusercontent.com/NCSources0/Website-about-blank-Cloaker/main/cloak.js"></script>
```
before `</body>`
<br><br>

Q: How would I cloak the tab?  
A: Use the cloak function, here's an example:
```html
<button onclick="cloak();">Cloak Tab</button>
```
<br><br>

Q: Could I use this in any website?
A: Yes, as long as the website can be embed within an iframe, and if you use this bookmarklet code:
```javascript
javascript:(function(){try{let aboutBlank=open();if(!aboutBlank){throw new Error('Failed to open about:blank')}aboutBlank.document.open();aboutBlank.document.write(`<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'/><meta name='viewport'content='width=device-width,initial-scale=1.0'/></head><body><iframe src='${location.href}'style='position:fixed;width:100vw;height:100vh;left:0;top:0;border:0'></iframe></body></html>`);aboutBlank.document.close();location.replace('http://google.co')}catch(error){console.error(error);alert('Error: '+error.message)}})()
```
<br><br>

`Nerd since <<INSERT BIRTH YEAR>>`
