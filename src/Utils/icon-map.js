import * as SvgIconsComponent from "../components/icons/icons";

/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */
export const getIconComponentByName = (name) => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.SvgFacebook,
    instagram: SvgIconsComponent.SvgInstagram,
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent />;
  } else {
    return null;
  }
};
