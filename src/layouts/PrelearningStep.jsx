import React from 'react';
import LogoInflearn from '../assets/logos/logo-inflearn.svg';
import LogoDeepDive from '../assets/logos/logo-deepdive.png';

function PrelearningStep() {
  return (
    <article className="flex flex-col items-center w-full text-[18px] py-24 border-b-[0.8px] border-b-[var(--line)]">
      <span className="px-3 py-2 border-2 rounded-3xl text-sm font-bold text-[#539CCA] mb-7">
        사전 몰입 단계
      </span>
      <p className="leading-[21px] mb-11">
        개강 전 몰입을 위해 아래 내용을 준비해주세요.
      </p>
      <div className="flex w-full justify-between gap-8 break-keep font-light">
        <div className="flex flex-col flex-1 justify-between items-center px-3.5 py-8 bg-[var(--card-bg-dark)] rounded-2xl">
          <img src={LogoInflearn} alt="인프런" width="180px" />
          <h3 className="text-2xl font-bold mt-8">인프런 계정 제출</h3>
          <p className="mt-2.5 mb-14">
            최종 합격자 분들에게는
            <br />
            인프런 구독권을 지원해드립니다. <br />
            <br />
            구독권 지급을 위해
            <br />
            인프런 계정을 제출해주세요.
          </p>
          <a href="" target="_blank" className="underline">
            &gt; 인프런 계정 제출하기
          </a>
        </div>
        <div className="flex flex-col flex-1 justify-between items-center px-3.5 py-8 bg-[var(--card-bg-dark)] rounded-2xl">
          <img src={LogoDeepDive} alt="딥다이브" width="60px" height="60px" />
          <h3 className="text-2xl font-bold mt-8">구름LMS 회원가입</h3>
          <p className="mt-2.5 mb-14">
            강의 녹화본, 강의 자료, 시험 응시 등 <br />
            과정 진행을 위해 구름LMS에 가입해주세요. <br />
            <br />
            가입 후 아래 양식으로 이름을 변경해주세요.
            <br /> 김구름(프론트엔드 9회차)
          </p>
          <a
            href="https://k-digital.goorm.io/"
            target="_blank"
            className="underline mt-auto"
          >
            &gt; 구름LMS 가입하기
          </a>
        </div>
        <div className="flex flex-col flex-1 justify-between items-center px-3.5 py-8 bg-[var(--card-bg-dark)] rounded-2xl">
          <h1 className="text-6xl">🖥️</h1>
          <h3 className="text-2xl font-bold mt-8">장비 지원</h3>
          <p className="mt-2.5 mb-14">
            최종 합격자 분들께는
            <br />
            <b>
              학습 장비 구매를 위한
              <br />
              120만원 지원금
            </b>
            이 제공됩니다.
          </p>
          <p className="text-sm text-[var(--description)]">
            * 자세한 내용은 입과 후<br />
            별도 안내 드릴 예정입니다.
          </p>
        </div>
      </div>
    </article>
  );
}

export default PrelearningStep;
