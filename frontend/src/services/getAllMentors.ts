import axios from "axios";

const { VITE_Get_All_Mentors } = import.meta.env;

type MentorsResponse = {
  data: object[];
  total: number;
  page: number;
  totalPages: number;
};

export const getAllMentors = async ({ page = 1, limit = 20 }: { page?: number; limit?: number }): Promise<MentorsResponse> => {
  if (!VITE_Get_All_Mentors) {
    throw new Error("VITE_Get_All_Mentors env variable is not set");
  }
  try {
    const response = await axios.get<MentorsResponse>(`${VITE_Get_All_Mentors}?page=${page}&limit=${limit}`);
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
