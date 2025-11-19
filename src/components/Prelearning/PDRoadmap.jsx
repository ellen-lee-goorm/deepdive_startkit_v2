import React from 'react';
import Roadmap from '../Roadmap';

function PDRoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'디자인 환경 세팅'}
        description={'본격적인 학습 전, 개발 환경과 학습 환경을 준비해주세요.'}
        day={4}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>Figma 계정 생성 및 설치 (데스크탑 앱, 모바일 앱 설치 권장)</li>
          <li>FChrome 설치 및 Discord 접속 환경 테스트</li>
          <li>
            추천 영상: 피그마 왕초보 입문강의 10시간 완성 (9년차 디자이너
            현직자)
          </li>
        </ul>
      </Roadmap>
      <Roadmap
        title={'디자인 맛보기 Part 01'}
        description={'앞으로 교육 과정 동안의 학습 계획과 목표를 세워보세요.'}
        day={3}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>
            Figma 기본 인터페이스 익히기
            <ul className="list-disc ml-5 leading-8">
              <li>Frame / Shape / Text / Color 스타일 적용</li>
              <li>그룹 vs 프레임 차이 이해하기</li>
            </ul>
          </li>
          <li>추천 영상: [피그마2025 기초강좌] #1 설치 및 인터페이스</li>
        </ul>
      </Roadmap>
      <Roadmap
        title={'디자인 맛보기 Part 02'}
        description={'과정 시작 전, 미리 학습하면 좋을 강의를 추천합니다.'}
        day={2}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>컴포넌트 / Variants / Auto Layout 기본 이해</li>
          <li>
            추천 영상
            <ul className="list-disc ml-5 leading-8">
              <li>피그마 기초 사용법 10분 안에 이해하기!</li>
              <li>피그마 기초 강의: 컴포넌트 개념 이해</li>
            </ul>
          </li>
        </ul>
      </Roadmap>
    </div>
  );
}

export default PDRoadmap;
