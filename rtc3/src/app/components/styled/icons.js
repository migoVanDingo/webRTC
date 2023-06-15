import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SIconContainer = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 60px;
    background-color: #24de81;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease;

    &:hover{
        background-color: #5283ff; 
    }

    &.active{
        background-color: gold;
    }

    &.inactive{
        background-color:red;
    }
`

export const SIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color:white;
`