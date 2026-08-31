import { ScrollView, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../../navigator/types";
import { useNavigation } from '@react-navigation/native';
import NotificationsSectionList from "../components/NotificationsSectionList";
import Screen from "../../../components/Screen";

type NavigationProp = BottomTabNavigationProp<RootTabParamList>;

function NotificationsScreen() {
    const navigation = useNavigation<NavigationProp>();
    const sections = [
        {
            id: 'section1',
            title: 'Today',
            data: [
                { id: '1', type: 'Reminder', title: 'Reminder', msg: 'Set up your automatic savings to meet your savings goal...' },
                { id: '2', type: 'Update', title: 'New update', msg: 'Set up your automatic savings to meet your savings goal...' },
            ],
        },
        {
            id: 'section2',
            title: 'Yesterday',
            data: [
                { id: '3', type: 'Transaction', title: 'Transactions', transaction: { id:'1',category: 'Groceries', name: 'Pantry', amount: 100.00,income: false }, msg: 'A new transaction has been registered' },
                { id: '4', type: 'Reminder', title: 'Reminder', msg: 'Set up your automatic savings to meet your savings goal...' },

            ],
        },
        {
            id: 'section3',
            title: 'This Weekend',
            data: [

                { id: '5', type: 'ExpenseRecord', title: 'Expense Record', msg: 'We recommend that you be more attentive to your finances.', },
                { id: '6', type: 'Transaction', title: 'Transactions', transaction: { id:'2',category: 'Groceries', name: 'Pantry', amount: 100.00,income: false }, msg: 'A new transaction has been registered' },


            ],
        },
    ];
    return (
        <Screen hasNotificationBtn={false} title="Notifications" onBack={() => navigation.goBack()}>

            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, marginTop: 20 }}>
                <ScrollView>

                    <NotificationsSectionList
                        sections={sections}
                        onItemPress={() => { }}
                    />

                </ScrollView>
            </View>
        </Screen>
    )
}
export default NotificationsScreen