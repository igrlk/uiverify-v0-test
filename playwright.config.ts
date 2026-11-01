import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: { baseURL: "http://localhost:3123" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm build && pnpm start --port 3123",
    url: "http://localhost:3123",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
