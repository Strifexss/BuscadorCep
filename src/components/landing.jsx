import styled from "styled-components"
import axios from "axios"


const Main = styled.div`
color: red;
background-color: black;
height: 100vh;
width: 100vw;
`

axios.get(('https://viacep.com.br/ws/58300150/json/')).then((response) => {
  console.log(response.data)
})

export default function landing() {
    return(
        <Main>
            <h1>teste</h1>
        </Main>
    )
}