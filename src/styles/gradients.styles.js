import { css } from 'styled-components';

// https://webgradients.com/

const cloudyKnoxville = css`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`;
const shadyWater = css`
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
`;

const gradients = { cloudyKnoxville, shadyWater };

export default gradients;
