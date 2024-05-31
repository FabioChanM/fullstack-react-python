import {useForm} from 'react-hook-form'



export function TaskFormPage() {

  const {register} = useForm()
  return (
    <div style={{backgroundColor: "black"}}>
<form action="">
<input type="text" placeholder="title" {...register("tittle", {required: true})} />
<textarea rows="3" placeholder="Description" {...register("Description", {required: true})} ></textarea>
<button>Save</button>
</form>

  </div>
  )
}
