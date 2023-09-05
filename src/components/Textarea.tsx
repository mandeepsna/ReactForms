
 interface textareaProps
 {
   
    name:string,
    rows:number,
    cols:number,
    placeholder:string,
    value:string,
    onchange:(event:any)=>void
 }

const Textarea = (props:textareaProps) =>{
  return (
    <div>
      <textarea  name={props.name} rows={props.rows} cols={props.cols} placeholder={props.placeholder} value={props.value} onChange={props.onchange}></textarea>
    </div>
  )
};

export default Textarea
