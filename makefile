
MATHJAX = ../mathjax/extensions \
 		  ../mathjax/fonts \
 		  ../mathjax/jax \
 		  ../mathjax/MathJax.js

FILES = manifest.json \
		MathJax.js \
		matisa16.png \
		matisa128.png \
		popup.html \
		extensions \
		fonts \
		jax

SOURCES = manifest.json \
		  MathJax.js \
		  matisa16.png \
		  matisa128.png \
		  popup.html \
		  extensions \
		  fonts \
		  jax \
		  popup.js \
		  eventPage.js \
		  refreshmath.js \
		  config.js \
		  isabellesyntax.js \
		  isabellesyntax.pegjs \
		  externs.js \
		  README.md \
		  makefile

VERSION = 1.1.0

TARGET = target/popup.js \
		 target/isabellesyntax.js \
		 target/github/matisa.js \
		 target/github/github.js \
		 target/bitbucket/matisa.js \
		 target/bitbucket/bitbucket.js

clean: 
		rm -rf *.zip isabellesyntax.js
		rm -rf target/*

target/popup.js: 
		java -jar closure-compiler.jar --js popup.js --js_output_file target/popup.js 
target/config.js:
		java -jar closure-compiler.jar --js config.js --js_output_file target/config.js 	

target/github/refreshmath.js:
		java -jar closure-compiler.jar --js github/refreshmath.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/github/refreshmath.js
target/github/github.js: 
		java -jar closure-compiler.jar --js github/github.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/github/github.js 
target/github/matisa.js: target/github/refreshmath.js target/config.js
		cat target/config.js target/github/refreshmath.js > target/github/matisa.js

target/bitbucket/refreshmath.js:
		java -jar closure-compiler.jar --js bitbucket/refreshmath.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/bitbucket/refreshmath.js
target/bitbucket/bitbucket.js: 
		java -jar closure-compiler.jar --js bitbucket/bitbucket.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/bitbucket/bitbucket.js 
target/bitbucket/matisa.js: target/bitbucket/refreshmath.js target/config.js
		cat target/config.js target/bitbucket/refreshmath.js > target/bitbucket/matisa.js		
		
target/isabellesyntax.js: 
		pegjs --format globals --export-var window.isabelle isabellesyntax.pegjs
		java -jar closure-compiler.jar --js isabellesyntax.js --js_output_file target/isabellesyntax.js 

build: $(TARGET)

install: build
	    cp -R $(MATHJAX) .
	    cp -R $(FILES) target/
	    rm target/github/refreshmath.js
	    rm target/bitbucket/refreshmath.js
	    rm target/config.js

package: 
	    cd target ; zip -r matisa-$(VERSION).zip * -x "*.DS_Store" ; cd ..

package-sources:
	    zip -r matisa-sources-$(VERSION).zip $(SOURCES) -x "*.DS_Store"