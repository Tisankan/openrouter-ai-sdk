import { OpenRouterAI } from "../src/index";

describe("OpenRouterAI", () => {
    const ai = new OpenRouterAI({ apiKey: "test-api-key" });

    it("should send a chat request", async () => {
        const response = await ai.chat({
            messages: [{ role: "user", content: "Hello, AI!" }],
        });

        expect(response).toBeDefined();
    });
});
