export interface NavItem {
  path: string;
  text: string;
  component: any;
}

export interface NavItemWithPages extends NavItem {
  pages: NavItemWithPages[];
}
