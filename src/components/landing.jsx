import styled from "styled-components"
import axios from "axios"
import PurpleCity from "../imgs/PurpleFundo.jpg"
import { useState } from "react"
import {motion} from 'framer-motion'
const Main = styled.div`
color: #fff;
background-color: black;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;


`

const Infos = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100vw;
height: 30vh;

@media only screen and (max-width: 820px) {
 flex-direction: column;
 height: auto;
 overflow: hidden;
}

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        color: #fff;
        font-size: 4rem;
        text-align: center;

        @media only screen and (max-width: 820px) {
            font-size: 2rem;
}

        span {
            color: #fff;
        }      
    }

    p {
            color: #fff;
            text-align: center;
        }

        img {
            height: 18rem;
            border-radius: 1rem;
            margin-left: 4rem;

            @media only screen and (max-width: 820px) {
                margin-top: 1rem;
                margin-bottom: 1rem;
                height: 15rem;
                width: 15rem;
    }
}
`

const Pesquisa = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    input {
        width:20rem ;
        height: 3rem;
        background-color: #cacaca;
        border: none;
        border-left: 3px solid #310667;
        text-align: center;
        ::placeholder {
            color: black;
            text-align: center;
        }
    }

    button {
        margin-top: 2rem;
        width: 10rem;
        height: 3rem;
        font-weight: bold;
        border: none;
        background-color: #310667;
        color: #fff;
        cursor: pointer;
        transition: 0.1s;

        :hover {
            transform: scale(110%);
            background-color: #14022b;
        }
    }

    `
    const Errado = styled.div`
        color: red;
    `

const Resultado = styled.div`
    width: 40vh;
    height: 40vh;
    background-color: #310667;
    color: #fff;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 820px) {
        margin-bottom: 1rem;
}

    h1 {
        text-align: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
        h2 {
        }
    }
`



export default function Landing() {
    const [cep, setCep] = useState(null)
    const [mostrar, setMostrar] = useState(false)
    const [errado, setErrado] = useState(false)
    
     async function handlePesquisa() {
        const getCep = document.getElementById('CepValue').value
        console.log(getCep)
        
        await axios.get((`https://viacep.com.br/ws/${getCep}/json/`)).then((response) => {
            setCep(response.data)
            setMostrar(true)
            setErrado(false)
            console.log(cep)
    }).catch((error) => {
        console.log(error)
        setMostrar(false)
        setErrado(true)
    })
    }

    return(
        <Main style={{ 
            backgroundImage: `url(https://img.freepik.com/free-vector/simple-white-business-background-with-green-border_53876-118993.jpg?w=1380&t=st=1674847390~exp=1674847990~hmac=d2cfe4a2419fc6124b94dba636790704aa499a5117d26131e436b308e4f5c907)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <Infos
            style={{ 
                backgroundImage: `url(https://img.freepik.com/free-vector/gradient-dynamic-purple-lines-background_23-2148995757.jpg?w=1380&t=st=1674852768~exp=1674853368~hmac=93e1ee1e4fb1e1d19c46b6a35141560fdf56c2c59257bfc050e5263448d7ef7c)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
                <section>
                <h1>Buscador <span>de Cep</span></h1> 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, explicabo unde illo temporibus atque, <br /> ipsam cum ullam voluptate praesentium tempora ex ipsum iusto autem assumenda officia molestias, saepe adipisci distinctio.</p>              
                </section>
                <img src="https://img.freepik.com/free-photo/image-handsome-man-working_197531-33454.jpg?w=1380&t=st=1674852961~exp=1674853561~hmac=ae81610ad2d0ded9e0779d574d4fa5b8d5af9b1788c07a8a3d1c7f6c1eb69fce" alt="" />
            </Infos>
              <Pesquisa>
                {errado && 
                <Errado>
                    <label htmlFor="CepValue">Por favor Insira um Cep Válido</label>  
                </Errado>}
                <input  type="text" id="CepValue" placeholder="Número do Cep Ex: 58300150" />
                <button onClick={handlePesquisa}>Pesquisar</button>
              </Pesquisa>
              {mostrar === true &&
              <motion.div
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    type: 'spring',
                    duration: 1
                }}
              > 
              <Resultado>
                <h1>Dados</h1>
                <section>
                    <h2>Cep: {cep.cep}</h2>
                    <h2>DDD: {cep.ddd}</h2>
                    <h2>Localidade: {cep.localidade}</h2>
                    <h2>Uf: {cep.uf}</h2>
                    <h2>Bairro: {cep.bairro}</h2>
                    <h2>Logradouro: {cep.logradouro}</h2>
                </section>
              </Resultado>
              </motion.div>
              }
        </Main>
    )
}