import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {...styles.tabBar},
        headerBackgroundContainerStyle: {...styles.tabBar},
      }}>
      <Tabs.Screen
        name="home"
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

const styles = StyleSheet.create({
    tabBar: {
      borderTopColor: '#4b5563',
      borderTopWidth: 2,
      paddingVertical: 8,
      height: Platform.OS === 'ios' ? 85 : 55,
      backgroundColor: '#0e081f',
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