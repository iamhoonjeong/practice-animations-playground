import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  width: 200px;
  height: 100%;
  padding: 24px 24px 0 24px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Href = styled.a`
  cursor: pointer;
  font-size: 20px;
  & + & {
    margin-top: 16px;
  }
`;

export default function Menu() {
  return (
    <Wrap>
      <Link href="/">
        <Href>Wave Ball</Href>
      </Link>
      <Link href="/bounce-ball">
        <Href>Bounce Ball</Href>
      </Link>
    </Wrap>
  );
}
