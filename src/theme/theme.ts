import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        tokens: {
            colors: {
                blue_lagoon: { value: "#007b8d" },
                green_jewel: { value: "#11674a" },
                grey_nevada: { value: "#68757d" },
                yellow_orange: { value: "#ffae34" },
            },
        },
        semanticTokens: {
            colors: {
                primary: { value: "{colors.blue_lagoon}" },
                secondary: { value: "{colors.green_jewel}" },
                neutral: { value: "{colors.grey_nevada}" },
                warning: { value: "{colors.yellow_orange}" },
                text: { value: "{colors.grey_nevada}" },
                bg: { value: "#ffffff" },
            },
        },
        keyframes: {
            spin: {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
            },
            fadeIn: {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
        },
        // animations: {
        //   spin: {
        //     value: "spin 2s linear infinite",
        //   },
        //   fadeIn: {
        //     value: "fadeIn 0.3s ease-in-out",
        //   },
        // },
    },
})
const system = createSystem(defaultConfig, config);
export default system
