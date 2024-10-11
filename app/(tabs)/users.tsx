import { StyleSheet, View, Text } from 'react-native';


export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Users</Text>
    </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    gap: 8,
    marginBottom: 8,
  },
});