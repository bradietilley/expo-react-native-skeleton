import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { ArrowLeft, Moon, Sun, Monitor, Check } from "lucide-react-native";
import { useTheme } from "../../src/contexts/ThemeContext";

type ThemeOption = "light" | "dark" | "system";

interface ThemeButtonProps {
  option: ThemeOption;
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onPress: () => void;
  isDark: boolean;
}

function ThemeButton({
  label,
  icon,
  isSelected,
  onPress,
  isDark,
}: ThemeButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-between p-4 rounded-xl mb-3 ${
        isSelected
          ? isDark
            ? "bg-blue-600"
            : "bg-blue-500"
          : isDark
          ? "bg-gray-700"
          : "bg-white"
      }`}
    >
      <View className="flex-row items-center">
        {icon}
        <Text
          className={`ml-3 text-base font-medium ${
            isSelected
              ? "text-white"
              : isDark
              ? "text-gray-50"
              : "text-gray-800"
          }`}
        >
          {label}
        </Text>
      </View>
      {isSelected && <Check size={20} color="#ffffff" />}
    </Pressable>
  );
}

export default function SettingsScreen() {
  const { theme, setTheme, isDark } = useTheme();

  const themeOptions: { option: ThemeOption; label: string; icon: React.ReactNode }[] = [
    {
      option: "light",
      label: "Light Mode",
      icon: (
        <Sun
          size={22}
          color={theme === "light" ? "#ffffff" : isDark ? "#f9fafb" : "#1f2937"}
        />
      ),
    },
    {
      option: "dark",
      label: "Dark Mode",
      icon: (
        <Moon
          size={22}
          color={theme === "dark" ? "#ffffff" : isDark ? "#f9fafb" : "#1f2937"}
        />
      ),
    },
    {
      option: "system",
      label: "System Default",
      icon: (
        <Monitor
          size={22}
          color={theme === "system" ? "#ffffff" : isDark ? "#f9fafb" : "#1f2937"}
        />
      ),
    },
  ];

  return (
    <View className={`flex-1 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      {/* Header */}
      <View
        className={`px-6 pt-16 pb-4 flex-row items-center border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <Link href="/" asChild>
          <Pressable
            className={`p-2 -ml-2 rounded-lg ${
              isDark ? "active:bg-gray-700" : "active:bg-gray-200"
            }`}
          >
            <ArrowLeft size={24} color={isDark ? "#f9fafb" : "#1f2937"} />
          </Pressable>
        </Link>
        <Text
          className={`text-2xl font-bold ml-2 ${
            isDark ? "text-gray-50" : "text-gray-800"
          }`}
        >
          Settings
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 pt-6">
        {/* Theme Section */}
        <View className="mb-8">
          <Text
            className={`text-sm font-semibold uppercase tracking-wide mb-4 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Appearance
          </Text>
          {themeOptions.map((item) => (
            <ThemeButton
              key={item.option}
              option={item.option}
              label={item.label}
              icon={item.icon}
              isSelected={theme === item.option}
              onPress={() => setTheme(item.option)}
              isDark={isDark}
            />
          ))}
        </View>

        {/* Placeholder for future settings */}
        <View
          className={`p-4 rounded-xl ${isDark ? "bg-gray-700" : "bg-white"}`}
        >
          <Text
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            More settings coming soon...
          </Text>
        </View>
      </View>
    </View>
  );
}
