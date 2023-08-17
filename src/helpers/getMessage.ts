import { IApiResponse } from "@interfaces/interfaces";

export const getMessageText = (message: IApiResponse[]) => {
  return message.reduce((acum, cur) => {
    if (cur.status == "content") {
      acum += cur.value;
    }
    return acum;
  }, "");
};
