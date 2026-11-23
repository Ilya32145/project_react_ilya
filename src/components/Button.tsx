import { Button as AntButton, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
import type { Button } from '../shared/types/Button';

export function Button(props: Button) {
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
