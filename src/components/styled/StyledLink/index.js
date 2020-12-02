import styled, { css } from "styled-components";

const Link = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
);

const StyledLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid white;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  :hover {
    ${(props) =>
      props.color &&
      css`
        color: ${(props) => props.color};
      `}
    border: 2px solid white;
  }
`;

export default StyledLink;
