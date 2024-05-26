
import React from 'react';
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




//com 1

function Example() {
    return (
        <>


            {/* <div className='relative '>
                <h1 className='absolute mt-10 ml-[100px] text-white font-bold text-3xl '>Bootstrap Images</h1>
            <img className='w-full h-[150px] ' src="https://media.licdn.com/dms/image/C4E16AQGHZoP7dNLYuQ/profile-displaybackgroundimage-shrink_200_800/0/1640187510702?e=2147483647&v=beta&t=DyAJXNkJfUEnCk8YgLKEcib8RYsPfDwk1KzhjYN9c8A" alt="" />
        </div> */}
            {/* <div className='flex max-sm:flex-wrap order-3 max-md:flex-wrap'>

                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px]' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZ6LEJ3BiS3r3slf9qjUrb_2ffHPwkA2FVmPosSiRpoXbdBaOw" alt="" />
                    </div>
                    <div className='font-bold '>
                        <h1 className='ml-40 mt-2 '>Alice Mayer</h1>
                        <h3 className='text-purple-600 mt-4 ml-40'>Photographer</h3>
                        <p className='mt-10 ml-10 text-gray-500'>Sed ut perspiciatis
                            unde omnis iste natus sit
                            voluptatem accusantium
                            doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className='flex ml-4 space-x-10 justify-center mt-4'>
                        <FaLinkedinIn className='text-sky-500 text-xl'/>
                        <FaTwitter  className='text-sky-600 text-xl'/>
                        <ImFacebook className='text-blue-800 text-xl' />

                    </div>
                </div>
                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px]' src="https://manmatters.com/blog/content/images/size/w1000/2021/01/superfoods-for-hair-growth.jpeg" alt="" />
                    </div>
                    <div className='font-bold '>
                        <h1 className='text-red-400 mt-6 ml-8'>Culinary</h1>
                        <h3 className='text-black ml-8'>Cheat day inspirations</h3>
                        <p className='ml-8 mt-6 text-gray-500'>Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                    </div>
                    <button className='px-2 py-2 bg-rose-600 text-white mt-6 ml-6'>Button</button>
                </div>
                 
                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl '>
                    <div className='flex justify-center '>
                        <img className='h-[200px]' src="https://chrisvweatherly.files.wordpress.com/2017/06/joshua-peacock-240448.jpg?quality=80&w=676" alt="" />
                    </div>
                    <div className='font-bold '>
                        <h1 className='ml-36 mt-2'>Billy Cullen</h1>
                        <h3 className='text-purple-600 ml-36 mt-2'>Web developer</h3>
                        <p className='text-gray-500 mt-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus, ex, recusandae.</p>
                    </div>
                    <div className='flex ml-4 space-x-10 justify-center mt-4 '>   
                    <FaFacebook className='text-blue-500 text-3xl'/>
                    <AiFillTwitterCircle  className='text-blue-600 text-3xl'/>
                    <TbWorldWww className='text-red-600 text-3xl'/>
                    </div>
                </div>
            </div> */}

            {/* card-2   */}

            {/* <div className='flex justify-center  max-sm:flex-wrap order-3 max-md:flex-wrap'>

            <div className=' h-[500px] w-[320px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] w-96' src="https://t4.ftcdn.net/jpg/05/64/41/57/360_F_564415737_aiuBZ9KQmrzno7FB1gCgJOcZbA4sCHjC.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-center mt-6 font-bold text-2xl'>Console</h1>
                        <p className='text-center text-sm mt-4  text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Voluptates porro deleniti 
                         voluptatibus recusandae necessitatibus inventore 
                         repellendus facere magni tempora obcaecati, eaque doloribus consequatur 
                       
                            </p>
                    <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border-2 border-green-700 mt-4">Go Anywhere</button>
                    </div>
            </div>

            <div className=' h-[500px] w-[320px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHFR8Kvu2mOnd1U-VwBCB-NyP_dlQeGV-6w&s" alt="" />
                    </div>
                    <div>
                        <h1 className='text-center mt-6 font-bold text-2xl'>Playground</h1>
                        <p className='text-center text-sm mt-4  text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Voluptates porro deleniti 
                         voluptatibus recusandae necessitatibus inventore 
                         repellendus facere magni tempora obcaecati, eaque doloribus consequatur 
                       
                            </p>
                    <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border-2 border-green-700 mt-4">Go Anywhere</button>
                    </div>
            </div>

            <div className=' h-[500px] w-[320px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] w-96' src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Paragliding-In-Mcleodganj_11th-dec.jpg?tr=w-400" alt="" />
                    </div>
                    <div>
                        <h1 className='text-center mt-6 font-bold text-2xl '>Adventure</h1>
                        <p className='text-center text-sm mt-4  text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Voluptates porro deleniti 
                         voluptatibus recusandae necessitatibus inventore 
                         repellendus facere magni tempora obcaecati, eaque doloribus consequatur 
                       
                            </p>
                    <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border-2 border-green-700 mt-4">Go Anywhere</button>
                    </div>
            </div>

 
            

    </div> */}

            {/* cadr-3 */}

            {/* <div className='flex  justify-center max-sm:flex-wrap order-3 max-md:flex-wrap'>

   <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
       <div className='flex justify-center'>
            <img className='h-[200px] -mt-5 w-[350px] shadow-2xl shadow-slate-400 rounded-xl' src="https://wallpapercave.com/wp/wp9832050.jpg" alt="" />
            
       </div>
       <div className='mt-10'>
            <p className='text-center text-sm m-auto w-80  text-gray-400 font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa error animi enim suscipit explicabo temporibus maiores minima consectetur perferendis. Id optio, minima temporibus consequatur laboriosam totam veritatis quod illo doloremque.;Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta hic aut cum nulla commodi magni rem iste maiores. Odio consectetur, harum quia culpa error expedita nam nobis necessitatibus ad.
            </p>
        </div>   
    
    </div>

    <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl '>
                    <div className='flex justify-center '>
                        <img className='h-[200px] w-[400px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDHgaM5mec3QfqWNbIhHyOaHXs-NYLEQEzbkfC5qr5Q&s" alt="" />
                    </div>
                    <div className=' '>
                        <h1 className='text-center mt-4 font-bold text-xl'>Billy Cullen</h1>
                        <h3 className=' text-center mt-2 text-sm font-medium'>Web developer</h3>
                        <div className='mt-7'>
                        <p className='text-gray-500 m-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus, ex, recusandae.</p>
                        </div>
                    </div>
                    <div className='flex ml-4 space-x-10 justify-center mt-4 '>   
                    <FaFacebook className='text-blue-500 text-3xl shadow-2xl shadow-slate-400'/>
                    <AiFillTwitterCircle  className='text-blue-600 text-3xl shadow-2xl shadow-slate-400'/>
                    <TbWorldWww className='text-red-600 text-3xl shadow-2xl shadow-slate-400'/>
                    </div>
                     
                     
                </div>
                <div className=' h-[450px] w-[400px] border border-white mt-[100px] ml-9 shadow-xl'>
                    <div className='flex justify-center'>
                        <img className='h-[200px] w-[400px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Aywtg64dR3orncuptRL2jZ99Ml6s3jhjvg&s" alt="" />
                    </div>
                    <div className=' '>
                        <h1 className='text-xl font-bold mt-6 ml-8'>Card title</h1>
                        <p className='ml-8 mt-6 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem aperiam qui facilis illo repellat </p>
                    </div>
                    <button className='px-2 py-2 bg-blue-400 rounded-lg  text-white mt-6 ml-6 w-40' >Button</button>
                </div>
</div>                */}

            <section className=' flex justify-center items-center fixed ml-24 '>
                <div class="h-[650px] w-[1280px]   bg-white shadow-2xl  shadow-slate-300 mt-8 ">

                    <div class="container h-11 w-[1500px] bg-blue-400 mt-7">
                        <IoMdMenu className='text-4xl pt-2 text-white' />
                        < h1 className='font-noraml text-white text-2xl mt-[-30px] ml-14'>
                            User
                        </h1>
                        <IoMdRefresh className='  text-2xl ml-[1210px] -mt-7 text-white' />
                    </div>
                    <div>
                        <TfiMenuAlt className='mt-3 ml-5 text-lg' />
                         < h1 className='font-noraml  text-lg ml-14 -mt-6 '>
                            User
                        </h1>
                        <LuArrowDownToLine className='text-xl    text-blue-600 ml-[1170px] -mt-5' />
                        <h1 className='text-sm text-blue-600 ml-[1200px] -mt-5'>EXPORT</h1>

                    </div>
                    <div className='h-[500px] w-[1100px] bg-white shadow-2xl shadow-gray-400 ml-40 border-black mt-3'>
                    {/* <tr>
                                  <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                      <div class="flex items-center gap-x-3">
                              
                                       <img class="text-blue-500 border-gray-300 rounded size-6" src='https://www.svgrepo.com/show/343025/checkbox-empty.svg'/>
                                       </div> 
                                  </th>
                                  <input type="checkbox" class=" h-5 w-5  rounded-bl-xl -ml-9  accent-blue-600"/>
                                  <th scope="col" class="text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                      Id
                                  </th>
                                  <FaLongArrowAltUp className='text-sm ' />
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal  text-gray-500 ml-[20px] ">
                                      Name
                                  </th>
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal  text-gray-500 ">
                                      Email
                                  </th>
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                      Phone
                                  </th>
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                      Website
                                  </th>
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                      Companyname
                                  </th>
  
                                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "></th>
  
                              </tr>
                              <tr>
                              <input type="checkbox" class=" h-5 w-5  rounded-bl-xl  accent-blue-600"/>
                                
                              </tr> */}
                              <Row>
        <Col className='box' md={{ span: 8}}  me-12>col-md-1</Col>
        
      </Row>
                                   </div>
                             

                </div>
            </section>



        </>


    );
}

export default Example; 
