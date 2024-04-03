<!-- 주석
# h1
## h2
###### h6

# 리스트
    1.
    2.
    3.
    10.
    4.


* 첫번째
    *첫번째의 자식
        *손자까지 가능
* 두번째


*이텔릭*  
**볼드**  
***이텔릭 볼드***
~~취소선~~

개행은 스페이스 2번+엔터  
일반 문장을
쓸때도 마찬가지


```html 블록설정 코드 입력 할 때 사용
<p>My cat is very grumpy</p>
```

[네이버링크](https://www.naver.com/)  
[페이지 링크](#리스트)

![이미지예제](grumpy-cat-small.png)
--- 

-->

# 정준호 201930127 

## 24.03.27 강의
* JXS의 장점
    * 코드가 간결해짐
    * 가독성 향상
* JXS의 사용법
    * 

## 24.03.20 강의
### 리액트란
* [리엑트링크(현)](https://react.dev/) // [리엑트링크(구, 레거시)](https://ko.legacy.reactjs.org/)
* JavaScript 라이브러리(통상하는 그것이 아님)
* 주로 웹 애플리케이션의 UI를 개발하는 데에 사용됨.  
* UI를 작은 독립적인 조각으로 분리하여 개발하고 관리하는 데에 유용합니다.
* 이를 통해 코드의 재사용성과 유지보수성을 높일 수 있습니다.
* 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 의해 만들어짐  
    * 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

### 리액트 장점
* 빠른 업데이트와 렌더링 속도  
    * virtual DOM(가상 돔)으로 가능함
    * DOM이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스. (W3C표준)
    * virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기에 고안된 방법
    * DOM: 동기식, Virtual DOM: 비동기식
* 컴포넌트 기반 구조
    * 리액트의 모든 페이지는 컴포넌트로 구성
        * 하나의 컴포넌트는 다른 여러 개의 컴포넌트 조합으로 구성
        * 리액트로 개발 시, 레고블록을 조립하는 것처럼 컴포넌트를 조합해 개발하게 됨
* 재사용성
    * 반복적인 작업을 줄여주기 때문에 생산성을 높여줌
    * 유지보수 용이
    * 재사용이 가능하려면 모듈 의존성이 없어야함
* 든든한 지원군
    * 메타(페이스북)에서 프로젝트를 관리하고 발전하고 있음
    * 활발한 지식 공유와 커뮤니티

### 리액트 단점
* 자바스크립트공부를 선행하는 것을 권장함
* 높은 상태 관리 복잡도
    * state, compomemt life cycle 등의 개념이해가 권장됨
* 발전속도가 매우 빠르다.

### 리액트 설치하기
* 노드깔기
    * npm cache clean -force
    * npm install -g node@latest
    * node -v // 확인
* 터미널 열어
    * 설치가 잘 안되는 편 무한시도!!, 다른 파일 만들어서 시도해보면 되는 경우도 있음
    * npm install -g npm@latest // npm 최신버전 다운
    * npm -v // npm 버전확인
    * npm uninstall -g create-react-app // 리액트 지우기(처음에는 안해도 됨)
    * npm install -g create-react-app // 리액트 설치
    * npx create-react-app *파일이름* // npx 이용해서 리액트 설치 시도하는 법
* 리액트 열기
    * npm start



## 24.03.13 강의
자바에서 클레스를 쓰는 케이스 cassAacc = 카멜(낙타)케이스  
디비 컴포넌트를 만들때도 카멜(낙타)케이스를 권장함

리드미는 최신 버전이 항상 위로 올라갈 수 있게 하는것이 좋다

로컬 >> Staged >> git

commit을 할 때 스테이지에 변경(업데이트) 파일을 올리고 메시지를 적어서 커밋함
* 커밋 메시지는 20글자를 넘으면 오류가 남
* 엔터를 넣을 수 있음, 제목을 넣고 엔터 두번 설명

가장많이 사용하는 친구는 무료인 소스트리, 유료인 깃크라켄이 있음

깃허브에 있는 것이 오리진임 개인 컴퓨터에 있는 것이 최신 업데이트이면 안됨
크로스 브라우징이 매우 중요하다
노드는 LST버전을 다운로드 해야함 노드를 다운로드하면  
node -v, npx -v, npm -v로 버전 확인

노드버전이 여러가지인 회사에서 작업을 하는 경우 노드메니저 프로그렘을 통해 삭제하고 다시까는 시간낭비를 막을 수있음











## 03.06 강의

# h1
## h2
###### h6

# 리스트
    1.
    2.
    3.
    10.
    4.


* 첫번째
    *첫번째의 자식
        *손자까지 가능
* 두번째


*이텔릭*  
**볼드**  
***이텔릭 볼드***
~~취소선~~

개행은 스페이스 2번+엔터  
일반 문장을
쓸때도 마찬가지


```html 블록설정 코드 입력 할 때 사용
<p>My cat is very grumpy</p>
```

[네이버링크](https://www.naver.com/)  
[페이지 링크](#리스트)

![이미지예제](grumpy-cat-small.png)
--- 

# react1-2
React1 강의
