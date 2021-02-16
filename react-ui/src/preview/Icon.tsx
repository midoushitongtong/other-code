import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Icon, { ThemeProps } from '../components/icon/Icon';

const PreviewIcon: React.FC = () => {
  const themes: ThemeProps[] = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ];

  return (
    <div>
      {themes.map((item) => (
        <div key={item}>
          <Icon icon={faPlus} theme={item} size="3x" style={{ marginRight: '15px' }} />
          <Icon icon={faTrash} theme={item} size="3x" style={{ marginRight: '15px' }} />
          <Icon icon={faEdit} theme={item} size="3x" style={{ marginRight: '15px' }} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PreviewIcon;
