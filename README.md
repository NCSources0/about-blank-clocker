# Q&A
Q: Why would I want to cloak a tab?  
A: An [```about:blank```](about:blank) URL won't show up in your search history.

Q: How do I download the cloaker?  
A: Download [```cloak.js```](cloak.js), then put it into the same folder as your HTML file.

Q: How would I activate the cloaker to use in my HTML?  
A: Put ```<script src="cloak.js"></script>``` above ```</body>``` It should look like:
```
    ...
    <script src="cloak.js"></script>  
  </body>
</html>
```

Q: How would I cloak the tab?  
A: Use the cloak function, here's an example: ```<button onclick="cloak();">Cloak Tab</button>```
