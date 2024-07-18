import { urgencyType } from "../types/urgencyType";

export default async function getUrgency (urgencyId: number | undefined): Promise<urgencyType> {
    const response = await fetch(`http://localhost:5004/backend/urgency/${urgencyId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}