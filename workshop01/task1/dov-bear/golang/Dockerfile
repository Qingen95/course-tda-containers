FROM golang:1.17 AS builder

WORKDIR /app

ADD go.mod ./
ADD go.sum ./
ADD main.go ./

RUN go mod download
RUN go build -o main main.go

FROM golang:1.17

WORKDIR /app

COPY --from=builder app/main .
ADD public public
ADD templates templates

WORKDIR /app

EXPOSE 5000

ENTRYPOINT [ "./main" ]