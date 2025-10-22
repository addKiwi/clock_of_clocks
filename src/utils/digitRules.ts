 type Rule = {
  time: number[];
  handAngle1: number;
  handAngle2: number;
};

 type RuleSet = Record<string, Rule>;
 type DigitRules = Record<number, number | RuleSet>;


export const digitRules:DigitRules = [
  {
    rule1: {
      time: [0, 1, 2, 3, 4, 5, 6, 7,8,9],
      handAngle1: 90,
      handAngle2: 180,
    },
  },
  {
    rule1: {
      time: [0, 1, 2, 3, 5, 6, 7,8,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4],
      handAngle1: 180,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 2, 3, 5, 6, 7,8,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule2: {
      time: [1],
      handAngle1: 180,
      handAngle2: 270,
    },
    rule5: {
      time: [4],
      handAngle1: 90,
      handAngle2: 180,
    },
  },
  {
    rule1: {
      time: [0, 2, 3, 4, 5, 6, 7,8,9],
      handAngle1: 180,
      handAngle2: 270,
    },
    rule2: {
      time: [1],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 4, 5, 6,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1, 2, 3, 7],
      handAngle1: 0,
      handAngle2: 90,
    },
  },
  {
    rule1: {
      time: [0, 5, 6,8,9],
      handAngle1: 90,
      handAngle2: 180,
    },
    rule2: {
      time: [1],
      handAngle1: 180,
      handAngle2: 270,
    },
    rule3: {
      time: [2, 3, 7],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4],
      handAngle1: 0,
      handAngle2: 180,
    },
  },
  {
    rule1: {
      time: [0, 2, 3, 7,8,9],
      handAngle1: 180,
      handAngle2: 270,
    },
    rule2: {
      time: [1, 4],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule6: {
      time: [5, 6],
      handAngle1: 90,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 2, 3, 4, 7,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1],
      handAngle1: 225,
      handAngle2: 225,
    },
    rule6: {
      time: [5, 6],
      handAngle1: 0,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 4, 5, 6,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1, 7],
      handAngle1: 225,
      handAngle2: 225,
    },
    rule3: {
      time: [2, 3],
      handAngle1: 90,
      handAngle2: 180,
    },
  },
  {
    rule1: {
      time: [0, 1],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule3: {
      time: [2, 3],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4, 5, 6,8,9],
      handAngle1: 0,
      handAngle2: 90,
    },
    rule8: {
      time: [7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 1, 7],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule3: {
      time: [2, 3, 4,8,9],
      handAngle1: 0,
      handAngle2: 270,
    },
    rule6: {
      time: [5, 6],
      handAngle1: 90,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 2, 3, 4, 7,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1],
      handAngle1: 225,
      handAngle2: 225,
    },
    rule6: {
      time: [5, 6],
      handAngle1: 180,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 2, 6,8],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1, 7],
      handAngle1: 225,
      handAngle2: 225,
    },
    rule4: {
      time: [3, 4, 5,9],
      handAngle1: 0,
      handAngle2: 90,
    },
  },
  {
    rule1: {
      time: [0, 1],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule3: {
      time: [2, 6,8],
      handAngle1: 90,
      handAngle2: 180,
    },
    rule4: {
      time: [3, 4, 5,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule8: {
      time: [7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 1,7],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule3: {
      time: [2],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule4: {
      time: [3, 4, 5, 6,8,9],
      handAngle1: 180,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 3, 4, 5, 6,7,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1],
      handAngle1: 225,
      handAngle2: 225,
    },
    rule3: {
      time: [2],
      handAngle1: 0,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 2, 6,8],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1, 3, 5,9],
      handAngle1: 90,
      handAngle2: 180,
    },
    rule5: {
      time: [4,7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 2,6,8],
      handAngle1: 0,
      handAngle2: 90,
    },
    rule2: {
      time: [1],
      handAngle1: 0,
      handAngle2: 270,
    },
    rule4: {
      time: [3, 5,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4,7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 3, 5,6,8,9],
      handAngle1: 0,
      handAngle2: 270,
    },
    rule2: {
      time: [1],
      handAngle1: 0,
      handAngle2: 90,
    },
    rule3: {
      time: [2],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4,7],
      handAngle1: 0,
      handAngle2: 180,
    },
  },
  {
    rule1: {
      time: [0, 3, 4, 5, 6,7,8,9],
      handAngle1: 0,
      handAngle2: 180,
    },
    rule2: {
      time: [1, 2],
      handAngle1: 180,
      handAngle2: 270,
    },
  },
  {
    rule1: {
      time: [0, 1, 2, 3, 5, 6,8,9],
      handAngle1: 0,
      handAngle2: 90,
    },
    rule5: {
      time: [4,7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 1, 2, 3, 5, 6,8,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4,7],
      handAngle1: 225,
      handAngle2: 225,
    },
  },
  {
    rule1: {
      time: [0, 1, 2, 3, 5, 6,8,9],
      handAngle1: 90,
      handAngle2: 270,
    },
    rule5: {
      time: [4,7],
      handAngle1: 0,
      handAngle2: 90,
    },
  },
  {
    rule1: {
      time: [0, 1, 2, 3, 4, 5, 6,7,8,9],
      handAngle1: 0,
      handAngle2: 270,
    },
  },
];