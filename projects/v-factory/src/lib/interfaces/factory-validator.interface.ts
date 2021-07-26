export interface FactoryValidator {
  unique?: boolean;
  pattert?: RegExp;
  max?: number;
  min?: number;
  maxlength?: number;
  minlength?: number;
  email?: boolean;
  required?: boolean;
  validator?: any;
  message?: string;
  fileExt?: string[];
  fileSize?: number;
  custom?: boolean;
}
