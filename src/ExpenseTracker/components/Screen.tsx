import React, { PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../utilities/Colors";
import BackSvg from "../assets/svg/BackSvg";
import NotificationSvg from "../assets/svg/NotificationSvg";
import { GlobalStyles } from "../utilities/GlobalStyles";


type ScreenProps = React.PropsWithChildren<{
  title?: string;
  isHome?: boolean;
  hasNotificationBtn?: boolean;
  hasBack?: boolean
  onBack?: () => void;
  onNotificationPress?: () => void;
}>;

function Screen({ title, onBack, onNotificationPress, children, hasNotificationBtn = true, isHome = false,hasBack=true }: ScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.MainGreen }}>
      <View
        style={{
          marginHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: safeAreaInsets.top,
        }}
      >
        {
          isHome == false ?
            hasBack == true ? 
            <TouchableOpacity onPress={onBack}>
              <BackSvg />
            </TouchableOpacity>  : 
            <></>
            :
            <View>
              <Text style={{ ...GlobalStyles.textSemiBold20 }}>Hi, Welcome Back</Text>
              <Text style={{ ...GlobalStyles.textMedium13 }}>Good Morning</Text>
            </View>
        }

        <Text style={GlobalStyles.title}>{title}</Text>

        {
          <TouchableOpacity
            onPress={onNotificationPress}
            disabled={hasNotificationBtn == false}
            style={{

              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: hasNotificationBtn == true ? Colors.LightGreen : 'transparent',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {hasNotificationBtn == true && <NotificationSvg />}
          </TouchableOpacity>
        }
      </View>

      {children}
    </View>
  );
}

export default Screen;