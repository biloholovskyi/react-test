import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  flex-wrap: wrap;
`

const Item = styled(Link)`
  border: ${props => props.active ? '1px solid #fff' : '1px solid #111'};;
  border-radius: 4px;
  width: 36px;
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  transition: all .3s;
  background-color: ${props => props.active ? '#1976d2' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#111'};
  text-decoration: none;
  margin-bottom: 15px;

  &:hover {
    background-color: #a1a1a1;
  }
`

export {
  Wrapper,
  Item
}