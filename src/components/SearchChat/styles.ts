import styled from 'styled-components'

export const StyledSearchChat = styled.div`
    width: 100%;
    height: 55px;

    background-color: #f6f6f6;

    border-bottom: 1px solid #ededed;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;


        width: 95%;
        height: 75%;
        background-color: #ffffff;

        border-radius: 50px;

        div {
            width: 12%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;       
            margin-left: 10px;
        }

        input {
            width: 90%;
            border-radius: 50px;
            border: none;
            
            text-align:center;

            font-size: 15.5px;

            color: #c8c8c8;
        }


    }
`