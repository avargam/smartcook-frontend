interface FormProps {
  onSubmit: (data: any) => void;
}

export default function ModifyButton({ onSubmit } :FormProps) {

  const handleSubmit = async (event: any) => {
    onSubmit(event);
  }
  return <button className="modify-btn" onClick={ handleSubmit }>Modificar receta</button>
}