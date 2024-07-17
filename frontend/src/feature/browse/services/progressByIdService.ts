import { progressType } from "../types/progressType";

export default async function getProgress (progressId: number): Promise<progressType> {
    const response = await fetch(`http://localhost:5004/backend/progress/${progressId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}