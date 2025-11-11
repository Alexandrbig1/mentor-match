import axios from "axios";

const { VITE_Get_Mentors_Count } = import.meta.env;

export const getMentorsCount = async (): Promise<{ count: number }> => {
  if (!VITE_Get_Mentors_Count) {
    throw new Error("VITE_Get_Mentors_Count env variable is not set");
  }

  try {
    const response = await axios.get<{ count: number }>(VITE_Get_Mentors_Count);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch mentors count: ${response.statusText}`);
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
