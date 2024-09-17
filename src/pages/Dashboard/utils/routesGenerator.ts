import { TRoute, TUserPaths } from "../../../Types";

export const routeGenerator = (items: TUserPaths[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    return acc;
  }, []);
  return routes;
};
