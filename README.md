# 원티드 프리온보딩 12th 2팀 1주차 과제

## 🤝 과제 소개 및 목적
팀원 모두가 하나의 주제의 과제를 수행한 뒤, 가장 효율적이라고 판단되는 코드(또는 기능)을 Best Practice로 선정하여 최종 결과물에 반영합니다.
Best Practice를 선정하기 위해 작성한 코드를 동료에게 이해하기 쉽게 설명하고, 타인의 코드를 이해할 수 있어야 합니다.

💡 좋은 코드를 만들기 위해 고민하고, 그 과정에서 팀으로 일하는 법에 익숙해집니다.

🗓️ 진행 기간: 23년 8월 22일 ~ 23년 8월 25일

※ 본 과제는 [원티드 프리온보딩 선발 과제](https://github.com/walking-sunset/selection-task)를 바탕으로 진행되었습니다. 

## 👨‍👩‍👧‍👦 팀 정보
[Team Notion](https://www.notion.so/Wanted-Pre-onboarding-FE-2-71038c8adfd74fffb28a3cf2d182e025?pvs=21)
<table>
<tr>
    <td align="center">
        <a href="https://github.com/wanted-internship-team/pre-onboarding-12th-1-2/">
        <img src="https://avatars.githubusercontent.com/u/142898636?s=200&v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Github</b></sub>
        <br />
        <sub><b>Team2</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JJineu">
        <img src="https://media.discordapp.net/attachments/1144505552005775440/1144506291209912371/KakaoTalk_20220901_060732626.jpg?width=814&height=814" width="100px;" alt=""/>
        <br />
        <sub><b>@JJineu</b></sub>
        <br />
        <sub><b>김현진</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/devsomda">
        <img src="https://avatars.githubusercontent.com/u/109324517?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@devsomda</b></sub>
        <br />
        <sub><b>박다솜(팀장)</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center">
        <a href="https://github.com/mihyunLee">
        <img src="https://avatars.githubusercontent.com/u/51310674?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@mihyunLee</b></sub>
        <br />
        <sub><b>이미현</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/devseop">
        <img src="https://avatars.githubusercontent.com/u/102455161?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@devseop</b></sub>
        <br />
        <sub><b>이윤섭</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sjuhan123">
        <img src="https://avatars.githubusercontent.com/u/81420856?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@sjuhan123</b></sub>
        <br />
        <sub><b>한승주</b></sub>
        </a>
    </td>
</tr>
</table>


## 🧑🏻‍💻 프로젝트 정보
### 실행 방법

- 배포링크: [TODO App (wanted-preonboarding-2team-todo-app.netlify.app)](https://wanted-preonboarding-2team-todo-app.netlify.app/signin)
- 링크가 실행되지 않는 경우 아래 명령어를 순차적으로 입력하여 실행해주세요.

```jsx
git clone https://github.com/wanted-internship-team/pre-onboarding-12th-1-2
npm install
npm start
```

### 프로젝트 구조

```jsx
src
 ┣ 📂 api
 ┃ ┣ axiosInstance.tsx
 ┃ ┗ requests.tsx
 ┣ 📂 components
 ┃ ┣ auth
 ┃ ┃ ┣ Form.tsx
 ┃ ┃ ┗ Input.tsx
 ┃ ┣ common
 ┃ ┗ todo
 ┃ ┃ ┣ Form.tsx
 ┃ ┃ ┣ Input.tsx
 ┃ ┃ ┣ TodoItem.tsx
 ┃ ┃ ┗ TodoList.tsx
 ┣ 📂 constants
 ┃ ┗ index.tsx
 ┣ 📂 context
 ┃ ┣ AuthContext.tsx
 ┃ ┗ TodoContext.tsx
 ┣ 📂 hooks
 ┃ ┗ useForm.tsx
 ┣ 📂 pages
 ┃ ┣ auth
 ┃ ┃ ┣ SignIn.tsx
 ┃ ┃ ┗ SignUp.tsx
 ┃ ┣ authenticated
 ┃ ┃ ┣ PrivateRoute.tsx
 ┃ ┃ ┗ PublicRoute.tsx
 ┃ ┗ todo
 ┃   ┗ Todo.tsx
 ┣ 📂 routes
 ┃ ┗ Router.tsx
 ┣ 📂 types
 ┃ ┣ auth.ts
 ┃ ┗ todo.ts
 ┣ App.tsx
 ┣ index.tsx
 ┗ style.css
```

### 폴더 구조 선정 이유

```markdown
기능을 auth와 todo로 크게 두 가지로 나누고 type과 api, component를 필요에 따라 각 기능별로 나누었습니다.
코드를 재사용성과 확장 가능성을 고려하여 최소한의 기능단위로 컴포넌트를 분리했습니다.
pages와 components 폴더를 주축으로 하고 api, hook 등 추가적으로 필요한 폴더를 추가하는 구조가
코드 리팩토링에도 용이하고, 후에 확장성에도 제약이 적을 것이라 판단했습니다.
```

### 사용 라이브러리

```jsx
"dependencies": {
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
  },

"devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@typescript-eslint/parser": "^5.62.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.2",
    "tailwindcss": "^3.3.3"
  }
```


## 💬 프로젝트 진행 과정
### Best Practice 선정 과정

```
파일들이 명확하게 분리되었는지, 코드는 재사용성을 고려했는지, 다른 사람들이 쉽게 이해할 수 있는지 
등을 기준으로 하여 Best Practice를 선정했습니다.
```

### 협업도구

```
팀 커뮤니케이션 툴로 팀 노션 페이지와 디스코드를 사용했습니다.
실시간으로 만나 서로의 의견을 정리, 간단한 아카이빙 하기 위해 디스코드를 이용하였으며,
해당 내용들을 다시 팀 노션 페이지에 상세히 기록하는 방식으로 커뮤니케이션을 진행했습니다.
또한, 팀 프로젝트 시 기본 환경 셋팅/프로젝트 진행시 필요한 타입 설정 등
브레인스토밍, 협업 진행을 위해 FigJam을 적극 활용하였습니다.

- Discord:
  실시간으로 만나 코드를 리뷰하고 Best-Practice를 선정하고 팀 프로젝트 진행을 위한 컨벤션, 브랜치 전략, 네이밍 등을 논의하기 위한 용도로 사용했습니다.

- FigJam:
  팀 프로젝트 시 기본 환경 셋팅/프로젝트 진행시 필요한 타입 설정 등의 브레인스토밍, 협업 진행을 위한 용도로 사용했습니다.

- Notion:
  디스코드와 FigJam에서 공유된 프로젝트 진행 과정 및 팀 운영 일정을 기록하고 공유하는 용도로 사용했습니다.

- Live Share(VS Code):
  페어 프로그래밍 및 디스코드의 화면공유와 같이 사용하여 실시간으로 작업을 진행하는 용도로 사용했습니다.
```

- Discord

![https://media.discordapp.net/attachments/1143461023488159816/1143901657713877132/image.png?width=1686&height=1462](https://media.discordapp.net/attachments/1143461023488159816/1143901657713877132/image.png?width=1686&height=1462)

- FigJam

![https://media.discordapp.net/attachments/1143461023488159816/1144091406760149042/image.png?width=1386&height=1462](https://media.discordapp.net/attachments/1143461023488159816/1144091406760149042/image.png?width=1386&height=1462)

- Notion

![Notion이미지](https://file.notion.so/f/s/daac7c1a-ed84-4c65-b5eb-c5fd8337aff0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-08-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.47.00.png?id=ef5d80e7-2dce-4613-9bb9-c3e9f4a9ad4e&table=block&spaceId=bbc3fe92-b2d5-40ed-9b1e-7d5b1ae55858&expirationTimestamp=1693065600000&signature=yw3MR1S5ZypyhDz7GI3l2ljxOqAHICcyq5mo3Jh0pcM&downloadName=%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-08-25+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+9.47.00.png)

- Live Share(VS Code)

![https://media.discordapp.net/attachments/1143461023488159816/1144193438712082514/image.png?width=2700&height=1354](https://media.discordapp.net/attachments/1143461023488159816/1144193438712082514/image.png?width=2700&height=1354)

## 📝 구현 내용
## 1. 로그인/회원가입
### ✅ Assignment 1

회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능을 구현해 주세요

- 이메일 조건: `@` 포함
- 비밀번호 조건: 8자 이상
- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해 주세요
    
    ![validation.gif](https://file.notion.so/f/s/79b3c3d3-6656-4d36-9d58-1bd765ede123/validation.gif?id=0f7aa616-bfe7-4088-a7a4-0be6cdff974b&table=block&spaceId=bbc3fe92-b2d5-40ed-9b1e-7d5b1ae55858&expirationTimestamp=1693065600000&signature=2ZecVebUffj8prhCY5d2ttuXFpLE2-wJhoa8ml0i-6M&downloadName=validation.gif)

### ⭐️ **Best Practice**

```
회원가입 / 로그인에서 각각 input에 값을 입력하고 같은 조건으로 유효성 검사를 하고 있어, 
해당 로직을 하나의 Custom Hook(useForm)으로 분리했습니다.
검증 조건은 `includes`등의 방식 대신 확장 가능성이 높은 정규 표현식을 Best Practice로 선정하였습니다.
```

### ✅ Assignment 2

회원가입/로그인 버튼을 클릭 시, 해당 페이지의 과정을 진행하고 완료되었을 시 알맞은 경로로 이동해 주세요

- 회원가입 완료 시 `/signin`로 이동
- 로그인 완료 시 `/todo`로 이동
    - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - 응답받은 JWT는 로컬 스토리지에 저장해 주세요
        
        ![redirect.gif](https://file.notion.so/f/s/7af54be6-5cd9-4467-9b2a-278cbef032fa/redirect.gif?id=afd79f3f-7e98-4686-aa91-307b4ca4a36c&table=block&spaceId=bbc3fe92-b2d5-40ed-9b1e-7d5b1ae55858&expirationTimestamp=1693065600000&signature=bWVZdD4Mrvcz56JlH4x3DsZ5IXThvma9-UtofDfzkSE&downloadName=redirect.gif)
      
### ✅ Assignment 3

- 로그인 여부에 따른 리다이렉트 처리를 구현해 주세요
    - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
    - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요
        
        ![tokenRedirect.gif](https://file.notion.so/f/s/dd95e340-e55b-4647-9c54-3f694a918a18/tokenRedirect.gif?id=3b293d60-9331-4fa2-902a-be8406041d7f&table=block&spaceId=bbc3fe92-b2d5-40ed-9b1e-7d5b1ae55858&expirationTimestamp=1693065600000&signature=EX4ZlAPsQI6q6LxT4Av3htGE3s0DteG19zWR7Id_Hwk&downloadName=tokenRedirect.gif)
     
### ⭐️ **Best Practice**

```
로그인 시 저장된 JWT를 이용해 리다이렉트 처리를 해야 했는데, 이때 JWT를 전역적으로 사용할 필요가 있었습니다.
전역적으로 사용하지 않으면 서로 다른 파일에서 같은 변수명이 난립하고 이는 관리하는 입장에서 복잡해집니다. 
따라서 Context API를 이용하여 JWT를 전역 상태로 관리하고, 저장 유무에 따라 라우터를 Private/Public로
나누어 접근 경로에 따라 알맞은 경로로 리다이렉트 처리할 수 있는 방식을 Best Practice로 선정했습니다.
```

## 2. Todo List

### ✅ Assignment 4

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다

### ⭐️ **Best Practice**

```
비동기 데이터 요청을 효율적으로 처리하고 Context API와 useReducer를 이용한 전역 상태 관리를 통해
데이터 공유와 상태 변화에 따른 리렌더링 관리를 용이하게 진행할 수 있습니다.
또한, 재사용성을 위해 데이터 요청을 위한 함수를 분리하고 코드를 모듈화하여 유지 보수가 용이합니다.
```

### ✅ Assignment 5

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다

### ✅ Assignment 6

- TODO의 수정 기능을 구현해 주세요.
    - TODO 우측의 [수정] 버튼을 누르면 수정 모드가 활성화 되도록 해주세요
    - 수정 모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
    - 수정 모드에서는 TODO의 우측에 [제출] 버튼과 [취소] 버튼이 표시되게 해주세요
    - [제출] 버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트될 수 있도록 해주세요
    - [취소] 버튼을 누르면 수정한 내용을 초기화 하고, 수정 모드를 비활성화 해주세요

### ✅ Assignment 7

- TODO의 완료 여부(체크박스 이용)/삭제 기능을 구현해 주세요.
    - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
    - 투두 리스트의 TODO 우측의 [삭제] 버튼을 누르면 해당 아이템이 삭제되도록 해주세요
        
        ![todoCRUD.gif](https://file.notion.so/f/s/9c35e789-6f26-46bc-a5e8-ce02f4db4839/todoCRUD.gif?id=785b0647-4ebd-4bb9-8775-37e263216c42&table=block&spaceId=bbc3fe92-b2d5-40ed-9b1e-7d5b1ae55858&expirationTimestamp=1693065600000&signature=NFThmqP_sb_gxAyPehc8Sp79YBbOPp2QzpjNfgyk3zA&downloadName=todoCRUD.gif)
   
### ⭐️ **Best Practice**

```
Todo의 CRUD 구현은 모두 비동기 방식의 이벤트 처리 및 데이터 전송, Context API와 
useReducer 사용으로 예측 가능한 동작과 버그의 최소화를 도모했습니다.
또한, `try-catch`문을 이용하여 데이터 전송이나 상태 업데이트 과정에서 발생할 수 있는 오류를 방지했는데,
이를 통해 사용자 친화적인 오류 처리를 구현할 수 있습니다.
위 방식을 활용하여 상태 관리 및 업데이트의 일관성을 유지할 수 있기 때문에 Best Practice로 선정했습니다.
```

## 3. API

### ⭐️ **Best Practice**

```
axios 인스턴스를 생성하여 api를 따로 분리시킨 코드를 Best Practice로 선정했습니다. 
api instance를 사용하여 코드의 재사용성을 높이고 api 로직을 따로 관리하는 것이 
좋을 뿐만 아니라, 불필요한 코드의 중복이 없다는 것이 선정 이유입니다.

추가로 api를 todo와 auth로 따로 분리하는 것에 대한 논의가 있었는데, api의 양이 많지 않았기 때문에
간결하고 깔끔한 파일 구성을 위하여 하나의 파일(requests.tsx)에서 관리하기로 하였습니다.
```

## 4. Lint, Prettier, Husky, Lint-Staged

### ⭐️ **Best Practice**

```
코드 작성 방법이 팀원들마다 상이하여 코드를 읽고 이해하는 시간이 길어져 협업 간에 효율성이 떨어진다고 판단하였습니다.
따라서 Lint와 Prettier를 이용하여 같은 스타일로 작성될 수 있도록 설정했습니다. 
또한, Husky와 Lint-Staged를 이용, stage 된 내용을 미리 검사하여 commit 전에 코드를 수정할 수 있도록 했습니다.
```

## 🫱🏻‍🫲🏿 Commit Convention & Branch Strategy
### Commit Convention

e.g.  FEAT: 로그인 유효성 검증 기능 구현

| 태그 | 설명 (한국어로만 작성하기) |
| --- | --- |
| FEAT: | 새로운 기능 추가 (변수명 변경 포함) |
| FIX: | 버그 해결 |
| DESIGN: | CSS 등 사용자 UI 디자인 변경 |
| STYLE: | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| REFACTOR: | 프로덕션 코드 리팩토링 |
| COMMENT: | 필요한 주석 추가 및 변경 |
| DOCS: | 문서를 수정한 경우 |
| CHORE: | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME: | 파일 혹은 폴더명을 수정하거나 옮기는 작업 |
| REMOVE: | 파일을 삭제하는 작업만 수행한 경우 |
| INIT: | 초기 커밋을 진행한 경우 |

### Branch Strategy

브랜치는 아래의 브랜치만 사용하도록 협의했습니다.

| 브랜치 | 설명 |
| --- | --- |
| main | 배포 및 최종본, 출시 버전의 브랜치 |
| develop | 개발용 버전의 기준이 되는 브랜치 |
| feature/~ | 세부 기능 개발을 위한 브랜치 |
| refactor | 리팩토링을 위한 브랜치 |
