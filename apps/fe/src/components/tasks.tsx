import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS } from '../api/task/queries';
import { DELETE_TASK, EDIT_TASK } from '../api/task/mutations';
import {
  Button,
  List,
  ListItem,
  CircularProgress,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';

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
  const [editTask] = useMutation(EDIT_TASK);
  const [open, setOpen] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handleDelete = async (taskId: number) => {
    await deleteTask({
      variables: {
        id: taskId,
      },
      refetchQueries: [{ query: GET_TASKS }],
    });
  };

  const handleEdit = async (taskId: number) => {
    setCurrentId(taskId);
    setOpen(true);
  };

  const handleSave = async () => {
    await editTask({
      variables: {
        id: { _id: currentId },
        title: editInput,
      },
      refetchQueries: [{ query: GET_TASKS }],
    });
    setOpen(false);
    setEditInput('');
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Title"
            type="text"
            fullWidth
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
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
              <Button variant="contained" onClick={() => handleEdit(task._id)}>
                Edit
              </Button>
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
    </div>
  );
};

export default Tasks;
