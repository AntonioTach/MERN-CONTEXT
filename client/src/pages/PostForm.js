import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";

export function PostForm() {
  const { createPost } = usePosts();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title : Yup.string().required("Title is Required").max(20),
          description : Yup.string().required("Description is Required")
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="title" 
              className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
            />
            <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />

            <Field  name="description" placeholder="description" 
            className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'/>
            <ErrorMessage component="p"  className="text-red-400 text-sm" name="description" />

            <button type="submit"
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
