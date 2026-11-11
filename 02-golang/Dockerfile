
# Stage 1: Builder
FROM golang:1.26-alpine AS builder

WORKDIR /app

COPY go.mod ./
COPY main.go ./

RUN go build -o server .


# Stage 2: Production
FROM alpine:3.23 AS production

WORKDIR /app

COPY --from=builder /app/server .

EXPOSE 8080

CMD ["./server"]
