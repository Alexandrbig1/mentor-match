import axios from "axios";

const { VITE_Get_All_Technologies } = import.meta.env;

export const getAllTechnologies = async (): Promise<string[]> => {
  if (!VITE_Get_All_Technologies) {
    throw new Error("VITE_Get_All_Technologies env variable is not set");
  }
  try {
    const response = await axios.get<string[]>(VITE_Get_All_Technologies);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch technologies: ${response.statusText}`);
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
