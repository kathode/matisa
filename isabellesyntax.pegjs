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
  var cmdMap = { theta:"vartheta", not: "lnot", epsilon:"varepsilon", _ : "\\_" } 
  function returnCommand(original) {
  var rename = cmdMap[original]
      if (rename != null) {
        return rename
      } else {
          return original
      }
  }
}
 
Start
  = b:BlockCommand s:Start { return b + s } /
    b:BlockCommand { return b } /
    e:Expression s:Start { return e + s } /
    e:Expression { return e }
  
Expression
  =  c:Command e:Expression { return c + e } /
     t:Text e:Expression { return t + e } /
     c:Command { return c } /
     t:Text { return t }
     
/* This expression only appears inside a block command that is already wrapped for maths mode. */
Expression2
  =  c:Command2 e:Expression2 { return c + e } /
     t:Text e:Expression2 { return t + e } /
     c:Command2 { return c } /
     t:Text { return t }

Command
  = //"\\<" text:CommandText ">" text2:AllowedText { return "\\(\\" + text + "\u007B" + text2 + "\u007D\\)" } /
    "\\<guillemotleft>" { return "\u00AB" } /
    "\\<guillemotright>" { return "\u00BB" } /
    "\\<" text:CommandText ">" { return "\\(\\" + returnCommand(text) + "\u007B" + "\u007D\\)" }
    
Command2
  = //"\\<" text:CommandText ">" text2:AllowedText { return "\\" + text + "\u007B" + text2 + "\u007D" } /
    "\\<" text:CommandText ">" { return "\\" + returnCommand(text) + "\u007B" + "\u007D" } 

BlockCommand
  = "\\<^bsub>" bcmd:Expression2 "\\<^esub>" { return "\\(_\u007B" + returnCommand(bcmd) + "\u007D\\)" } /
    "\\<^sup>" text2:AllowedText2 { return "\\(^\u007B" + text2 + "\u007D\\)" } /
    "\\<^bold>" bcmd:Command2 { return "\\(\\boldsymbol\u007B" + bcmd + "\u007D\\)" } /
  "\\<^" text:CommandText ">" text2:AllowedText2 { return "\\(\\" + text + "\u007B" + returnCommand(text2) + "\u007D\\)" } /
    "\\<^" text:CommandText ">" { return "\\(\\" + text + "\\)" }

Text
  = w:Whitespace t:Text { return w+t } /
    text:AllowedText ws:Whitespace { return text + ws } / 
    text:AllowedText { return text } / 
    w:Whitespace { return w }

CommandText
  = text:[^\\<>\^ ]+ { return text.join("") }

AllowedText
  = text:[^\\ ]+ { return text.join("") }
  
AllowedText2
  = text:[^\\ ]? { return text }
  // text:[a-zA-Z0-9'",;:\n\r\t=()\[\]+-.&%$_*/#]+ { return text.join("") }
  
Whitespace
  = text:[ ]+ { return text.join("") }