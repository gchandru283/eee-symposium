import React from 'react'

function Footer() {
  return (
    <div className='w-full lg:h-screen h-full bg-slate-500 lg:pt-20 border-2 border-black'>
        <div className='flex text-white flex-wrap border-2 border-black'>
            <div className='flex flex-col w-full lg:w-1/3  p-4 border-2 border-black'>
                <div className='flex flex-col justify-center border-2 border-black'>
                    <h2 className='text-center text-4xl my-4 cookie'>Location</h2>
                    <div className='mx-auto w-full border-2 border-black'>
                         {/* <!-- Map --> */}
                         <div className="map-outer tm-mb-40">
                             <div className="gmap-canvas">
                                 <iframe className="mx-auto" id="gmap-canvas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9491172651287!2d76.88388301532656!3d11.04244189214134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20Regional%20Campus%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1653732177820!5m2!1sen!2sin" 
                                 title="Map"></iframe>
                            </div>
                        </div>  
                    </div>
                    <h2 className='text-center text-4xl my-4 cookie'>Address</h2>
                    <div className='mx-auto w-full p-2 text-lg border-2 border-black'>
                        <div className='mx-auto'>
                            <p className='text-xl'>Anna University Regional Campus - Coimbatore,</p>
                            <p className='text-xl'>Maruthamalai Main Road,</p>
                            <p className='text-xl'>Navavoor,</p>
                            <p className='text-xl'>Coimbatore - 641046.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full lg:w-1/3 p-4 justify-center'>
                <img src="/assets/icons/anna.png" alt="" className='w-fit h-fit' />
            </div>
            <div className='flex flex-col w-full lg:w-1/3  p-4'>
                <div className='flex flex-col justify-center'>
                    
                    <a id="contact">
                        <h2 className='text-center text-4xl my-4 cookie' id='contact'>Contact Us</h2>
                    </a>
                    
                    <div className='mx-auto w-full flex justify-center'>
                        <a href="https://www.instagram.com/_ekna2k22_">
                            <img src="/assets/icons/instagram.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100086210026178">
                            <img src="/assets/icons/facebook.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://youtube.com/channel/UCKx4Owx-QH65a0Zs4AMBdGg">
                            <img src="/assets/icons/youtube.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="https://twitter.com/eknasympo?s=11&t=uZ8uWl46_3qMJ0dQWnKEqw">
                            <img src="/assets/icons/twitter.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                        <a href="mailto:eknasympo@gmail.com">
                            <img src="/assets/icons/mail.svg" alt=""  className='w-8 h-8 mx-2 my-1'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer