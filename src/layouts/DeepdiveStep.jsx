import React from 'react';
import imgCommunity from '../assets/icons/community.png';
import imgCS from '../assets/icons/cs.png';
import imgDeeptalk from '../assets/icons/deeptalk.png';
import imgMentoring from '../assets/icons/mentoring.png';
import imgSurvey from '../assets/icons/survey.png';
import LineCard from '../components/LineCard';
import courseData from '../datas/course.json';

function DeepdiveStep() {
  const courseID = 'fe';
  const tobe = courseData[courseID].tobe;
  const accentColor = courseData[courseID].color;
  return (
    <article className="flex flex-col items-center w-full text-[18px] mb-48 py-24 ">
      <span
        className={`px-3 py-2 border-2 rounded-3xl text-sm font-bold text-[${accentColor}] mb-7`}
      >
        본격 몰입 단계
      </span>
      <p className="leading-[21px] mb-11">
        과정 시작 후 2주간은 특별 집중 관리 기간입니다.
        <br />
        강도 높은 학습과 밀착 케어로 확실한 성장을 경험하세요
      </p>
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 mb-20 w-full">
        <LineCard title="데일리 EXP 미션">
          <ul className="list-disc ml-6">
            <li>
              자기주도학습 및 학습 기록 습관을 기르기 위한 데일리 미션 진행
            </li>
            <li>2주간 매일 데일리 미션 참여할 시, 추가 구름조각 제공</li>
          </ul>
        </LineCard>
        <LineCard title="팀 스터디 & 네트워킹">
          <ul className="list-disc ml-6">
            <li>개강 주부터 팀 스터디 시작</li>
            <li>협업 중심의 학습으로 성장 동력과 소프트스킬 강화</li>
            <li>개인별 목표에 맞춘 팀 스터디 구성</li>
          </ul>
        </LineCard>
        <LineCard title="챌린지 이벤트">
          <ul className="list-disc ml-6">
            <li>구름 조각 보상 시스템</li>
            <li>게이미피케이션을 통한 재미있는 학습 경험</li>
          </ul>
        </LineCard>
        <LineCard title="데일리 코드 리뷰/피드백">
          <ul className="list-disc ml-6">
            <li>매일의 학습을 글로 정리하며 깊이 있는 이해와 복습</li>
            <li>기록이 곧 성장의 발자취, 향후 포트폴리오로 활용 가능</li>
          </ul>
        </LineCard>
      </div>
      <div className="flex flex-col items-center w-full mb-56">
        <div className="flex flex-col gap-5 mb-20">
          <h1 className="text-2xl font-bold">9 to 6 운영 지원 체계</h1>
          <p className="leading-[21px] ">
            운영 매니저가 오전 9시부터 오후 6시까지 함께하며
            <br />
            실시간으로 여러분의 학습 여정을 케어합니다.
          </p>
        </div>
        <section className="flex justify-between w-full">
          <div className="flex flex-col gap-2.5 items-center">
            <img src={imgCS} alt="실시간 문의 응대" width="150px" />
            <h2 className="text-2xl font-bold">실시간 문의 응대</h2>
            <p>
              Zoom에 상주하며
              <br />
              문의사항을 즉시 해결합니다.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <img src={imgCommunity} alt="커뮤니티 지원" width="150px" />
            <h2 className="text-2xl font-bold">커뮤니티 지원</h2>
            <p>
              Discord 채널을 통해
              <br />
              동료 플레이어와 소통하세요.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <img src={imgMentoring} alt="개인별 멘토링" width="150px" />
            <h2 className="text-2xl font-bold">개인별 멘토링</h2>
            <p>
              1:1 커피챗을 통해
              <br />
              맞춤형 성장 가이드를 제공합니다.
            </p>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center mb-56">
        <div className="flex flex-col gap-5 mb-25">
          <h1 className="text-2xl font-bold">지속적인 피드백 시스템</h1>
          <p className="leading-[21px]">
            수집된 피드백을 24시간 내 분석하여 즉시 실행 가능한 개선사항을 바로
            반영합니다.
          </p>
        </div>
        <section className="flex gap-48">
          <div className="flex flex-col gap-2.5 items-center">
            <img src={imgSurvey} alt="정기 만족도 조사" width="150px" />
            <h2 className="text-2xl font-bold">정기 만족도 조사</h2>
            <p>
              개강 후 2주간 운영/강사/콘텐츠 영역별로
              <br />
              만족도 조사를 진행해 피드백을 수집합니다.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-center">
            <img src={imgDeeptalk} alt="DEEP TALK" width="150px" />
            <h2 className="text-2xl font-bold">DEEP TALK</h2>
            <p>
              강사님과 1:1 커피챗을 정기적으로 진행해
              <br />
              개인별 맞춤 조언과 가이드를 제공합니다.
            </p>
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-6 text-center text-2xl font-bold">
        <h2>{tobe}로 거듭나기 위한 여정이 시작됩니다.</h2>
        <h2>DEEP DIVE에서 여러분의 무한한 가능성을 발견하세요!</h2>
      </div>
    </article>
  );
}

export default DeepdiveStep;
