import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import './profile.css'
import Link from "next/link"

export default function Page() {
  return (
    <MaxWidthWrapper>
    <body>
    <div className="profile-container">
    <div className="profile-picture">
        <img src="https://via.placeholder.com/150" alt="Profile Picture"/>
    </div>
    <div className="profile-info">
        <h2>User's Name</h2>
        <p>Email: user@example.com</p>
        <p>Location: City, Country</p>
        <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in commodo lectus.</p>
    </div> 
    <a href="login.html" className="logout-btn">Logout</a> 
    </div>
    </body>
    </MaxWidthWrapper>
  )
}