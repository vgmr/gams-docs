#|/bin/bash

# Build SITE
docker run -v $(pwd):/home/user --rm -p 8000:8000 thinkcube/mkdocs mkdocs build

# Create DockerFile
echo FROM httpd:2.4 >site/Dockerfile
echo COPY . /usr/local/apache2/htdocs/ >>site/Dockerfile