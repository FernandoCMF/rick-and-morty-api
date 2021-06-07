import styled from 'styled-components';

export const ContainerData = styled.div`
  display: flex;
  width: 450px;
  height: 200px;
  max-width: 100%;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 20px;
`;
export const Imagem = styled.img`
  max-width: 50%;
  height: 100%;

`;

export const ContainerSobre = styled.div`
  display: block;
  text-align: start;
  margin: 15px;
  min-height: 1em;

  h1{
    font-size: 20px;
    max-width: 100%;
  }

  p{
    font-size: 20px;
  }
`;
