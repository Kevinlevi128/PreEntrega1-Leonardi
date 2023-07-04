import React, {useState} from "react";
import styled from 'styled-components';
import BurguerButton from "./BurguerButton";
import Carrito from "./Carrito";

function Navbar() {
    const [clicked, setClicked] = useState(false)
    console.log(clicked)
    const handleClick = () => {
        //cuando esta true lo pasa a flase y viceversa
        setClicked(!clicked)
    }
    return(
        <>
        <Navconteiner>
        <h2>Navbar <span>Responsive</span></h2>
        <div className={`links ${clicked ? "active" : ""} `}>
            <a onClick={handleClick} href="#h">Inicio</a>
            <a onClick={handleClick} href="#h">Tienda</a>
            <a onClick={handleClick} href="#h">Sobre Nosotros</a>
            <a onClick={handleClick} href="#h">Contacto</a>
        </div>
        <div className="burguer">
        <BurguerButton clicked = {clicked} handleClick ={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
        </Navconteiner>
        
        </>  
    )
}

export default Navbar


const Navconteiner = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .3rem;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        rigth: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    }

    .burguer{
        @media(min-width: 768px){
        display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #333;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;

    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`