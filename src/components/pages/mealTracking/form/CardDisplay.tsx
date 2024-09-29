import styled from "styled-components"

export default function CardDisplay() {
  return (
    <CardDisplayStyled>
        <img src="https://www.doitinparis.com/files/2022/bars-restos/burgers/10/junk/junk-burger.jpg" alt="imageMeal"/>
        <h2>Tacos</h2>
        <div className="textCard">
            <p>Quantité : 25g</p>
            <p>Calories : 25cal</p>
        </div>
        <h4>Petit-Déjeuner</h4>
    </CardDisplayStyled>
  )
}
const CardDisplayStyled = styled.div`
display: flex;
flex-direction: column;
background-color: white;
align-items: center;
width: 300px;
height: 330px;
padding : 30px 5px;
border-radius: 15px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

img{
    width: 200px;
    height: auto;
}

.textCard{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
`