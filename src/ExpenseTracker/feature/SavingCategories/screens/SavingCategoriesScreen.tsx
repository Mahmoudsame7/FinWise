import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Screen from "../../../components/Screen"
import IncomeSvg from "../../../assets/svg/IncomeSvg"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import Colors from "../../../utilities/Colors"
import ExpensesSvg from "../../../assets/svg/ExpensesSvg"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants"
import CheckSvg from "../../../assets/svg/CheckSvg"
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { CategoriesParamList, MainTabParamList } from "../../../navigator/types"
import { CategoriesData } from "../../../data/CategoriesData"
import CategoryIcon from "../../Categories/components/CategoryIcon"
import { SavingCategoriesData } from "../../../data/SavingCategoriesData"
import PlusSvg from "../../../assets/svg/PlusSvg"
import ReactNativeModal from "react-native-modal"
import { useState } from "react"
import { useExpenseStore } from "../../../context/useTransactionStore"

type Props = CompositeScreenProps<
  NativeStackScreenProps<CategoriesParamList, "SavingCategories">,
  NativeStackScreenProps<MainTabParamList>
>;

function SavingCategoriesScreen({navigation}:Props){

    const [modalVisible,setModalVisible] = useState(false)
    const [newCategory,setNewCategory] = useState<string | null>(null)
  
    const {savingCategories,addNewSavingCategory} = useExpenseStore()

    return (
        <Screen title="Savings" onBack={() => navigation.goBack()} onNotificationPress={() => navigation.navigate('Notifications')}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 30 }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <IncomeSvg />
            <Text style={{ ...GlobalStyles.textRegular12 }}>Total Balance</Text>
          </View>
          <Text style={{ ...GlobalStyles.textBold24, color: 'white' }}>$7.783.00</Text>
        </View>
        <View style={{ width: 2, backgroundColor: Colors.LightGreen }} />
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <ExpensesSvg />
            <Text style={{ ...GlobalStyles.textRegular12 }}>Total Expense</Text>
          </View>
          <Text style={{ ...GlobalStyles.textBold24, color: Colors.OceanBlue }}>-$1.187.40</Text>
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
        <ScrollView contentContainerStyle={{paddingBottom: WINDOW_HEIGHT*0.1+10}}>

          <View style={{ width: WINDOW_WIDTH - 50, alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                    {
              savingCategories.map((item, index) => {
                return (
                  <View key={item.id} style={{ width: (WINDOW_WIDTH - 50) / 3 - 8, justifyContent: 'center', alignItems: 'center',marginVertical:8 }}>
                    <TouchableOpacity
                    onPress={()=>{
                     
                        navigation.navigate('CategorySavings')
                      
                    }}
                    style={{ width: '100%', height: 105, backgroundColor: Colors.LightBlue, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                      
                      <CategoryIcon name={item.name} size={70} color={Colors.HoneyDew}/>

                    </TouchableOpacity>
                    <Text style={{ ...GlobalStyles.textMedium15, marginTop: 5 }}>{item.name}</Text>
                  </View>
                )
              })
            }


            <View style={{ width: (WINDOW_WIDTH - 50) / 3 - 8, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={()=>setModalVisible(true)} style={{ width: '100%', height: 105, backgroundColor: Colors.LightBlue, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                <PlusSvg color={Colors.HoneyDew} width={70} height={70} />
              </TouchableOpacity>
              <Text style={{ ...GlobalStyles.textMedium15, marginTop: 5 }}>More</Text>
            </View>
          </View>

          
        </ScrollView>
        </View>


           <ReactNativeModal 
      backdropOpacity={0.3}
      
      isVisible={modalVisible}
      >
        <View style={{width:WINDOW_WIDTH-70,alignSelf:'center',backgroundColor:Colors.HoneyDew,alignItems:'center',justifyContent:'center',borderRadius:10,paddingHorizontal:30,paddingVertical:50,gap:15,}}>
          <Text style={{...GlobalStyles.textBold20}}>New Category</Text>
          <View 
          style={{width:'100%',backgroundColor:Colors.LightGreen,borderRadius:18,height:37}}>
            <TextInput 
            onChangeText={(val)=>setNewCategory(val)}
            style={{marginHorizontal:20,height:'100%',...GlobalStyles.textMedium15}}
            placeholderTextColor={Colors.MainGreen}
            placeholder="Write..."
            />
          </View>

          <TouchableOpacity 
          onPress={()=>{
            addNewSavingCategory({
              id: savingCategories.length+1,
              name: newCategory!
            })
            setModalVisible(false)
          }}
          style={{ height: 36, width: '60%', borderRadius: 20, backgroundColor: Colors.MainGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Save</Text>
                        </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>{
            
            setModalVisible(false)
          }}
          style={{ height: 36, width: '60%', borderRadius: 20, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ ...GlobalStyles.textMedium15 }}>Cancel</Text>
                        </TouchableOpacity>
          
        </View>
      </ReactNativeModal>
    </Screen>
    )
}

export default SavingCategoriesScreen