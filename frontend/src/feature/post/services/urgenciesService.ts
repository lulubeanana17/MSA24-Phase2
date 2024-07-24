import { urgencyType } from "@/feature/browse/types/urgencyType";

export default async function getUrgencies (): Promise<Array<urgencyType>> {
    const response = await fetch('http://localhost:5004/backend/urgency');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}