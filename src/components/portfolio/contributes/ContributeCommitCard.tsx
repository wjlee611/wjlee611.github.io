import { ICommitConst } from "@/constants/contributeConst";

interface IContributeCommitCard {
  commit: ICommitConst;
}

export default function ContributeCommitCard({
  commit,
}: IContributeCommitCard) {
  return (
    <li className="relative">
      <div className="absolute top-2 -left-5 w-2 h-2 rounded-full border-2 border-yellow-400" />
      <div className="flex flex-col">
        <a
          className="flex w-fit text-yellow-400"
          href={commit.commitLink.toString()}
          target="_blank"
        >
          {commit.commitName}
        </a>
        {commit.content.split("\n").map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </div>
    </li>
  );
}
