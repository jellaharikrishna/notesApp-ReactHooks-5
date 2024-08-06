import styled from 'styled-components'

export const AppContainer = styled.div`
height: 100vh;
padding: 20px;
display: flex;
flex-direction: column;
overflow: auto;
@media screen and (min-width: 768px){
    align-items: center;
}
`

export const MainHeading = styled.h1`
font-family: Bree Serif;
color: #4c63b6;
text-align: center;
`

export const FormContainer = styled.form`
border: 1px solid #cbd5e1;
padding: 20px;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 6px 6px #f0f0f0;
margin-bottom: 20px;
@media screen and (min-width: 768px){
    width: 80%;
}
`

export const TitleInput = styled.input`
padding-left: 15px;
padding: 10px;
font-family: Roboto;
font-weight: 500;
color: #475569;
margin-bottom: 3px;
border: none;
outline: none;
`

export const NotesInput = styled.textarea`
padding-left: 15px;
padding: 10px;
font-family: Roboto;
color: #475569;
margin-bottom: 3px;
border: none;
outline: none;
`

export const Button = styled.button`
align-self: flex-end;
height: 35px;
width: 70px;
color: #ffffff;
background-color: #4c63b6;
border-radius: 6px;
border-width: 0;
cursor: pointer;
`

export const NotesViewContainer = styled.ul`
padding: 0;
list-style-type: none;
display: flex;
flex-wrap: wrap;
@media screen and (min-width: 768px){
    width: 80%;
}
`

export const EmptyNotesView = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
min-height: 250px;
@media screen and (min-width: 768px){
    width: 80%;
}
`

export const EmptyNotesImage = styled.img`
width: 70px;
`

export const EmptyNotesHeading = styled.h1`
font-family: Roboto;
font-size: 22px;
font-weight: 500;
text-align: center;
color: #334155;
`

export const EmptyNotesPara = styled.p`
font-family: Roboto;
color: #475569;
font-weight: 500;
text-align: center;
margin: 0;
`
