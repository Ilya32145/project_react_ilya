import type { ComponentType, CSSProperties } from 'react';

type IconProps = {
  src?: string;
  component?: ComponentType<{ style?: CSSProperties; className?: string }>;
  size?: number;
  alt?: string;
  className?: string;
};

export default function Icon({
  src,
  component: Component,
  size = 24,
  alt = '',
  className,
}: IconProps) {
  if (Component) {
    return <Component style={{ fontSize: size }} className={className} />;
  }

  if (src) {
    return <img src={src} width={size} height={size} alt={alt} className={className} />;
  }

  return null;
}
