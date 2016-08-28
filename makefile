
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

VERSION = 1.0.6

clean: 
		rm -rf *.zip isabellesyntax.js
		rm -rf target/*

target/popup.js: 
		java -jar closure-compiler.jar --js popup.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/popup.js 
target/eventPage.js: 
		java -jar closure-compiler.jar --js eventPage.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/eventPage.js 
target/refreshmath.js:
		java -jar closure-compiler.jar --js refreshmath.js --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js_output_file target/refreshmath.js
target/config.js:
		java -jar closure-compiler.jar --js config.js --js_output_file target/config.js 	
target/matisa.js: target/refreshmath.js target/config.js
		cat target/config.js target/refreshmath.js > target/matisa.js
		
target/isabellesyntax.js: 
		pegjs --format globals --export-var window.isabelle isabellesyntax.pegjs
		java -jar closure-compiler.jar --js isabellesyntax.js --js_output_file target/isabellesyntax.js 

build: target/popup.js target/isabellesyntax.js target/matisa.js target/eventPage.js

install: build
	    cp -R $(MATHJAX) .
	    cp -R $(FILES) target/
	    rm target/refreshmath.js
	    rm target/config.js

package: 
	    cd target ; zip -r matisa-$(VERSION).zip * -x "*.DS_Store" ; cd ..

package-sources:
	    zip -r matisa-sources-$(VERSION).zip $(SOURCES) -x "*.DS_Store"