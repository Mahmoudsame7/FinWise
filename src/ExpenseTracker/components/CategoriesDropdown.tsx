import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { GlobalStyles } from "../utilities/GlobalStyles";
import CategoryIcon from "../feature/Categories/components/CategoryIcon";
import Colors from "../utilities/Colors";
import { Add, ArrowDown2 } from "iconsax-react-nativejs";
import CategoryList from "../feature/Search/components/CategoryList";
import { CategoriesData } from "../data/CategoriesData";

type CategoriesDropdownProps =  {
    selectedCategory: {id: number, name:string} | null;
    setSelectedCategory: (val:any)=>void;
    dropdownData?: any []
}
function CategoriesDropdown({selectedCategory,setSelectedCategory,dropdownData = CategoriesData}:CategoriesDropdownProps){
    const [showList, setShowList] = useState(false);
    const caretRotation = useSharedValue(0)
    
    const animatedCaret = useAnimatedStyle(() => ({
            transform: [{ rotateX: `${caretRotation.value}deg` }],
    }));
    useEffect(() => {
            caretRotation.value = withTiming(
                showList == true ? 180 : 0, { duration: 300 }
            )
    }, [showList])
    return (
        <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        // AnimateList()
                                        setShowList(!showList)
                                    }}
                                    style={{ height: 41, borderRadius: 15, backgroundColor: Colors.LightGreen, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                    {selectedCategory == null ?
                                        <Text style={{ ...GlobalStyles.textMedium13, color: Colors.DarkGreenBar }}>Select Category</Text> :
                                        <View style={{ flexDirection: 'row' }}>
                                            <CategoryIcon name={selectedCategory.name} color={Colors.DarkGreenBar} size={20} />
                                            <Text style={{ ...GlobalStyles.textMedium15, marginHorizontal: 5, color: Colors.DarkGreenBar }}>{selectedCategory.name}</Text>

                                        </View>
                                    }
                                    {
                                        !selectedCategory ?
                                            <Animated.View style={[animatedCaret]}>
                                                <ArrowDown2 size={20} color={Colors.DarkGreenBar} />
                                            </Animated.View>
                                            :

                                            <TouchableOpacity onPress={() => { setSelectedCategory(null) }}>
                                                <Add color={Colors.DarkGreenBar} style={{ transform: [{ rotate: '45deg' }] }} />
                                            </TouchableOpacity>
                                    }

                                </TouchableOpacity>

                                <CategoryList data={dropdownData} setSelectedCategory={setSelectedCategory} setShowList={setShowList} showList={showList} />

                            </View>
    )
}

export default CategoriesDropdown