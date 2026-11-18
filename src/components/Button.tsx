import { Button as AntButton, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
import type { ButtonProps } from 'antd';

type Props = {
  title?: string;
  func?: () => void;
  color?: ButtonProps['color'];
};

export function Button(props: Props) {
  const { xxl } = useResponsive();
  return (
    <ConfigProvider componentSize={xxl ? 'medium' : 'small'}>
      <Flex gap="small" wrap>
        <AntButton color={props.color} variant="solid" onClick={props.func}>
          {props?.title}
        </AntButton>
      </Flex>
    </ConfigProvider>
  );
}
