import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Gray table-1

function Table() {
  return (
    <div className='main'>
    <Container>
      <Row>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
      </Row>
      <Row>
      <Col className='box1' md={{ span: 8 }}>col-md-8</Col>
      <Col className='box1' md={{ span: 4}}>col-md-4</Col>       
      </Row>
      <Row>
      <Col className='box2' md={{ span: 4 }}>col-md-4</Col>
      <Col className='box2' md={{ span: 4}}>col-md-4</Col>  
      <Col className='box2' md={{ span: 4}}>col-md-4</Col>       
      </Row>
      <Row>   
      <Col className='box3' md={{ span: 6}}>col-md-6</Col>  
      <Col className='box3' md={{ span: 6}}>col-md-6</Col>         
      </Row>
    </Container>
    </div>
  );
}

export default Table;

// table-2

// function Table() {
//     return (
//       <div className='main'>
//       <div className='container'>
//         <Row>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col> 
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//             <Col>
//                <Row className="pe-4">
//                  <Col className="box">1</Col>
//                </Row>
//             </Col>
//         </Row>
//         <Row>
//             <Col md={{ span:3 }}>
//                 <Row className="pe-4">
//                    <Col className="box1">col3</Col>
//                </Row>
//             </Col>
//             <Col md={{ span:3 }}>
//                 <Row className="pe-4">
//                    <Col className="box1">col3</Col>
//                </Row>
//             </Col>  
//             <Col md={{ span:3 }}>
//                 <Row className="pe-4">
//                    <Col className="box1">col3</Col>
//                </Row>
//             </Col>       
//             <Col md={{ span:3 }}>
//                 <Row className="pe-4">
//                    <Col className="box1">col3</Col>
//                </Row>
//             </Col>      
//         </Row>
//         <Row>
//             <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                    <Col className="box2">col4</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                    <Col className="box2">col4</Col>
//                 </Row>
//             </Col>  
//             <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                    <Col className="box2">col4</Col>
//                 </Row>
//             </Col>       
//         </Row>
//         <Row>
//             <Col md={{ span:8 }}>
//                 <Row className="pe-4">
//                    <Col className="box3">col8</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                    <Col className="box3">col4</Col>
//                 </Row>
//             </Col>        
//         </Row>
//         <Row>
//             <Col md={{ span:2 }}>
//                 <Row className="pe-4">
//                    <Col className="box4">col2</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:2 }}>
//                 <Row className="pe-4">
//                    <Col className="box4">col2</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                    <Col className="box4">col4</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:2 }}>
//                 <Row className="pe-4">
//                    <Col className="box4">col2</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:2 }}>
//                 <Row className="pe-4">
//                    <Col className="box4">col2</Col>
//                 </Row>
//             </Col>       
//         </Row>
//         <Row>
//             <Col md={{ span:6 }}>
//                 <Row className="pe-4">
//                    <Col className="box5">col6</Col>
//                 </Row>
//             </Col>
//             <Col md={{ span:6 }}>
//                 <Row className="pe-4">
//                    <Col className="box5">col6</Col>
//                 </Row>
//             </Col>
//         </Row>
//         <Row>
//             <Col md={{ span:12 }}>
//                 <Row className="pe-4">
//                    <Col className="box6">col12</Col>
//                 </Row>
//             </Col>
//         </Row>
//       </div>
//       </div>
//     );
//   }
  
//   export default Table;

// table3

// function Table() {
//     return (
//       <div className='main'>
//       <div className='container'>
//       <Row>
//         <Col md={{ span: 12}}>
//         <Row className="pe-4">
//                   <Col className="box">12</Col>
//               </Row>
//         </Col>        
//       </Row>

