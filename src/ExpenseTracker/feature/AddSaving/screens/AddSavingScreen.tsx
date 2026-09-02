import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "../../../components/Screen"
import { CategoriesParamList, MainTabParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../../utilities/Colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import { useState } from "react";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import CategoriesDropdown from "../../../components/CategoriesDropdown";
import FormField from "../../../components/FormField";
import { SavingCategoriesData } from "../../../data/SavingCategoriesData";

type Props = CompositeScreenProps<
  NativeStackScreenProps<CategoriesParamList, "AddSaving">,
  NativeStackScreenProps<MainTabParamList>
>;
function AddSavingScreen({navigation}:Props){

    const [selectedCategory, setSelectedCategory] = useState<{ id: number, name: string } | null>(null);
    const [amount,setAmount] = useState("")
    const [title,setTitle] = useState("")
    const [note,setNote] = useState("")
    const [date, setDate] = useState(new Date());
   
    return (
        <Screen title="Add Savings" onBack={()=>{navigation.goBack()}} onNotificationPress={()=>{navigation.navigate('Notifications')}}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: WINDOW_HEIGHT * 0.1 + 20,flexGrow:1 }}>
                    <View style={{ flex:1,gap: 20,width: WINDOW_WIDTH - 40,alignSelf:'center' }}>
                        
                        <FormField  fieldType="Date" value={date} setValue={setDate} title="Date"/>

                     
                        <FormField  dropdownData={SavingCategoriesData} fieldType="Dropdown" value={selectedCategory} setValue={setSelectedCategory} title="Categories"/>

                        <FormField  fieldType="NumberInput" value={amount} setValue={setAmount} title="Amount"/>

                        <FormField  fieldType="TextInput" value={title} setValue={setTitle} title="Saving Title"/>

                        <FormField  fieldType="TextArea" value={note} setValue={setNote} title="Note" containerStyle={{flex:1}}/>


                        <TouchableOpacity style={{ height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Save</Text>
                        </TouchableOpacity>



                    </View>
                </ScrollView>
            </View>
        </Screen>
    )
}

export default AddSavingScreen