import { styled } from 'styled-components';

interface IBtnProps {
  onClick: () => void;
  activated: boolean;
  children: React.ReactNode;
}

function Buttons({ onClick, activated, children }: IBtnProps) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      $activated={activated ? 'true' : 'false'}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $activated: string }>`
  height: 2.3rem;
  border-radius: 8px;
  color: #fff;
  padding: 0 1rem;
  font-size: 1.2rem;

  background: ${(props) =>
    props.$activated === 'true' ? `#1f76c3` : `#00539C`};
`;

export default Buttons;
