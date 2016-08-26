
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

clean: 
		rm -rf *.zip isabellesyntax.js
		rm -rf target/*

target/popup.js: 
		java -jar closure-compiler.jar --js popup.js --js_output_file target/popup.js 
target/config.js: 
		java -jar closure-compiler.jar --js config.js --js_output_file target/config.js 
target/eventPage.js: 
		java -jar closure-compiler.jar --js eventPage.js --js_output_file target/eventPage.js 
target/matisa.js: 
		java -jar closure-compiler.jar --js matisa.js --js_output_file target/matisa.js

target/isabellesyntax.js: 
		pegjs --format globals --export-var window.isabelle isabellesyntax.pegjs
		java -jar closure-compiler.jar --js isabellesyntax.js --js_output_file target/isabellesyntax.js 

build: target/popup.js target/config.js target/isabellesyntax.js target/matisa.js target/eventPage.js

install: build
	    cp -R $(MATHJAX) .
	    cp -R $(FILES) target/