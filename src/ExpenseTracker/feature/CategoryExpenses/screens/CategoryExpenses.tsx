import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Screen from "../../../components/Screen"
import IncomeSvg from "../../../assets/svg/IncomeSvg"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import ExpensesSvg from "../../../assets/svg/ExpensesSvg"
import Colors from "../../../utilities/Colors"
import CheckSvg from "../../../assets/svg/CheckSvg"
import { CategoriesParamList, MainTabParamList } from "../../../navigator/types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { CompositeScreenProps } from '@react-navigation/native';
import { WINDOW_HEIGHT } from "../../../utilities/Constants"
import TransactionsSectionList from "../../Transactions/components/TransactionsSectionList"
import { useMemo } from "react"
import { getTotalIncome, getTotalTransactions, groupTransactionsByMonth } from "../../../utilities/TransactionHelpers"
import { useExpenseStore } from "../../../context/useTransactionStore"

type Props = CompositeScreenProps<
  NativeStackScreenProps<CategoriesParamList, "CategoryExpenses">,
  NativeStackScreenProps<MainTabParamList>
>;

function CategoryExpenses({navigation,route}:Props){
    const ScreenTitle = route.params.title
    // const sections = [
    //     {
    //         id: 1,
    //         title: 'April',
    //         data: [
    //             { id: '1', name: 'Dinner',amount: 26.00,category:'Food',income: false,date:'12-01-2024' },
    //             { id: '2', name: 'Delivery Pizza', amount: 18.35,category:'Food',income: false,date:'12-01-2024' },
    //             { id: '3', name: 'Lunch', amount: 15.40,category:'Food',income: false,date:'12-01-2024' },
    //             { id: '4', name: 'Brunch', amount: 12.13,category:'Food',income: false,date:'12-01-2024' },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         title: 'March',
    //         data: [
    //            { id: '5', name: 'Lunch', amount: 15.40,category:'Food',income: false,date:'12-01-2024' },
    //            { id: '6', name: 'Brunch', amount: 12.13,category:'Food',income: false,date:'12-01-2024' },
    //         ],
    //     },
       
    // ];
     const {expenses} = useExpenseStore()

     const totalIncome = useMemo(()=>{
         return getTotalIncome(expenses).toFixed(2)
       },[expenses])
     
     
     
        const totalExpenses = useMemo(()=>{
         return getTotalTransactions(expenses).toFixed(2)
       },[expenses])

     const sections = useMemo(() => {
            return groupTransactionsByMonth(expenses,'expense',ScreenTitle)
      }, [expenses])

    return(
    <Screen title={ScreenTitle} onBack={() => navigation.goBack()} onNotificationPress={() => navigation.navigate('Notifications')}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 30 }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <IncomeSvg />
            <Text style={{ ...GlobalStyles.textRegular12 }}>Total Balance</Text>
          </View>
          <Text style={{ ...GlobalStyles.textBold24, color: 'white' }}>${totalIncome}</Text>
        </View>
        <View style={{ width: 2, backgroundColor: Colors.LightGreen }} />
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <ExpensesSvg />
            <Text style={{ ...GlobalStyles.textRegular12 }}>Total Expense</Text>
          </View>
          <Text style={{ ...GlobalStyles.textBold24, color: Colors.OceanBlue }}>-${totalExpenses}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 40, height: 27, backgroundColor: 'black', borderRadius: 14, justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ ...GlobalStyles.textRegular12, color: Colors.HoneyDew, marginHorizontal: 20 }}>30%</Text>
        <View style={{ position: 'absolute', height: 27, right: 0, bottom: 0, backgroundColor: Colors.HoneyDew, width: '70%', borderRadius: 14, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{ ...GlobalStyles.textMedium13, color: 'black', marginHorizontal: 20 }}>$20,000.00</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, gap: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 40 }}>
        <CheckSvg />
        <Text style={{ ...GlobalStyles.textRegular15 }}>30% Of Your Expenses, Looks Good</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
            {/* <ScrollView contentContainerStyle={{ paddingBottom: WINDOW_HEIGHT * 0.1 + 20 }}> */}
                          <View style={{flex:3}}> 
                            <TransactionsSectionList
                                
                                  sections={sections}
                                  hasPeriod={false}
                            
                              />
                            </View> 
                          
                        <View style={{flex:1}}> 
                        <TouchableOpacity
                        onPress={()=>{
                          navigation.navigate('AddExpense')
                        }}
                        style={{ height: 36, minWidth: 169, borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10,paddingHorizontal:5 }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Add Expense</Text>
                        </TouchableOpacity>
                        </View>
            {/* </ScrollView> */}
            
      </View>
      </Screen>
    )
}
export default CategoryExpenses