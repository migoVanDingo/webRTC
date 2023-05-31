import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router'

const SHeader = styled.div`
    padding: 20px;
    margin: 0;

    width: 100%;
    height: 60px;
    background-color: #181818;

`

const SNav = styled.div`
    position: relative;
    margin: auto;
    max-width: 1200px;
    

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    align-items: center;

    

`

const SLogo = styled.a`
    position: absolute;
    font-size: 1.5rem;
    font-weight: 600;
    color: #00ffa6;
    flex: 1;
    text-decoration: none;
    cursor: pointer;

    transition: all 0.5s ease-in;
    &:hover{
        color: #00aaff;
    }

`

const SList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    position: relative;
    justify-content: flex-end;
    flex: 1;
    
`

const SItem = styled.li`
    color: rgb(225, 225, 225, 1);
    list-style-type: none;
    border-bottom: 2px solid rgb(0, 255, 166, 0);
    border-radius: 3px;
    transition: all 0.4s ease;

    &:hover{
       
        border-bottom: 2px solid rgb(0, 255, 166, 1);
        color:rgb(0, 255, 166, 1);
    }
    
`

const SItemLinkWrapper = styled.a`
    text-decoration: none;

    
`

export default function Header() {

    const navigate = useNavigate()
    const { logout } = useAuth()
    
    const handleLogout = () => {
        navigate("/login")
        logout()
    }


    return (
        <SHeader>
            <SNav>
                <SLogo href="/">MigoChat</SLogo>
                <SList>
                    <SItemLinkWrapper href="/Login"><SItem>Login</SItem></SItemLinkWrapper>
                    <SItemLinkWrapper href="/Signup"><SItem>Sign Up</SItem></SItemLinkWrapper>
                    <SItemLinkWrapper href="/Chatroom"><SItem>Chatroom</SItem></SItemLinkWrapper>
                    <SItemLinkWrapper onClick={handleLogout}><SItem>Logout</SItem></SItemLinkWrapper>
                </SList>
            </SNav>

        </SHeader>

    )
}
