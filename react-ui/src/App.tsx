import React from 'react';
import Button, { ButtonSise, ButtonType } from './components/button/Button';

const App: React.FC = () => {
  return (
    <div>
      <Button
        onClick={(e) => {
          console.log(e);
        }}>
        default
      </Button>
      <hr />

      <Button disabled>disabled</Button>
      <hr />

      <Button type={ButtonType.Primary} size={ButtonSise.Large}>
        large primary
      </Button>
      <hr />

      <Button type={ButtonType.Danger} size={ButtonSise.Small}>
        small danger
      </Button>
      <hr />

      <Button type={ButtonType.Link} href="https://baidu.com" target="_blank">
        baidu link
      </Button>
      <hr />

      <Button disabled type={ButtonType.Link} href="https://baidu.com">
        disabled link
      </Button>
    </div>
  );
};

export default App;
