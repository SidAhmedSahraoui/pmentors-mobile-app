import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fontFamilies } from '@/constants/Fonts';

export default function App() {
  const insets = useSafeAreaInsets();

  return (
      <View style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
            placeholder={require('../assets/images/logo.png')}
            contentFit="contain"
            transition={1000}
          />
          <Image
            style={styles.image}
            source={require('../assets/images/casual-life-3d.png')}
            placeholder={require('../assets/images/casual-life-3d.png')}
            contentFit="contain"
            transition={1000}
          />
          
          <View style={styles.button}>
            <Link 
              href={{pathname: '/login'}}
            >
              <Text style={styles.buttonText}>
                Getting Started 🚀
              </Text>
            </Link>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#F2EEEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 45,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(16, 199, 178, 0.6)',
    borderRadius: 8,
    borderBottomColor: '#10C7B2',
    borderBottomWidth: 5,
    borderRightColor: '#10C7B2',
    borderRightWidth: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: fontFamilies.MONTSERRAT.semiBold,
  },
  logo: {
    position: 'absolute',
    top: 20,
    width: '100%',
    height: 120,
  },
});
