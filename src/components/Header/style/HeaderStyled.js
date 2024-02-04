import styled from "styled-components";

const HeaderStyled = styled.div`
  .header-top-wrapper {
    background-color: black;
    .header-top {
      margin: 0 2vw 0 2vw;
      color: white;
      display: flex;
      justify-content: space-between;
      height: 23px;
      line-height: 23px;
      ul {
        display: flex;
        column-gap: 1vw;
      }
    }
  }
  .header-middle-wrapper {
    margin: 2vh 2vw 2vh 2vw;
    .header-middle {
      display: flex;
      justify-content: space-between;
      .header-middle-left {
        ul {
          display: flex;
          column-gap: 1vw;
          li {
            font-size: 2vw;
          }
        }
      }
      .header-middle-right {
        display: flex;
        column-gap: 2vw;
        .search-wrapper {
          input {
            width: 15vw;
            height: 30px;
            border-color: gray;
          }
          i {
            margin-left: -3vw;
            font-size: 3vw;
            color: gray;
          }
        }
        .cart-wrapper {
          font-size: 1.5vw;
          span {
            color: white;
            margin-left: -2vw;
            font-size: 2vw;
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
