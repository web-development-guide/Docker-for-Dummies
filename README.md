# Docker

### Docker Version and Configuration
```bash
Client: Docker Engine - Community
 Version:           19.03.5
 API version:       1.40
 Go version:        go1.12.12
 Git commit:        633a0ea
 Built:             Wed Nov 13 07:25:41 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.5
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.12
  Git commit:       633a0ea
  Built:            Wed Nov 13 07:24:18 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.10
  GitCommit:        b34a5c8af56e510852c35414db4c1f4fa6172339
 runc:
  Version:          1.0.0-rc8+dev
  GitCommit:        3e425f80a8c931f88e6d94a8c831b9d5aa481657
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
```

## Cowsay

A small game that draws a cow using ASCII characters in terminal. Patching with `fortune`, another small game that randomly prints a quote, we can create our first simple Docker images based upon latest Debian image. And then run it to see in action.

## Hello World

A plain-text stateless API server that responds `Hello World from API` on being hit GET at `/` of API server. One can see both the message from server, `Hello World from Server` coming from container, and the API message comming from HTTP response.

## Movies DB

A mock REST API and it's consumer that lists a number of movies. The API is based upon Node.JS runtime using Express as RESTful framework. The web client application, on the other hand is, based upon PHP-Zend Engine. The web client consumes REST API endpoint `/movies` and emitts a unordered list of movies from JSON response.
