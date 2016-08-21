 window.MathJax = {
     // AuthorInit: function () {MathJax.Ajax.config.root = chrome.extension.getURL('mathjax')},
      jax: ["input/TeX","output/CommonHTML"],
      extensions: ["tex2jax.js"],
      tex2jax: {inlineMath: [['\\(','\\)']]},
      TeX: { 
        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"],
        Macros: {
zero:"{\\mathbf{0}}" 
,one:"{\\mathbf{1}}" 
,two:"{\\mathbf{2}}" 
,three:"{\\mathbf{3}}" 
,four:"{\\mathbf{4}}" 
,five:"{\\mathbf{5}}" 
,six:"{\\mathbf{6}}" 
,seven:"{\\mathbf{7}}" 
,eight:"{\\mathbf{8}}" 
,nine:"{\\mathbf{9}}" 
,A:"{\\mathcal{A}}"
,B:"{\\mathcal{B}}"
,C:"{\\mathcal{C}}"
,D:"{\\mathcal{D}}"
,E:"{\\mathcal{E}}"
,F:"{\\mathcal{F}}"
,G:"{\\mathcal{G}}"
,H:"{\\mathcal{H}}"
,I:"{\\mathcal{I}}"
,J:"{\\mathcal{J}}"
,K:"{\\mathcal{K}}"
,L:"{\\mathcal{L}}"
,M:"{\\mathcal{M}}"
,N:"{\\mathcal{N}}"
,O:"{\\mathcal{O}}"
,P:"{\\mathcal{P}}"
,Q:"{\\mathcal{Q}}"
,R:"{\\mathcal{R}}"
,S:"{\\mathcal{S}}"
,T:"{\\mathcal{T}}"
,U:"{\\mathcal{U}}"
,V:"{\\mathcal{V}}"
,W:"{\\mathcal{W}}"
,X:"{\\mathcal{X}}"
,Y:"{\\mathcal{Y}}"
,Z:"{\\mathcal{Z}}"
,a:"{\\mathrm{a}}"
,b:"{\\mathrm{b}}"
,c:"{\\mathrm{c}}"
,d:"{\\mathrm{d}}"
,e:"{\\mathrm{e}}"
,f:"{\\mathrm{f}}"
,g:"{\\mathrm{g}}"
,h:"{\\mathrm{h}}"
,i:"{\\mathrm{i}}"
,j:"{\\mathrm{j}}"
,k:"{\\mathrm{k}}"
,l:"{\\mathrm{l}}"
,m:"{\\mathrm{m}}"
,n:"{\\mathrm{n}}"
,o:"{\\mathrm{o}}"
,p:"{\\mathrm{p}}"
,q:"{\\mathrm{q}}"
,r:"{\\mathrm{r}}"
,s:"{\\mathrm{s}}"
,t:"{\\mathrm{t}}"
,u:"{\\mathrm{u}}"
,v:"{\\mathrm{v}}"
,w:"{\\mathrm{w}}"
,x:"{\\mathrm{x}}"
,y:"{\\mathrm{y}}"
,z:"{\\mathrm{z}}"
,AA:"{\\mathfrak{A}}"  
,BB:"{\\mathfrak{B}}"  
,CC:"{\\mathfrak{C}}"  
,DD:"{\\mathfrak{D}}"  
,EE:"{\\mathfrak{E}}"  
,FF:"{\\mathfrak{F}}"  
,GG:"{\\mathfrak{G}}"  
,HH:"{\\mathfrak{H}}"  
,II:"{\\mathfrak{I}}"  
,JJ:"{\\mathfrak{J}}"  
,KK:"{\\mathfrak{K}}"  
,LL:"{\\mathfrak{L}}"  
,MM:"{\\mathfrak{M}}"  
,NN:"{\\mathfrak{N}}"  
,OO:"{\\mathfrak{O}}"  
,PP:"{\\mathfrak{P}}"  
,QQ:"{\\mathfrak{Q}}"  
,RR:"{\\mathfrak{R}}"  
,SS:"{\\mathfrak{S}}"  
,TT:"{\\mathfrak{T}}"  
,UU:"{\\mathfrak{U}}"  
,VV:"{\\mathfrak{V}}"  
,WW:"{\\mathfrak{W}}"  
,XX:"{\\mathfrak{X}}"  
,YY:"{\\mathfrak{Y}}"  
,ZZ:"{\\mathfrak{Z}}"  
,aa:"{\\mathfrak{a}}"  
,bb:"{\\mathfrak{b}}"  
,cc:"{\\mathfrak{c}}"  
,dd:"{\\mathfrak{d}}"  
,ee:"{\\mathfrak{e}}"  
,ff:"{\\mathfrak{f}}"  
,gg:"{\\mathfrak{g}}"  
,hh:"{\\mathfrak{h}}"  
,ii:"{\\mathfrak{i}}"  
,jj:"{\\mathfrak{j}}"  
,kk:"{\\mathfrak{k}}"  
,ll:"{\\mathfrak{l}}"  
,mm:"{\\mathfrak{m}}"  
,nn:"{\\mathfrak{n}}"  
,oo:"{\\mathfrak{o}}"  
,pp:"{\\mathfrak{p}}"  
,qq:"{\\mathfrak{q}}"  
,rr:"{\\mathfrak{r}}"  
,ss:"{\\mathfrak{s}}"  
,tt:"{\\mathfrak{t}}"  
,uu:"{\\mathfrak{u}}"  
,vv:"{\\mathfrak{v}}"  
,ww:"{\\mathfrak{w}}"  
,xx:"{\\mathfrak{x}}"  
,yy:"{\\mathfrak{y}}"  
,zz:"{\\mathfrak{z}}"
,bool:"{\\mathrm{I}\\mkern-3.8mu\\mathrm{B}}" // from isabellesym.sty - not in MathJax
,complex:"{\\mathrm{C}\\mkern-15mu{\\phantom{\\mathrm{t}}\\mkern9mu}}" // from isabellesym.sty - Incomplete, no support for \vrule
,nat:"{\\mathrm{I}\\mkern-3.8mu\\mathrm{N}}"
,rat:"{\\mathrm{Q}\\mkern-16mu{\\phantom{\\mathrm{t}}\\mkern10mu}}" // from isabellesym.sty - Incomplete, no support for \vrule
,real:"{\\mathrm{I}\\mkern-3.8mu\\mathrm{R}}"
,int:"{\\mathsf{Z}\\mkern-7.5mu\\mathsf{Z}}"
,longlongleftarrow:"{\\xleftarrow{\\hphantom{AAA}}}"       // from isabellesym.sty
,longlongrightarrow:"{\\xrightarrow{\\hphantom{AAA}}}"     // from isabellesym.sty
,longlonglongleftarrow:"{\\xleftarrow{\\hphantom{AAAA}}}"  // from isabellesym.sty
,longlonglongrightarrow:"{\\xrightarrow{\\hphantom{AAAA}}}"// from isabellesym.sty
//,midarrow:"{\\relbar}" // relbar is not supported in MathJax
//,Midarrow:"{\\Relbar}"
,Colon:"{\\mathrel{::}}"
,up:"{\\uparrow}"
,Up:"{\\Uparrow}"
,down:"{\\downarrow}"
,Down:"{\\Downarrow}"
,updown:"{\\updownarrow}"
,Updown:"{\\Updownarrow}"
,lparr:"{\\mathopen{(\\mkern-3mu\\mid}}"
,rparr:"{\\mathclose{\\mid\\mkern-3mu)}}"
,lbrakk:"{\\mathopen{\\lbrack\\mkern-3mu\\lbrack}}"
,rbrakk:"{\\mathclose{\\rbrack\\mkern-3mu\\rbrack}}"      	
//,lbrace:"{\\mathopen{\lbrace\mkern-4.5mu\mid}}" // MathJax has a built-in definition, keeping it for now.
//,rbrace:"{\\mathclose{\mid\mkern-4.5mu\rbrace}}"
,guillemotleft: "{\\mathop{≪}\\,}"    // isabellesym.sty uses \flqq and \frqq from babel package.
,guillemotright: "{\\,\\mathop{≫}}"   // Obviously this isn't in MathJax. We pick the closest math symbols.
,bottom:"{\\bot}"
,and: "{\\wedge}"
//,And:"{\\bigwedge}"         // There is a built-in definition, keeping it. If there are problems rename in parser.
,or:"{\\vee}"
,Or:"{\\bigvee}"
//forall:"{\\forall\,}"       // Sticking with MathJax's definitions for now.
//exists:"{\\exists\,}"  
,box: "{\\Box}"
//,not: "{\\lnot}"            // Renamed in parser.
//,diamond:"{\\Diamond}"      // Keeping the original MathJax. May revisit this choice.
,diamondop:"{\\diamond}"
,turnstile: "{\\vdash}"
,Turnstile:"{\\models}"
,tturnstile:"{\\vdash\\!\\!\\!\\vdash}"
,TTurnstile:"{\\mid\\!\\models}"
,stileturn:"{\\dashv}"
,inter:"{\\cap}"
,Inter:"{\\bigcap\\,}"
,union:"{\\cup}"
,Union:"{\\bigcup\\,}"
,squnion:"{\\sqcup}"
,Squnion:"{\\bigsqcup\\,}"
,sqinter:"{\\sqcap}"
,Sqinter:"{\\bigsqcap\\,}" 
,Uplus:"{\\biguplus\\,}"
,noteq:"{\\neq}"        // Different from isabellesym.sty but better looking.
//,bar:"{\\mid}"        // Keeping MathJax definition, will reconsider if necessary.
,bold:"{\\bf}"
,plusminus:"{\\pm}"
,minusplus:"{\\mp}"      	
//,bullet:              // Keeping MathJax definition, but may reconsider if necessary.
,Oplus:"{\\bigoplus\\,}"      	
,Otimes:"{\\bigotimes\\,}"
,Odot:"{\\bigodot\\,}"
,Sum:"{\\sum\\,}"
,Prod:"{\\prod\\,}"
,Coprod:"{\\coprod\\,}"        
,infinity:"{\\infty}"
,integral:"{\\int\\,}"
,ointegral:"{\\oint\\,}"
,copyright:"{\\mathop{©}}"        // These may break?
,registered:"{\\mathop{®}}"       // These may break?
,inverse:"{\{}^{-1}}"
,onequarter:"{\\mathop{¼}}"       // These may break?
,onehalf:"{\\mathop{½}}"          // These may break?
,threequarters:"{\\mathop{¾}}"    // These may break?
,ordfeminine:"{\\mathop{ª}}"
,ordmasculine:"{\\mathop{º}}"     // These may break?
,section:"{\\rm\\S}}"
,paragraph:"{\\rm\\P}}"
,exclamdown:"{\\mathop{¡}}"       // These may break?
,questiondown:"{\\mathop{¿}}"     // These may break?
,euro:"{\\mathop{€}}"             // These may break?
,pounds:"{\\mathop{£}}"           // These may break?
,yen:"{\\mathop{¥}}"              // These may break?
,cent:"{\\mathop{¢}}"             // These may break?
,currency:"{\\mathop{¤}}"         // These may break?
,degree:"{^\\circ}"               // Custom mapping.
,hyphen:"{\\rm-}"                 // From isabellesym.sty
,wrong:"{\\wr}"                   // From isabellesym.sty
,acute: "{\'}"                    // Based on isabellestym.sty
,index: "{\i}"                    // From isabellesym.sty
,dieresis: "{\"}"                 // Based on isabellestym.sty
,cedilla: "{\\mathop{ç}}"         // Based on isabellestym.sty - I think there is no direct mapping so it may break.
,hungarumlaut: "{\\mathop{˝}}"    // Not sure this is correct.
,module:"{\\langle}module{\\rangle}" // Based on isabellestym.sty - May not be correct.
,some:"{\\epsilon\\,}"             // From isabellesym.sty
,bind:"{\\mathbin{>\\!\\!\\!>\\mkern-6.7mu=}}"    // From isabellesym.sty
,then:"{\\mathbin{>\\!\\!\\!>}}"     // From isabellesym.sty
,hole:"{\\rm\\mathop{⌑}}"         // Based on isabellestym.sty - I think there is no direct mapping so it may break.
//,newline:                       // Using MathJax built-in.
,open:"{\\raise.3ex\\hbox{\\scriptscriptstyle\\langle}}" // Based on isabellestym.sty
,close:"{\\raise.3ex\\hbox{\\scriptscriptstyle\\rangle}}" // Based on isabellestym.sty
,comment:"{---}"                  // From isabellesym.sty. Is this needed?
// Extras not in isabellesym.sty but needed:
,sub: ["{_{#1}}",1]   
,bigsqcap:"{\\mathop{⨅}}"
  		} }
    };