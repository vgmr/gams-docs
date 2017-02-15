# gams-docs
this repository is used develop the documentation of GAMS.

## Install dependencies
```sh
$ npm install
```

## Development
put your md documents in the docs folder and configure the mkdocs.yml accordingly with [mkdocs](http://www.mkdocs.org)

## Serve the site while developing (must have mkdocs installed)
```sh
$ npm start
```

## Build documentation
Build website:
```sh
$ npm run build

# artifacts are build in ./SITE directory
```

## Create Docker image 
you must have:
1. [docker](https://www.docker.com) installed
2. node  version >= 6

```sh
$ npm run release

# this will create a docker image named gams-docs:<package version> and will also update the gams-docs:latest image
```


## Run a container on your localhost
```sh
$ docker run --rm -p 8000:80 gams-docs:latest
```
