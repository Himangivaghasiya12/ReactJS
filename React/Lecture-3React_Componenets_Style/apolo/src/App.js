import './App.css';
// import Card from './components/Card';
import Com_A from './components/Com_A';

function App(props) {


  /* React Props */

  // const btnname = ["Submit"  , "Click" , "Inputs"]
  // const name = ["Monarch"  , "Sarah" , "Mona"]

  const btnname ={
    btnname1:'Submit',
    btnname2:'click',
    btnname3:'Inputs',
  } 
  const name ={
    name1:"Monarch",
    name2:"Sarah",
    name3:"Mona"
  } 


  return (
    <>
      <div class="flex flex-wrap justify-around">
        {/* <Card btn="submit" name="Monarch" />
        <Card btn="Click" name="Monarch"/>
        <Card btn="Inputs" name="Monarch"/>
        <Card btn={btnname[0]} name={name[0]} />
        <Card btn={btnname[1]} name={name[1]}/>
        <Card btn={btnname[2]} name={name[2]}/>
        <Card btn={btnname.btnname1} name={name.name1}/>
        <Card btn={btnname.btnname2} name={name.name2}/>
        <Card btn={btnname.btnname3} name={name.name3}/> */}
        <Com_A  name="SkillQode"/>
      </div>
    </>
  )
}

export default App;
