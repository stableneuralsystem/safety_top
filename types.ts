export interface NavItem {
  id: string;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}
