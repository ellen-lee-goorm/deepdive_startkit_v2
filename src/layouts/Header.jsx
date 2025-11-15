import React from 'react';
import banner from '../assets/banners/banner-fe.png';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

function Header() {
  return (
    <header className="flex flex-col text-center items-center">
      <img src={banner} alt="프론트엔드 배너 이미지" width="1075px" />
      <p className="mt-18 mb-1 font-bold">과정명</p>
      <h1 className="mb-16">
        DEEP DIVE 입과 안내
        <br />
        Start Kit
      </h1>
      <p className="mb-4">DEEP DIVE 플레이어 여러분, 진심으로 환영합니다.</p>
      <p>
        여러분의 첫 걸음을 응원하며, 입과 전에 꼭 알아야 할 내용을 Start Kit에
        담았습니다.
        <br /> 필수 진행 사항부터 본격 몰입 단계까지, 본 가이드를 따라
        준비해주세요.
      </p>
      <IoChevronDownCircleOutline size={60} className="mt-16" />
      <hr className="border-0 border-t-[0.8px] border-t-[var(--line)]" />
    </header>
  );
}

export default Header;
