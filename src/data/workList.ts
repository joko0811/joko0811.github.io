import MediaCardProps from "../type/MediaCardProps";

const workList: MediaCardProps[] = [
  {
    imagePath: "portfolio.png",
    imageHeight: 140,
    cardWidth: 345,
    title: "portfolio",
    description:
      "このページです \n https://github.com/joko0811/joko0811.github.io",
    tips: ["React", "TypeScript", "Github Actions"],
  },
  {
    imagePath: "VRSpeedRun.png",
    imageHeight: 140,
    cardWidth: 345,
    title: "VR Speed Run",
    description:
      "体を動かして仮想上の街を走るVRゲームです \n https://github.com/soupro-vimmer/VRSpeedRun",
    tips: ["C#", "Unity"],
  },
  {
    imagePath: "profile.jpg",
    imageHeight: 140,
    cardWidth: 345,
    title: "Shiha GO",
    description:
      "自身の声で操作する横スクロールアクションゲームです \n https://github.com/joko0811/Siha",
    tips: ["C#", "Unity"],
  },
  {
    imagePath: "",
    imageHeight: 140,
    cardWidth: 345,
    title: "Brilliant diamond extension",
    description:
      "検索定型文の作製・共有を行えるGoogle検索支援ツールです \n https://github.com/ryama13572/brilliant_diamond_extension",
    tips: ["Vue", "JavaScript"],
  },
  {
    imagePath: "profile.jpg",
    imageHeight: 140,
    cardWidth: 345,
    title: "QueueuQ",
    description: "[開発中] Webサイトのリーディングリストです",
    tips: ["Go", "React"],
  },
];

export default workList;
