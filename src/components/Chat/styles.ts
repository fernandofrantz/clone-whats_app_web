import styled from 'styled-components'

export const StyledChat = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

export const ChatImage = styled.div`
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        width: 55px;
        height: 55px;

        border-radius: 50%;

        background-color: #d9d9d9;
    }
`

export const ChatInfos = styled.div`
    width: 80%;
    height: 98%;

    margin-right: 2%;

    border-bottom: 1px solid #f2f2f2;

    display: flex;
    justify-content: space-between;


    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            text-align: start;
            margin: 0px;
        }
    }

    .nums {
        display: flex;
        justify-content: center;
        flex-direction: column;

        margin-right: 10px;
    }
`