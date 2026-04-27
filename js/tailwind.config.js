/* ============================================================
   Darpan Studio — Tailwind CSS Configuration
   Applied after Tailwind CDN loads (see index.html script order)
   ============================================================ */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-container-low":       "#1c1b1b",
                "on-secondary":                "#5f1410",
                "on-secondary-fixed":          "#410001",
                "tertiary":                    "#bcc3ff",
                "primary":                     "#ffb4a8",
                "inverse-on-surface":          "#313030",
                "tertiary-container":          "#0025c8",
                "on-secondary-container":      "#ff9f93",
                "error-container":             "#93000a",
                "on-error":                    "#690005",
                "outline-variant":             "#5a403c",
                "on-primary":                  "#690000",
                "inverse-primary":             "#b52619",
                "tertiary-fixed":              "#dfe0ff",
                "surface-bright":              "#393939",
                "surface":                     "#131313",
                "on-background":               "#e5e2e1",
                "surface-tint":                "#ffb4a8",
                "surface-container-high":      "#2a2a2a",
                "on-surface-variant":          "#e3beb8",
                "on-secondary-fixed-variant":  "#7e2b23",
                "on-primary-fixed":            "#410000",
                "secondary-container":         "#812d26",
                "on-primary-fixed-variant":    "#920703",
                "primary-fixed-dim":           "#ffb4a8",
                "surface-variant":             "#353534",
                "on-tertiary":                 "#001a98",
                "secondary":                   "#ffb4aa",
                "surface-container-highest":   "#353534",
                "on-tertiary-fixed-variant":   "#0d2ccc",
                "on-primary-container":        "#ff907f",
                "background":                  "#131313",
                "secondary-fixed":             "#ffdad5",
                "outline":                     "#aa8984",
                "on-tertiary-container":       "#9ea9ff",
                "inverse-surface":             "#e5e2e1",
                "tertiary-fixed-dim":          "#bcc3ff",
                "surface-container":           "#201f1f",
                "surface-dim":                 "#131313",
                "error":                       "#ffb4ab",
                "primary-fixed":               "#ffdad4",
                "secondary-fixed-dim":         "#ffb4aa",
                "on-tertiary-fixed":           "#000d60",
                "on-surface":                  "#e5e2e1",
                "surface-container-lowest":    "#0e0e0e",
                "on-error-container":          "#ffdad6",
                "primary-container":           "#8b0000"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg:      "0.25rem",
                xl:      "0.5rem",
                full:    "0.75rem"
            },
            fontFamily: {
                headline: ["Epilogue"],
                body:     ["Manrope"],
                label:    ["Manrope"]
            }
        }
    }
};
