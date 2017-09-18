/*
 * Isabelle Command Grammar
 * ========================
 *
 * This accepts LaTeX-like commands such as \<theta> and \<^sub>X.
 * 
 * Command rewriting is performed here whenever possible to avoid
 * redefining commands of MathJax.js that may still be used elsewhere
 * on a page.
 */
 
{ 
  var cmdMap = { theta:"vartheta", And: "bigwedge", not: "lnot", epsilon:"varepsilon", _ : "\\_" } 
  function returnCommand(original) {
  var rename = cmdMap[original]
      if (rename != null) {
         return rename
      } else {
         return original.replace(/\_/g,'\\_').replace(/&/g,'\\&')
      }
  }
}
 
Start
  = e:Expression s:Start { return e + s } /
    e:Expression { return e }
  
Expression
  =  b:BlockCommand s:Expression { return "\\("+ b +"\\)" + s } /
     b:BlockCommand { return "\\(" + b + "\\)"} /
     c:Command e:Expression { return "\\(" + c + "\\)" + e } /
     t:Text e:Expression { return t + e } /
     c:Command { return "\\(" + c + "\\)" } /
     t:Text { return t }
     
/* This expression only appears inside a block command that is already wrapped for maths mode. */
Expression2
  =  c:BlockCommand e:Expression2 { return c + e } /
     c:BlockCommand { return c } /
     c:Command e:Expression2 { return c + e } /
     t:Text e:Expression2 { return t + e } /
     c:Command { return c } /
     t:Text { return t }

Command
  = "\\<guillemotleft>" { return "\u00AB" } /
    "\\<guillemotright>" { return "\u00BB" } /
    "\\<" text:CommandText ">" { return "\\" + returnCommand(text) } /
    "\\<" text:CommandText ">" text2:AllowedText { return "\\" + returnCommand(text) + "\u007B" + returnCommand(text2) + "\u007D" } 

    
BlockCommand
  = "\\<^bsub>" bcmd:Expression2 "\\<^esub>" { return "_\u007B" + returnCommand(bcmd) + "\u007D" } /
    "\\<^sup>" text2:CommandOrText { return "^\u007B" + returnCommand(text2) + "\u007D" } /
    "\\<^bold>" bcmd:CommandOrText { return "\\boldsymbol\u007B" + returnCommand(bcmd) + "\u007D" } /
    "\\<^sub>" text2:CommandOrText { return "\\sub\u007B" + returnCommand(text2) + "\u007D" }
    
CommandOrText
  = Command / AllowedText2

Text
  = w:Whitespace t:Text { return w+t } /
    text:AllowedText ws:Whitespace { return text + ws } / 
    text:AllowedText { return text } / 
    w:Whitespace { return w }

CommandText
  = text:[^\\<>\^" ]+ { return text.join("") }

AllowedText
  = text:[^\\ ]+ { return text.join("") }
  
AllowedText2
  = text:[^\\" ]? { return text }
  
Whitespace
  = text:[ ]+ { return text.join("") }