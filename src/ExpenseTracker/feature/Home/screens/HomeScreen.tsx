import { ScrollView, Text, View } from "react-native";
import Colors from "../../../utilities/Colors";
import { WINDOW_HEIGHT } from "../../../utilities/Constants";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import IncomeSvg from "../../../assets/svg/IncomeSvg";
import CheckSvg from "../../../assets/svg/CheckSvg";
import { useEffect, useMemo, useState } from "react";
import ExpensesSvg from "../../../assets/svg/ExpensesSvg";
import TimePeriodTab from "../../ExpenseAnalysis/components/TimePeriodTab";
import HomeCard from "../components/HomeCard";
import TrancactionsPerPeriod from "../components/TransactionsPerPeriod";
import { CompositeScreenProps, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList, MainTabParamList, RootTabParamList } from "../../../navigator/types";
import Screen from "../../../components/Screen";
import { useExpenseStore } from "../../../context/useTransactionStore";
import { getCategoryTotals, getDailyTransactions, getIncomeLastWeek, getMonthlyTransactions, getTotalIncome, getTotalTransactions, getWeeklyTransactions } from "../../../utilities/TransactionHelpers";
import { Transaction } from "../../Notifications/types/types";
import LottieView from "lottie-react-native";


type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeParamList, "Home">,
  NativeStackScreenProps<MainTabParamList>
>;

function HomeScreen({ navigation }: Props) {

  const [timespan, setTimespan] = useState('Daily')
  const {expenses} = useExpenseStore()

  console.log('expenses',expenses)

  const totalIncome = useMemo(()=>{
    return getTotalIncome(expenses).toFixed(2)
  },[expenses])



   const totalExpenses = useMemo(()=>{
    return getTotalTransactions(expenses).toFixed(2)
  },[expenses])
  
  const transactions = useMemo(() => {
  if (timespan == "Daily") {
    return getDailyTransactions(expenses);
  }

  if (timespan == "Weekly") {
    return getWeeklyTransactions(expenses);
  }

  return getMonthlyTransactions(expenses);
}, [timespan, expenses]);


useEffect(() => {
  console.log("Expenses changed:", expenses.length);
}, [expenses]);

  return (

    <Screen title="" isHome={true} onNotificationPress={() => { navigation.navigate('Notifications') }}>

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


          <HomeCard />

          <TimePeriodTab periods={['Daily', 'Weekly', 'Monthly']} timespan={timespan} setTimespan={setTimespan} containerStyle={{ marginTop: 20 }} />

          <TrancactionsPerPeriod data={transactions} timespan={timespan}/>

        </ScrollView>

      </View>



    </Screen>
  )
}
export default HomeScreen;