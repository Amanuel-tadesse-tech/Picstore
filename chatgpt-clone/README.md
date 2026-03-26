# ChatGPT Clone

A ChatGPT-like web application built with React, tRPC, Express, and Manus AI.

## Features

- **User Authentication**: Secure login with Manus OAuth
- **Chat Interface**: Modern, responsive chat UI with dark mode
- **Message History**: Store and retrieve conversation history
- **AI Integration**: Powered by Manus AI
- **Real-time Messaging**: Instant message delivery

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Wouter
- **Backend**: Express, tRPC, Node.js
- **Database**: MySQL with Drizzle ORM
- **AI**: Manus AI Integration
- **Build**: Vite, esbuild

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Database

```bash
pnpm db:push
```

## Project Structure

```
client/          # Frontend React application
server/          # Backend Express server
drizzle/         # Database schema and migrations
shared/          # Shared types and constants
```

## Environment Variables

- `DATABASE_URL`: MySQL connection string
- `JWT_SECRET`: Session signing secret
- `VITE_APP_ID`: Manus OAuth app ID
- `OAUTH_SERVER_URL`: Manus OAuth server URL
- `VITE_OAUTH_PORTAL_URL`: Manus login portal URL
- `BUILT_IN_FORGE_API_URL`: Manus API URL
- `BUILT_IN_FORGE_API_KEY`: Manus API key

## License

MIT
