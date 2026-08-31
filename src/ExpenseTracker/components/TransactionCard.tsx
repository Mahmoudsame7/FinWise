import { Text, View } from "react-native"
import MoneySvg from "../assets/svg/MoneySvg"
import Colors from "../utilities/Colors"
import { WINDOW_WIDTH } from "../utilities/Constants"
import { GlobalStyles } from "../utilities/GlobalStyles"
import CategoryIcon from "../feature/Categories/components/CategoryIcon"
import { Transaction } from "../feature/Notifications/types/types"

type TransactionProps = {
    containerStyle?: object,
    hasPeriod?:boolean,
    timespan?:string
    transaction: Transaction
}
function TransactionCard({containerStyle,hasPeriod=true,transaction,timespan}: TransactionProps) {
const transactionDate = new Date(transaction.date!);
    const formatted = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
}).format(transactionDate) ?? 'April 30';
    return (
        <View style={[{ width: WINDOW_WIDTH - 40, flexDirection: 'row', alignSelf: 'center', marginVertical: 12 }, containerStyle]}>
            <View style={{flexDirection:'row',flex:2}}>
                <View style={{ width: 50, height: 50, borderRadius: 18, backgroundColor: Colors.LightBlue, alignItems: 'center', justifyContent: 'center' }}>
                    <CategoryIcon name={transaction.category} size={30} color={Colors.HoneyDew}/>
                    
                </View>
                <View style={{ justifyContent: 'space-around', gap: 2 }}>
                    <Text style={{ ...GlobalStyles.textMedium15, color: Colors.DarkGreen, marginHorizontal: 10 }}>{transaction.name}</Text>
                    <Text style={{ ...GlobalStyles.textSemiBold12, color: Colors.OceanBlue, marginHorizontal: 10 }}>{transaction.time} - {formatted}</Text>
                </View>
            </View>
            {hasPeriod == true &&
            <View style={{flexDirection:'row',flex:1}}> 
                <View style={{ width: 1, backgroundColor: Colors.MainGreen }} />
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{ ...GlobalStyles.textMedium13, color: Colors.DarkGreen, alignSelf: 'center' }}>{timespan ?? 'Monthly'}</Text>
                </View>
                <View style={{ width: 1, backgroundColor: Colors.MainGreen }} />
            </View>
            }
            <View style={{justifyContent:'center',alignItems:hasPeriod==true ? 'center':'flex-end',flex:1}}>
                <Text style={{ ...GlobalStyles.textMedium15, color: transaction.income ? Colors.DarkGreen : Colors.OceanBlue }}>{transaction.income ? `$${transaction.amount}` : `-$${transaction.amount}` }</Text>
            </View>
        </View>
    )
}

export default TransactionCard