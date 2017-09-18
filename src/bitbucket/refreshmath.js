function matisaRefreshMath() {

      // Detect whether page has any '.thy' string.
      // Find any string '.thy' on the page
      var findIsabelleByName = document.documentElement.innerHTML.indexOf('.thy');
      var findCodeEditor = document.getElementById('source-view');

      if (findIsabelleByName >= 0 && findCodeEditor != null) {

      try {
      // Find the codeDiv that contains the Isabelle code.
      var codeDiv = document.getElementsByClassName("highlight")

      if (codeDiv.length > 0) {
         var pre = codeDiv[0].firstChild;
         if (pre != null) {

            // Should be a mix of span and other node types
            var elems = pre.childNodes;

            // flag
            var plsmi = null
            var removals = []

            for (i = 0; i < elems.length; i++) {
                // we move all text nodes into the previous span
                  if (elems[i].nodeType == 3 && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "s" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "ss" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "sx" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == " -Symbol" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "err" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "n" && plsmi != null) {
                      plsmi.textContent = plsmi.textContent + elems[i].textContent
                      removals.push(elems[i])
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "s" && plsmi == null) {
                      plsmi = elems[i]
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "sx" && plsmi == null) {
                      plsmi = elems[i]
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == "err" && plsmi == null) {
                      plsmi = elems[i]
                      elems[i].className = " -Symbol"
                  } else if (elems[i].nodeType == 1 && elems[i].tagName == "SPAN" && elems[i].className == " -Symbol" && plsmi == null) {
                      plsmi = elems[i]
                  } else {
                      plsmi = null
                  }
            }

            for (var p = 0; p < removals.length; p++) {
                 pre.removeChild(removals[p])  
            }
         }
      }
      
        try {
          var fileLines = document.getElementsByClassName("s")
          var i = 0;
          for (; i < fileLines.length; i++) {
            var source = fileLines[i].textContent
            var target = isabelle.parse(source)
            fileLines[i].textContent = target
          }
        } catch (err) {
        console.log("Error while parsing syntax at element (" + fileLines[i].innerHTML + "): " + err)
        }

        try {
          var fileLines = document.getElementsByClassName("sx")
          var i = 0
          for (; i < fileLines.length; i++) {
            var source = fileLines[i].textContent
            var target = isabelle.parse(source)
            fileLines[i].textContent = target
          }
        } catch (err) {
        console.log("Error while parsing syntax at element (" + fileLines[i].innerHTML + "): " + err)
        }

        try {
          var fileLines = document.getElementsByClassName(" -Symbol")
          var i = 0
          for (; i < fileLines.length; i++) {
            var source = fileLines[i].textContent
            var target = isabelle.parse(source)
            fileLines[i].textContent = target
          }
        } catch (err) {
        console.log("Error while parsing syntax at element (" + fileLines[i].innerHTML + "): " + err)
        }

        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      } catch (err) {
        console.log("Error while refreshing math: " + err)
      }

      /*
      var fileLines = document.getElementsByClassName("pl-smi")
      for (var i = 0; i < fileLines.length; i++) {
        var source = fileLines[i].textContent
        var target = isabelle.parse(source)
        fileLines[i].textContent = target
      }
      */

    /* Future work...
      fileLines = document.getElementsByClassName("pl-c")
      for (i = 0; i < fileLines.length; i++) {
        source = fileLines[i].innerHTML 
        target = fileLines[i].innerHTML.replace(/\\emph\{(.+?)\}/g,'<span style=\"font-style: italic;\">$1</span>')
        fileLines[i].innerHTML = target
      }
    */
      
    }
}

window['matisaRefreshMath'] = matisaRefreshMath;
$(document).on('pjax:end', matisaRefreshMath);