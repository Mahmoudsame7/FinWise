import { Text, View } from "react-native"
import Colors from "../../../utilities/Colors"
import MoneySvg from "../../../assets/svg/MoneySvg"
import NotificationSvg from "../../../assets/svg/NotificationSvg"
import { NotificationType } from "../types/types"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import StarSvg from "../../../assets/svg/StarSvg"
import TransactionsSvg from "../../../assets/svg/TransactionsSvg"
import BottomRightArrowSvg from "../../../assets/svg/BottomRightArrowSvg"
import DollarSvg from "../../../assets/svg/DollarSvg"

type NotificationProps = {
    notification: NotificationType
}
function Notification({notification}:NotificationProps){

    const renderIcon = () => {
        switch(notification.type){
            case 'Update':
                return <StarSvg width={25} height={25}/>
            case 'Transaction':
                return <DollarSvg width={30} height={30}/>
            case 'ExpenseRecord':
                return<BottomRightArrowSvg width={20} height={20}/>
            case 'Reminder':
                return <NotificationSvg width={30} height={30}/>
        }
            
    }
    return (
        <View style={{flex:1,borderBottomColor:Colors.MainGreen,borderBottomWidth:1,paddingBottom:10,marginTop:12}}>
            <View style={{backgroundColor:Colors.HoneyDew,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{ width: 40, height: 40, borderRadius: 15, backgroundColor: Colors.MainGreen, alignItems: 'center', justifyContent: 'center' }}>
                    {renderIcon()}
                </View>
                <View style={{flex:1,marginHorizontal:10}}>
                    <Text style={{...GlobalStyles.textMedium15}}>{notification.title}</Text>
                    <Text style={{...GlobalStyles.textRegular12}}>{notification.msg}</Text>
                    {notification.transaction != null &&
                    <Text style={{...GlobalStyles.textRegular12,color:Colors.OceanBlue}}>{notification.transaction.category} | {notification.transaction.name} | -${notification.transaction.amount}</Text>
                    }
                </View>
            </View>
            <Text style={{...GlobalStyles.textLight13,alignSelf:'flex-end',color:Colors.OceanBlue}}>17:00 - April 24</Text>
        </View>
    )
}

export default Notification