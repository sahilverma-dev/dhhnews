import { ContactData } from "@/interfaces";
import { apiToken } from "../env";
import { client } from "../lib/client";

const API_TOKEN = apiToken;

export const submitContact = async (contactData: ContactData) => {
  try {
    const { email, name, message, title } = contactData;

    const requestData = {
      _type: "contact",
      email,
      name,
      message,
      title,
    };

    const requestHeaders = {
      Authorization: `Bearer ${API_TOKEN}`,
    };

    const response = await client.create(requestData, {
      headers: requestHeaders,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
