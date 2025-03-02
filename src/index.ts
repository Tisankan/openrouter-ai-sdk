import axios, { AxiosInstance } from "axios";

interface OpenRouterAIOptions {
    apiKey: string;
    baseUrl?: string;
    model?: string;
}

interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
}

interface ChatRequest {
    model?: string;
    messages: ChatMessage[];
    stream?: boolean;
}

class OpenRouterAI {
    private apiKey: string;
    private baseUrl: string;
    private httpClient: AxiosInstance;

    constructor(options: OpenRouterAIOptions) {
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

    async chat(request: ChatRequest): Promise<string | AsyncIterable<string>> {
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
        } catch (error: any) {
            throw new Error(`OpenRouter AI Error: ${error.response?.data || error.message}`);
        }
    }

    private async *streamResponse(response: any): AsyncIterable<string> {
        for await (const chunk of response) {
            yield chunk.choices[0].delta?.content || "";
        }
    }
}

export { OpenRouterAI, OpenRouterAIOptions, ChatRequest, ChatMessage };
