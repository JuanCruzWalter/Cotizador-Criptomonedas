import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #a91d15;
    color: #fff;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'lato', sans-serif;
    font-weight: 700;
    text-align: center;

`



const Error = ({children}) => {
  return (
    
    <Texto>
        {children}
    </Texto>
        
    
  )
}

export default Error 