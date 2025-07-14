import axios from "axios";

const { VITE_Get_All_Mentors } = import.meta.env;

export const getAllMentors = async (): Promise<object[]> => {
  if (!VITE_Get_All_Mentors) {
    throw new Error("VITE_Get_All_Mentors env variable is not set");
  }
  try {
    const response = await axios.get<object[]>(VITE_Get_All_Mentors);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch mentors: ${response.statusText}`);
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
