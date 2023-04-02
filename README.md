This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Deploy to a server
- run `npm run build`
- install pm2
- run `pm2 start npm --name app1 -- run start -- -p 3000` or use `npx` in front of this command
- proxy 3000 to whatever in nginx

## Notes
- added custom server as in https://medium.com/@geevadon/how-to-deploy-a-next-js-app-on-cpanel-efficiently-c00c5eb860de to be able to deploy on cPanel hosting