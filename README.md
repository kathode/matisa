Matisa
======

This extension allows Isabelle math commands to be typeset using MathJax
on GitHub Isabelle repositories. An example is available at 
[isabelle-utp](https://github.com/isabelle-utp/utp-main/tree/shallow.2016).

Building using matisa-sources.zip
---------------------------------

There is a makefile available that allows the extension to be built using the
target 'install'. At the moment it assumes that the MathJax distribution is
installed in the parent folder, and that the closure-compiler.jar is available
in the current folder as well.

We intend to change the build configuration in the future to better streamline
it.
