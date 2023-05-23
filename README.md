# vite-worker-repro

```bash
git clone git@github.com:tantaman/vite-worker-repro.git
pnpm install
```

## Dev Mode

Dev mode will fail to load the worker --

```ts
pnpm dev
```
![Screenshot 2023-05-23 at 10 08 02 AM](https://github.com/tantaman/vite-worker-repro/assets/1009003/82e9b3c4-5f0c-4c88-8141-244631a0699e)

## Preview

Build & Preview works fine, however

```ts
pnpm build
pnpm preview
```

The worker loads fine.

![Screenshot 2023-05-23 at 10 08 40 AM](https://github.com/tantaman/vite-worker-repro/assets/1009003/18525467-5054-4015-8c66-39412dc75fb2)
