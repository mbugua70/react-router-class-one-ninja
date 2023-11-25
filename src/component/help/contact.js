import {Form, redirect, useActionData} from 'react-router-dom'

export const contactAction = async ({request}) =>{
  //  return console.log(request)
  // const data = await requ

  const data = await request.formData()
  const sumbitData = {
    email: data.get('email'),
    message: data.get('message')
  }



  console.log(sumbitData)

  if(sumbitData.message.length < 10){
    return {error: "Your character  must be more than 10"}
  }
  return redirect('/')
}

const ContactPage = () => {
  const data  = useActionData();

    return (
        <>
          <div className="contact">
            <p className='error'>{data && data.error && data.error}</p>
              <h3>Contact Us</h3>

              <Form method="post" action='/help/contact'>
                <label>
                    <span>Your Email:</span>
                <input type="email" name="email" required/>

                </label>

                <label>
                    <span>Your Message:</span>
                    <input type="message" name="message" required/>
                </label>
                <button>submit</button>
              </Form>
          </div>
        </>
      );
}

export default ContactPage;