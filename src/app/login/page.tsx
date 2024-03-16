import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import EyeClose from '@/images/eye-close.png'
import './login.css'
import Link from "next/link"

export default function Page() {
  return (
    <MaxWidthWrapper>
      <body>
      <div className="container">
        <h2>Login</h2>
        
        <form id="LoginForm" action="#" method="post">
            <input type="text" name="username" id="username" placeholder="Username" required/>
            <div className="password-box">
                <input type="password" name="password" id="password" placeholder="Password" required/>
                <img src={EyeClose.src} id="eyeicon"/>
            </div>
            <div className="forgot-password">
              <Link href="../signup" className="forgot-password-btn">
              Forgot Password?
              </Link>
            </div>
            <input type="submit" value="Login"/>
        </form>

        <div className="signup-link">
        Don't have an account? <Link href="../signup" className="signup-btn">
            Sign up
        </Link>
        </div>
        <div id="loginMessage" className="error"></div>
    </div>
    </body>
    </MaxWidthWrapper>
  )
}