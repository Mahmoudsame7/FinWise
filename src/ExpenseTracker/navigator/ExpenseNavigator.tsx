import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import ExpenseAnalysisScreen from "../feature/ExpenseAnalysis/screens/ExpenseAnalysisScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../utilities/Constants";
import HomeSvg from "../assets/svg/HomeSvg";
import AnalysisSvg from "../assets/svg/AnalysisSvg";
import TransactionsSvg from "../assets/svg/TransactionsSvg";
import CategoriesSvg from "../assets/svg/CategoriesSvg";
import ProfileSvg from "../assets/svg/ProfileSvg";
import Colors from "../utilities/Colors";
import HomeScreen from "../feature/Home/screens/HomeScreen";
import TransactionScreen from "../feature/Transactions/screens/TransactionScreen";
import CategoriesScreen from "../feature/Categories/screens/CategoriesScreen";
import ProfileScreen from "../feature/Profile/screens/ProfileScreen";
import NotificationsScreen from "../feature/Notifications/screens/NotificationsScreen";
import { AnalysisParamList, BoardingParamList, CategoriesParamList, HomeParamList, MainTabParamList, ProfileParamList, RootTabParamList, SettingsParamList, TransactionsParamList } from "./types";
import SearchScreen from "../feature/Search/screens/SearchScreen";
import CategoryExpenses from "../feature/CategoryExpenses/screens/CategoryExpenses";
import AddExpense from "../feature/AddExpense/screens/AddExpense";
import SavingCategoriesScreen from "../feature/SavingCategories/screens/SavingCategoriesScreen";
import CategorySavingsScreen from "../feature/CategorySavings/screens/CategorySavingsScreen";
import AddSavingScreen from "../feature/AddSaving/screens/AddSavingScreen";
import { useExpenseStore } from "../context/useTransactionStore";
import { useEffect } from "react";
import EditProfile from "../feature/EditProfile/screens/EditProfile";
import Settings from "../feature/Settings/screens/Settings";
import NotificationSettings from "../feature/Settings/screens/NotificationSettings";
import PasswordSettings from "../feature/Settings/screens/PasswordSettings";
import DeleteAccount from "../feature/Settings/screens/DeleteAccount";
import LottieView from "lottie-react-native";
import { GlobalStyles } from "../utilities/GlobalStyles";
import SplashScreen from "../feature/Splash/screens/SplashScreen";
import WelcomeScreen from "../feature/Welcome/screens/WelcomeScreen";
import LoginScreen from "../feature/Login/screens/Login";
import SignUpScreen from "../feature/Signup/screens/Signup";

const Bottomtabs = createBottomTabNavigator<RootTabParamList>();
function ExpenseBottomtabs() {

  
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <Bottomtabs.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => {
          const icons = [HomeSvg, AnalysisSvg, TransactionsSvg, CategoriesSvg, ProfileSvg]


          return (
            <View
              style={{
                backgroundColor: Colors.LightGreen,
                height: WINDOW_HEIGHT * 0.1,
                borderRadius: 50,
                flexDirection: "row",
                paddingHorizontal: 30,
                paddingVertical: 15,
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: WINDOW_WIDTH

              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {props.state.routes.map((route, index) => {
                  const focused = props.state.index === index;
                  const Icon = icons[index];

                  if(route.name!='Notifications'){
                  return (
                    <TouchableOpacity
                      key={route.key}
                      onPress={() => props.navigation.navigate(route.name)}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: focused
                          ? Colors.MainGreen
                          : "transparent",
                      }}
                    >
                      <Icon />
                    </TouchableOpacity>
                  )
                }
                })}
              </View>
            </View>
          );
        }}
      >
        <Bottomtabs.Screen name="HomeStack" component={HomeStack} />
        <Bottomtabs.Screen
          name="AnalysisStack"
          component={AnalysisStack}
        />
        <Bottomtabs.Screen
          name="TransactionsStack"
          component={TransactionsStack}
        />
        <Bottomtabs.Screen
          name="CategoriesStack"
          component={CategoriesStack}
        />
        <Bottomtabs.Screen
          name="ProfileStack"
          component={ProfileStack}
        />
         {/* <Bottomtabs.Screen
          name="Notifications"
          component={NotificationsScreen}
        /> */}
        
      </Bottomtabs.Navigator>
  )
}

const HomeStackNavigator = createNativeStackNavigator<HomeParamList>();

