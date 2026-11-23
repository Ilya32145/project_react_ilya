import type { ButtonProps } from 'antd';

export type Button = {
  title?: string;
  func?: () => void;
  color?: ButtonProps['color'];
};
