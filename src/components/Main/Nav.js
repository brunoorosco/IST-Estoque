import React from 'react'
import styled from 'styled-components'
import ImgProfile from '../../assets/images/images.png'

const Container = styled.div`
display:flex;
padding: 1rem;
justify-content: flex-end;
align-items: center;
margin-bottom: 3rem;

`

const ProfileImg = styled.img`
height: 2rem;
margin: 0 1rem;
cursor: pointer;
border-radius: 50%;

`

const MessageIcon = styled.span`
color: ${({theme}) => theme.colorGray};
font-size: 27px;
cursor: pointer;

`


function Nav() {
    return (
        <Container>
            <MessageIcon className="iconify" data-icon="mdi-light:email" data-inline="false" />
            <ProfileImg src={ImgProfile}/>
        </Container>
    )
}

export default Nav
