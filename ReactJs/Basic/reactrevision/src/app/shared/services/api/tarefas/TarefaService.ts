import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface ITarefa {
  id: number;
  item: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar API");
  }
};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar API");
  }
};
const create = () => {};

const updateById = () => {};

const deleteById = () => {};

export const TarefaService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
