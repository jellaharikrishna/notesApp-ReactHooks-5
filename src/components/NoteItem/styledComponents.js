import styled from 'styled-components'

export const ListCard = styled.li`
border: 1px solid #cbd5e1;
border-radius: 5px;
padding: 10px;
width: 100%;
margin-bottom: 10px;
@media screen and (min-width: 576px){
    margin-right: 10px;
    width: 230px;
}
`

export const ListTitle = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 500;
color: #334155;
`

export const ListNotes = styled.p`
font-family: Roboto;
color: #475569;
font-size: 14px;
font-weight: 450;
line-height: 1.5;
`
