import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Popover } from 'antd';
import { useState } from 'react';

export type SideMenuItem = Required<MenuProps>['items'][number];

export interface SideMenuProps {
  items: SideMenuItem[];
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelect?: (key: string) => void;
  defaultOpenKeys?: string[];
  theme?: 'light' | 'dark';
  width?: number;
  /** Закрывать меню после выбора пункта */
  closeOnSelect?: boolean;
  /** Управляемое состояние открытия (необязательно) */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SideMenu({
  items,
  selectedKey,
  defaultSelectedKey,
  onSelect,
  defaultOpenKeys,
  theme = 'dark',
  width = 256,
  closeOnSelect = true,
  open: openProp,
  onOpenChange,
}: SideMenuProps) {
  const [innerOpen, setInnerOpen] = useState(false);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : innerOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setInnerOpen(next);
    onOpenChange?.(next);
  };

  const menu = (
    <Menu
      mode="inline"
      theme={theme}
      items={items}
      style={{ width, borderRadius: 8 }}
      defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : undefined}
      selectedKeys={selectedKey ? [selectedKey] : undefined}
      defaultOpenKeys={defaultOpenKeys}
      onSelect={({ key }) => {
        onSelect?.(key);
        if (closeOnSelect) setOpen(false);
      }}
    />
  );

  return (
    <Popover
      content={menu}
      trigger="click"
      placement="bottomLeft"
      arrow={false}
      open={open}
      onOpenChange={setOpen}
      // убираем внутренние отступы, чтобы меню прилегало к краям
      styles={{ container: { padding: 0, background: 'transparent', boxShadow: 'none' } }}
    >
      <Button type="primary" icon={<MenuOutlined />} />
    </Popover>
  );
}
