const questions = [
  {
    'question': '당신의 성별은?',
    'answers': [
        {
            text: '남자',
            score: 80 //현재 남성 평균 수명 = 80세이므로 80을 기준값으로 가지고 시작
        },
        {
            text: '여자',
            score: 86
        }
    ],
    'weight': 1
},
{
    'question': '당신의 나이대를 입력해주세요',
    'answers': [ //위의 기준값 - 현재 나이의 중간값(10~20 : 15)
        {
            text: '10~20',
            score: -15
        },
        {
            text: '20~30',
            score: -25
        },
        {
            text: '30~40',
            score: -35
        },
        
    ],
    'weight': 1
},
{
    question: "담배를 핀다? 안핀다?",
    answers: [
      {
        text: "핀다",
        score: -10,
      },
      {
        text: "안핀다",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "운동의 주기",
    answers: [
      {
        text: "매일",
        score: 5,
      },
      {
        text: "주에 3~6.🐾",
        score: 3,
      },
      {
        text: "주에 1~2 🥱",
        score: 1,
      },
      {
        text: "아예 안함 🥱",
        score: -3,
      },
    ],
    weight: 1,
  },
  {
    question: "음주는 얼마나 하나",
    answers: [
      {
        text: "주 0~1회",
        score: 0,
      },
      {
        text: "주 2~3회",
        score: -2,
      },
      {
        text: "매일 마신다",
        score: -6,
      },
    ],
    weight: 1,
  },
  {
    question: "당신의 평균 수면 시간은?",
    answers: [
      {
        text: "8시간 이상",
        score: 4,
      },
      {
        text: "6시간~8시간",
        score: 0,
      },
      {
        text: "6시간 미만",
        score: -4,
      },
      
    ],
    weight: 1,
  },
  {
    question: "당신이 주로 먹는 식단은?",
    answers: [
      {
        text: "야채, 고기, 과일 등 골고루",
        score: 8,
      },
      {
        text: "고기 위주",
        score: -4,
      },
      {
        text: "야채 위주",
        score: 2,
      },
      {
        text: "라면 등 인스턴트 위주",
        score: -8,
      },
    ],
    weight: 1,
  },
  {
    question: "물을 하루에 얼마나 먹습니까?",
    answers: [
      {
        text: "1L 이상",
        score: 4,
      },
      {
        text: "500ml~1L미만",
        score: 0,
      },
      {
        text: "500ml 미만",
        score: -4,
      },
      
    ],
    weight: 1,
  },
  {
    question: "건강검진을 받는 주기는?",
    answers: [
      {
        text: "분기",
        score: +4,
      },
      {
        text: "반기",
        score: 2,
      },
      {
        text: "년",
        score: 0,
      },
      {
        text: "안받습니다",
        score: -4,
      },
    ],
    weight: 1,
  },
  {
    question: " 지인과 얼마나 자주 어울립니까?",
    answers: [
      {
        text: "매일",
        score: +4,
      },
      {
        text: "주 3~6회",
        score: 2,
      },
      {
        text: "주 1~2회",
        score: 0,
      },
      {
        text: "비정기적으로 어울림",
        score: -4,
      },

    ],
    weight: 1,
  },
  {
    question: "",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 0,
  },
];

export default questions;
