import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS } from '../api/task/queries';
import { DELETE_TASK } from '../api/task/mutations';
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  CircularProgress,
  Box,
} from '@mui/material';

interface Task {
  _id: number;
  title: string;
}

type TaskType = {
  getTasks: Task[];
};

const Tasks = () => {
  const { loading, data } = useQuery<TaskType>(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK);

  const handleDelete = async (taskId: number) => {
    await deleteTask({
      variables: {
        id: taskId,
      },
      refetchQueries: [{ query: GET_TASKS }],
    });
  };

  if (loading) return <CircularProgress />;

  return (
    <List>
      {data?.getTasks.map((task: Task) => (
        <ListItem key={task._id}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <div
              style={{
                flex: 1,
                color: 'black',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingRight: '10px',
              }}
            >
              {task.title}
            </div>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default Tasks;
