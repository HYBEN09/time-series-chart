/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from 'styled-components';

interface TooltipProps {
  active?: boolean;
  payload?: any[] | undefined;
}

export function CustomTooltip({ active, payload }: TooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <TooltipContainer>
        <TooltipText>지역: {data.id}</TooltipText>
        <TooltipAreaText>
          Value Area: <TooltipValue>{data.value_area}</TooltipValue>
        </TooltipAreaText>
        <TooltipBarText>
          Value Bar: <TooltipValue>{data.value_bar}</TooltipValue>
        </TooltipBarText>
      </TooltipContainer>
    );
  }

  return null;
}

const TooltipContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TooltipText = styled.p`
  font-weight: 600;
`;

const TooltipAreaText = styled.p`
  padding-top: 5px;
  color: #ffd662;
`;

const TooltipBarText = styled.p`
  padding-top: 5px;
  color: #00539c;
`;

const TooltipValue = styled.span``;
