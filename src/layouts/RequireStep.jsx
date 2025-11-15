import React from 'react';
import LinkCard from '../components/LinkCard';

function RequireStep() {
  return (
    <article>
      <span>필수 진행 사항</span>
      <p>
        과정 시작 전 반드시 완료해야 하는 필수 사항입니다.
        <br />
        아래 안내 드리는 필수 진행 사항은 지금 바로 진행해주세요!
      </p>
      <LinkCard
        title="고용24 수강신청"
        description="과정 수강을 위해서는 고용24에서 수강신청을 완료해야 합니다. 아래 안내에 따라 수강신청을 완료해주세요."
        linkUrl=""
        linkTitle={`고용24 수강신청 하러가기`}
      >
        <div>
          <h3>내일배움카드 발급</h3>
          <ul>
            <li>온라인 발급: 고용24에서 신청</li>
            <li>
              오프라인 발급: 은행 방문 후 발급 (신한은행 앱카드 신청 시 빠른
              발급 가능)
            </li>
          </ul>
        </div>
        <div>
          <h3>고용24 수강신청</h3>
          <ul>
            <li>
              고용24 수강신청 가이드를 따라 수강 신청 하기
              <br />
              <a href="" target="_blank">
                고용24 수강신청 가이드 바로 가기
              </a>
            </li>
          </ul>
        </div>
      </LinkCard>
    </article>
  );
}

export default RequireStep;
