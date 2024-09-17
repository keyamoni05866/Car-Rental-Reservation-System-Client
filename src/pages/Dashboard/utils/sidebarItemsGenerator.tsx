import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPaths } from "../../../Types";

export const sidebarItemsGenerator = (items: TUserPaths[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    return acc;
  }, []);
  return sidebarItems;
};
