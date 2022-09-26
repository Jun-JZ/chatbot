## Getting Started

To test:

1. run the development server

```bash
yarn install
yarn dev
```

2. Open http://localhost:3000/, and send messages to Bot

- **create story** will trigger to return a random story
- **create portrait** will trigger to return a random portrait image.
- other non-trigger words will get some random sentences from Bot.

3. Demo Video

https://user-images.githubusercontent.com/91700567/192353733-31e3db90-d517-4878-9584-11b41016555d.mov

## File Structure Convention

```
.
├── README.md
├── components                  /* Reusable UI components */
│   ├── Avatar.tsx
│   ├── Button.tsx
│   ├── Loading.tsx
│   ├── TextField.tsx
│   └── index.ts
├── mocks                      /* Mocked Data */
│   ├── index.ts
│   └── mockResponse.ts
├── modules
│   ├── chatBot                /* Chatbot Implementation */
│   │   ├── ChatBot.styles.ts
│   │   └── ChatBot.tsx
│   └── index.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── api
│   │   └── socket.ts          /* Server Side implementation */
│   └── index.tsx
├── public
│   ├── bot-avatar.png
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   └── globals.css
├── tsconfig.json
├── types
│   └── index.ts              /* Common Types */
├── utils                     /* helper functions */
│   └── index.ts
└── yarn.lock

```
