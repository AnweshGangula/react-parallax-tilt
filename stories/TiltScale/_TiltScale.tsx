import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './TiltScale.demotab';

const code = `import React, { useState } from 'react';

import Tilt from '../../src';
import './TiltScale.demotab.scss';

const TiltScale = () => {
  const [scale, setScale] = useState(1.15);

  return (
    <Tilt scale={scale} transitionSpeed={2500}>
      <div className="tilt-scale">
        <div className="header">
          <div>Scale x{scale}</div>
          <hr />
        </div>
        <div className="form">
          <input
            type="range"
            min="0.7"
            max="1.5"
            step="0.01"
            value={scale}
            onChange={(ev) => setScale(parseFloat(ev.target.value))}
          />
        </div>
      </div>
    </Tilt>
  );
};

export default TiltScale;
`;

const style = `@import '../ReactParallaxTilt.scss';

.tilt-scale {
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  font-size: 30px;
  font-style: italic;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;

  .header {
    font-size: 38px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      transform: scale(1.5);
      height: 20px;
      margin-right: 7px;
    }
  }
}
`;

export const _TiltScale = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
