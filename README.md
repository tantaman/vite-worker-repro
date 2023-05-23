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

## Preview

Build & Preview works fine, however

```ts
pnpm build
pnpm preview
```

The worker loads fine.