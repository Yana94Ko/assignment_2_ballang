import styled from "styled-components";

const HeaderStyled = styled.div`
  .header-top-wrapper {
    background-color: black;
    font-size: 2vw;
    .header-top {
      margin: 0 auto;
      width: 80%;
      color: white;
      display: flex;
      justify-content: space-between;
      height: 35px;
      line-height: 35px;
      ul {
        display: flex;
        column-gap: 0.6vw;
      }
    }
  }
  .header-middle-wrapper {
    margin: 2vh 0 2vh 0;
    .header-middle {
      margin: 0 auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      .header-middle-left {
        ul {
          display: flex;
          column-gap: 1vw;
          li {
            &:nth-child(3) {
              color: gray;
            }
            font-size: 1.5vw;
            line-height: 35px;
          }
        }
      }
      .header-middle-right {
        display: flex;
        column-gap: 2vw;
        .search-wrapper {
          border: 2px solid black;
          input {
            width: 15vw;
            height: 35px;
            border: none;
          }
          i {
            line-height: 35px;
            color: gray;
          }
        }
        .cart-wrapper {
          line-height: 35px;
          position: relative;
          text-align: center;
          > * {
            position: absolute;
            line-height: 35px;
          }
          span {
            width: 2vw;
            line-height: 1.5vw;
            margin-top: 1vw;
            color: white;
            font-size: 1.5vw;
          }
          i {
            width: 2vw;
            font-size: 2.5vw;
          }
        }
      }
    }
  }
  .header-bottom-wrapper {
    width: 100%;
    .header-bottom {
      width: 60%;
      margin: 0 auto;
      .menu-list {
        display: flex;
        justify-content: space-around;
        .menu-item {
          font-size: 1.5vw;
          line-height: 25px;
          &:first-child,
          &:nth-child(8) {
            font-weight: 800;
          }
          &:nth-child(7) {
            color: red;
            font-weight: 800;
          }
        }
      }
    }
  }
  .header-bottom-line {
    height: 20px;
    border-width: 4px 0 0 0;
  }
`;

export default HeaderStyled;
