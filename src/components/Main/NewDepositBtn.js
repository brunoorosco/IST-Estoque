import React from 'react'
import styled from 'styled-components'

const AddButton = styled.a`
  color: ${({ theme }) => theme.colorGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;
`

const AddIcon = styled.span`
  color: '#fff';
  font-size: 36px;
`

function NewDepositBtn() {
    return (
        <AddButton>
            <AddIcon className="iconify" data-icon="mdi-light:plus-circle" data-inline="false"></AddIcon>
        </AddButton>
    )
}



export default NewDepositBtn
