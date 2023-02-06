interface ITask {
  id?: number;
  title?: string;
  description?: string;
  completed?: boolean;
}

type T = any;

interface TASK_STATE {
  loading: boolean;
  tasks: Array<ITask>;
}
