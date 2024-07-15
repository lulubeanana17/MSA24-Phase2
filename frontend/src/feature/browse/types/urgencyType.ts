import { requestsType } from "./requestsType";

export type urgencyType = {
    id: number;
    title: string;
    requests: requestsType[];
};