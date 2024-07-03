import { css } from '@emotion/react';

const helloStyle = css`
  color: hotpink;
`;

const HelloWorld = () => <div css={helloStyle}>Hello, World!</div>;

export default HelloWorld;
