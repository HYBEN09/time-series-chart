# ⭐️ 원티드 프리온보딩 프론트엔드 인턴십 - 4주차 과제

## 📌 과제 소개

- **목표** : 주어진 데이터를 기반으로 시계열 차트 만들기 

- **개발 기간** : 2023.09.10 ~ 2023.09.13

## 🔗 배포 
- 배포 링크: https://time-series-chart-hazel.vercel.app/

## 🛠️ 사용한 기술 스택
#### Development

`Vite` `React` `HTML5` `styled-component` `Typescript` `React Router` `Axios` `Recharts`  

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다. Node.js v19.0.0

1. 다음 명령어를 사용하여 프로젝트를 clone 하거나,<br/>
   우측 상단의 Code 버튼 -> Download ZIP 를 눌러 프로젝트를 다운로드 하실 수 있습니다.
   ```
   git clone https://github.com/HYBEN09/time-series-chart.git
   ```
2. 프로젝트 실행에 필요한 패키지를 설치합니다.
   ```
   npm install
   ```

3. 패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행합니다.
    ```
    npm start
    ```

## 📃 과제 요구사항
1. 시계열 차트 만들기
    - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)
2. 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
3. 필터링 기능 구현
    - 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
    - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요
  




## ✨ Assignments별 구현 방식
### **📍[Assignment 1] 시계열 차트 만들기**
| 시계열 차트 만들기       |
| -------------------------------- |
| <img width="700" alt="image" src="https://github.com/HYBEN09/time-series-chart/assets/104710243/0760c5fe-d692-4ae6-b9ed-e230bcd5e976">| 

- 시계열 차트를 만들기 위해 `recharts` 라이브러리를 사용했습니다.
- `recharts`의 ComposedChart 컴포넌트를 사용하여 복합 그래프를 만들었습니다.
-  Area 그래프는 value_area를 기준으로 생성되고, Bar 그래프는 value_bar를 기준으로 생성됩니다. 
-  Cell 컴포넌트를 사용하여 Bar 그래프의 셀을 클릭했을 때 하이라이트 효과를 주었습니다.
-  `resetFilters 함수`를 호출하면 필터가 해제되고 clickedId 상태도 null로 설정되어 하이라이트 효과가 지워집니다.



### **📍[Assignment 2] 호버 기능 구현**
| 호버 기능 구현     |
| -------------------------------- |
| <img width="700" alt="image" src="https://github.com/HYBEN09/time-series-chart/assets/104710243/2d2c001f-5d3d-4f92-8c5d-6cf199194685">| 


- 특정 데이터 구역에 마우스 호버시 `id`, `value_area`, `value_bar` 데이터를 툴팁 형태로 제공합니다,
- 기본 제공되는 툴팁을 커스텀하여 `CustomTooltip 컴포넌트`에서 호버 기능을 구현

### **📍[Assignment 3] 필터링 기능 구현**
| 필터링 기능 구현       |
| -------------------------------- |
| <img width="700" alt="image" src="https://github.com/HYBEN09/time-series-chart/assets/104710243/e803c693-8a37-49f4-9e05-80de35567242">| 



## 🌲 프로젝트 구조

```
.
├── README.md
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── @type
│   │   └── chartData.d.ts
│   ├── App.tsx
│   ├── GlobalStyled.ts
│   ├── api
│   │   ├── apiClient.tsx
│   │   └── fetchData.tsx
│   ├── components
│   │   ├── Chart
│   │   │   ├── Chart.tsx
│   │   │   └── CustomTooltip.tsx
│   │   └── UI
│   │       ├── Buttons.tsx
│   │       └── Header.tsx
│   ├── constants
│   │   └── url.ts
│   ├── hooks
│   │   ├── useChartDataFetcher.ts
│   │   └── useChartState.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── router
│   │   └── routes.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```












