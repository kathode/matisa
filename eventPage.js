
  function queryGitHubLanguage(path) {
    var pathArray = path.split('/');

    if (path.length >= 3) {
      // GitHub URL format:
      // https://github.com/user/repo/...
      // Query GitHub
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);

            if (response.language == "Isabelle") {
              activateMatisa();
            }
        }
      }
      xhr.open('GET', "https://api.github.com/repos/" + pathArray[1] + "/" + pathArray[2], true);
      xhr.send();
    }

  }

  // Find any GitHub code editor with an isabelle type file open
  var findIsabelle = document.getElementsByClassName("type-isabelle")
  // Find any GitHub code editor, because if we're editing there is no need to enable matisa
  var showCode = document.getElementsByClassName("show-code")         
  // Find any string '.thy' on the page
  var findIsabelleByName = document.documentElement.innerHTML.indexOf('.thy')

  // Decide whether to enable Matisa
  // The best idea would actually be to enable matisa in the background file and then
  // apply it to the page, but that doesn't seem possible because of the way extensions
  // are loaded in chrome.

  // We find the code editor of type isabelle.
  if ((findIsabelle.length > 0 && showCode.length == 0) || findIsabelleByName >= 0) {
    // We can activate matisa straight-away.
    activateMatisa();
  } else {
    // Could not find a code editor of type Isabelle nor a string '.thy'
    // We then try to query GitHub's API to check the language of this repository
    queryGitHubLanguage(document.location.pathname)
  }

  function activateMatisa() {

    var matisa = document.createElement('script');
    matisa.setAttribute('type', 'text/javascript');
    matisa.setAttribute('src', chrome.extension.getURL('matisa.js'));

    var isabelleparser = document.createElement('script');
    isabelleparser.setAttribute('type', 'text/javascript');
    isabelleparser.setAttribute('src', chrome.extension.getURL('isabellesyntax.js'));

    var mathjax = document.createElement('script');
  	mathjax.setAttribute('type', 'text/javascript');
  	mathjax.setAttribute('src', chrome.extension.getURL('MathJax.js'));

  	document.head.appendChild(matisa);
  	document.head.appendChild(mathjax);
    document.head.appendChild(isabelleparser);
  }