import Screen from "../../../components/Screen"
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { CategoriesParamList, MainTabParamList } from "../../../navigator/types";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../utilities/Colors";
import { WINDOW_WIDTH } from "../../../utilities/Constants";
import ProgressView from "../../../components/ProgressView";
import CarSvg from "../../../assets/svg/CarSvg";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import IncomeSvg from "../../../assets/svg/IncomeSvg";
import CheckSvg from "../../../assets/svg/CheckSvg";
import TransactionsSectionList from "../../Transactions/components/TransactionsSectionList";

type Props = CompositeScreenProps<
    NativeStackScreenProps<CategoriesParamList, "CategorySavings">,
    NativeStackScreenProps<MainTabParamList>
>;
function CategorySavingsScreen({ navigation }: Props) {

     const sections = [
        {
            id: 1,
            title: 'April',
            data: [
                { id: '1', name: 'Travel Deposit',amount: 26.00,category:'Travel',income: false,date:'2026-07-12' },
                { id: '2', name: 'Travel Deposit', amount: 18.35,category:'Travel',income: false,date:'2026-07-12' },
                { id: '3', name: 'Travel Deposit', amount: 15.40,category:'Travel',income: false,date:'2026-07-12' },
                { id: '4', name: 'Travel Deposit', amount: 12.13,category:'Travel',income: false,date:'2026-07-12' },
            ],
        },
        {
            id: 2,
            title: 'March',
            data: [
               { id: '5', name: 'Travel Deposit', amount: 15.40,category:'Travel',income: false,date:'2026-07-12' },
               { id: '6', name: 'Travel Deposit', amount: 12.13,category:'Travel',income: false,date:'2026-07-12'},
            ],
        },
       
    ];

    return (
        <Screen title="Travel" onBack={() => navigation.goBack()} onNotificationPress={() => navigation.navigate('Notifications')}>
            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
               
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: WINDOW_WIDTH - 80, alignSelf: 'center' }}>

                        <View style={{ gap: 10 }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                    <IncomeSvg />
                                    <Text style={{ ...GlobalStyles.textRegular12 }}>Goal</Text>
                                </View>
                                <Text style={{ ...GlobalStyles.title, marginHorizontal: 10 }}>$569,200</Text>
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                    <IncomeSvg />
                                    <Text style={{ ...GlobalStyles.textRegular12 }}>Amount Saved</Text>
                                </View>
                                <Text style={{ ...GlobalStyles.title, marginHorizontal: 10, color: Colors.MainGreen }}>$569</Text>
                            </View>
                        </View>

                        <ProgressView
                            customStyle={{ height: 150, paddingHorizontal: 20, marginHorizontal: 0 }}

                            innerCircleSize={85}
                            innerCircleColor={'transparent'}
                            percentage={50}
                            targetName="Savings On Goals"
                            targetTextStyle={{ color: Colors.DarkGreen, ...GlobalStyles.textMedium13 }}
                            component={
                                <CarSvg />
                            }
                        />
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <View style={{ alignSelf: 'center', width: WINDOW_WIDTH - 80, height: 27, backgroundColor: Colors.DarkGreenBar, borderRadius: 14, justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ ...GlobalStyles.textRegular12, color: Colors.HoneyDew, marginHorizontal: 20 }}>30%</Text>
                            <View style={{ position: 'absolute', height: 27, right: 0, bottom: 0, backgroundColor: Colors.MainGreen, width: '70%', borderRadius: 14, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ ...GlobalStyles.textMedium13, color: 'black', marginHorizontal: 20 }}>$20,000.00</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, gap: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 40 }}>
                            <CheckSvg />
                            <Text style={{ ...GlobalStyles.textRegular15 }}>30% Of Your Expenses, Looks Good</Text>
                        </View>
                    </View>
                    
                    <View style={{flex:2}}>
                     
                     <TransactionsSectionList
                              
                                sections={sections}
                                hasPeriod={false}
                              
                            />
                          
                    
                    </View>
                    
                    <View style={{flex:1}}>
                      <TouchableOpacity
                       
                        onPress={()=>{
                          navigation.navigate('AddSaving')
                        }}
                        style={{height: 36, width: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Add Savings</Text>
                        </TouchableOpacity>
                    </View>

            
               
            </View>

            
        </Screen>
    )
}

export default CategorySavingsScreen