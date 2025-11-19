import React from 'react';
import LinkCard from '../components/LinkCard';

function RequireStep() {
  const accentColor = '#539CCA';
  const registerLink = '';
  const discordLink = '';
  const otFormLink = '';
  const shortTitle = '프론트엔드';
  const otDateTime = '12월 19일(금) 9:00~18:00';
  const session = 9;

  return (
    <article className="flex flex-col items-center w-full text-[18px] py-24 border-b-[0.8px] border-b-[var(--line)]">
      <span
        className={`px-3 py-2 border-2 rounded-3xl text-sm font-bold text-[${accentColor}] mb-7`}
      >
        필수 진행 사항
      </span>
      <p className="leading-[21px] mb-11">
        과정 시작 전 반드시 완료해야 하는 필수 사항입니다.
        <br />
        아래 안내 드리는 필수 진행 사항은 지금 바로 진행해주세요!
      </p>
      <div className="flex flex-col gap-7 w-full">
        <LinkCard
          title="고용24 수강신청"
          description="과정 수강을 위해서는 고용24에서 수강신청을 완료해야 합니다. 아래 안내에 따라 수강신청을 완료해주세요."
          linkUrl={registerLink}
          linkTitle={'고용24\n수강신청\n하러가기'}
        >
          <div className="flex gap-8 mb-4">
            <h3 className="text-lg font-bold">내일배움카드 발급</h3>
            <ul className="list-disc leading-[25px] ml-8">
              <li>온라인 발급: 고용24에서 신청</li>
              <li>
                오프라인 발급: 은행 방문 후 발급 (신한은행 앱카드 신청 시 빠른
                발급 가능)
              </li>
            </ul>
          </div>
          <div className="flex gap-8">
            <h3 className="text-lg font-bold">고용24 수강신청</h3>
            <ul className="list-disc leading-[25px] ml-8">
              <li>
                고용24 수강신청 가이드를 따라 수강 신청 하기
                <br />
                <a
                  href="https://goorm.notion.site/24-5429d06f7dc942bb85668dd93d8219c7"
                  target="_blank"
                  className="underline"
                >
                  &gt; 고용24 수강신청 가이드 바로 가기
                </a>
              </li>
            </ul>
          </div>
        </LinkCard>
        <LinkCard
          title="Discord 가입"
          description="DEEP DIVE 과정은 Discord를 통해 모든 소통이 진행됩니다. 과정 안내 및 진행을 위해 Discord 서버를 가입해주세요."
          linkUrl={discordLink}
          linkTitle={'Discord\n가입하기'}
        >
          <div className="flex gap-8 mb-4">
            <h3 className="text-lg font-bold">설정 가이드</h3>
            <ul className="list-disc leading-[25px] ml-8">
              <li>가입 후 반드시 아래 양식으로 닉네임을 변경해주세요</li>
              <ul className="list-disc leading-[25px] ml-4">
                <li>
                  김구름({shortTitle} {session}회차)
                </li>
              </ul>
            </ul>
          </div>
        </LinkCard>
        <LinkCard
          title="온라인 오리엔테이션 참석"
          description="OT 참석 구글폼을 제출하고, 사전 준비사항을 미리 준비해주세요."
          linkUrl={otFormLink}
          linkTitle={'OT 참석\n구글폼\n제출하기'}
        >
          <div className="flex gap-18 mb-4">
            <h3 className="text-lg font-bold">OT 진행</h3>
            <ul className="list-disc leading-[25px] ml-8">
              <li>일정: {otDateTime}</li>
              <li>장소: Zoom 강의실에서 진행 (링크는 추후 안내 예정)</li>
            </ul>
          </div>
          <div className="flex gap-8">
            <h3 className="text-lg font-bold">사전 준비사항</h3>
            <ul className="list-disc leading-[25px] ml-8">
              <li>고용24 앱 설치 및 실명인증 완료</li>
              <li>
                기기 등록
                <ul className="list-disc leading-[25px] ml-4">
                  <li>나의 출결 &gt; 기기 관리</li>
                </ul>
              </li>
              <li>PC에 Zoom 설치 및 카메라 테스트</li>
            </ul>
          </div>
        </LinkCard>
      </div>
    </article>
  );
}

export default RequireStep;
