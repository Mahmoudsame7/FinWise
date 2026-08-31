import { Text, View } from "react-native";
import IncomeSvg from "../../../assets/svg/IncomeSvg";
import Colors from "../../../utilities/Colors";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import ExpensesSvg from "../../../assets/svg/ExpensesSvg";

type IncomeExpensePerPeriodProps = {
    income?: string,
    expense?: string
}
function IncomeExpensePerPeriod({ income, expense }: IncomeExpensePerPeriodProps) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40, marginTop: 30 }}>
            <View style={{ alignItems: 'center' }}>
                <IncomeSvg width={25} height={25} color={Colors.MainGreen} />
                <View style={{ alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ ...GlobalStyles.textMedium15 }}>Income</Text>
                    <Text style={{ ...GlobalStyles.title }}>{`${income ?? `4,120.00`}`}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ExpensesSvg width={25} height={25} color={Colors.OceanBlue} />
                <View style={{ alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ ...GlobalStyles.textMedium15 }}>Expense</Text>
                    <Text style={{ ...GlobalStyles.title, color: Colors.OceanBlue }}>{`${expense ?? `1,187.40`}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default IncomeExpensePerPeriod;