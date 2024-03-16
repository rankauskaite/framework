import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import EyeClose from '@/images/eye-close.png'
import EyeOpen from '@/images/eye-open.png'
import './signup.css'

export default function Page() {
  return (
    <MaxWidthWrapper>
    <body>
    <div className="container">
        <h2>Signup</h2>
        <form id="signupForm" action="#" method="post">
            <input type="text" name="username" id="username" placeholder="Username" required/>
            <input type="text" name="first_name" id="first_name" placeholder="First Name" required/>
            <input type="text" name="last_name" id="last_name" placeholder="Last Name" required/>  
            <input type="text" name="email" id="email" placeholder="Email" required/>
            <span id="emailError" className="error"></span>
            <div className="password-box">
                <input type="password" name="password" id="password" placeholder="Password" required/>
                <img src={EyeClose.src} id="eyeicon"/>
            </div>
            <div className="confirm-password-box">
                <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required/>
                <img src={EyeClose.src} id="eyeicon2"/>
                <span id="passwordError" className="error"></span>
            </div>
            <input type="submit" value="Sign Up"/>
        </form>
        <div id="signupMessage" className="error"></div> 
    </div>
    </body>
    </MaxWidthWrapper>
  )
}