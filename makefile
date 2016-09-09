
CLOSURE = java -jar closure-compiler.jar
CLOSURE_EX = --externs src/externs.js
PEGJS = pegjs

MATHJAX_SRC = https://github.com/mathjax/MathJax/archive/v2.6-latest.zip

MATHJAX = mathjax/extensions \
 		  mathjax/fonts \
 		  mathjax/jax \
 		  mathjax/MathJax.js

FILES = src/manifest.json \
		src/matisa16.png \
		src/matisa128.png \
		src/popup.html
		
VERSION = 1.1.0

SOURCES = README.md \
		  reference \
		  src \
		  target \
		  makefile

TARGET = target/popup.js \
		 target/isabellesyntax.js \
		 target/github/matisa.js \
		 target/github/github.js \
		 target/bitbucket/matisa.js \
		 target/bitbucket/bitbucket.js

clean: 
		rm -rf *.zip
		rm -rf target/*
		rm -rf tmp/*

target/popup.js: 
		$(CLOSURE) --js src/popup.js --js_output_file target/popup.js 
tmp/config.js:
		$(CLOSURE) --js src/config.js --js_output_file tmp/config.js

tmp/github/refreshmath.js:
		$(CLOSURE) --js src/github/refreshmath.js --compilation_level ADVANCED_OPTIMIZATIONS $(CLOSURE_EX) --js_output_file tmp/github/refreshmath.js
target/github:
		mkdir target/github
target/github/github.js: target/github
		$(CLOSURE) --js src/github/github.js --compilation_level ADVANCED_OPTIMIZATIONS $(CLOSURE_EX) --js_output_file target/github/github.js 
target/github/matisa.js: target/github tmp/github/refreshmath.js tmp/config.js
		cat tmp/config.js tmp/github/refreshmath.js > target/github/matisa.js

tmp/bitbucket/refreshmath.js:
		$(CLOSURE) --js src/bitbucket/refreshmath.js --compilation_level ADVANCED_OPTIMIZATIONS $(CLOSURE_EX) --js_output_file tmp/bitbucket/refreshmath.js
target/bitbucket:
		mkdir target/bitbucket		
target/bitbucket/bitbucket.js: target/bitbucket
		$(CLOSURE) --js src/bitbucket/bitbucket.js --compilation_level ADVANCED_OPTIMIZATIONS $(CLOSURE_EX) --js_output_file target/bitbucket/bitbucket.js 
target/bitbucket/matisa.js: target/bitbucket tmp/bitbucket/refreshmath.js tmp/config.js
		cat tmp/config.js tmp/bitbucket/refreshmath.js > target/bitbucket/matisa.js		

tmp/isabellesyntax.js:
		$(PEGJS) --format globals --export-var window.isabelle -o tmp/isabellesyntax.js src/isabellesyntax.pegjs
target/isabellesyntax.js: tmp/isabellesyntax.js
		$(CLOSURE) --js tmp/isabellesyntax.js --js_output_file target/isabellesyntax.js 

build: $(TARGET)

install: build
	    cp -R $(MATHJAX) target/
	    cp -R $(FILES) target/

mathjax/touche:
	    wget $(MATHJAX_SRC) -O mathjax.zip
		unzip mathjax.zip
		mv MathJax-*-latest mathjax
		cp reference/Gruntfile.js mathjax/
		cp reference/package.json mathjax/
		cd mathjax ; npm install ; grunt matisa ; cd ..
		touch mathjax/touche

mathjax-clean:
		rm -rf mathjax

mathjax: mathjax/touche		
	    
package: 
	    cd target ; zip -r ../matisa-$(VERSION).zip * -x "*.DS_Store" ; cd ..

package-sources: clean
	    zip -r matisa-sources-$(VERSION).zip $(SOURCES) -x "*.DS_Store" ".git"