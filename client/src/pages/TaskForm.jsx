import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { CreateTask, deledTask, updateTask, getTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data); // Pasa el id y los datos para actualizar
    } else {
      await CreateTask(data);
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue('title', res.data.title); // Corregido a res.data.title
        setValue('description', res.data.description); // Corregido a res.data.description
      }
    }
    loadTask();
  }, [params.id, setValue]); // Agrega setValue como una dependencia

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          {...register("title", { required: true })} 
        />
        {errors.title && <span>Title is required</span>}
        
        <textarea 
          rows="3" 
          placeholder="Description" 
          {...register("description", { required: true })} 
        ></textarea>
        {errors.description && <span>Description is required</span>}
        
        <button type="submit">Save</button>
      </form>
      {params.id && (
        <button onClick={async () => {
          const accepted = window.confirm("Are you sure?");
          if (accepted) {
            await deledTask(params.id);
            navigate("/tasks");
          }
        }}>
          Delete
        </button>
      )}
    </div>
  );
}
