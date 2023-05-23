
export class WorkerInterface {
  constructor() {
    this.worker = new SharedWorker(
      new URL("./worker.js", import.meta.url),
      {
        type: "module",
        name: "vite-repro-shared.worker",
      }
    );
  }
}
