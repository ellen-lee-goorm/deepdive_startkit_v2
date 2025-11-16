import React from 'react';
import Roadmap from './Roadmap';

function PrelearningRoadmap() {
  return (
    <section className="flex flex-col gap-14 text-start w-full px-18 pt-20 pb-40 rounded-4xl bg-[var(--card-bg)]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[32px] font-bold">사전 학습 로드</h2>
        <p className="">
          개강 5일 전부터 사전 학습 로드를 통해 준비해보세요.
          <br />
          개강 전까지 진행되어야 하는 내용을 순차적으로 확인 후 진행하세요.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <Roadmap
          title={'개강 준비'}
          description={'아래 내용이 모두 준비가 되었는지 확인해주세요.'}
          day={5}
        >
          <ol className="list-decimal ml-5 leading-8">
            <li>사전 코딩테스트 응시</li>
            <li>구름LMS 회원 가입</li>
            <li>OT 참석 여부 구글폼 제출</li>
            <li>디스코드 가입 및 이름 변경</li>
            <li>고용24 출결관리 앱 설치 및 기기 등록 완료</li>
            <li>인프런 계정 구글폼 제출</li>
          </ol>
        </Roadmap>
        <Roadmap
          title={'개강 준비'}
          description={'아래 내용이 모두 준비가 되었는지 확인해주세요.'}
          day={5}
        >
          <ol className="list-decimal ml-5 leading-8">
            <li>사전 코딩테스트 응시</li>
            <li>구름LMS 회원 가입</li>
            <li>OT 참석 여부 구글폼 제출</li>
            <li>디스코드 가입 및 이름 변경</li>
            <li>고용24 출결관리 앱 설치 및 기기 등록 완료</li>
            <li>인프런 계정 구글폼 제출</li>
          </ol>
        </Roadmap>
        <Roadmap
          title={'개강 준비'}
          description={'아래 내용이 모두 준비가 되었는지 확인해주세요.'}
          day={5}
        >
          <ol className="list-decimal ml-5 leading-8">
            <li>사전 코딩테스트 응시</li>
            <li>구름LMS 회원 가입</li>
            <li>OT 참석 여부 구글폼 제출</li>
            <li>디스코드 가입 및 이름 변경</li>
            <li>고용24 출결관리 앱 설치 및 기기 등록 완료</li>
            <li>인프런 계정 구글폼 제출</li>
          </ol>
        </Roadmap>
        <Roadmap
          title={'개강 준비'}
          description={'아래 내용이 모두 준비가 되었는지 확인해주세요.'}
          day={5}
        >
          <ol className="list-decimal ml-5 leading-8">
            <li>사전 코딩테스트 응시</li>
            <li>구름LMS 회원 가입</li>
            <li>OT 참석 여부 구글폼 제출</li>
            <li>디스코드 가입 및 이름 변경</li>
            <li>고용24 출결관리 앱 설치 및 기기 등록 완료</li>
            <li>인프런 계정 구글폼 제출</li>
          </ol>
        </Roadmap>
        <Roadmap
          title={'개강 준비'}
          description={'아래 내용이 모두 준비가 되었는지 확인해주세요.'}
          day={5}
        >
          <ol className="list-decimal ml-5 leading-8">
            <li>사전 코딩테스트 응시</li>
            <li>구름LMS 회원 가입</li>
            <li>OT 참석 여부 구글폼 제출</li>
            <li>디스코드 가입 및 이름 변경</li>
            <li>고용24 출결관리 앱 설치 및 기기 등록 완료</li>
            <li>인프런 계정 구글폼 제출</li>
          </ol>
        </Roadmap>
      </div>
    </section>
  );
}

export default PrelearningRoadmap;
