import { Checkbox as AntCheckBox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

type CheckBoxPropsType = {
  title: string;
};

export default function CheckBox({ title }: CheckBoxPropsType) {
  return <AntCheckBox onChange={onChange}>{title}</AntCheckBox>;
}
