import styled from 'styled-components'

export const SFlexCol = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

`

export const SFlexRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    justify-content: center;
    align-items: center;

`