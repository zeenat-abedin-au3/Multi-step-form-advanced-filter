import styled from "styled-components";
import { Typography, Row } from "antd";

const { Title } = Typography;

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

export const Wrapper = styled(Row)`
  margin: 20px 0;
  padding: 2rem 4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    padding: 2rem 1rem;
  }
`;

export const ShowMore = styled.p`
  cursor: pointer;
  color: #2874f0;
  padding-top: 5px;
  padding-bottom: 5px;
`;
