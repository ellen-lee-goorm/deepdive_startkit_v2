import React from 'react';
import Roadmap from '../Roadmap';

function PMRoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'PM/PO 기본 개념 이해'}
        description={
          'PM(프로덕트 매니저)와 PO(프로덕트 오너)의 차이를 이해하고, 과정에서 다룰 핵심 직무를 미리 인지합니다.'
        }
        day={4}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>PM과 PO의 역할 및 차이</li>
          <li>글로벌과 국내 맥락에서의 역할 비교</li>
          <li>
            참고자료
            <ul className="list-disc ml-5 leading-8">
              <li>PI, PM, PO 도대체 무엇이 다를까? (아티클)</li>
            </ul>
          </li>
        </ul>
      </Roadmap>
      <Roadmap
        title={'사례 탐색 & 산업 트렌드'}
        description={
          '실제 산업의 변화를 통해 프로덕트 매니지먼트 활동이 어떤 맥락에서 이루어지는지 확인합니다.'
        }
        day={3}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>최신 IT/AI 트렌드 기사와 영상 탐독</li>
          <li>글로벌 PM 커뮤니티의 인사이트 살펴보기</li>
          <li>의사소통 기술과 태도의 중요성 이해</li>
          <li>
            참고자료
            <ul className="list-disc ml-5 leading-8">
              <li>김미경TV X 더밀크 - AI와 취업 (유튜브)</li>
              <li>“취업난? 100% AI 때문” (아티클)</li>
              <li>더밀크 홈페이지</li>
            </ul>
          </li>
        </ul>
      </Roadmap>
      <Roadmap
        title={'협업 도구 익히기'}
        description={'과정 중 활용될 협업 도구를 미리 알아봅니다.'}
        day={2}
      >
        <ul className="list-disc ml-5 leading-8">
          <li>Notion 기본 기능 익히기(페이지 생성, 댓글 달기 등)</li>
          <li>Discord에 간단한 학습 인증 남기기</li>
          <li>협업툴의 주요 기능을 비교하며 익숙해지기</li>
          <li>
            참고자료
            <ul className="list-disc ml-5 leading-8">
              <li>팀의 엔진이 되는 5가지 도구 (Scordi 블로그)</li>
            </ul>
          </li>
        </ul>
      </Roadmap>
    </div>
  );
}

export default PMRoadmap;
