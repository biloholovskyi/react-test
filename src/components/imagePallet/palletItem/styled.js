import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  max-width: calc(25% - 30px);
  padding: 0 15px;
  margin-bottom: 25px;
  cursor: pointer;
  position: relative;
  
  .title {
    position: absolute;
    top: 0;
    left: 15px;
    width: calc(100% - 90px);
    padding: 15px 30px;
    font-size: 14px;
    color: #fff;
    mix-blend-mode: difference;
  }
  
  img {
    width: 100%;
    height: 150px;
    object-position: center;
    object-fit: cover;
  }
  
  @media(max-width: 700px) {
    max-width: calc(50% - 30px);
  }

  @media(max-width: 500px) {
    max-width: 100%;
    padding: 0;
  }
`

const AlbumID = styled.div`
  font-size: 12px;
  color: #fff;
  mix-blend-mode: difference;
  position: absolute;
  bottom: 45px;
  left: 30px;
`

export {
  Item,
  AlbumID
}