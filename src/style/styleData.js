import styled from 'styled-components';

export const ContainerData = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
export const Imagem = styled.img`
  width: 250px;
  height: 100%;
`;

export const ContainerSobre = styled.div`
  displax: flex;
  text-align: justify;
  margin: 10px 20px;
  min-height: 1em;

  h1{
    font-size: 40px;
  }

  p{
    font-size: 20px;
  }
`;
