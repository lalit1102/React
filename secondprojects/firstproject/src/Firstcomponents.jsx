const Firstcomponents = ()=>{
  let arr = [10,20,30,40,50]
  let litag = arr.map((i)=><li>{i}</li>)
  return (
    <div>
      <h3>First component created and start to program</h3>
      <h4>addition{12+34}</h4>
      <ul>{litag}
        {
          // arr.map((i)=>{
            // return (
              // <li>{i}</li>
            // )
          // })
        }
      </ul>
    </div>
  )
}
// function Firstcomponents(){
//}
export default Firstcomponents