function HomeStack(){
  return(
      <HomeStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <HomeStackNavigator.Screen
          name="Home"
          component={HomeScreen}
          />

         
      </HomeStackNavigator.Navigator>
    )
}

const SettingsStackNavigator = createNativeStackNavigator<SettingsParamList>();
function SettingsStack(){
  return(
      <SettingsStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        

      <SettingsStackNavigator.Screen
          name="Settings"
          component={Settings}
          />

        <SettingsStackNavigator.Screen
          name="NotificationSettings"
          component={NotificationSettings}
          />

      <SettingsStackNavigator.Screen
          name="PasswordSettings"
          component={PasswordSettings}
          />

        <SettingsStackNavigator.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          />
      

        
         
      </SettingsStackNavigator.Navigator>
    )
}

const ProfileStackNavigator = createNativeStackNavigator<ProfileParamList>();

function ProfileStack(){
  return(
      <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <ProfileStackNavigator.Screen
          name="Profile"
          component={ProfileScreen}
          />

        <ProfileStackNavigator.Screen
          name="EditProfile"
          component={EditProfile}
          />

      <ProfileStackNavigator.Screen
          name="SettingsStack"
          component={SettingsStack}
          />
      </ProfileStackNavigator.Navigator>
    )
}

const TransactionsStackNavigator = createNativeStackNavigator<TransactionsParamList>();

function TransactionsStack(){
  return(
      <TransactionsStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <TransactionsStackNavigator.Screen
          name="Transactions"
          component={TransactionScreen}
          />


        
         
      </TransactionsStackNavigator.Navigator>
    )
}

const AnanlysisStackNavigator = createNativeStackNavigator<AnalysisParamList>();

function AnalysisStack(){
  return(
      <AnanlysisStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <AnanlysisStackNavigator.Screen
          name="Analysis"
          component={ExpenseAnalysisScreen}
          />
        <AnanlysisStackNavigator.Screen
          name="Search"
          component={SearchScreen}
          />

        
         
      </AnanlysisStackNavigator.Navigator>
    )
}

const CategoriesStackNavigator = createNativeStackNavigator<CategoriesParamList>();

function CategoriesStack(){
  return(
      <CategoriesStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <CategoriesStackNavigator.Screen
          name="Categories"
          component={CategoriesScreen}
          />

        <CategoriesStackNavigator.Screen
        name="CategoryExpenses"
        component={CategoryExpenses}
        />

        <CategoriesStackNavigator.Screen
        name="SavingCategories"
        component={SavingCategoriesScreen}
        />

        <CategoriesStackNavigator.Screen
        name="AddExpense"
        component={AddExpense}
        />

        <CategoriesStackNavigator.Screen
        name="AddSaving"
        component={AddSavingScreen}
        />

      <CategoriesStackNavigator.Screen
        name="CategorySavings"
        component={CategorySavingsScreen}
        />
       
         
      </CategoriesStackNavigator.Navigator>
    )
}


const BoardingStackNavigator = createNativeStackNavigator<BoardingParamList>();

function BoardingStack(){
  const {firstTime} = useExpenseStore()

  return(
      <BoardingStackNavigator.Navigator
      initialRouteName={firstTime ? "WelcomeScreen":"LoginScreen"}
      screenOptions={{
        headerShown: false
      }}
      >
        <BoardingStackNavigator.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          />

         <BoardingStackNavigator.Screen
          name="LoginScreen"
          component={LoginScreen}
          />

        <BoardingStackNavigator.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          />
       
         
      </BoardingStackNavigator.Navigator>
    )
}

const MainStackNavigator = createNativeStackNavigator<MainTabParamList>();

function ExpenseNavigator({}){

  const {initialize,expenses,initialLoad,firstTime,user} = useExpenseStore()

  console.log('initial load in navigator',initialLoad)
  console.log('user',user)

  // useEffect(()=>{
  //   if(initialLoad == false){
  //     initialize()
  //   }
  // },[initialLoad])

  if(initialLoad == true){
    return (
      <SplashScreen />
    )
  }
  else{
  return(
       <NavigationContainer>
      <MainStackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <>
            <MainStackNavigator.Screen
              name="BottomTabs"
              component={ExpenseBottomtabs}
            />

            <MainStackNavigator.Screen
              name="Notifications"
              component={NotificationsScreen}
            />
          </>
        ) : (
          <MainStackNavigator.Screen
            name="BoardingStack"
            component={BoardingStack}
          />
        )}
      </MainStackNavigator.Navigator>
    </NavigationContainer>
    )
  }
}
export default ExpenseNavigator;