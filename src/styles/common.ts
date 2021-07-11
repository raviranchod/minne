import { colors } from "./colors";
import { rgba } from "polished";

const common = {
  boxShadow: `2px 2px 2px ${rgba(colors.grey.dark, 0.25)}`,
} as const;

export { common };
