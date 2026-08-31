import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import CategoryIcon from "../../Categories/components/CategoryIcon"
import { FlatList, Text, TouchableOpacity } from "react-native"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import { CategoriesData } from "../../../data/CategoriesData"
import { WINDOW_WIDTH } from "../../../utilities/Constants"
import Colors from "../../../utilities/Colors"
import { useEffect } from "react"

type CategoryListProps = {
    setSelectedCategory: (item: any) => void;
    setShowList: (val: boolean) => void;
    showList: boolean,
    data: any []

}
function CategoryList({ setSelectedCategory, setShowList,showList,data }: CategoryListProps) {
  
    const categoryAnimatedHeight = useSharedValue(0);
    const categoryAnimatedBorderWidth = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        height: categoryAnimatedHeight.value,
        borderWidth:categoryAnimatedBorderWidth.value,
        
    }));

   

    useEffect(() => {
        categoryAnimatedHeight.value = withTiming(
            showList ? 150 : 0,
            { duration: 300 }
        );
        categoryAnimatedBorderWidth.value = withTiming(
            showList ? 1 : 0,
            { duration: 300 }
        );
      
        
    }, [showList]);
    return (
       <Animated.View style={[{ width: WINDOW_WIDTH - 40, alignSelf: 'center', backgroundColor: Colors.LightGreen, borderRadius: 15,  borderColor: Colors.MainGreen,  marginTop: 10 }, animatedStyle]}>
                                    <FlatList
                                        style={{marginHorizontal:10,marginVertical:10}}
                                        data={data}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setSelectedCategory(item)
                                                        setShowList(false)
                                                    }}
                                                    key={item.id} style={{ marginVertical: 5, flexDirection: 'row' }}>
                                                    <CategoryIcon name={item.name} size={25} color={Colors.DarkGreenBar} />
                                                <Text style={{ ...GlobalStyles.textMedium15, marginHorizontal: 5, color: Colors.DarkGreenBar }}>{item.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        }}
                                    />
                                </Animated.View>
    )
}

export default CategoryList