import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 65px;

    background-color: #ededed;

    display: flex;
    align-items: center;
    justify-content: space-between;


    section {
        width: 30%;
        margin-right: 30px;
        font-size: 25px;

        color: #51585c;

        display: flex;
        justify-content: space-between;

        .color {
            color: #009588;
        }
    }

    div {
        div {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #d9d9d9;
            margin-left: 20px;
        }
    }
`