import styled, { css } from "styled-components";

type ButtonDefault = {
  children: React.ReactNode;
  isFullWidth?: boolean;
};

type ButtonEvent = ButtonDefault & {
  as?: "button";
  onClick: () => void;
};

type ButtonLink = ButtonDefault & {
  as: "a";
};

type ButtonProps = ButtonEvent | ButtonLink;

const Button = styled.button.attrs<ButtonProps>(({ as }) => ({
  as: as === "a" && as,
  type: "button",
}))<ButtonProps>`
  ${({ as, isFullWidth, theme }) => {
    return css`
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: none;
      border-radius: 20px;
      padding: 1rem 2rem;
      width: ${isFullWidth ? "100%" : null};
      cursor: pointer;
      box-shadow: ${theme.common.boxShadow};

      ${as === "a" &&
      css`
        display: inline-block;
        text-decoration: none;
      `}
    `;
  }}
`;

Button.defaultProps = {
  as: "button",
  isFullWidth: false,
};

export { Button };
