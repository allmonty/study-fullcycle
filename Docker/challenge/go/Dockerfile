FROM golang:latest

WORKDIR /app

COPY . .

RUN go build

FROM scratch

WORKDIR /app

COPY --from=0 ./app/full-cycle .

CMD [ "./full-cycle" ]