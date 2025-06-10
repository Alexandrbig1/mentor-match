import axios from "axios";

const { VITE_Get_All_Technologies } = import.meta.env;

if (!VITE_Get_All_Technologies) {
  throw new Error("VITE_Get_All_Technologies env variable is not set");
}

export async function getAllTechnologies(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(`${VITE_Get_All_Technologies}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch technologies: ${response.statusText}`);
    }
  } catch (error: unknown) {
    console.error("Error fetching technologies:", error);
    throw error;
  }
}
