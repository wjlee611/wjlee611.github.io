import ArkhiveContainer from "@/components/arkhive/common/ArkhiveContainer";
import Layout from "@/components/common/Layout";

export default function ArkhiveBeta() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-16">
        <h1 className="shadow-md rounded-full text-2xl py-2 px-10 mb-10 backdrop-blur">
          베타 테스트
        </h1>
        <span className="mb-5">
          후원해주신 분들에 한해서 베타 테스트에 참가할 기회를 제공해 드립니다.
        </span>
        <ArkhiveContainer title="후원 방법">
          <span>1. buy me a coffee 사이트에 접속해주세요.</span>
          <span className="mb-5">
            <a
              target="_blank"
              href="https://www.buymeacoffee.com/wjlee611m"
              className="bg-yellow-500 bg-opacity-70 rounded py-1px px-1 text-white"
            >
              여기
            </a>
            <span>를 누르시면 바로 이동합니다.</span>
          </span>
          <span>2. 후원 시 내부 테스트 참가 의사 여부를 밝혀주세요.</span>
          <span className="mb-5 italic text-gray-500">
            ex) 베타 테스트 희망합니다.
          </span>
          <span>3. 참가할 구글 계정을 입력해주세요.</span>
          <span className="mb-5">
            베타 테스트 프로그램에 적어주신 이메일 계정으로 등록됩니다.
          </span>
          <span className="w-fit bg-red-500 px-3 text-white rounded-lg">
            ! 참고사항
          </span>
          <span>
            내부 테스터 인원수에 제한이 있어 선착순 90명만 참가 가능합니다.
          </span>
          <span>
            <span>다만, IOS 배포 시점이 늦어짐에 따라</span>
            <span className="bg-red-500 text-white rounded-sm px-2">
              우선적으로 50명
            </span>
            <span>만 참가 가능하고,</span>
          </span>
          <span>
            <span>이후 IOS가 배포되면</span>
            <span className="bg-red-500 text-white rounded-sm px-2">
              추가로 40명
            </span>
            <span>더 참가 가능합니다.</span>
          </span>
          <span>
            따라서, 베타 테스트에 참가 못할 수도 있는 점 양해 부탁드립니다.
          </span>
        </ArkhiveContainer>
        <ArkhiveContainer title="베타 테스터 혜택">
          <span>
            앱 업데이트시 심사기간동안 대기하지 않고 업데이트를 받으실 수
            있습니다.
          </span>
        </ArkhiveContainer>
      </div>
    </Layout>
  );
}
