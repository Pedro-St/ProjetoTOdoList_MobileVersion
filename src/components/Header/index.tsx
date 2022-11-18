import { Text, View, Image } from "react-native";
import { styles } from "./style";


export default function Header() {
  return(
    <View style={styles.container}>
        <Image 
          source={require('../../../assets/Logo.png')}
        />
    </View>
  )
}