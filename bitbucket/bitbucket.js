
/*  function queryGitHubLanguage(path) {
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

  }*/
  
  /*  In Bitbucket how do we find whether a repository's language is Isabelle? 
   *
   *  For now we just enabled it regardless.
   */

  activateMatisa();

  function activateMatisa() {

    var matisa = document.createElement('script');
    matisa.setAttribute('type', 'text/javascript');
    matisa.setAttribute('src', chrome.extension.getURL('bitbucket/matisa.js'));

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