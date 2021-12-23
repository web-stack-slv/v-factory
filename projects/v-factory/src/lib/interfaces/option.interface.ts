export interface Option {
    value: number | string;
    label: string;
    data?: {
      hint?: string,
      color?: string,
      icon?: string,
      info?: string,
      disabled?: boolean,
      selected?: boolean,
      item?: any
    };
}
