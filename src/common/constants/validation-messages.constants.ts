export const ValidationMessages = {
  NOT_EMPTY: (field: string) => `The ${field} field must not be empty`,
  IS_STRING: (field: string) => `The ${field} field must be a string`,
  IS_EMAIL: (field: string) => `The ${field} field must be a valid email address`,
  MIN_LENGTH: (field: string, length: number) => `The ${field} field must be at least ${length} characters long`,
  IS_INT: (field: string) => `The ${field} field must be an integer`,
  IS_POSITIVE: (field: string) => `The ${field} field must be a positive number`,
  IS_URL: (field: string) => `The ${field} field must be a valid URL`
};