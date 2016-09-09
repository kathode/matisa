function matisaRefreshMath() {

      var fileLines = document.getElementsByClassName("js-file-line")

          for (i = 0; i < fileLines.length; i++) {
              // find the first .pl-smi
              var elems = fileLines[i].childNodes;
              
              // flag
              var plsmi = null
              var removals = []

              // iterate over the children
              for (var p = 0; p < elems.length; p++) {

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

              for (var p = 0; p < removals.length; p++) {
                 fileLines[i].removeChild(removals[p])  
              }
          }

      var fileLines = document.getElementsByClassName("pl-s")
      for (var i = 0; i < fileLines.length; i++) {
        var source = fileLines[i].textContent
        var target = isabelle.parse(source)
        fileLines[i].textContent = target
      }

      var fileLines = document.getElementsByClassName("pl-smi")
      for (var i = 0; i < fileLines.length; i++) {
        var source = fileLines[i].textContent
        var target = isabelle.parse(source)
        fileLines[i].textContent = target
      }

    /* Future work...
      fileLines = document.getElementsByClassName("pl-c")
      for (i = 0; i < fileLines.length; i++) {
        source = fileLines[i].innerHTML 
        target = fileLines[i].innerHTML.replace(/\\emph\{(.+?)\}/g,'<span style=\"font-style: italic;\">$1</span>')
        fileLines[i].innerHTML = target
      }
    */
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

window['matisaRefreshMath'] = matisaRefreshMath;
document.addEventListener("pjax:end", matisaRefreshMath);//function() { matisaRefreshMath(); MathJax.Hub.Queue(["Typeset",MathJax.Hub]); }, { passive: true })