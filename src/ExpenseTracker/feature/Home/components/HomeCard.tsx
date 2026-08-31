import { Text, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { WINDOW_WIDTH } from "../../../utilities/Constants"
import ProgressView from "../../../components/ProgressView"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import CarSvg from "../../../assets/svg/CarSvg"
import MoneySvg from "../../../assets/svg/MoneySvg"
import FoodSvg from "../../../assets/svg/FoodSvg"
import { useExpenseStore } from "../../../context/useTransactionStore"
import { useMemo } from "react"
import { getCategoryTotals, getIncomeLastWeek, getSpecificCategoryTotalsInPeriod } from "../../../utilities/TransactionHelpers"

function HomeCard(){

  const {expenses} = useExpenseStore()
    
  
   

    const TotalFoodLastMonth = 200
    
    // useMemo(()=>{
    //   return getSpecificCategoryTotalsInPeriod(expenses,'week').Food.toFixed(2)
    // },[expenses])
 

    const RevenueLastWeek = useMemo(()=>{
      return getIncomeLastWeek(expenses).toFixed(2)
    },[expenses])
    
    return (
         <View style={{flexDirection:'row',backgroundColor:Colors.MainGreen,width:WINDOW_WIDTH-40,alignSelf:'center',borderRadius:30}}>
             
              <ProgressView
              customStyle={{backgroundColor:'transparent',flex:1}}
              innerCircleSize={65}
              innerCircleColor={'transparent'}
              percentage={50}
              targetName="Savings On Goals"
              targetTextStyle={{ color: Colors.DarkGreen, ...GlobalStyles.textMedium13 }}
              component={
                <CarSvg />
              }
              />

              <View style={{width:3,backgroundColor:Colors.HoneyDew,marginVertical:15}}/>
              <View style={{flex:3,marginVertical:15,justifyContent:'space-around',marginHorizontal:20}}>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:40,alignItems:'center'}}>
                         <MoneySvg />
                    </View>
                   
                    <View style={{justifyContent:'center'}}>
                      <Text style={{...GlobalStyles.textRegular12,color:Colors.DarkGreen,marginHorizontal:10}}>Revenue Last Week</Text>
                      <Text style={{...GlobalStyles.textSemiBold15,color:Colors.DarkGreen,marginHorizontal:10}}>${RevenueLastWeek}</Text>
                    </View>
                </View>
                <View style={{width: '100%', backgroundColor: Colors.HoneyDew, height:3}}/>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                     <View style={{width:40,alignItems:'center'}}>
                         <FoodSvg />
                    </View>
                    <View style={{justifyContent:'center'}}>
                      <Text style={{...GlobalStyles.textRegular12,color:Colors.DarkGreen,marginHorizontal:10}}>Food Last Week</Text>
                      <Text style={{...GlobalStyles.textSemiBold15,marginHorizontal:10,color:Colors.OceanBlue}}>-${TotalFoodLastMonth}</Text>
                    </View>
                </View>



              </View>
          </View>
    )
}

export default HomeCard