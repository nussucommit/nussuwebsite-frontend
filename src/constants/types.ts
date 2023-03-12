export type SubNavProps = {
  title: string;
  path: string;
};

type NavbuttonWithSubnavProps = {
  title: string;
  path: string;
  sub: SubNavProps[];
};
