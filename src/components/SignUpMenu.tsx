import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

export type User = {
  username?: string;
  password?: string;
};

export type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

type Props = {
  onLogin: (u: User, remember: boolean) => void;
};

export function SignUpMenu({ onLogin }: Props) {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    onLogin(
      {
        username: values.username!,
        password: values.password!,
      },
      values.remember ?? false,
    );
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
