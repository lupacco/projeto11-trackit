import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function Historic({userInfo}){
    return(
        <>
            <Header picture={userInfo.image}/>
            <HistoricContainer>
                <div>
                    <h1>Histórico</h1>
                    <p>Em breve vocÊ poderá consultar seu histórico</p>
                </div>
            </HistoricContainer>
            <Footer/>
        </>
    )
}

const HistoricContainer = styled.main`
    background-color: #E5E5E5;
    height: 100vh;
    padding: 100px 16px 0 16px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
        width: 340px;
        margin-bottom: 32px;
        >h1{
            text-align: left;
            font-size: 23px;
            color: #126BA5;
        }
        >p{
            text-align: left;
            font-size: 18px;
            color: #BABABA;
        }
    }

`