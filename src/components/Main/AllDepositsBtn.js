import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
`

const Button = styled.a`
    text-transform: uppercase;
    width: 9rem;
    font-size: 0.6rem;
    font-weight: 700;
    background-image: ${({ theme }) => theme.gradient};
    color: #fff;
    background-color: rgb(128,74,216);
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    &:hover {
        box-shadow: 0px 0px 7px rgba(128,74,216,0.6);
        background-color:rgb(100,50,200);
    }
`

const AllDepositsBtn = ({ title }) => (
    <Container>
        <Button>All {title}</Button>
    </Container>
)

export default AllDepositsBtn