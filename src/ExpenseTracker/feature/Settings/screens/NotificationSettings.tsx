import { Switch, Text, View } from "react-native"
import Screen from "../../../components/Screen"
import Colors from "../../../utilities/Colors"
import { MainTabParamList, ProfileParamList, SettingsParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProfileTile from "../../Profile/components/ProfileTile";
import ProfileSvg from "../../../assets/svg/ProfileSvg";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import NotificationSvg from "../../../assets/svg/NotificationSvg";
import { Key } from "iconsax-react-nativejs";
import { useState } from "react";
import { GlobalStyles } from "../../../utilities/GlobalStyles";



type Props = CompositeScreenProps<
    NativeStackScreenProps<SettingsParamList, "NotificationSettings">,
    NativeStackScreenProps<MainTabParamList>
>;
function NoifictionSettings({navigation}:Props){

    const [generalNotificationEnabled,setGeneralNotificationEnabled] = useState(false)
    const [transactionUpdateEnabled,setTransactionUpdateEnabled] = useState(false)
    return (
        <Screen title="Notification Settings" onBack={() => { navigation.goBack() }} onNotificationPress={() => { navigation.navigate('Notifications') }}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: WINDOW_HEIGHT*0.03,paddingHorizontal:WINDOW_WIDTH*0.1, marginTop: 20,gap:20 }}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{...GlobalStyles.textMedium15}}>General Notifications</Text>
                            <Switch onValueChange={()=>{
                                setGeneralNotificationEnabled(!generalNotificationEnabled)
                            }}
                                value={generalNotificationEnabled} trackColor={{ true: Colors.MainGreen }} />
                        </View>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{...GlobalStyles.textMedium15}}>Transcation Update</Text>
                            <Switch onValueChange={()=>{
                                setTransactionUpdateEnabled(!transactionUpdateEnabled)
                            }}
                                value={transactionUpdateEnabled} trackColor={{ true: Colors.MainGreen }} />
                        </View>
            </View>
        </Screen>
    )
}

export default NoifictionSettings