import { requestsType } from "./requestsType";

export type departmentType = {
    id: number;
    title: string;
    requests: requestsType[];
};