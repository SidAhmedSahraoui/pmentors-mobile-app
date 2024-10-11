import { StyleSheet, View, Text } from 'react-native';


export default function SwapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Swap</Text>
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