import { ScrollView, Text, View } from "react-native";
import Colors from "../../../utilities/Colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import IncomeSvg from "../../../assets/svg/IncomeSvg";
import CheckSvg from "../../../assets/svg/CheckSvg";
import { useMemo, useState } from "react";
import ExpensesSvg from "../../../assets/svg/ExpensesSvg";
import IncomeExpensePerPeriod from "../components/IncomeExpensePerPeriod";
import TimePeriodTab from "../components/TimePeriodTab";
import PeriodAnalysisChart from "../components/PeriodAnalysisChart";
import TargetSection from "../../../components/TargetSection";
import { AnalysisParamList, MainTabParamList } from "../../../navigator/types";
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "../../../components/Screen";
import { generateDailyBarData, generateMonthlyBarData, generateWeeklyBarData, generateYearlyBarData, getTotalIncome, getTotalTransactions } from "../../../utilities/TransactionHelpers";
import { useExpenseStore } from "../../../context/useTransactionStore";

type Props = CompositeScreenProps<
  NativeStackScreenProps<AnalysisParamList, "Analysis">,
  NativeStackScreenProps<MainTabParamList>
>;
function ExpenseAnalysisScreen({ navigation }: Props) {
  const [timespan, setTimespan] = useState('daily')
  const {expenses} = useExpenseStore()


   const totalIncome = useMemo(()=>{
   
      return getTotalIncome(expenses).toFixed(2)
    },[expenses])
  
  
  
     const totalExpenses = useMemo(()=>{
      return getTotalTransactions(expenses).toFixed(2)
    },[expenses])


   
    
        const barData = useMemo(()=>{
          if(timespan == 'daily'){
          return generateDailyBarData(expenses)
          }else if(timespan == 'weekly'){
            return generateWeeklyBarData(expenses)
          }else if(timespan == 'monthly'){
            return generateMonthlyBarData(expenses)
          }else if(timespan == 'yearly'){
            return generateYearlyBarData(expenses)
          }
        },[expenses,timespan])

  return (
    <Screen title="Analysis" onBack={() => navigation.goBack()} onNotificationPress={() => { navigation.navigate('Notifications') }}>

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
        <ScrollView contentContainerStyle={{ paddingBottom: WINDOW_HEIGHT * 0.1 + 20 }}>
          <TimePeriodTab periods={['daily', 'weekly', 'monthly', 'yearly']} timespan={timespan} setTimespan={setTimespan}  />

          <PeriodAnalysisChart data={barData!.data} timespan={timespan} onSearchPress={()=>{navigation.navigate('Search')}}/>

          <IncomeExpensePerPeriod income={barData!.totalIncome.toFixed(2)} expense={barData!.totalExpense.toFixed(2)}/>

          {/* target section */}
          <TargetSection />


        </ScrollView>

      </View>



    </Screen>
  )
}
export default ExpenseAnalysisScreen;