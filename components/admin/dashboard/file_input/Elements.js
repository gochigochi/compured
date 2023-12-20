import styled from "styled-components"

export const FileUploadContainer = styled.section`
    position: relative;
    border: 2px dotted var(--input-border);
    padding: 5rem;
    border-radius: 12px;
    overflow: hidden;
    height: auto;
    width: ${({view}) => view === "desktop" ? "100%" : "50%"};
    aspect-ratio: ${({view}) => view === "desktop" ? "30/9" : "4/3"};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: ${({dragging}) => dragging ? "solid" : "none"};
    transition: all .2s ease-in-out;
`