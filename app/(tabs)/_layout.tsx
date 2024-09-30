import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet } from 'react-native';




export default function TabLayout() {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    tabBar: {
      borderTopColor: Colors[colorScheme ?? 'light'].border,
      borderTopWidth: 2,
      paddingVertical: 8,
      height: 55,
    },
    tabBarItem: {
      backgroundColor: '#000',
    },
    tabBarLabel: {
      fontSize: 12,
      fontWeight: 600,
    },
    tabBarIcon: {
      width: 24,
      height: 24,
    },
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {...styles.tabBar},
        headerBackgroundContainerStyle: {...styles.tabBar},
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'BriefcaseIcon' : 'BriefcaseIcon'} color={color} />
          ),
          tabBarLabelStyle: {...styles.tabBarLabel},
          tabBarIconStyle: {...styles.tabBarIcon},
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'UsersIcon' : 'UsersIcon'} color={color} />
          ),
          tabBarLabelStyle: {...styles.tabBarLabel},
          tabBarIconStyle: {...styles.tabBarIcon},
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: 'Swap',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'SwapIcon' : 'SwapIcon'} color={color} />
          ),
          tabBarLabelStyle: {...styles.tabBarLabel},
          tabBarIconStyle: {...styles.tabBarIcon},
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: 'Pricing',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'CurrencyDollarIcon' : 'CurrencyDollarIcon'} color={color} />
          ),
          tabBarLabelStyle: {...styles.tabBarLabel},
          tabBarIconStyle: {...styles.tabBarIcon},
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'SettingIcon' : 'SettingIcon'} color={color} />
          ),
          tabBarLabelStyle: {...styles.tabBarLabel},
          tabBarIconStyle: {...styles.tabBarIcon},
        }}
      />
    </Tabs>
  );
}

