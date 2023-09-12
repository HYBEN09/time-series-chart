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
      <TooltipContainer className="custom-tooltip">
        <TooltipText>ID: {data.id}</TooltipText>
        <TooltipText>
          Value Area: <TooltipValue>{data.value_area}</TooltipValue>
        </TooltipText>
        <TooltipText>
          Value Bar: <TooltipValue>{data.value_bar}</TooltipValue>
        </TooltipText>
      </TooltipContainer>
    );
  }

  return null;
}

const TooltipContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TooltipText = styled.p`
  margin: 0;
`;

const TooltipValue = styled.span`
  font-weight: bold;
`;
