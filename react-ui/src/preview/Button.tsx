import React from 'react';
import Button from '../components/button/Button';

const PreviewButton: React.FC = () => {
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

      <Button type="primary" size="lg">
        large primary
      </Button>
      <hr />

      <Button type="danger" size="sm">
        small danger
      </Button>
      <hr />

      <Button type="link" href="https://baidu.com" target="_blank">
        baidu link
      </Button>
      <hr />

      <Button disabled type="link" href="https://baidu.com">
        disabled link
      </Button>
    </div>
  );
};

export default PreviewButton;
