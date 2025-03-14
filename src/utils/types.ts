export interface Product {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}

// export interface IconProps2 extends React.SVGAttributes<SVGElement> {
//   children?: React.ReactNode;
//   size?: string | number;
//   color?: string;
//   title?: string;
//   onClick?: React.ReactNode;
// }
