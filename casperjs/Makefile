BUILDDIR = public
MODULESDIR = ./node_modules/.bin
build:
	@mkdir -p public & \
	cp -f app/assets/index.html $(BUILDDIR)/index.html &\
	cp -f app/styles/app.css $(BUILDDIR)/app.css &\
	$(MODULESDIR)/browserify app/initialize.js \
	-t node-underscorify \
	-t [ babelify --presets [ es2015 ] ] \
	-t [jstify --noMinify] \
	-o $(BUILDDIR)/app.js -d

server:
	$(MODULESDIR)/http-server &\

start: build server

clean:
	@rm -rf public

.PHONY: clean