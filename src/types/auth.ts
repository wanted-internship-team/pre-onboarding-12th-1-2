// 이메일과 비밀번호 유효성 검증
export interface IVaildValues {
  email: boolean;
  password: boolean;
}

// apis
// 1-1, 1-2 회원가입, 로그인 요청
export interface IAuthInfo {
  email: string;
  password: string;
}

// 1-2 로그인 응답
export interface ISignInResponse {
  access_token: string;
}
