import { NativeStackScreenProps } from "@react-navigation/native-stack"
import Screen from "../../../components/Screen"
import { AnalysisParamList, MainTabParamList } from "../../../navigator/types"
import { CompositeScreenProps } from '@react-navigation/native';
import { FlatList, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import Colors from "../../../utilities/Colors";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import { useCallback, useEffect, useMemo, useState } from "react";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import { CategoriesData } from "../../../data/CategoriesData";
import CategoryIcon from "../../Categories/components/CategoryIcon";
import { Add, ArrowDown, ArrowDown2 } from "iconsax-react-nativejs";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import CategoryList from "../components/CategoryList";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import FoodSvg from "../../../assets/svg/FoodSvg";
import Transaction from "../../../components/TransactionCard";
import TransactionCard from "../../../components/TransactionCard";
import CategoriesDropdown from "../../../components/CategoriesDropdown";
import FormField from "../../../components/FormField";
import { searchTransaction } from "../../../utilities/TransactionHelpers";
import { useExpenseStore } from "../../../context/useTransactionStore";


type Props = CompositeScreenProps<
    NativeStackScreenProps<AnalysisParamList, 'Search'>,
    NativeStackScreenProps<MainTabParamList>
>;
function SearchScreen({ navigation }: Props) {

    const {expenses} = useExpenseStore()
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [reportChoice, setReportChoice] = useState<string | null>(null)
    const [searchTerm,setSearchTerm] = useState<string | undefined>(undefined)

    const onChange = (
        event: DateTimePickerEvent,
        selectedDate?: Date
    ) => {
        setShow(Platform.OS === "ios");

        if (event.type === "dismissed") {
            return;
        }

        if (selectedDate) {
            setDate(selectedDate);

            setShow(false)
        }
    };
    const [showList, setShowList] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<{ id: number, name: string } | null>(null);
    const [data,setData] = useState<any []>([])
    const caretRotation = useSharedValue(0)

    const animatedCaret = useAnimatedStyle(() => ({
        transform: [{ rotateX: `${caretRotation.value}deg` }],
    }));
    useEffect(() => {
        caretRotation.value = withTiming(
            showList == true ? 180 : 0, { duration: 300 }
        )
    }, [showList])

    const search = useCallback(()=>{
        let data = searchTransaction(expenses,searchTerm,selectedCategory?.name,date,reportChoice)
        setData(data)
    },[expenses,searchTerm,selectedCategory,date,reportChoice])
    // const data = useMemo(()=>{
    //     return searchTransaction(expenses,searchTerm,selectedCategory?.name,date,reportChoice)
    // },[expenses,searchTerm,selectedCategory,date,reportChoice])

    return (
        <Screen title="Search" onBack={() => { navigation.goBack() }} onNotificationPress={() => { navigation.navigate('Notifications') }}>
            <TextInput
                onChangeText={(val)=>setSearchTerm(val)}
                style={{ ...GlobalStyles.textLight13, width: WINDOW_WIDTH - 30, alignSelf: 'center', backgroundColor: Colors.HoneyDew, borderRadius: 30, height: 34, marginTop: 20, paddingHorizontal: 10 }}
                placeholder="Search..."
                placeholderTextColor={"black"}
            />

            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: WINDOW_HEIGHT * 0.1 + 20 }}>
                    <View style={{ gap: 20,width: WINDOW_WIDTH - 40,alignSelf:'center' }}>
                        <FormField  fieldType="Dropdown" value={selectedCategory} setValue={setSelectedCategory} title="Categories"/>


                        <FormField  fieldType="Date" value={date} setValue={setDate} title="Date"/>


                        <View style={{ gap: 10 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Report</Text>
                            <View style={{ flexDirection: 'row', gap: 25 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => {
                                            if (reportChoice == 'income') {
                                                setReportChoice(null)
                                            } else {
                                                setReportChoice('income')
                                            }
                                        }} style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 1, borderColor: Colors.MainGreen, backgroundColor: reportChoice == 'income' ? Colors.MainGreen : 'transparent' }} />
                                    </View>
                                    <Text style={{ ...GlobalStyles.textRegular15 }}>Income</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (reportChoice == 'expense') {
                                                    setReportChoice(null)
                                                } else {
                                                    setReportChoice('expense')
                                                }
                                            }}
                                            style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 1, borderColor: Colors.MainGreen, backgroundColor: reportChoice == 'expense' ? Colors.MainGreen : 'transparent' }} />
                                    </View>
                                    <Text style={{ ...GlobalStyles.textRegular15 }}>Expense</Text>
                                </View>

                            </View>
                        </View>


                        <TouchableOpacity onPress={()=>search()} style={{ height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Search</Text>
                        </TouchableOpacity>


                        <FlatList
                            data={
                                // [
                                //     { id: '3', name: 'Salary', category: 'Salary',amount: 4000.00, income: true,date:'2026-07-12' },
                                //     { id: '4', name: 'Rent', category: 'Rent',amount: 1000.00, income: false,date:'2026-07-12' },
                                //     { id: '5', name: 'Medicine', category: 'Medicine',amount: 300.00, income: false,date:'2026-07-12' }
                                // ]
                                data
                            }
                            renderItem={({ item, index }) => {
                                return (
                                    <TransactionCard transaction={item} containerStyle={{backgroundColor:Colors.LightGreen,paddingVertical:15,paddingHorizontal:10,borderRadius:20}} hasPeriod={false}/>
                                )
                            }}

                        />
                    </View>
                </ScrollView>

            </View>

        </Screen>
    )
}

export default SearchScreen