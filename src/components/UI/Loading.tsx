import { styled } from 'styled-components';

function Loading() {
  return (
    <LoadingContainer>
      <img src="/loading.svg" alt="로딩중" />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(120%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
