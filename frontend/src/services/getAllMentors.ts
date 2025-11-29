import axios from "axios";

const { VITE_Get_All_Mentors } = import.meta.env;

type MentorsResponse = {
  data: object[];
  total: number;
  page: number;
  totalPages: number;
};

type GetAllMentorsParams = {
  page?: number;
  limit?: number;
  name?: string;
  tech?: string[];
};

export const getAllMentors = async ({ page = 1, limit = 20, name, tech }: GetAllMentorsParams = {}): Promise<MentorsResponse> => {
  if (!VITE_Get_All_Mentors) {  
    throw new Error("VITE_Get_All_Mentors env variable is not set");
  }
   try {
    const qs = new URLSearchParams();
    qs.append("page", String(page));
    qs.append("limit", String(limit));
    if (name) qs.append("name", String(name));
    if (tech && tech.length) {
      tech.forEach((t) => qs.append("tech", String(t)));
    }

    const url = `${VITE_Get_All_Mentors}?${qs.toString()}`;

    const response = await axios.get<MentorsResponse>(url);

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
