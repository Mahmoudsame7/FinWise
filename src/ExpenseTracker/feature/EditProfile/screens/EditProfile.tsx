import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import Screen from "../../../components/Screen";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import Colors from "../../../utilities/Colors";
import { MainTabParamList, ProfileParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FormField from "../../../components/FormField";
import { useState } from "react";


type Props = CompositeScreenProps<
    NativeStackScreenProps<ProfileParamList, "EditProfile">,
    NativeStackScreenProps<MainTabParamList>
>;
function EditProfile({navigation}:Props){

    const [username,setUsername] = useState<string|null>()
    const [email,setEmail] = useState<string|null>()
    const [phone,setPhone] = useState<string|null>()
    const [pushNotificationsEnabled,setPushNotificationsEnabled] = useState(false)
    const [darkThemeEnabled,setDarkThemeEnabled] = useState(false)

    return (
         <Screen title="Edit Profile" onBack={() => navigation.goBack()} onNotificationPress={() => navigation.navigate('Notifications')}>
            <View style={{ bottom: 0, left: 0, right: 0, position: 'absolute', height: WINDOW_HEIGHT * 0.8, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>

                <View style={{ position: 'absolute', top: -50, left: WINDOW_WIDTH / 2 - 50, width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.LightGreen }}>
                    <Image
                        source={require('../../../assets/images/avatar2.png')}

                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                <Text style={{ ...GlobalStyles.textBold20, alignSelf: 'center', marginTop: 25 }}>John Smith</Text>
                <Text style={{ ...GlobalStyles.textMedium13, alignSelf: 'center' }}>ID : 12312902</Text>

                <View style={{ flex: 1, marginTop: 30, paddingHorizontal: WINDOW_WIDTH*0.08 }}>
                    <ScrollView contentContainerStyle={{paddingBottom:WINDOW_HEIGHT*0.1+10}}>
                    <Text style={{...GlobalStyles.textSemiBold20}}>Account Settings</Text>
                    
                    <View style={{gap:20,marginTop:20}}>
                        <FormField  fieldType="TextInput" title="Username" value={username} setValue={setUsername} />
                        
                        <FormField  fieldType="TextInput" title="Phone" value={phone} setValue={setPhone} />

                        <FormField  fieldType="TextInput" title="Email Address" value={email} setValue={setEmail} />

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{...GlobalStyles.textMedium15}}>Push Notifications</Text>
                            <Switch onValueChange={()=>{
                                setPushNotificationsEnabled(!pushNotificationsEnabled)
                            }}
                                value={pushNotificationsEnabled} trackColor={{ true: Colors.MainGreen }} />
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{...GlobalStyles.textMedium15}}>Dark Theme</Text>
                            <Switch onValueChange={()=>{
                                setDarkThemeEnabled(!darkThemeEnabled)
                            }}
                                value={darkThemeEnabled} trackColor={{ true: Colors.MainGreen }} />
                        </View>

                         <TouchableOpacity
                       
                       
                        style={{height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>

                </View>
            </View>
        </Screen>
    )
}

export default EditProfile;