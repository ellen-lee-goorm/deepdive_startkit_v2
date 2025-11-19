import React from 'react';
import Roadmap from '../Roadmap';

function BERoadmap() {
  return (
    <div className="flex flex-col gap-20">
      <Roadmap
        title={'백엔드 개발 로드맵 전체 구조 파악하기'}
        description={
          '큰 구조를 이해하면 앞으로의 학습이 훨씬 쉬워져요. 천천히, 차근차근 함께 가봐요!'
        }
        day={4}
      >
        <p>
          이 로드맵은 백엔드 개발자가 필요한 기술 스택을 체계적으로 정리해 놓은
          지도로, 언어나 데이터베이스, 프레임워크, 배포, 보안, 테스트 등
          전체적인 구조와 학습 흐름을 한눈에 이해하는 데 매우 유용합니다. <br />
          <br />
          수업 전 이 지도를 통해 학습 여정의 전반적인 방향성을 인지하면, 향후
          개별 과목을 들어갈 때 자신이 지금 어디에 있으며, 어떤 부분을 더
          중점적으로 다뤄야 할지 감을 잡을 수 있습니다. <br />
          <br />
          이런 흐름을 미리 보고 오면 수업 시간에 덜 낯설고, 전체 그림을 이해하는
          데 도움이 됩니다.
        </p>
        <ul className="list-disc ml-5 leading-8">
          <li>Vroadmap.sh: Backend Developer</li>
          <li>GeeksforGeeks: Backend Developer Roadmap 2025</li>
        </ul>
      </Roadmap>
      <Roadmap
        title={'리눅스와 네트워크'}
        description={
          '어제 큰 그림을 봤으니, 오늘은 첫걸음을 내딛는 날! 너무 깊게 들어가지 않아도 괜찮아요.‘익숙해지는 것’만으로도 큰 성장이에요.'
        }
        day={3}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>리눅스/명령어 기본</li>
          <li>네트워크와 웹 기초</li>
        </ol>
      </Roadmap>
      <Roadmap
        title={'데이터베이스와 JavaScript'}
        description={
          '이틀만 더 준비하면 훨씬 탄탄한 출발을 할 수 있어요! 새로운 개념이 나와도 부담 갖지 말고, 맛보기로 가볍게 보는 것만으로 충분합니다.'
        }
        day={2}
      >
        <ol className="list-decimal ml-5 leading-8">
          <li>데이터베이스 기초</li>
          <li>JavaScript 기초</li>
        </ol>
      </Roadmap>
    </div>
  );
}

export default BERoadmap;
