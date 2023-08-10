# js-study202307

### ajax 실습시 JSON Server 설치(가상 Rest Api)

```shell script
$ mkdir json-server-exam && cd json-server-exam
$ npm init -y
$ npm install json-server —save-dev
```

- package.json에 추가

```json
"scripts": {
    "start": "json-server --watch db.json —port 5000"
  },
```

`$ npm start`로 서버실행

--—

## eslint 설치

- $ npm init
- $ npm install -D eslint
- $ npm init @eslint/config
  1. To check syntax, find problems, and enforce code style 선택
  2. Javascript modules
  3. None of these
  4. No
  5. Browser
  6. popular javascript guide
  7. google
  8. JSON
  9. yes
  10. npm

## prettier 설치

- $ npm install -D prettier
- $ npm install -D eslint-plugin-prettier
- $ npm install -D eslint-config-prettier

## 자동 포맷 설정

- 파일 -> 설정 -> 기본설정
- default formatter 검색 후 prettier 설정
- format on save 검색 후 체크
