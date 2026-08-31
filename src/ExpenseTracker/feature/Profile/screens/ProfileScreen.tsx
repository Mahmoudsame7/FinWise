import { Image, Text, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import ProfileSvg from "../../../assets/svg/ProfileSvg";
import SecuritySvg from "../../../assets/svg/SecuritySvg";
import SettingsSvg from "../../../assets/svg/SettingsSvg";
import HelpSvg from "../../../assets/svg/HelpSvg";
import LogoutSvg from "../../../assets/svg/LogoutSvg";
import ProfileTile from "../components/ProfileTile";
import { MainTabParamList, ProfileParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "../../../components/Screen";
import { useExpenseStore } from "../../../context/useTransactionStore";

type Props = CompositeScreenProps<
    NativeStackScreenProps<ProfileParamList, "Profile">,
    NativeStackScreenProps<MainTabParamList>
>;

function ProfileScreen({ navigation }: Props) {
    const {logout} = useExpenseStore()
    return (
        <Screen title="Profile" onBack={() => navigation.goBack()} onNotificationPress={() => navigation.navigate('Notifications')}>
            <View style={{ bottom: 0, left: 0, right: 0, position: 'absolute', height: WINDOW_HEIGHT * 0.8, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>

                <View style={{ position: 'absolute', top: -50, left: WINDOW_WIDTH / 2 - 50, width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.LightGreen }}>
                    <Image
                        source={require('../../../assets/images/avatar2.png')}

                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                <Text style={{ ...GlobalStyles.textBold20, alignSelf: 'center', marginTop: 25 }}>John Smith</Text>
                <Text style={{ ...GlobalStyles.textMedium13, alignSelf: 'center' }}>ID : 12312902</Text>

                <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 40 }}>


                    <ProfileTile onPress={()=>navigation.navigate('EditProfile')} title="Edit Profile" iconComponent={
                        <ProfileSvg color={Colors.HoneyDew} />
                    } />

                    <ProfileTile  title="Security" iconComponent={
                        <SecuritySvg color={Colors.HoneyDew} />
                    } />

                    <ProfileTile onPress={()=>navigation.navigate('SettingsStack')} title="Settings" iconComponent={
                        <SettingsSvg color={Colors.HoneyDew} />
                    } />

                    {/* <ProfileTile  title="Help" iconComponent={
                        <HelpSvg color={Colors.HoneyDew} />
                    } /> */}

                    <ProfileTile onPress={async ()=>{
                        await logout()
                    }} title="Logout" iconComponent={
                        <LogoutSvg color={Colors.HoneyDew} />
                    } />
                </View>

            </View>
        </Screen>

    )
}
export default ProfileScreen