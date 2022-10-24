import { INVENTORY_API_HOST } from "@/utils/constants";
import axios from "axios";

export interface Computer {
    id: string;
    branchId: string;
    description: string;
    quantity: number;
    brand: string;
}

export const getComputers = (): Promise<void> => {
    return axios.get(`${INVENTORY_API_HOST}/computers`)
}

export const addComputer = (computer: Computer): Promise<void> => {
    return axios.post(`${INVENTORY_API_HOST}/computers`, {
        ...computer
    })
}

export const editComputer = (computer: Computer): Promise<void> => {
    return axios.put(`${INVENTORY_API_HOST}/computers/${computer.id}`, {
        ...computer
    })
}

export const removeComputer = (computer: Computer): Promise<void> => {
    return axios.delete(`${INVENTORY_API_HOST}/computers/${computer.id}`)
}