import React from 'react';
import Button from '../components/button/Button';
import Transition from '../components/transition/Transition';

const PreviewTransition: React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>toggle</Button>
      <Transition in={show} animation="zoom-in-left" timeout={300}>
        <div>
          {new Array(15).fill(0).map(() => (
            <p>111</p>
          ))}
        </div>
      </Transition>

      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <Button type="primary">hello</Button>
      </Transition>
    </div>
  );
};

export default PreviewTransition;
