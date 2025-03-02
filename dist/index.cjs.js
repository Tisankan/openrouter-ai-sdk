'use strict';

var axios = require('axios');

class OpenRouterAI {
    apiKey;
    baseUrl;
    httpClient;
    constructor(options) {
        this.apiKey = options.apiKey;
        this.baseUrl = options.baseUrl || "https://openrouter.ai/api";
        this.httpClient = axios.create({
            baseURL: this.baseUrl,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json",
            },
        });
    }
    async chat(request) {
        const model = request.model || "gpt-4-turbo";
        try {
            const response = await this.httpClient.post("/v1/chat/completions", {
                model,
                messages: request.messages,
                stream: request.stream || false,
            });
            if (request.stream) {
                return this.streamResponse(response.data);
            }
            return response.data.choices[0].message.content;
        }
        catch (error) {
            throw new Error(`OpenRouter AI Error: ${error.response?.data || error.message}`);
        }
    }
    async *streamResponse(response) {
        for await (const chunk of response) {
            yield chunk.choices[0].delta?.content || "";
        }
    }
}

exports.OpenRouterAI = OpenRouterAI;
