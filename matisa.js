
function n() {
/*$('.js-file-line').each(function(){
      $(this).html($(this).html().replace(/<\/span>(.+?)<span class=\"pl-smi\">/g,'$1<\/span><span class=\"pl-smi\">'));
      });
      
      $('.js-file-line').each(function(){

          var regex = /<span class=\"pl-smi\">.+?<\/span><span class=\"pl-smi\">.+?<\/span>/;
          var tobereplaced = $(this).html()
          while (regex.test(tobereplaced)) {
            tobereplaced = tobereplaced.replace(/<span class=\"pl-smi\">(.+?)<\/span><span class=\"pl-smi\">(.+?)<\/span>/g,'<span class=\"pl-smi\">$1$2<\/span>')
          }
          $(this).html(tobereplaced)
      });
*/
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

      fileLines = document.getElementsByClassName("pl-s")
      for (i = 0; i < fileLines.length; i++) {
        source = fileLines[i].textContent
        target = isabelle.parse(source)
        fileLines[i].textContent = target
      }

      fileLines = document.getElementsByClassName("pl-smi")
      for (i = 0; i < fileLines.length; i++) {
        source = fileLines[i].textContent
        target = isabelle.parse(source)
        fileLines[i].textContent = target
      }

      fileLines = document.getElementsByClassName("pl-c")
      for (i = 0; i < fileLines.length; i++) {
        source = fileLines[i].innerHTML 
        target = fileLines[i].innerHTML.replace(/\\emph\{(.+?)\}/g,'<span style=\"font-style: italic;\">$1</span>')
        fileLines[i].innerHTML = target
      }
/*
      //$('body').html().replace(/<span class=\"pl-smi\">(.+?)<\/span>(.+?)<span class=\"pl-smi\">(.+?)<\/span>/g,'<span class=\"pl-smi\">X:$1$2$3<\/span>');
      $("span.pl-s").text(function(){
      return $(this).text().replace(/\\<\^sup>(.+?)/g,'\\(^$1\\)').replace(/\\<\^sub>(.+?)/g,'\\(_{$1}\\)').replace(/\\<\^bsub>(.+?)\\<\^esub>/g,'\\(\\_{$1}\\)').replace(/\\<(.+?)>/g,'\\(\\$1\\)');
      });

      $("span.pl-smi").text(function(){
      return $(this).text().replace(/\\<\^sup>(.+?)/g,'\\(^$1\\)').replace(/\\<\^sub>(.+?)/g,'\\(_{$1}\\)').replace(/\\<\^bsub>(.+?)\\<\^esub>/g,'\\(\\_{$1}\\)').replace(/\\<(.+?)>/g,'\\(\\$1\\)');
      });
      */
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}