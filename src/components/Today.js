import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Today(){
    return(
        <>
            <Header/>
            <Container>
                <div>
                    <h1>Segunda, 17/05</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </div>

                <Task>
                    <div>
                        <h2>Ler 1 capitulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <Checkbox>
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </Checkbox>
                </Task>
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.main`
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
const Task = styled.div`
    padding: 0 8px ;
    width: 340px;
    height: 100px;
    border-radius: 6px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >div{
        >h2{
            font-size: 23px;
            color: #666666;
        }
        >p{
            font-size: 13px;
            color: #666666;
        }
    }
`
const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    >ion-icon{
        color: #FFFFFF;
        font-size: 56px;
    }
`