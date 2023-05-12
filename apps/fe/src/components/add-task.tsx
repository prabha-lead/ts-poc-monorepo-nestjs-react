import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../api/task/mutations';
import { GET_TASKS } from '../api/task/queries';
import { TextField, Button, Stack, Box } from '@mui/material';
import { red } from '@mui/material/colors';

interface FormValues {
  title?: string;
  description?: string;
}

const ErrorText = (props: any) => <Box color={red[500]} {...props} />;

const validate = (values: FormValues) => {
  const errors: FormValues = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  }
  return errors;
};

const AddTask = () => {
  const [createTask] = useMutation(CREATE_TASK);

  return (
    <div>
      <Formik
        initialValues={{ title: '', description: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          createTask({
            variables: {
              id: Math.floor(Math.random() * 10000),
              title: values.title,
              description: values.description,
            },
            refetchQueries: [{ query: GET_TASKS }],
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={2}>
              <div>
                <Field
                  name="title"
                  as={TextField}
                  fullWidth
                  label="Title"
                  variant="outlined"
                  size="small"
                />
                <ErrorMessage name="title" component={ErrorText} />
              </div>
              <div>
                <Field
                  name="description"
                  as={TextField}
                  fullWidth
                  label="Description"
                  variant="outlined"
                  size="small"
                />
                <ErrorMessage name="description" component={ErrorText} />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                >
                  Add
                </Button>
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTask;
