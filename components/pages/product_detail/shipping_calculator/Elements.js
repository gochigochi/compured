import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`
    margin-top: 50px;
    border-radius: 12px;
    border: 1px solid var(--gray-bg);
`

export const Top = styled.div`
    background-color: var(--gray-bg);
    display: flex;
    justify-content: space-between;
    border-radius: 12px 12px 0 0;
`

export const Title = styled.p`
    display: grid;
    place-items: center;
    padding: 0 15px;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const Bottom = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    padding: 20px;
`

export const Area = styled.div`
    display: grid;
    gird-template-rows: repeat(2, 1fr);
    row-gap: 12px;
`

export const ZipLabel = styled.label`
    color: var(--text-light);
    font-size: .9rem;
`

export const ZipInput = styled.input`
    border-radius: 25px;
    border: 2px solid var(--gray-bg);
    width: 125px;
    height: 32px;
    font-size: 1.5rem;
    padding: 0 15px;
    text-align: center;
`

export const ResultLabel = styled.p`
    color: var(--text-light);
    font-size: .9rem;
    border-bottom: 1px solid var(--gray-bg);
`

export const Result = styled.p`
    height: 32px;
    font-size: 1.5rem;
    text-align: right;
`