import styled from 'styled-components';
import topo from '../../Images/topo.jpg';
import navBackground from '../../Images/nav_background.jpg';


export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    header{
        height: 100px;
        width: 100%;
        background-image: url(${topo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 4px 15px -2px #000 inset;
    } 
    .logo{
        width: 20%;
        transform: translateY(50px);
        max-height: 100px;
        max-width: 100px;
    }
    nav{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 10px;
        border-top: 10px solid;
        border-image: linear-gradient(to right,#836323 0,#c3a568 51%,#836323 100%);
        border-image-slice: 1;
        background-color: #078;
        box-shadow: 0 4px 15px -2px #000 inset;
    }
`;
