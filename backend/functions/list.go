package main

import (
	"encoding/json"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"io/ioutil"
	"net/http"
)

func Handler(request events.APIGatewayV2HTTPRequest) (events.APIGatewayProxyResponse, error) {
	repos := []struct {
		Org      string `json:"org"`
		Repo     string `json:"repo"`
		Markdown string `json:"markdown"`
	}{
		{"magnuswahlstrand", "particles", ""},
		//{"magnuswahlstrand", "ratemyserverless", ""},
	}
	for _, repo := range repos {
		resp, err := http.Get(fmt.Sprintf("https://raw.githubusercontent.com/magnuswahlstrand/particles/HEAD/README.md"))
		if err != nil {
			return events.APIGatewayProxyResponse{}, err
		}
		b, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			return events.APIGatewayProxyResponse{}, err
		}
		repo.Markdown = string(b)
		repos = append(repos, repo)
	}

	response, _ := json.Marshal(repos)

	return events.APIGatewayProxyResponse{
		Body:       string(response),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(Handler)
}
