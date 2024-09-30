import * as Icons from "react-native-heroicons/solid";

const iconMap: { [key: string]: React.ComponentType<{ color: string }> } = {
  // Add your icon mappings here
  HomeIcon: Icons.HomeIcon,
  BriefcaseIcon: Icons.BriefcaseIcon,
  CurrencyDollarIcon: Icons.CurrencyDollarIcon,
  UsersIcon: Icons.UsersIcon,
  SettingIcon: Icons.Cog8ToothIcon,
  SwapIcon: Icons.ArrowsUpDownIcon,
};

export function TabBarIcon(props: { name: string; color: string }) {
  const Icon = iconMap[props.name];
  if (!Icon) {
    return null; // or some fallback UI
  }
  return <Icon color={props.color} />;
}

