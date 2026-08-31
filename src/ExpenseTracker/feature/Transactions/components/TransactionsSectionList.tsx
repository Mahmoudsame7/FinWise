import React from 'react';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../../../utilities/GlobalStyles';
import Colors from '../../../utilities/Colors';
import CalendarSvg from '../../../assets/svg/CalendarSvg';
import TransactionCard from '../../../components/TransactionCard';
import { Transaction } from '../../Notifications/types/types';
import { Section } from '../types/types';
import { WINDOW_HEIGHT } from '../../../utilities/Constants';






type Props = {
  customContentContainerStyle?:object
  containerStyle?:object
  sections: Section[];
  onItemPress?: (item: Transaction) => void;
  hasPeriod?: boolean
};

const TransactionSectionList = ({ sections, onItemPress,hasPeriod=true,containerStyle,customContentContainerStyle }: Props) => {
  const renderItem = ({ item,index }: ListRenderItemInfo<Transaction>) => (
    <TransactionCard  transaction={item} containerStyle={{ marginVertical: 10 }} hasPeriod={hasPeriod}/>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => {

   if(section.id === 0) {
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
            <Text style={{...GlobalStyles.textMedium15}}>{section.title}</Text>
            <TouchableOpacity style={{width:24,height:24,borderRadius:12,backgroundColor:Colors.MainGreen,justifyContent:'center',alignItems:'center'}}>
                <CalendarSvg />
            </TouchableOpacity>
        </View>
    )
   }
   return (
        <Text style={{...GlobalStyles.textMedium15,marginVertical:10}}>{section.title}</Text>

   ) 
  
  };

  return (
    <SectionList
      contentContainerStyle={{...customContentContainerStyle}}
      style={[{ marginHorizontal: 20 },containerStyle]}
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default React.memo(TransactionSectionList);

