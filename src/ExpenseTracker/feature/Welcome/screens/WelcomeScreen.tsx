import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../../utilities/Colors"
import { CompositeScreenProps, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BoardingParamList, MainTabParamList } from "../../../navigator/types";
import Screen from "../../../components/Screen";
import { GlobalStyles } from "../../../utilities/GlobalStyles";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../utilities/Constants";
import HandGoldSvg from "../../../assets/svg/HandGoldSvg";
import { useRef, useState } from "react";
import HandMobileSvg from "../../../assets/svg/HandMobileSvg";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Props = CompositeScreenProps<
    NativeStackScreenProps<BoardingParamList, "WelcomeScreen">,
    NativeStackScreenProps<MainTabParamList>
>;
function WelcomeScreen({ navigation }: Props) {

    const flatlistRef = useRef<FlatList | null>(null)
    const flatlistRef2 = useRef<FlatList | null>(null)
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        // Divide current horizontal position by the total width of one item
        const index = Math.round(contentOffsetX / WINDOW_WIDTH);

        setCurrentIndex(index);
    };

    return (
        <Screen hasBack={false} hasNotificationBtn={false} >

            <View style={{ height: 100,marginVertical:WINDOW_HEIGHT*0.06 }}>
                <FlatList
                    data={['1', '2']}
                    horizontal
                    scrollEnabled={false}
                    ref={flatlistRef2}
                    onScroll={handleScroll}
                    renderItem={({ item, index }) => {
                        if (index == 0) {
                            return (
                                <View style={{ width: WINDOW_WIDTH }}>
                                    <Text style={{ ...GlobalStyles.textSemiBold20, fontSize: 30, textAlign: 'center' }}>
                                        Welcome to Expense Manager
                                    </Text>
                                </View>
                            )
                        }
                        else{
                            return (
                                <View style={{ width: WINDOW_WIDTH }}>
                                    <Text style={{ ...GlobalStyles.textSemiBold20, fontSize: 30, textAlign: 'center' }}>
                                        ¿Are you ready to take control of your finaces?
                                    </Text>
                                </View>
                            )
                        }
                    }}
                />
            </View>


            <View style={{ flex: 1, backgroundColor: Colors.HoneyDew, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center' }}>

                <View style={{ height: 240, marginTop: WINDOW_HEIGHT * 0.1 }}>
                    <FlatList
                        data={[1, 2]}
                        ref={flatlistRef}
                        horizontal
                        scrollEnabled={false}
                        onScroll={handleScroll}
                        renderItem={({ item, index }) => {

                            if (index == 0) {
                                return (
                                    <View style={{ width: WINDOW_WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ width: 220, height: 220, borderRadius: 110, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center' }}>
                                            <HandGoldSvg width={270} height={270} />
                                        </View>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{ width: WINDOW_WIDTH, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ width: 220, height: 220, borderRadius: 110, backgroundColor: Colors.LightGreen, justifyContent: 'center', alignItems: 'center' }}>
                                            <HandMobileSvg width={290} height={290} />
                                        </View>
                                    </View>
                                )
                            }

                        }}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    if (currentIndex == 0) {
                        flatlistRef.current!.scrollToIndex({
                            animated: true,
                            index: 1
                        })
                        flatlistRef2.current!.scrollToIndex({
                            animated: true,
                            index: 1
                        })
                    } else {
                        navigation.navigate('LoginScreen')
                    }
                }} style={{ alignSelf: 'center', marginTop: 40 }}>
                    <Text style={{ ...GlobalStyles.textSemiBold20, fontSize: 30 }}>Next</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 10, marginTop: 20 }}>
                    <View style={{ width: 14, height: 14, borderRadius: 7, borderWidth: currentIndex == 0 ? 0 : 2, backgroundColor: currentIndex == 0 ? Colors.MainGreen : 'white' }} />

                    <View style={{ width: 14, height: 14, borderRadius: 7, borderWidth: currentIndex == 1 ? 0 : 2, backgroundColor: currentIndex == 1 ? Colors.MainGreen : 'white' }} />

                </View>

            </View>
        </Screen>
    )
}

export default WelcomeScreen