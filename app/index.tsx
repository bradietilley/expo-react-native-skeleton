import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { Settings } from "lucide-react-native";
import { useTheme } from "../src/contexts/ThemeContext";

export default function Dashboard() {
  const { isDark } = useTheme();

  return (
    <View className={`flex-1 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <View className="flex-row justify-end p-4 pt-14">
        <Link href="/settings" asChild>
          <Pressable className="p-2">
            <Settings size={24} color={isDark ? "#f9fafb" : "#1f2937"} />
          </Pressable>
        </Link>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        <Text
          className={`text-4xl font-bold mb-4 ${isDark ? "text-gray-50" : "text-gray-800"}`}
        >
          Welcome
        </Text>
        <Text
          className={`text-lg text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          Your app is ready to go
        </Text>
      </View>
    </View>
  );
}
