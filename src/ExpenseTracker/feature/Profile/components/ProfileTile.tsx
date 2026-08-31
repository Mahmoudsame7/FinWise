import { Text, TouchableOpacity, View } from "react-native"
import ProfileSvg from "../../../assets/svg/ProfileSvg"
import Colors from "../../../utilities/Colors"
import { GlobalStyles } from "../../../utilities/GlobalStyles"
import { ArrowRight, ArrowRight2 } from "iconsax-react-nativejs"

type ProfileTileProps = {
    title: string,
    iconComponent: React.ReactNode,
    onPress?: ()=>void
    hasArrow?:boolean,
    iconContainerStyle?:object
}
function ProfileTile({title,iconComponent,onPress,hasArrow=false,iconContainerStyle}:ProfileTileProps) {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row',justifyContent:'space-between', alignItems: 'center', marginVertical: 15 }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={[{ width: 55, height: 55, borderRadius: 20, backgroundColor: Colors.LightBlue, justifyContent: 'center', alignItems: 'center'},iconContainerStyle]}>
                    {iconComponent}
                </View>
                <Text style={{ ...GlobalStyles.textMedium15, marginHorizontal: 20 }}>{title}</Text>
            </View>
            <ArrowRight2 size={20}  color={"black"}/>
        </TouchableOpacity>
    )
}

export default ProfileTile