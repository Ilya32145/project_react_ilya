import type { GetProps } from 'antd';
import { ConfigProvider, Input as AntInput, Space } from 'antd';

type SearchProps = GetProps<typeof AntInput.Search>;

const { Search } = AntInput;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

type InputProps = {
  title?: string;
  textButton?: string;
};

export default function Input(props: InputProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'black',
        },
      }}
    >
      <Space vertical>
        <Search
          placeholder={props?.title}
          allowClear
          enterButton={props.textButton}
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </ConfigProvider>
  );
}
