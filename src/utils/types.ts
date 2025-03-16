export interface Product {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface ErrorRow {
  error?: string;
  errorField?: string;
}

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}
