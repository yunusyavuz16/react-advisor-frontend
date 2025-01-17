
# React Chat Application

This is a chat application built using **React**, **TypeScript**, and **Tailwind CSS**. The project is modular, type-safe, and includes essential functionalities for a chat-based application.

---

## Project Structure

The project structure is organized as follows:

```
src/
├── api/               # Contains API utility functions
│   ├── api.ts         # General API utilities
│   ├── getChats.ts    # Fetch chats from the backend
│   └── isUserAnswerRelated.ts # Check user responses
├── components/        # Reusable React components
│   ├── ChatHistory.tsx  # Displays chat history
│   ├── ChatView.tsx     # Chat view container
│   ├── InputBar.tsx     # Input bar for user messages
│   └── TabButtons.tsx   # Tab navigation buttons
├── constants/         # Contains constant values used in the app
│   ├── api-url.ts     # Backend API base URL
│   └── questions.ts   # Predefined questions for chat logic
├── hooks/             # Contains custom React hooks
│   ├── useChat.ts       # Hook for chat logic
│   └── useChatHistory.ts # Hook for managing chat history
├── screens/           # Screens for the application
│   └── ChatScreen.tsx # Main chat screen
├── types/             # Contains TypeScript type definitions
│   ├── api.ts         # Shared API types
│   ├── chat-api.ts    # Types related to chat API
│   └── index.ts       # Exported type definitions
├── App.tsx            # Main app entry point
├── index.tsx          # Application bootstrap file
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

---

## Features

- **Frontend**:
  - Built with **React** and **TypeScript** for type safety and modularity.
  - Styled with **Tailwind CSS** for utility-first, responsive styling.
  - Includes reusable components for scalability.
  - Implements custom hooks for clean and reusable logic.

- **Backend Integration**:
  - Fetches chat data and processes user responses using **API utilities**.
  - Supports real-time chat display and dynamic message rendering.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: >= 14.x
- **Yarn**: >= 1.22.x (or npm)

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-chat-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Scripts

- `yarn start`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn test`: Runs unit tests using Jest.
- `yarn lint`: Lints the project for code quality.

---

## API Integration

### Chat API

The application communicates with a backend via the following API endpoints:

- **Get Chats** (`GET /chats`):
  Fetches chat messages from the server with optional query parameters:
  - `page` (number): Pagination page.
  - `per_page` (number): Number of messages per page.

- **Example API Utility**:
  ```typescript
  import axios from 'axios';
  import { API_URL } from '../constants/api-url';

  export const getChats = async (page = 1, perPage = 10) => {
    const { data } = await axios.get(`${API_URL}/chats`, {
      params: { page, per_page: perPage },
    });
    return data;
  };
  ```

---

## Styling

The application uses **Tailwind CSS** for styling. Update `tailwind.config.js` to customize the design system.

**Example**:
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
};
```

---

## TypeScript Types

TypeScript provides strict type checking throughout the application. Types are stored in the `types/` directory. Example:

```typescript
export interface Message {
  id: string;
  isAI: boolean;
  text: string;
}
```

---

## Deployment

To build the project for production:

1. Build the project:
   ```bash
   yarn build
   ```

2. Serve the build folder using a web server (e.g., **Netlify**, **Vercel**, or **Nginx**).

---

## Contributions

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

Special thanks to the **React** and **Tailwind CSS** communities for their excellent documentation and resources.
