# Dockerized
This is a dockerized webservice based on Kirill89 Gibberish-Detector nodejs library.
https://github.com/Kirill89/gibb

# Getting started
```shell
git clone https://github.com/lkathke/gibb.git
cd gibb
docker build -t lkathke/gibb .
docker run -d --name gibberish-service -p 3000:3000 lkathke/gibb
```
#License
See LICENSE.md file.
