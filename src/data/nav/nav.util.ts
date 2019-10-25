import { NavItemWithPages, NavItem } from './nav.types';

export const getFlattenedNavItems = (
  navItemWithPages: NavItemWithPages,
  outputItems: NavItem[] = [],
  level = 0
) => {
  const { pages, ...rest } = navItemWithPages;

  outputItems.push({ ...rest });

  if (pages.length) {
    pages.forEach((page) => {
      getFlattenedNavItems(page, outputItems, level + 1);
    });
  }

  if (level === 0) {
    return outputItems;
  }
};
