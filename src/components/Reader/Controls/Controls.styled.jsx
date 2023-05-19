import styled from '@emotion/styled';

export const ControlSection = styled.section`
background-color: #dff6b1;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 50px;
    margin-top: 20px;
`

export const ControlBtn = styled.button`
    background-color: blue;
    color: white;
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
    min-width: 150px;
    transition: background-color 1.5s ease;

    &&:hover{
        background-color: white;
        color: blue;
        transition: color 1.5s ease;
    }

    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

`
