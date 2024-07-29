import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },

    e2e: {
        baseUrl: "http://127.0.0.0",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
