import styled, { DefaultTheme, createGlobalStyle, keyframes } from 'styled-components'
import "../src/assets/fonts/style.css"


declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: string,
      backgroundLight: string
      textColor: string,
      primary: string,
    },
  }
}

export const theme: DefaultTheme = {
  palette: {
    background: '#040517',
    backgroundLight: '#D79D31',
    textColor: '#E6FF49',
    primary: '#D79D31',
  },
}

export const GlobalStyle = createGlobalStyle`
  #root, html, body {
    height: 100%;
  }
  :root {
    ${({ theme }) => `
      --border-radius: 5px;
      --text-color: ${theme.palette.textColor};
      --primary-color: ${theme.palette.primary};
      --header-bg-color: ${theme.palette.background}EE;
      --gamba-modal-bg: ${theme.palette.backgroundLight};
      --gamba-modal-text: ${theme.palette.textColor};
      --bg-color: ${theme.palette.background};
      --bg-light-color: ${theme.palette.backgroundLight};
    `})
  }
  html, body {
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
    
  }
  ::selection {
  }
  button {
    user-select: none;
  }
  body {
    margin: 0;
    color: var(--text-color);
    background: var(--bg-color);
    cursor: default;
    overflow-y: auto;
    text-shadow: 1px 1px 0 #D79D31;
    &::-webkit-scrollbar {
      width: .4em;
    }
    &::-webkit-scrollbar-thumb {
      bg-color: #cccccc33;
    }
    
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-weight: normal;
  }

  body, input, button, textarea, pre {
    font-family: 'Lo-Res', 'Roboto Mono', monospace; // Use your custom font
    font-display: block;
    font-size: 14px;
  }
  button, a {
    cursor: pointer;
  }
  a:not([href^="https://"]) {
    text-decoration: none;
  }
  a {
    color: unset;
  }

  body {
    
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000;
  }
  
  body::after,
  body::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="1" fill="white"/></svg>') 0 0 repeat;
    z-index: -1;
    opacity: 0.5;
  }
  
  body::after {
    background-size: 100px 100px;
    animation: moveStars 10s linear infinite;
  }
  
  body::before {
    background-size: 50px 50px;
    animation: moveStars 20s linear infinite;
  }
  
  @keyframes moveStars {
    0% {background-position: 0 0;}
    100% {background-position: 500px 500px;}
  }
  
`  

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Section = styled.div`
  padding: 10px;
  width: 100%;
  transition: width .25s ease;
  @media (min-width: 800px) {
    width: 720px;
  }
  @media (min-width: 1280px) {
    width: 960px;
  }
  display: grid;
  gap: 10px;
  margin: 0 auto;
  padding: 20px;
`

export const Banner = styled.div<{size: 'big' | 'medium' | 'default'}>`
  position: relative;
  transition: height .25s ease;
  height: 100vh;
  ${({ size }) => size === 'default' && `
    @media (min-height: 420px) {
      height: 420px;
    }
    @media (min-height: 500px) {
      height: 500px;
    }
    @media (min-height: 960px) {
      height: 40vh;
    }
  `}
  ${({ size }) => size === 'medium' && `
    @media (min-height: 800px) {
      height: 50vh!important;
    }
  `}
  ${({ size }) => size === 'big' && `
    @media (min-height: 800px) {
      height: 75vh!important;
    }
  `}
  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    animation: ${fadeIn} .5s;
    &:last-child {
      display: flex;
      text-align: left;
      z-index: 1;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
    background-image: linear-gradient(0deg, var(--bg-color) 0%, ${({ theme }) => theme.palette.background}00 40%);
  }
`

export const StylelessButton = styled.button`
  border: none;
  margin: 0;
  outline: none;
  padding: 0;
  background: none;
`
