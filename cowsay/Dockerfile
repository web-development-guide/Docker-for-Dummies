FROM debian:latest

RUN apt-get update -y
RUN apt-get install cowsay fortune -y

COPY quotes /usr/bin
RUN chmod u+x /usr/bin/quotes

CMD quotes
