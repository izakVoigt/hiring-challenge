export interface IButton {
  color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick: (e: any) => any;
  title: string;
}
