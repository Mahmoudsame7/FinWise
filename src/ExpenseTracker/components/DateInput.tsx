import { Platform, Text, TouchableOpacity, View } from "react-native"
import { GlobalStyles } from "../utilities/GlobalStyles";
import Colors from "../utilities/Colors";
import CalendarSvg from "../assets/svg/CalendarSvg";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";

type DateInputProps = {
    // show:boolean;
    // setShow:(val:boolean)=>void,
    date: Date,
    setDate: (date:Date)=>void
}
function DateInput({date,setDate}:DateInputProps) {

    const [show, setShow] = useState(false);
     const onChange = (
            event: DateTimePickerEvent,
            selectedDate?: Date
        ) => {
            setShow(Platform.OS === "ios");
    
            if (event.type === "dismissed") {
                return;
            }
    
            if (selectedDate) {
                setDate(selectedDate);
    
                setShow(false)
            }
        };

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setShow(!show)
                }}
                style={{ height: 41, borderRadius: 15, backgroundColor: Colors.LightGreen, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                <Text style={{ ...GlobalStyles.textMedium13, color: Colors.DarkGreenBar }}>{date.toLocaleDateString()}</Text>
                <View style={{ backgroundColor: Colors.MainGreen, width: 25, height: 25, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <CalendarSvg />
                </View>


            </TouchableOpacity>
            {show == true &&
                <DateTimePicker
                    style={{ alignSelf: 'center' }}
                    value={date}
                    mode="date"
                    display={Platform.OS == 'ios' ? 'inline' : 'default'}
                    onChange={onChange}
                    accentColor={Colors.MainGreen}
                />
            }

        </View>
    )
}

export default DateInput