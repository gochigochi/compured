import styled from "styled-components"
import { motion } from "framer-motion"

const SIZE = `25px`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    column-gap: 35px;
    row-gap: 55px;
`

export const Item = styled.div`

`


export const Bullet = styled.div`
    color: #fff;
    position: relative;
    width: ${SIZE};
    height: ${SIZE};
    display: grid;
    place-items: center;
    z-index: 10;
    margin-bottom: 2rem;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 500px;
        background-color: #16FFC7;
        width: ${SIZE};
        height: ${SIZE};
        z-index: -5;
    }

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      border-radius: 500px;
      background-color: var(--blue);
      width: ${SIZE};
      height: ${SIZE};
      z-index: -5;
    }
`