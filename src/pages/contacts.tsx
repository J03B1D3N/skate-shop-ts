import { useState } from "react"

export default function Contacts() {
    
    const [sent, setSent] = useState(false)




    function handleSubmit(e:any) {
        e.preventDefault()
        setSent(true)
    }

    return <div className="contacts">
        <div className="details">
            <img className="map" src="./images/maps.webp" alt="map" />
            <div className="wrapper">
                <div className="phone">
                    <p>Phone: 202-456-1111</p>
                    <p>FAX: 202-456-2461</p>
                    <p>SwitchBoard: 202-456-1414</p>
                </div>
                <div className="adress">
                    <p>The White House</p>
                    <p>1600 Pennsylvania Avenue NW</p>
                    <p>Washington, DC 20500</p>
                </div>
            </div>
        </div>
        <div className="contactUs">
            <div className="title">SEND US A LETTER</div>
            
            <form action="POST" onSubmit={(e) => {handleSubmit(e)}}>
                {!sent? <>
                <label htmlFor="firstName">What is your name?</label>
                <input type="text" id="firstName" required/>

                <label htmlFor="lastName">What is your last name?</label>
                <input type="text" id="lastName" required/>

                <label htmlFor="email">What is your email?</label>
                <input type="text" id="email" required/>

                <label htmlFor="qq">What is your question or complaint?</label>
                <textarea id="qq" required/>
                <button>SUBMIT</button>
                </>
                :<div className="letterSent">
                    <p>Thank you for your letter!</p>
                    <p>An email confirmation should be sent to your inbox shortly</p>
                </div>}
                
            </form>
        </div>
    </div>
}