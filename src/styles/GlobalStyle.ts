import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`
export const colors = {
    primary: "#455a64",
    secondary: "#7e57c2",
    third: "#ffb74d",
    thirdLight: "#ffe9ca",
    white: "#ffffff",
    black: "#000000",
}