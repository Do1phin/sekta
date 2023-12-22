declare module '*.svg' {
  const content: { [key: string]: string };
  export default content;
}

// export interface ISvgIcon {
//   id: string;
//   viewBox: string;
//   content: string;
// }

type Icons = {
  [key: string]: ISvgIcon;
};

declare const icons: Icons;
export default icons;
