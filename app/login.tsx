import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
        <Text>
            <Link href={{pathname: '/home'}}>
                Tabs
            </Link>
        </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EEEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
