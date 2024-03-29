import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IListItem {
  id: number;
  title: string;
  isSelected: boolean;
}

const create = async (
  dataToCreate: Omit<IListItem, "id">
): Promise<IListItem | ApiException> => {
  try {
    const { data } = await Api().post<any>("/tarefas", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao criar registro API");
  }
};

const getAll = async (): Promise<IListItem[] | ApiException> => {
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar API");
  }
};
const getById = async (id: number): Promise<IListItem | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar API");
  }
};
const updateById = async (
  id: number,
  dataToUpdate: IListItem
): Promise<IListItem | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar API");
  }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar API");
  }
};

export const TasksService = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
