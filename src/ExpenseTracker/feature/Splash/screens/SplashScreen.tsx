import LottieView from "lottie-react-native"
import { Text, View } from "react-native"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import Colors from "../../../utilities/Colors"
import { useExpenseStore } from "../../../context/useTransactionStore"

function SplashScreen(){

    const {initialize,expenses,initializeApp} = useExpenseStore()

    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.MainGreen}}>
        <LottieView
            source={require("../../../assets/images/FinWiseAnimatedLogo.json")}
            autoPlay
            style={{width: 200, height: 200}}
            loop={false}
            onAnimationFinish={() => {
                initializeApp()
            }}
        />
        <Text style={{...GlobalStyles.textSemiBold20,fontSize:60,color:Colors.HoneyDew}}>FinWise</Text>
        
      </View>
    )
}

export default SplashScreen