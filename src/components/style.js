import styled from 'styled-components'


export const ChangequoteButton = styled.button`
width: 49px;
height: 49px;
margin: 0 auto;
padding: 0;
background: none;
border: none;
z-index: 3;
&:hover{
    cursor: pointer;
}
`
export const PhraseContainer = styled.div`
width: 35%;
min-width: 357px;
height: 245px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Digital Numbers', sans-serif;
font-size: 16px;
font-weight: 400;
border-radius: 39px;
z-index: 3;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,0.33) 0%, rgba(255,255,255,1) 100%);
` 

export const QuoteBox = styled.div`
background: url(${(props) => props.bg});
background-size: cover;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
z-index: 1;
`
export const TittleApp = styled.h1`
font-size: 32px;
font-family: 'Digital Numbers', sans-serif;
position: absolute;
top: 133px;
width: 100%;
text-align: center;
color: white;
font-weight: 400;
`