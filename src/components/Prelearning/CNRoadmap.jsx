import React from 'react';
import Roadmap from '../Roadmap';

function CNRoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'학습 환경 세팅'}
        description={'본격적인 학습 전, 개발 환경과 학습 환경을 준비해주세요.'}
        day={4}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>Github 계정 생성</li>
          <li>Notion, Zoom 가입</li>
          <li>
            학습 기록 도구 준비 (Notion / Github / 블로그(Tistory, Velog 등))
          </li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'학습 계획 & 목표 설정'}
        description={'앞으로 교육 과정 동안의 학습 계획과 목표를 세워보세요.'}
        day={3}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>
            학습 목표 세우기
            <ol className="list-decimal ml-5 leading-8">
              <li>클라우드 과정에서 꼭 얻어가고 싶은 것 3가지</li>
              <li>협업에서 연습하고 싶은 3가지</li>
              <li>수료 후 달성하고 싶은 3가지</li>
            </ol>
          </li>
          <li>
            학습 계획 세우기
            <ol className="list-decimal ml-5 leading-8">
              <li>데일리 학습 루틴 만들기</li>
              <li>포트폴리오 기록 습관 계획 세우기</li>
            </ol>
          </li>
          <li>목표 & 계획을 기록하기</li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'OT 자기소개 시간 준비'}
        description={'과정 시작 전, 미리 학습하면 좋을 강의를 추천합니다.'}
        day={2}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>
            OT 자기소개 시간에 다른 훈련생분들에게 어떻게 자신을 소개할지
            준비하기
          </li>
        </ol>
      </Roadmap>
    </div>
  );
}

export default CNRoadmap;
