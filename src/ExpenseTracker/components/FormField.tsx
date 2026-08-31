import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { GlobalStyles } from "../utilities/GlobalStyles"
import Colors from "../utilities/Colors";
import DateInput from "./DateInput";
import CategoriesDropdown from "./CategoriesDropdown";
import { Eye, EyeSlash } from "iconsax-react-nativejs";


type FormFieldProps = {
    containerStyle?: object,
    dropdownData?: any [],
    fieldType: string;
    title?: string;
    value: any;
    setValue: (val:any)=>void;
    valueVisible?: boolean
    setValueVisible?: (val:any)=>void
}
function FormField({value,setValue,title,fieldType,containerStyle,dropdownData,valueVisible,setValueVisible}:FormFieldProps) {

    const renderField = (fieldType:string) => {
        switch(fieldType){
            case 'Date':
                return <DateInput date={value} setDate={setValue}/>
            case 'Dropdown':
                return <CategoriesDropdown dropdownData={dropdownData} selectedCategory={value} setSelectedCategory={setValue}/>
            case 'NumberInput':
                return ( 
                <View
                                    
                                    style={{ height: 41, borderRadius: 15, backgroundColor: Colors.LightGreen, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                    
                <TextInput 
                                    style={{width:'100%',height:'100%',...GlobalStyles.textMedium13, color: Colors.DarkGreenBar}}
                                    value={value}
                                    onChangeText={(val)=>setValue(val)}
                                    keyboardType="decimal-pad"
                                    />
                                    </View>
                                )
            case 'TextInput':
                return ( 
                <View
                                    
                                    style={{ height: 41, borderRadius: 15, backgroundColor: Colors.LightGreen, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                    
                <TextInput 
                                    style={{width:'100%',height:'100%',...GlobalStyles.textMedium13, color: Colors.DarkGreenBar}}
                                    value={value}
                                    onChangeText={(val)=>setValue(val)}
                                  
                                    />
                            </View>
                )

            case 'Password':
                return ( 
                <View
                                    
                                    style={{ height: 41, borderRadius: 15, backgroundColor: Colors.LightGreen, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                    
                                <TextInput 
                                    style={{width:'90%',height:'100%',...GlobalStyles.textMedium13, color: !valueVisible ? 'gray' : Colors.DarkGreenBar,fontSize:20,}}
                                    value={value}
                                    onChangeText={(val)=>setValue(val)}
                                    secureTextEntry={!valueVisible}
                                    />
                                
                                {!valueVisible ? 
                                <TouchableOpacity onPress={()=>setValueVisible!(!valueVisible)}>
                                            <EyeSlash size={20} color={'black'}/>
                                    </TouchableOpacity> : 
                                    <TouchableOpacity onPress={()=>setValueVisible!(!valueVisible)}>
                                            <Eye size={20} color={'black'}/>
                                    </TouchableOpacity>
                                    
                                    }
                            </View>
                )
            case 'TextArea':
                return (
                    <View
                                    style={{ 
                                    flex:1,
                                    borderRadius: 15, 
                                    backgroundColor: Colors.LightGreen, 
                                    flexDirection: 'row',  
                                    paddingHorizontal: 20,
                                    paddingVertical:10, 
                                    }}>
                                    
                                    <TextInput 
                                    style={{width:'100%',...GlobalStyles.textMedium13, color: Colors.DarkGreenBar}}
                                    value={value}
                                    multiline={true}
                                    onChangeText={(val)=>setValue(val)}
                                    
                                    />
                                    
                                </View>
                )
        }

    }   
    return (
        <View style={[{ gap: 10 },containerStyle]}>
            {title && <Text style={{ ...GlobalStyles.textMedium15 }}>{title}</Text>}



                {renderField(fieldType)}
               

       
        </View>
    )
}

export default FormField