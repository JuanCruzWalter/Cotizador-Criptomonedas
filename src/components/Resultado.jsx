import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
font-size: 18px;
    span {
        font-weight: 700;
    }
    
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <Contenedor>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto" 
            />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más Alto del Día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más Bajo del Día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación Ultimas 24 Hs:<span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado