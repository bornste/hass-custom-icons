var icons = {
  "llama":[0,0,32.0,32.0,"M 23.265625 1.3378906 L 21.345703 4.0585938 L 19.552734 12.890625 L 8.8652344 12.890625 L 7.1367188 14.585938 L 8.1289062 15.193359 L 7.96875 24.794922 L 9.3125 30.169922 L 10.402344 30.169922 L 10.402344 24.697266 L 13.3125 21.210938 L 17.761719 21.210938 L 17.761719 24.697266 L 19.96875 30.169922 L 21.345703 30.169922 L 20.738281 24.794922 L 23.841797 16.986328 L 23.841797 6.1699219 L 25.761719 6.1699219 L 25.761719 5.3066406 L 22.753906 4.0253906 L 23.265625 1.3378906 z M 12.960938 24.154297 L 11.457031 26.234375 L 12.482422 30.169922 L 13.761719 30.169922 L 12.960938 24.154297 z"],
  //"":[0,0,32.0,32.0,""],  
}

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["sbo"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["sbo"] = { getIcon, getIconList };  
