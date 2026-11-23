import { Card as AntCard } from 'antd';
import Icon from './Icon';
import { DiscordOutlined, PinterestOutlined, TelegramFilled } from '@ant-design/icons';
import type { Card } from '../shared/types/Card';

const { Meta } = AntCard;

export default function Card({ image, title, subtitle }: Card) {
  return (
    <AntCard
      hoverable
      variant="borderless"
      style={{ width: '60%', height: '400px', margin: '0 auto' }}
      cover={
        <img
          draggable={false}
          alt="example"
          src={image}
          style={{ height: '240px', width: '100%', display: 'block', maxHeight: '450px' }}
        />
      }
    >
      <div style={{ textAlign: 'center' }}>
        <Meta title={title} description={subtitle} style={{ marginBottom: '5%' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5%' }}>
          <Icon component={DiscordOutlined} />
          <Icon component={TelegramFilled} />
          <Icon component={PinterestOutlined} />
        </div>
      </div>
    </AntCard>
  );
}
