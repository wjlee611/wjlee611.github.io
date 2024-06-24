export interface IContributeConst {
  packageName: String;
  packageLink: String;
  commits: ICommitConst[];
}

export interface ICommitConst {
  commitName: String;
  commitLink: String;
  content: String;
}

// bloc
export const blocConst: IContributeConst = {
  packageName: "bloc",
  packageLink: "https://pub.dev/packages/bloc",
  commits: [
    {
      commitName: "9aaa806",
      commitLink:
        "https://github.com/felangel/bloc/commit/9aaa8064537a5a3a66e20ab19019ce97139eaca3",
      content:
        "bloc 라이브러리 공식문서 한국어 번역본을 제작했습니다.\nbloc의 철학을 알리면서 이해하기 쉽도록 번역하기 위해 노력했습니다.",
    },
  ],
};
// gyro_provider
export const gyroProviderConst: IContributeConst = {
  packageName: "gyro_provider",
  packageLink: "https://pub.dev/packages/gyro_provider",
  commits: [
    {
      commitName: "f6188b7",
      commitLink:
        "https://github.com/wjlee611/gyro_provider/commit/f6188b725a41ab84abfcb48c0cfd0efe6f6d4617",
      content:
        "제 첫 번째 오픈소스 라이브러리 gyro_provider 입니다.\npub score 160점을 달성하기 위해 lint 준수, 인터페이스에 주석 추가 등에 신경을 기울였습니다.",
    },
  ],
};
