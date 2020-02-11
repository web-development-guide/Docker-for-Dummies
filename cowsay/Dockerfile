FROM debian:latest

LABEL version="1.0.0"
LABEL name="Cowsay"
LABEL author="Progyan Bhattacharya <bprogyan@gmail.com>"

RUN apt-get update -y
RUN apt-get install cowsay fortune -y

COPY quotes /usr/bin
RUN chmod u+x /usr/bin/quotes

CMD quotes
