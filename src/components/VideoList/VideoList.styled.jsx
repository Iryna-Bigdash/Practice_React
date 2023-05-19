import styled from '@emotion/styled';

export const VideosList = styled.ul`
    list-style: none;
    display: grid;
    gap: 30px;
    font-size: 25px;
`

export const VideoListItem = styled.li`
padding: 10px;

&&:hover{
    color: white;
    background-color: #9191f2;
    transition: background-color 1.5s ease;
}
`
