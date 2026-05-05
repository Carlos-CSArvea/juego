import QB_EASY_MODULE from "./QB_guardianes_easy_balanceado";
import QB_MEDIUM_MODULE from "./QB_guardianes_medium_balanceado";
import QB_HARD_MODULE from "./QB_guardianes_hard_balanceado";

export const QB = {
  easy: QB_EASY_MODULE.easy ?? [],
  medium: QB_MEDIUM_MODULE.medium ?? [],
  hard: QB_HARD_MODULE.hard ?? [],
};

export const QB_EASY = QB.easy;
export const QB_MEDIUM = QB.medium;
export const QB_HARD = QB.hard;

export default QB;