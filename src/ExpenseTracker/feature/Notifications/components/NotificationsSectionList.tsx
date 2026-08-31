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
import Transaction from '../../../components/TransactionCard';
import Colors from '../../../utilities/Colors';
import CalendarSvg from '../../../assets/svg/CalendarSvg';
import Notification from './Notification';
import {  NotificationType } from '../types/types';




type Section = {
  id: string;
  title: string;
  data: NotificationType[];
};

type Props = {
  sections: Section[];
  onItemPress?: (item: NotificationType) => void;
};

const NotificationsSectionList = ({ sections, onItemPress }: Props) => {
  const renderItem = ({ item,index }: ListRenderItemInfo<NotificationType>) => (
    <Notification notification={item}/>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => {

   
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
            <Text style={{...GlobalStyles.textRegular15}}>{section.title}</Text>
        </View>
    )
   
  
  };

  return (
    <SectionList
      style={{ marginHorizontal: 20 }}
      
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default React.memo(NotificationsSectionList);

