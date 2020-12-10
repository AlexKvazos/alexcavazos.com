import { AnchorHTMLAttributes } from 'react';

const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => {
  return <a className={className ?? 'text-blue-600'} {...props} />;
};

export default Link;
