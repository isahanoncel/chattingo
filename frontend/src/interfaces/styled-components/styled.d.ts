// #region Global Imports
import "styled-components";
// #endregion Global Imports

type ExtendedColors =
    | "white"
    | "black"

type ExtendedFonts = "Poppins" | "Inter";
declare module "styled-components" {
    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
        fonts: Record<ExtendedFonts, string>;
    }
}
