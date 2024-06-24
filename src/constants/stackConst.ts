export type StackCategoty =
  | "favor"
  | "skill"
  | "singleProj"
  | "teamProj"
  | "releases"
  | "contributes";

export interface IStackConsts {
  flutter: ITechConsts;
  react: ITechConsts;
  next: ITechConsts;

  MAX: ITechConsts;
}

export interface ITechConsts {
  favor: number;
  skill: number;
  singleProj: number;
  teamProj: number;
  releases: number;
  contributes: number;
}

// Flutter
const flutterConst: ITechConsts = {
  favor: 100,
  skill: 80,
  singleProj: 4,
  teamProj: 4,
  releases: 3,
  contributes: 2,
};
// React
const reactConst: ITechConsts = {
  favor: 80,
  skill: 40,
  singleProj: 5,
  teamProj: 2,
  releases: 2,
  contributes: 0,
};
// Next
const nextConst: ITechConsts = {
  favor: 80,
  skill: 20,
  singleProj: 1,
  teamProj: 1,
  releases: 2,
  contributes: 0,
};

// export
export const stackConsts: IStackConsts = {
  flutter: flutterConst,
  react: reactConst,
  next: nextConst,

  MAX: {
    favor: 100,
    skill: 100,
    singleProj: 0,
    teamProj: 0,
    releases: 0,
    contributes: 0,
  },
};

export function stackMaxVal(cat: StackCategoty) {
  let vals: number[] = [];

  switch (cat) {
    case "favor":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.favor)
      );
    case "skill":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.skill)
      );
    case "singleProj":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.singleProj)
      );
    case "teamProj":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.teamProj)
      );
    case "releases":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.releases)
      );
    case "contributes":
      Object.values(stackConsts).forEach((e: ITechConsts) =>
        vals.push(e.contributes)
      );
  }

  return Math.max(...vals);
}
