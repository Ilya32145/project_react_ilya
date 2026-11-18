import { Card as AntCard } from 'antd';

const { Meta } = AntCard;

type cardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  created_at?: string;
};

export default function Card({ image, title, subtitle }: cardProps) {
  return (
    <AntCard
      hoverable
      variant="borderless"
      style={{ width: '90%', height: '400px' }}
      cover={
        <img
          draggable={false}
          alt="example"
          src={image}
          style={{ height: '240px', width: '100%', display: 'block', maxHeight: '450px' }}
        />
      }
    >
      <Meta title={title} description={subtitle} />
    </AntCard>
  );
}
