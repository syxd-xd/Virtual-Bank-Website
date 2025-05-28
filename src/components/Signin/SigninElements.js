import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow:hidden;
// background: linear-gradient( 108deg , rgb(147, 113, 1)0% , rgba (10,2 01,122,1)100% );
background: #FF8C00;
`
export const FormWrap = styled.div`
height: 90%;
display: flex;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 400px){
height: 80%;
}
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700px;
font-size: 32px;
justify-self: flex-start;
cursor: pointer:
font-size: 1.5rem;
// display: flex;
font-weight: bold;

@media screen and (max-width: 480px){
margin-left: 16px;
margin-top: 8px ;
}
`

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction : column;
justify-content: center;

@media screen and (max-width: 480px){
padding:10px;
}
`
export const Form = styled.div`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto ;
padding : 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen (max-width : 480px){
padding:32px;
}
`

export const FormH1 = styled.h1`
margin-top: 10px;
color:#fff;
font-size: 24px;
font-weight: 400;
text-align: center;
justify-content: center;
padding: 1px 10px 40px 0  ;

`
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`
export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`
export const FormButton = styled.button`
background:#FF8C00;
padding: 16px 0;
border: none;
border-radius: 14px;
color:#fff;
font-size: 20px;
cursor: pointer;
`

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color:#fff;
font-size: 14px; 
`

