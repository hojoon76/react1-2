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

## 24.04.03 강의
### 컴포넌트에 대하여
* 리액트는 컴포넌트 기반의 구조를 가짐
    * 컴포넌트 구조란 : 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 이런 컴포넌트가 모여 전페 페이지를 구성하는 것

### props를 통해 value 할당하기
```
function App(props) {
return (
    <Layout
    width={2560}
    height={1440}
    header={
        <header title="코드를 보세요." />
    }
    footer={[
        <Footer />
    ]}
    />
);
}
```
* "App" 함수는 "props"라는 매개변수를 받아들이고, "Layout" 컴포넌트를 반환합니다. Layout 컴포넌트에는 너비, 높이, 헤더 및 푸터와 같은 여러 속성이 포함되어 있습니다.
* 직접 중괄호를 넣어 사용할수 있습니다.

### 컴포넌트 만들기
* 컴포넌트의 종류
    * 리액트 초기에는 클래스형 컴포넌트를 주로 사용함
    * 이후 hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용함
    * 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 알고 있어야 합니다.
    * 함수형 컴포넌트
    (Wekcome 컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕" 뒤에 넣어 반환)
    ```js
        function Welcome(props) {
            return <h1>안녕하세요, {props.name}님</h1>;
        }

    ```
    * 클래스형 컴포넌트
    (Wekcome 컴포넌트는 React.Component class로 부터 상속받아 선언)
    ```js
        class Welcome extends React.Component {
            render() {
                return <h1>안녕하세요, {this.props.name}님</h1>;
            }
        }
    ```
* 컴포넌트 이름 짓기
    * 이름은 항상 대문자로 시작합니다.
    * 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다
    * 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.
* 컴포넌트의 랜더링
    * 렘더링의 과정은 다음 코드와 같습니다.
    ```js
    function Welcome(props) {
        return <h1>안녕하세요, {props.name}</h1>;
        }

        const element = <Welcome name="조성규" />;
        ReactDOM.render(
        element,
        document.getElementById('root')
        );
    ```
* 컴포넌트 합성
    * 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
    * 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.
    * 다음 코드는 props값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용합니다
    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }

        function App(props) {
        return (
            <div>
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
            </div>
        );
        }

        ReactDOM.render(
        <App />,
        document.getElementById('root')
        );

    ```
* 컴포넌트 추출
    * 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
    * 큰 컴포넌트에서 일부를 추출해 새로운 컴포넌트를 만드는 것
    * 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 권장
```js
function Comment(props) {
  return (
    <div className="Comment">
      <Avatar user={props.author} />
      <div className="user-info">
        <div className="user-info-name">
          {props.author.name}
        </div>
        <div className="user-info-text">
          {props.text}
        </div>
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

* Comment는 댓글 표시 컴퍼넌트.
* 내부에서 이미지, 이름, 댓글과 작성일이 포함되어 있음.
* 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출력
* 두 번째로 사용자 정보 부분 추출
* 컴포넌트 이름은 UserInfo. React 컴포넌트 이름은 Camel notation을 사용
* UserInfo 안에 Avatar 컴포넌트를 넣어 완성시킴.
```js
function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  );
}
```
* 추출 후 다시 결합한 UserInfo를 Comment 컴포넌트 반영하면 다음과 같은 모습이 됨.
```js
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
### state
* state란?
  * state는 리액트 컴포넌트의 상태

### 생명주기에 대해
* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타냄.
* constructor가 실행되면서 컴포넌트 생성
* 생성 직후 componentDibMount() 함수가 호출.
* 컴포넌트가 소멸하기 전까지 여러 번 랜더링 함.
* 랜더링은 props, setState(), forceUpdate()에 의해 생태가 변경되면 이루어짐.
* 렌더링이 끝나면 componentDinUpdate()함수 호출.
* 컴포넌트가 언마운트되면 compomentWillUnmount()함수 호출.



## 24.03.27 강의
### JS,XML,HTML을 함께 사용할 수 있는 JS 확장 문법
* JSX는 내부적으로 XML/HTML 코드를 JS로 변환
* React가 createElement 함수를 사용하여 자동으로 JS로 변환
* JS로 작업할 경우 직접 createElement함수 사용
* JSX는 가독성을 높여 주는 역할

### JXS 장점
* 코드 간결
* 가독성 향상
* Injection Attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강함

### JSX 사용법
* 모든 JS 문법 지원
* JS 문접에 XML과 HTML을 섞어서 사용
* 만일 html이나 xml에 JS코드를 사용하고 싶으면 { } 괄호를 사용합니다

### 리액트 엘리먼트 VS DOM 엘리먼트
* 리액트 엘리먼트는 Virtual DOM의 형태를 취함
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움
* 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움
```
                            |            DOM             |           Virtual DOM
_______________________________________________________________________________________
       업데이트 속도         |           느리다            |             빠르다
---------------------------------------------------------------------------------------
                            |                             |변화부분을 가상 DOM으로 만든 
    element 업데이트 방식    |     DOM 전체를 업데이트      |DOM과 비교하여 다른 부분만  
                            |                             |업데이트
---------------------------------------------------------------------------------------
           메모리            |         낭비 심함           |           효율적
```
**(표 제작 정지호)**

### 엘리먼트 생김새
* 리액트 엘리먼트는 JS 객체의 형태로 존재
* 컴포넌트(Button 등), 속성 (color 등) 및 내부의 모든 children을 포함하는 일반 JS 객체
* 마음대로 변경할 수 없는 불변성을 갖음
* 내부적으로 JS 객체를 만드는 역할 함수 => *createElement()*
* 내용이 바뀐다면 ??
    * 컴포넌트를 통해 새로운 엘리먼트 생성
    * 그 다음 이전 엘리먼트와 교체를 하여 내용을 변경
    * 교체하는 작업을 위해선 Virtual DOM을 사용
    
### 엘리먼트 렌더링 하기
이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node라고 함
```
<div id = "root"></div>
```
엘리먼틀르 렌더링하기 위해선 다음과 같은 코드 필요
```
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(lelment, document.getElementById('root'));
```
render() 함수 사용 <br>
첫 번째 파라메터 출력할 리액트 엘리먼트, 두 번째 파라메터는 출력할 타겟을 나타냄. <br>
리액트 렌더링 = Virtual DOM에서 실제 DOM으로 이동하는 과정<br>
**렌더링된 엘리먼트 업데이트**
**tick()** 함수 정의<br>
    : 현재 시간을 포함한 element를 생성하여 root div에  렌더링.

### 컴포넌트
* 리액트는 컴포넌트 기반의 구조
    * 컴포넌트 구조 : 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여 전체 페이지 구성
    * 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있음
    * 개발 시간과 유지 보수 비용도 줄일 수 있음.
    * 컴포넌트는 JS함수와 입력과 출력이 있다는 면에서 유사함.
    * 다만 입력은 **Props**가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됨.
    * 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서 객체 지향의 개념과 비슷.

### Props (property: 속성, 특성)
* 어떤 속성, props 를 넣느냐에 따라 속성이 다른 엘리먼트가 출력
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체


### 특징
* 읽기 전용. 변경 불가능
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨.

### Pure 함수 VS Impure 함수
* Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수 


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
