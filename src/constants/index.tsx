export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/' as const;

export const DATA_TEST_ID = {
  BUTTON: {
    SIGN_UP: 'signup-button',
    SIGN_IN: 'signin-button',
    TODO_ADD: 'new-todo-add-button',
    TODO_MODIFY: 'modify-button',
    TODO_DELETE: 'delete-button',
    TODO_SUBMIT: 'submit-button',
    TODO_CANCEL: 'cancel-button',
  },
  INPUT: {
    EMAIL: 'email-input',
    PASSWORD: 'password-input',
    TODO: 'new-todo-input',
    MODIFY_TODO: 'modify-input',
  },
} as const; // 읽기 전용

export const URL = {
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  TODO: '/todo',
} as const;

export const REG = {
  email: /@/,
  password: /^.{8,}$/,
} as const;
