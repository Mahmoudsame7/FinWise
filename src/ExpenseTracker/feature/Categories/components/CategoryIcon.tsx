import Colors from "../../../utilities/Colors"
import FoodSvg from "../../../assets/svg/FoodSvg";
import TransportSvg from "../../../assets/svg/TransportSvg";
import MedicineSvg from "../../../assets/svg/MedicineSvg";
import GroceriesSvg from "../../../assets/svg/GroceriesSvg";
import RentSvg from "../../../assets/svg/RentSvg";
import GiftSvg from "../../../assets/svg/GiftSvg";
import SavingsSvg from "../../../assets/svg/SavingsSvg";
import EntertainmentSvg from "../../../assets/svg/EntertainmentSvg";
import MoneySvg from "../../../assets/svg/MoneySvg";
import CarSvg from "../../../assets/svg/CarSvg";
import WeddingSvg from "../../../assets/svg/WeddingSvg";
import PlaneSvg from "../../../assets/svg/PlaneSvg";
import NewHouseSvg from "../../../assets/svg/NewHouseSvg";

type CategoryIconProps = {
    name: string;
    size: number;
    color: string;
}
function CategoryIcon({ name,size,color }: CategoryIconProps) {
    switch (name) {
        case 'Food':
            return <FoodSvg color={color} width={size} height={size} />
        case 'Transport':
            return <TransportSvg color={color} width={size} height={size} />
        case 'Medicine':
            return <MedicineSvg color={color} width={size} height={size} />
        case 'Groceries':
            return <GroceriesSvg color={color} width={size} height={size} />
        case 'Rent':
            return <RentSvg color={color} width={size} height={size} />
        case 'Gifts':
            return <GiftSvg color={color} width={size} height={size} />
        case 'Savings':
            return <SavingsSvg color={color} width={size} height={size} />
        case 'Entertainment':
            return <EntertainmentSvg color={color} width={size} height={size} />
        case 'Salary':
            return <MoneySvg color={color} width={size} height={size} />
        case 'Car':
            return <CarSvg color={color} width={size} height={size} />
        case 'New Car':
            return <CarSvg color={color} width={size} height={size} />
        case 'Wedding':
            return <WeddingSvg color={color} width={size} height={size} />
        case 'Travel':
            return <PlaneSvg color={color} width={size} height={size} />
        case 'New House':
            return <NewHouseSvg color={color} width={size} height={size} />
        default:
            return <NewHouseSvg color={color} width={size} height={size} />
    }
}
export default CategoryIcon