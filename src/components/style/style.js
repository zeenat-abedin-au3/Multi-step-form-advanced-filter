import styled from "styled-components";
import { Typography, Menu } from "antd";

const { Title } = Typography;
const { Item } = Menu;

export const MenuIconX = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
`;
export const TitleX = styled(Title)`
  text-align: center;
  flex: 1;
  margin: 0px !important;
`;
