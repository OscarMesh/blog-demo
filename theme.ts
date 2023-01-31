import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-color": "#f7abba",
    "--my-red": "#f7abba",
    "--my-green": "#a3d9a3",
    "--my-yellow": "#f7d9a3",
}

export const myTheme = buildLegacyTheme({
    // base theme colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    // Brand colors
    "--brand-primary": props["--my-color"],

    // default button colors
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-color"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--my-yellow"],

    // state colors
    "--state-success-color": props["--my-green"],
    "--state-danger-color": props["--my-red"],
    "--state-warning-color": props["--my-yellow"],
    "--state-info-color": props["--my-color"],

    // Navbar colors
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-color"],



});