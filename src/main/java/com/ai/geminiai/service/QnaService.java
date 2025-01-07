package com.ai.geminiai.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class QnaService {

    // Access to API KEY and URL {GEMINI}

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public QnaService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }


    public String getAnswer(String question)
    {
        // contsruct the request payload

        /*  SAMPLE FORMAT
        {
            "contents": [{
            "parts":[{"text": "Explain how AI works"}]
        }]
        }

*/

        Map<String, Object> requestBody=Map.of(
                "contents",new Object[]{
                        Map.of("parts",new Object[]{
                                Map.of("text",question)
                        })
                }
        );


        // Make a API call
      String response=  webClient.post()
                .uri(geminiApiUrl+geminiApiKey)
                .header("Content-Type","application/json")
                .bodyValue(requestBody)
                .retrieve()
                // converting to reactive wrapper using MONO
                .bodyToMono(String.class)
                .block();


        // Return response

        return response;
    }
}
