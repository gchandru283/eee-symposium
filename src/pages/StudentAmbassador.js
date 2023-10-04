import React from 'react'
import Header from '../components/Header'

function StudentAmbassador() {
  return (
    <><Header/>
    <div className='flex flex-col justify-start gap-2 '>
     
        <div className=" lg:pt-24 pt-20 font-bold font-sans border-2 border-blue-600">
          <p className="lg:text-5xl text-3xl text-gray-900 text-center font-labrada">Student Ambassador</p>
        </div>
        <div class="border-2 border-blue-600 w-5/6 mt-8 ml-5 lg:ml-10 ">
          <h2 class="text-2xl font-bold text-gray-800 ml-10">Hello Ambassador,</h2>
          <p class=" lg:text-xl text-lg mt-4 lg:text-justify my-3">
              Student Ambassadors act as the pillars of Ekna'23 and work to promote the event in their respective colleges. Student ambassadors are selected to positively represent a college or university as they help prospective students by answering questions and helping students participate in the fest. Those selected to be student ambassadors will build a professional resume, strengthen their leadership skills and improve their communication abilities.
          </p>
        </div>
        <div className='border-2 border-blue-600'>
          <h2 className='text-3xl font-bold text-gray-800 mx-auto pb-4'>Roles and Responsibilities</h2>
          <ul className=' text-xl text-gray-900 list-disc space-y-1 pl-10'>
            <li> To promote about the Events in their college</li>
            <li>Should post stories in social media and tag the < i>#Ekna2k23</i> handle as means of promoting the event.</li>
            <li>Should update their status and stories with Ekna content in Social Media Handles everyday.</li>
            <li>Should encourage your friends to register the event by means of your referral code.</li>
          </ul>
        </div>
        <div className='border-2 border-blue-600'>
          <h2 className='text-3xl font-bold text-gray-800 text-center '>Why to become a Student Ambassador</h2>
          <ul className='space-y-1 text-gray-900 list-disc text-xl pl-10 mx-auto text-justify my-5'>
            <li>Enhance your communication skills.</li>
            <li>Polish your professional skills for future career opportunities.</li>
            <li>Gain valuable volunteer experience.</li>
            <li>Gain valuable volunteer experience.</li>
            <li>Develop strong leadership skills.</li>
            <li>Increase your self-esteem and self-confidence.</li>
            <li>Opportunity to represent your institution.</li>
          </ul>
        </div>
        <div className='border-2 border-blue-600'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mx-auto w-fit'>Benefits of becoming a Student Ambassador</h2>
        <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
            <thead className='text-xl'>
              <tr>
                <th className='p-2 border-black border-2 text-gray-700 '>Silver</th>
                <th className='p-2 border-black border-2 text-yellow-500'>Gold</th>
                <th className='p-2 border-black border-2 text-gray-400'>Diamond</th>
              </tr>
            </thead>
            <tbody className='border-spacing-2 border-black border-2 text-sm'>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>Certificates</td>
                <td className='p-2 border-black border-2 '>Certificates</td>
                <td className='p-2 border-black border-2 '>Certificates</td>
              </tr>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>Food & Registration</td>
                <td className='p-2 border-black border-2 '>Food & Registration</td>
                <td className='p-2 border-black border-2 '>Food & Registration</td>
              </tr>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>-</td>
                <td className='p-2 border-black border-2 '>T-shirts</td>
                <td className='p-2 border-black border-2 '>T-shirts</td>
              </tr>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>-</td>
                <td className='p-2 border-black border-2 '>Can participate in more than 2 events</td>
                <td className='p-2 border-black border-2 '>Can participate in any event</td>
              </tr>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>-</td>
                <td className='p-2 border-black border-2 '>-</td>
                <td className='p-2 border-black border-2 '>Gift Vouchers</td>
              </tr>
            </tbody>
            </table>
        </div>
        <div className='border-2 border-blue-600'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mx-auto w-fit'>Category Criteria</h2>
        <table className="table-fixed border-spacing-2 border-black border-2 my-10 mx-auto">
            <thead className='text-xl'>
              <tr>
                <th className='p-2 border-black border-2 '>Zones</th>
                <th className='p-2 border-black border-2 text-gray-700'>Gold</th>
                <th className='p-2 border-black border-2 text-yellow-500'>Diamond</th>
                <th className='p-2 border-black border-2 text-gray-500'>Diamond</th>
              </tr>
            </thead>
            <tbody className='border-spacing-2 border-black border-2 text-sm'>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>Coimbatore</td>
                <td className='p-2 border-black border-2 '>15-20</td>
                <td className='p-2 border-black border-2 '>25-40</td>
                <td className='p-2 border-black border-2 '>40-60</td>
              </tr>
              <tr className='border-spacing-2 border-black border-2'>
                <td className='p-2 border-black border-2 '>Other districts</td>
                <td className='p-2 border-black border-2 '>10-20</td>
                <td className='p-2 border-black border-2 '>20-30</td>
                <td className='p-2 border-black border-2 '>30-50</td>
              </tr>
            </tbody>
        </table>
        <p className='text-red-600 mb-3 text-center'>**The above counts in the table represents the number of referral participants</p>
        </div>
        <div className='p-6 border-2 border-blue-600'>
          <h2 className='text-3xl font-bold text-gray-800 text-left w-fit'>Note</h2>
          <p>Student Participants should enter your referral code ( Ex. ASHISH20) on the registration form and complete the registration.Then only, Your credit count will be raised. So, Ensure till end of the registration of your referral participants.</p>
          <p className='text-red-600 mb-3 text-center'>** Your referral credit count will be intimated through the mail on daily basis</p>
        </div>
        <div className='border-2 border-blue-600 text-center mx-auto items-center'>
        <a href='' target="_blank " className='px-4 py-2 rounded-md bg-blue-800 hover:bg-gray-600 text-black'>Apply</a>
        </div>
        <div className='my-4 p-6 border-2 border-blue-600'>
          <h3 className='text-2xl font-bold  text-left w-fit my-3 '>For enquiries</h3>
          <p>EEE department</p>
        </div>
    </div>
  </> )
}

export default StudentAmbassador