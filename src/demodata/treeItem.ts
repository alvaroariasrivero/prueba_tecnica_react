export interface TreeData {
  id: string;
  name: string;
  checked: boolean;
  treeData?: TreeData[];
}

export const demoTreeData: TreeData[] = [
  {
    id: "49145de7-2d34-40a3-8726-a040f479ba0b",
    name: "padre1",
    checked: false,
    treeData: [
      {
        id: "49145de7-2b34-40a3-8726-a040f4792a0b",
        name: "hijo1 de padre1",
        checked: true
      },
      {
        id: "49145ge7-2b34-40a3-8726-a040f4792a0b",
        name: "hijo2 de padre1",
        checked: false,
        treeData: [
          {
            id: "49145de7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo1 de hijo1 de padre 1",
            checked: true
          },
          {
            id: "49145ge7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo2 de hijo1 de padre 1",
            checked: false
          },
          {
            id: "49145de7-2b34-50a3-8726-a040f4792a0b",
            name: "hijo3 de hijo1 de padre 1",
            checked: true
          },
          {
            id: "49sag5de7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo4 de hijo1 de padre 1",
            checked: false
          }
        ]
      },
      {
        id: "49145de7-2b34-50a3-8726-a040f4792a0b",
        name: "hijo3 de padre1",
        checked: false
      },
      {
        id: "49sag5de7-2b34-40a3-8726-a040f4792a0b",
        name: "hijo4 de padre1",
        checked: false
      }
    ]
  },
  {
    id: "f6178818-c6d3-46c7-9816-75248678936e",
    name: "padre2",
    checked: true
  },
  {
    id: "15cf68e0-90ee-4509-87a0-34d009a6ebbc",
    name: "padre3",
    checked: false,
    treeData: [
      {
        id: "49hc5de7-2b34-40a3-8726-a040f4792a0b",
        name: "hijo1 de padre3",
        checked: false
      },
      {
        id: "49145ge7-2b34-4hd3-8726-a040f4792a0b",
        name: "hijo2 de padre3",
        treeData: [
          {
            id: "49145de7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo1 de hijo2 de padre 3",
            checked: true
          },
          {
            id: "49145ge7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo2 de hijo2 de padre 3",
            checked: true
          },
          {
            id: "49145de7-2b34-50a3-8726-a040f4792a0b",
            name: "hijo3 de hijo2 de padre 3",
            checked: false
          },
          {
            id: "49sag5de7-2b34-40a3-8726-a040f4792a0b",
            name: "hijo4 de hijo2 de padre 3",
            checked: false
          }
        ],
        checked: true
      },
      {
        id: "49145de7-2b34-50a3-8726-a04sjghi92a0b",
        name: "hijo3 de padre3",
        checked: false
      },
      {
        id: "49sag5de7-2b34-40a3-856l-a040f4792a0b",
        name: "hijo4 de padre3",
        checked: true
      }
    ]
  },
  {
    id: "339jq438-f7j3-4c8a-8e81-4098345d22c2",
    name: "padre4",
    checked: false
  },
  {
    id: "348b050a-8202-4eff-af67-7368a529e9e4",
    name: "padre5",
    checked: true
  }
];

export default demoTreeData;
