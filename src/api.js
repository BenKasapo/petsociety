export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Lost large brown female cat.She is 1 year old ",
        username: "Billy",
        userId: "1",
        parentId: null,
        createdAt: "2022-05-02T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "If anyone is to locate my cat let me know",
        username: "Den",
        userId: "2",
        parentId: null,
        createdAt: "2022-05-07T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Lost medium size brown dog aged 1year",
        username: "Joey",
        userId: "3",
        parentId: "1",
        createdAt: "2022-05-05T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Lost medium size brown dog aged 1year",
        username: "Ben",
        userId: "4",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "5",
        body: "Lost medium size brown dog aged 1year",
        username: "Ben",
        userId: "5",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "6",
        body: "Lost medium size brown dog aged 1year",
        username: "Ari",
        userId: "6",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "7",
        body: "Lost medium size brown dog aged 1year",
        username: "Tay",
        userId: "7",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "8",
        body: "Lost medium size brown dog aged 1year",
        username: "Fay",
        userId: "8",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "9",
        body: "Lost medium size brown dog aged 1year",
        username: "Rita",
        userId: "9",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
      {
        id: "10",
        body: "Lost medium size brown dog aged 1year",
        username: "Ari",
        userId: "10",
        parentId: "2",
        createdAt: "2022-05-04T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };
 