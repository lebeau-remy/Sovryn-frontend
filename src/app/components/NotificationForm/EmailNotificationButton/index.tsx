import React from 'react';
import styled from 'styled-components/macro';
import { Icon } from '@blueprintjs/core';

interface Props {
  text: string;
  onClick: () => void;
}

export function EmailNotificationButton(props: Props) {
  return (
    <StyledButton onClick={props.onClick}>
      <Icon icon="envelope" iconSize={16} className="tw-mr-2" />
      <span className="tw-text-white">{props.text}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button.attrs(_ => ({
  type: 'button',
}))`
  color: var(--white);
  background-color: var(--primary);
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid var(--white);
  font-size: 12px;
  :hover {
    color: var(--gold);
  }
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
