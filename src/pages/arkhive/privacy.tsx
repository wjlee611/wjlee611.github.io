import Layout from "@/components/common/Layout";

export default function ArkhivePrivacy() {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center py-16">
        <h1 className="shadow-md rounded-full text-2xl py-2 px-10 mb-10">
          개인정보처리방침
        </h1>
        <span>
          Arkhive 서비스는 사용자의 어떠한 개인정보도 요구하지 않습니다.
        </span>
      </div>
    </Layout>
  );
}