//       <Row>
//           <Col md={{ span:1 }}>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//           </Col>
//           <Col md={{ span:11 }}>
//                  <Row className="pe-4">
//                    <Col className="box">11</Col>
//                </Row>
//             </Col>       
//       </Row>
//       <Row>
//             <Col md={{ span:2 }}>
//                  <Row className="pe-4">
//                    <Col className="box">2</Col>
//                </Row>
//             </Col> 
//             <Col md={{ span:10 }}>
//                  <Row className="pe-4">
//                    <Col className="box">10</Col>
//                </Row>
//             </Col>       
//       </Row>
//       <Row>
//           <Col md={{ span:3 }}>
//                  <Row className="pe-4">
//                    <Col className="box">3</Col>
//                </Row>
//             </Col> 
//             <Col md={{ span:9 }}>
//                  <Row className="pe-4">
//                    <Col className="box">9</Col>
//                </Row>
//             </Col>        
//       </Row>
//       <Row>
//             <Col md={{ span:4 }}>
//                  <Row className="pe-4">
//                    <Col className="box">4</Col>
//                </Row>
//             </Col>  
//             <Col md={{ span:8 }}>
//                  <Row className="pe-4">
//                    <Col className="box">8</Col>
//                </Row>
//             </Col>      
//       </Row>
//       <Row>
//             <Col md={{ span:5 }}>
//                  <Row className="pe-4">
//                    <Col className="box">5</Col>
//                </Row>
//             </Col> 
//             <Col md={{ span:7 }}>
//                  <Row className="pe-4">
//                    <Col className="box">7</Col>
//                </Row>
//             </Col>     
//       </Row>
//       <Row>
//             <Col md={{ span:6 }}>
//                  <Row className="pe-4">
//                    <Col className="box">6</Col>
//                </Row>
//             </Col> 
//             <Col md={{ span:6 }}>
//                  <Row className="pe-4">
//                    <Col className="box">6</Col>
//                </Row>
//             </Col>        
//       </Row>
      
//       </div>
//       </div>
//     );
//   }
  
//   export default Table;

// table4

// function Table() {
//       return (
//         <div className='main'> 
//         <div className='container-fluid'>
//           <Row>
//             <Col>
//               <Row className="pe-4">
//                 <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//               <Row className="pe-4">
//                 <Col className="box">1</Col>
//               </Row>
//             </Col>
//              <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>            
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>   
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">1</Col>
//               </Row>
//             </Col>
//           </Row>
//           <Row>
//           <Col>
//               <Row className="pe-4">
//                 <Col className="box">4</Col>
//               </Row>
//             </Col>
//             <Col>
//                 <Row className="pe-4">
//                 <Col className="box">4</Col>
//               </Row>
//             </Col> 
//             <Col>
//                 <Row className="pe-4">
//                   <Col className="box">4</Col>
//               </Row>
//             </Col>    
//           </Row>
//           <Row>
//           <Col md={{ span:4 }}>
//                 <Row className="pe-4">
//                   <Col className="box">4</Col>
//               </Row>
//             </Col>
//             <Col md={{ span:8 }}>
//                 <Row className="pe-4">
//                   <Col className="box">8</Col>
//               </Row>
//             </Col>
//           </Row>
//           <Row>
//           <Col md={{ span:6 }}>
//                 <Row className="pe-4">
//                   <Col className="box">6</Col>
//               </Row>
//             </Col>
//             <Col md={{ span:6 }}>
//                 <Row className="pe-4">
//                   <Col className="box">6</Col>
//               </Row>
//             </Col>       
//           </Row>
//           <Row>
//           <Col>
//                 <Row className="pe-4">
//                   <Col className="box">12</Col>
//               </Row>
//             </Col>         
//           </Row>
//           <Row>
//           <Col >
//                 <Row className="pe-4">
//                   <Col className="box">4</Col>
//               </Row>
//             </Col>
//           <Col className='box' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
//           </Row>
//           <Row>
//           <Col className='box' md={{ span: 3, offset: 3 }}>span: 3, offset: 3</Col>
//           <Col className='box' md={{ span: 3, offset: 3 }}> span: 3, offset: 3</Col>
//           </Row>
//           <Row>
//           <Col className='box' md={{ span: 4, offset: 4 }}> span: 4, offset: 4</Col>
//           </Row>
//         </div>
//         </div>
//       );
//     }

//     export default Table;