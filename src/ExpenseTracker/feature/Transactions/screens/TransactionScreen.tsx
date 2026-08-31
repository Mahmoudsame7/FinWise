import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants"
import IncomeSvg from "../../../assets/svg/IncomeSvg"
import ExpensesSvg from "../../../assets/svg/ExpensesSvg"
import TransactionsSectionList from "../components/TransactionsSectionList"
import { MainTabParamList, TransactionsParamList } from "../../../navigator/types";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "../../../components/Screen";
import { useEffect, useMemo, useState } from "react"
import { useExpenseStore } from "../../../context/useTransactionStore"
import { getBalance, getTotalIncome, getTotalTransactions, groupTransactionsByMonth } from "../../../utilities/TransactionHelpers"

type Props = CompositeScreenProps<
    NativeStackScreenProps<TransactionsParamList, "Transactions">,
    NativeStackScreenProps<MainTabParamList>
>;
function TransactionScreen({ navigation }: Props) {
    const { expenses } = useExpenseStore()

    const [transactionType, setTransactionType] = useState<string | null>(null)
  

    const sections = useMemo(() => {
        return groupTransactionsByMonth(expenses,transactionType)
    }, [expenses,transactionType])

    const totalIncome = useMemo(() => {
        return getTotalIncome(expenses).toFixed(2)
    }, [expenses])



    const totalExpenses = useMemo(() => {
        return getTotalTransactions(expenses).toFixed(2)
    }, [expenses])


    const totalBalance = useMemo(() => {
        return getBalance(expenses).toFixed(2)
    }, [expenses])


    // useEffect(() => {
    // console.log(transactionType);
    // }, [transactionType]);

    return (
        <Screen title="Transactions" onBack={() => navigation.goBack()}  onNotificationPress={() => { navigation.navigate('Notifications') }}>

            <View style={{ width: WINDOW_WIDTH - 40, backgroundColor: Colors.HoneyDew, borderRadius: 14, height: 75, alignSelf: 'center', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ ...GlobalStyles.textMedium15 }}>Total Balance</Text>
                <Text style={{ ...GlobalStyles.textBold24, color: 'black' }}>${totalBalance}</Text>
            </View>
            <View style={{ width: WINDOW_WIDTH - 40, flexDirection: 'row', alignSelf: 'center', gap: 15, marginTop: 15 }}>
                <TouchableOpacity onPress={() => {
                    if(transactionType == 'income'){
                        setTransactionType(null)
                    }
                    else{
                        setTransactionType('income')
                    }   
                }
                } style={{ flex: 1, backgroundColor: transactionType == 'income' ? Colors.OceanBlue : Colors.HoneyDew, borderRadius: 14, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <IncomeSvg color={transactionType == 'income' ? 'white':Colors.MainGreen} width={25} height={25} />
                    <Text style={{ ...GlobalStyles.textMedium15, color: transactionType == 'income' ? 'white' : 'black' }}>Income</Text>
                    <Text style={{ ...GlobalStyles.textSemiBold20, color: transactionType == 'income' ? 'white' : 'black' }}>${totalIncome}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if(transactionType == 'expense'){
                        setTransactionType(null)
                    }
                    else{
                        setTransactionType('expense')
                    } 
                    }}
                    style={{ flex: 1, backgroundColor: transactionType == 'expense' ? Colors.OceanBlue : Colors.HoneyDew, borderRadius: 14, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <ExpensesSvg color={transactionType == 'expense' ? 'white' : Colors.OceanBlue} width={25} height={25} />
                    <Text style={{ ...GlobalStyles.textMedium15, color: transactionType == 'expense' ? 'white' : 'black' }}>Expense</Text>
                    <Text style={{ ...GlobalStyles.textSemiBold20, color: transactionType == 'expense' ? 'white' : Colors.OceanBlue }}>${totalExpenses}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
                <View style={{flex:1}}>
                    <TransactionsSectionList
                        sections={sections}
                        customContentContainerStyle={{paddingBottom: WINDOW_HEIGHT*0.1+10}}
                        // onItemPress={(item) => console.log(item)}
                    />
                </View>
            </View>
        </Screen>
    )
}
export default TransactionScreen