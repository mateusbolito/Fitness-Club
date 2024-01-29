import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.5rem;
  background: ${({ theme }) => theme.colors["base-white2"]};
  transition: all 0.4s ease;
  margin-top: 1.8rem;

  @media (max-width: 1250px) {
    header {
      width: 1000px;
    }

    @media (max-width: 1024px) {
      header {
        width: 700px;
      }
    }
  }
`;

export const ListContainer = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    color: inherit;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    transition: all 0.4 ease;
  }

  a {
    color: inherit;
    padding: 0.5rem;
    margin: 2.5rem;
  }

  button {
    width: 100px;
    height: 2.5rem;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors["base-grenn"]};
  }
  a:hover {
    background: ${({ theme }) => theme.colors["base-orange"]};
    border-radius: 10px;
  }
`;

export const ImgHeader = styled.div`
  margin-top: -2.6rem;

  img {
    width: 150px;
    margin-top: 3rem;
  }
`;
