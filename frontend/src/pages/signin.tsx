
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { FormEvent, useState } from "react"

interface SignInPageProps {
    // setUserId: React.Dispatch<React.SetStateAction<number | undefined>>
    // setLogIn: React.Dispatch<React.SetStateAction<boolean>>
    // setUserName: React.Dispatch<React.SetStateAction<string>>
    // setUserPassword: React.Dispatch<React.SetStateAction<string>>
}

export const SignIn: React.FC<SignInPageProps> = ({  }) => {
    const [name, setName] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    const sendSigninRequest = (event: FormEvent) => {
        axios.post('/signin', {
            Name: name,
            password: password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="container d-flex justify-content-center min-vh-100 align-items-center">
                <div className="p-4 bg-white shadow-lg rounded-3 bg-gradient ">

                    <form>
                        <h1 className=" text-center ">SignIn</h1>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="name" className="form-control" placeholder="Id"
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label >Password</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                value={password} onChange={e => setpassword(e.target.value)} />
                        </div>

                        <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary m-4 " onClick={sendSigninRequest}>Submit</button>
                        </div>
                        <div className=" d-flex justify-content-center">
                            <a href="/logIn">Already A User?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}