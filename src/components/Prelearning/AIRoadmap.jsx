import React from 'react';
import Roadmap from '../Roadmap';

function AIRoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'생성 AI 빅3 분석'}
        description={'본격적인 학습 전, 개발 환경과 학습 환경을 준비해주세요.'}
        day={4}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>ChatGPT 사용해보고 느낀 점 정리하기</li>
          <li>Gemini 사용해보고 느낀 점 정리하기</li>
          <li>Claude 사용해보고 느낀 점 정리하기</li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'학습계획 짜기'}
        description={'앞으로 교육 과정 동안의 학습 계획과 목표를 세워보세요.'}
        day={3}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>인프런 접속하기</li>
          <li>'구독 지원 강의' 중 듣고 싶은 강의 3개 찾아서 수강 신청하기</li>
          <li>강의 기반 학습 계획 짜기</li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'학습 환경 세팅'}
        description={'과정 시작 전, 미리 학습하면 좋을 강의를 추천합니다.'}
        day={2}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>Notion 가입하기</li>
          <li>GitHub 가입하기</li>
          <li>선택한 인프런 강의 중 하나를 골라 1강 듣기(선택)</li>
        </ol>
      </Roadmap>
    </div>
  );
}

export default AIRoadmap;
