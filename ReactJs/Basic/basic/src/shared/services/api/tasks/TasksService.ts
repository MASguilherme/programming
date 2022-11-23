import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface IListItem {
  id: number;
  title: string;
  isSelected: boolean;
}

const create = async (
  dataToCreate: Omit<IListItem, "id">
): Promise<IListItem | ApiException> => {
  try {
    const { data } = await Api().post("/tarefas", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar API");
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
const updateById = () => {};
const deleteById = () => {};

export const TasksService = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
