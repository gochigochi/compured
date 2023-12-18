import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    gap: 3px;

    input { 
        display: none;
    }

    .box {
        position: relative;
        background-color: #fff;
        height: 45px;
        padding: 15px;
        border-radius: 15px;
        overflow: hidden;
        transition: all .5s ease-in-out;
    }

    .box-title {
        width: 100%;
        display: inline-block;
        cursor: pointer;
    }

    .box-content {
        padding-top: 15px;
        display: none;
    }

    .box-close {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        display: none;
    }
    
    input:checked + .box {
        height: auto;
    }

    input:checked + .box .box-content,
    input:checked + .box .box-close {
        display: inline-block;
    }

    .box-title:before {
        content: "";
        position: absolute;
        top: 24px;
        right: 11px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid var(--input-border);
        transform: translateY(-50%);
        transform-origin: top;
        transition: transform .5s;
    }

    input:checked + .box .box-title:before {
        transform: rotateX(180deg);
        border-top: 7px solid var(--blue);
    }
`