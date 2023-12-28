import styled from "styled-components"

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    padding: 25px;
    box-shadow: var(--light-shadow);
    border-radius: 12px;

    @media all and (max-width: 550px) {
        padding: 25px 5px;
    }
`

export const Card = styled.div`
    flex: 1 0 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;

    h3, p {
        width: 90%;
        max-width: 400px;
        text-align: center;
    }

    h3 {
        // font-weight: bold;
        margin-bottom: 15px;
    }

    p {
        font-size: .8rem;
        color: var(--text-light);
    }

    @media all and (max-width: 550px) {
        flex-basis: 300px;
        padding: 10px
    }
`

export const Bullet = styled.div`
    --size: 45px;
    color: #fff;
    position: relative;
    width: var(--size);
    height: var(--size);
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
        width: var(--size);
        height: var(--size);
        z-index: -5;
    }

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      border-radius: 500px;
      background-color: var(--blue);
      width: var(--size);
      height: var(--size);
      z-index: -5;
    }
`