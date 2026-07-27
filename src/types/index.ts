export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type WithChildren<T = unknown> = T & {
  children: React.ReactNode;
};
