
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
  if ((findIsabelle.length > 0 || findIsabelleByName >= 0) && showCode.length == 0) {

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