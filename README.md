# OpenRouter AI SDK

OpenRouter AI SDK is a Node.js library designed to interact with OpenRouter AI services, enabling easy integration with your projects.

## Features

- Simple API for chat requests with OpenRouter AI.
- Fully TypeScript and JavaScript compatible.
- Built with Rollup for optimized bundling.
- Supports `.env` for environment configuration.

## Installation

### Prerequisites

Before starting, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Setup Instructions

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/openrouter-ai-sdks.git
    cd openrouter-ai-sdks
    ```

2. **Install Dependencies**:

   Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

3. **Create `.env` File**:

   Add your API key or other configurations in the `.env` file:

    ```bash
    OPENROUTER_API_KEY=your_api_key_here
    ```

4. **Build the SDK**:

   Build the project using Rollup:

    ```bash
    npm run build
    ```

5. **Run Tests** (Optional):

   If you have tests set up for the SDK, run them using:

    ```bash
    npm test
    ```

## Usage

### Example Usage:

After building the SDK, you can integrate it into your project like this:

```typescript
import { OpenRouterAI } from 'openrouter-ai-sdks';

const openRouter = new OpenRouterAI();

async function sendChat() {
    try {
        const response = await openRouter.sendChatRequest('Hello, OpenRouter!');
        console.log(response);
    } catch (error) {
        console.error('Error sending chat request:', error);
    }
}

sendChat();
```
Contributing

We welcome contributions! Here's how you can contribute:

    Fork the repository.
    Create a new branch for your changes.
    Commit your changes and push to your fork.
    Open a pull request with a description of your changes.

License

This project is licensed under the MIT License - see the LICENSE file for details.

