MODULESDIR = ./node_modules/.bin
build:
	$(MODULESDIR)/webpack

server:
	$(MODULESDIR)/http-server

start: build server

clean:
	@rm -rf public

.PHONY: clean