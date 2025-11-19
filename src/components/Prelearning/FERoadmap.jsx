import React from 'react';
import Roadmap from '../Roadmap';

function FERoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'개발 환경을 사전 세팅합니다.'}
        description={'본격적인 학습 전, 개발 환경과 학습 환경을 준비해주세요.'}
        day={4}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>VS Code, Node.js, Git, Chrome 설치</li>
          <li>Figma, Postman은 선택 설치 (권장)</li>
          <li>VS Code 확장팩: Prettier, ESLint, Live Server</li>
          <li>GitHub 계정 생성 & 로그인 확인</li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'HTML 맛보기 1'}
        description={'앞으로 교육 과정 동안의 학습 계획과 목표를 세워보세요.'}
        day={3}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>
            HTML 기본 태그들을 조금은 재밌게 미리 익혀봅니다. (초보자를 위한
            HTML 입문 강의)
          </li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'HTML 맛보기 2'}
        description={'과정 시작 전, 미리 학습하면 좋을 강의를 추천합니다.'}
        day={2}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>
            HTML 기본 문법들과 웹의 전반적인 기본 내용들을 미리 익혀봅니다
            (생활코딩)
          </li>
        </ol>
      </Roadmap>
    </div>
  );
}

export default FERoadmap;
