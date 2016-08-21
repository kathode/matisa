
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
//$(document).ready(function () {
     // $('.js-file-line').each(function(){
     // $(this).html($(this).html().replace(/<span class=\"pl-smi\">(.+?)<\/span>(.+?)/g,'<span class=\"pl-smi\">$1$2<\/span>'));
     // });
      

     /* $('.js-file-line').each(function(){
      $(this).html($(this).html().replace(/<\/span>(.+?)<span class=\"pl-smi\">/g,'$1<\/span><span class=\"pl-smi\">'));
      });
      */
      //$('.js-file-line').each(function(){

          // <span class="pl-smi"></span>
/*
          // iterate over all js-file-lines of code
          fileLines = document.getElementsByClassName("js-file-line")
          for (i = 0; i < fileLines.length; i++) {
              // find the first .pl-smi
              elems = fileLines[i].childNodes;
              //elems = fileLines[i].getElementsByClassName("pl-smi")

              plsmi = null
              removals = []
              // iterate over the children
              for (p = 0; p < elems.length; p++) {

                  // we move all text nodes into the previous span
                  if (elems[p].nodeType == 3 && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[p].textContent
                      removals.push(elems[p])
                  } else if (elems[p].nodeType == 1 && elems[p].tagName == "SPAN" && elems[p].className == "pl-smi" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[p].textContent
                      removals.push(elems[p])
                  } else if (elems[p].nodeType == 1 && elems[p].tagName == "SPAN" && elems[p].className == "pl-c1" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[p].textContent
                      removals.push(elems[p])
                  } else if (elems[p].nodeType == 1 && elems[p].tagName == "SPAN" && elems[p].className == "pl-smi") {
                      plsmi = elems[p]
                  } else if (elems[p].nodeType != 3) {
                      plsmi = null
                  }
                  
                  // and keep searching for all sibling pl-smi nodes to join them
              }

              for (p = 0; p < removals.length; p++) {
                 fileLines[i].removeChild(removals[p])  
              }
          }
          */
     /* 
          plsmi = $('.js-file-line > .pl-smi')
          content = ''

          // Go through the nextAll and see, if there is text then move it inside the span
          // if we keep finding pl-smi's then aggregate them till we find something different
          // that is not text.
          plsmi.nextAll().each(function (key, value) {
            inner = value.innerHTML
            text = value.innerText
            });
          plsmi.nextAll('.pl-smi').each(function() { content += $(this).html(); })
          plsmi.nextAll('.pl-smi').remove()
          h = plsmi.html()
          plsmi.html(plsmi.html() + content)
*/
       //   })
          // This regex is too agressive, really need to walk the DOM structure
          // and only conjoin two consequtive pl-smi spans, otherwise we are 
          // joining too many.
      /*    var regex = /<span class=\"pl-smi\">.+?<\/span><span class=\"pl-smi\">.+?<\/span>/;
          var tobereplaced = $(this).html()
          while (regex.test(tobereplaced)) {
            tobereplaced = tobereplaced.replace(/<span class=\"pl-smi\">(.+?)<\/span><span class=\"pl-smi\">(.+?)<\/span>/g,'<span class=\"pl-smi\">$1$2<\/span>')
          }
          $(this).html(tobereplaced)
      });

*/
  /*    function latexEscape(s) {
         if (s == '_') { return "\_"} else return s
      }
      //$('body').html().replace(/<span class=\"pl-smi\">(.+?)<\/span>(.+?)<span class=\"pl-smi\">(.+?)<\/span>/g,'<span class=\"pl-smi\">X:$1$2$3<\/span>');
      $("span.pl-s").text(function(){
          text = $(this).text()
          state = 0
          acc = ''
          finalStr = ''
          for (p = 0; p < text.length; p++) {
            switch (state) {
              case 0:
                if (text[p] == '\\') {
                  state = 1
                }
                acc += text[p]
                break;
              case 1: // Already seen a \
                if (text[p] == '<') {
                  state = 2
                } else {
                  state = 0
                }
                acc += text[p]
                break;
              case 2: // Already seen \<
                if (text[p] == '^') {
                  state = 3
                } else {
                  state = 4
                  command = text[p]
                }
                break
              case 3: // Seen a ^
                if (text[p] == '>') {
                  // whole command is finished, and it was preceeded by ^
                  if (command == 'sup') {
                     acc += '\\(^'
                  }
                  state = 5
                } else {
                  command = text[p]
                }
                break;
              case '\\': // Isabelle command: \<XXX>
                State = true
                break;
              case '<':
                LLessThan = true
                break;
              default:
                if (LSlash && LLessThan) {
                   // Initial command \<
                }
            }
            finalStr += acc
          }
      return $(this).text().replace(/\\<\^sup>(.+?)/g,'\\(^$1\\)')
                           .replace(/\\<\^sub>_/g,'\\(\\_\\)')
                           .replace(/\\<\^sub>(.+?)/g,'\\(_{$1}\\)')
                           .replace(/\\<\^bsub>(.+?)\\<\^esub>/g,'\\(_{$1}\\)')
                           .replace(/\\(_{(.+?)}_\\)/g,'\\(_{$1}\\)')
                           .replace(/[^{]\\<(.+?)>/g,'\\(\\$1\\)');
      });

      $("span.pl-smi").text(function(){
      return $(this).text().replace(/\\<\^sup>(.+?)/g,'\\(^$1\\)').replace(/\\<\^sub>_/g,'\\(\\_\\)').replace(/\\<\^sub>(.+?)/g,'\\(_{$1}\\)').replace(/\\<\^bsub>(.+?)\\<\^esub>/g,'\\(_{$1}\\)').replace(/\\<(.+?)>/g,'\\(\\$1\\)');
      });
*/

  findIsabelle = document.getElementsByClassName("type-isabelle")
  showCode = document.getElementsByClassName("show-code")
  findIsabelleByName = document.documentElement.innerHTML.indexOf('.thy')

  if ((findIsabelle.length > 0 || findIsabelleByName >= 0) && showCode.length == 0) {

  config = document.createElement('script');
	config.setAttribute('type', 'text/javascript');
	config.setAttribute('src', chrome.extension.getURL('config.js'));

  config2 = document.createElement('script');
  config2.setAttribute('type', 'text/x-mathjax-config');
  config2.innerHTML = "MathJax.Hub.Register.StartupHook(\"End\",n);"

  isabelleparser = document.createElement('script');
  isabelleparser.setAttribute('type', 'text/javascript');
  isabelleparser.setAttribute('src', chrome.extension.getURL('parser.js'));

  cdn = document.createElement('script');
	cdn.setAttribute('type', 'text/javascript');
	cdn.setAttribute('src', chrome.extension.getURL('MathJax.js'));//cdn.mathjax.org/mathjax/latest/MathJax.js'); //chrome.extension.getURL('mathjax/MathJax.js'))//
	//cdn.crossOrigin = 'anonymous';

	jquery = document.createElement('script');
	jquery.setAttribute('type', 'text/javascript');
	jquery.setAttribute('src', chrome.extension.getURL('jquery.js'));


	matisa = document.createElement('script');
	matisa.setAttribute('type', 'text/javascript');
	matisa.setAttribute('src', chrome.extension.getURL('matisa.js'));

	popstate = document.createElement('script');
	popstate.setAttribute('type', 'text/javascript');
	popstate.innerHTML = "\
    document.addEventListener(\"pjax:end\", function() { \
			n(); console.log(\'e\'); MathJax.Hub.Queue([\"Typeset\",MathJax.Hub]); }, { passive: true })"

   //MathJax = {AuthorInit: function () {MathJax.Ajax.config.root = chrome.extension.getURL('mathjax')}}
	//document.head.appendChild(jquery);
  document.head.appendChild(matisa);
  document.head.appendChild(config2);
	document.head.appendChild(config);
	document.head.appendChild(cdn);
	document.head.appendChild(popstate);
  document.head.appendChild(isabelleparser);
  
	
  }

      
/*  				tex2jax: {
      inlineMath: [['\\(','\\)']],
      processEscapes: true
    }};

       //chrome.tabs.executeScript(null,{file:"mathjax/MathJax.js"});
	  $.getScript(chrome.extension.getURL('mathjax/MathJax.js'));
      MathJax.Hub.Config({
      extensions: ["MathZoom.js","tex2jax.js"],
  tex2jax: {
    inlineMath: [['\\(','\\)']],
    processEscapes: true
  }
  });*/
//});
}
