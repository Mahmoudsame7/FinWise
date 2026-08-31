import { Text, View } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

function AnimatedNumber() {
    // Each digit gets a shared value for its Y offset
const digitY = useSharedValue(0);

// On number change, animate to the new digit position
const animateDigit = () => {
  const diff = (20 - 10 + 10) % 10;
  digitY.value = withSpring(digitY.value - diff * 100, {
    damping: 12,
    stiffness: 120,
    mass: 0.8,
  });
};

// Clamp visible area with overflow: hidden
const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateY: digitY.value }],
}));

// Render a column of 0–9 inside an overflow:hidden View
return (
<View style={{ height: 100, overflow: 'hidden' }}>
  <Animated.View style={animatedStyle}>
    {[0,1,2,3,4,5,6,7,8,9].map(d => (
      <Text key={d} style={{ height: 100 }}>{d}</Text>
    ))}
  </Animated.View>
</View>
)
}
export default AnimatedNumber

