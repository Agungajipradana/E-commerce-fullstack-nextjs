export interface DataProps {
  status: boolean;
  statusCode: number;
  data: any;
}

export interface ProductsProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface RegisterProps {
  status: boolean;
  message: string;
}

export interface ArrowProps {
  onClick: () => void;
}
