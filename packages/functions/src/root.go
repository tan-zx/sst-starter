package main

import (
        "fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func Handler(request events.APIGatewayV2HTTPRequest) (events.APIGatewayProxyResponse, error) {
        // print hello world
        fmt.Println("Hello world!")
        return events.APIGatewayProxyResponse{
                StatusCode: 200,
                Body:       "Hello world!",
        }, nil
}

func main() {
	lambda.Start(Handler)
}
