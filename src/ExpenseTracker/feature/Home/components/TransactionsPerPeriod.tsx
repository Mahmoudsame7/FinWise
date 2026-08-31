import { FlatList, Text, View } from "react-native"
import { WINDOW_WIDTH } from "../../../utilities/Constants"
import Colors from "../../../utilities/Colors"
import MoneySvg from "../../../assets/svg/MoneySvg"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import { useCallback } from "react"
import TransactionCard from "../../../components/TransactionCard"
import { Transaction } from "../../Notifications/types/types"

type TransactionsPerPeriodProps = {
    data: Transaction[]
    timespan: string
}
function TrancactionsPerPeriod({ data, timespan }: TransactionsPerPeriodProps) {


    
    return (
        <FlatList
            style={{ marginTop: 10 }}
            data={
                // [
                //     { id: '3', name: 'Salary', category: 'Salary',amount: 4000.00, income: true },
                //     { id: '4', name: 'Rent', category: 'Rent',amount: 1000.00, income: false },
                //     { id: '5', name: 'Medicine', category: 'Medicine',amount: 300.00, income: false }
                // ]
                data
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TransactionCard
                    transaction={item}
                    timespan={timespan}
                />
            )}
        />
    )
}
export default TrancactionsPerPeriod