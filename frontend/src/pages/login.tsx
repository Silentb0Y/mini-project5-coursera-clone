
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { FormEvent, useState } from "react"

interface LoginPageProps {
    // setUserId: React.Dispatch<React.SetStateAction<number | undefined>>
    // setLogIn: React.Dispatch<React.SetStateAction<boolean>>
    // setUserName: React.Dispatch<React.SetStateAction<string>>
}

export const Login: React.FC<LoginPageProps> = ({  }) => {
    const [Id, setId] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    const sendLoginRequest = (event: FormEvent) => {
        axios.post('/login', {
            Name: Id,
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
                        <h1 className=" text-center ">LOGIN</h1>
                        <div className="form-group">
                            <label >Id</label>
                            <input type="id" className="form-control" placeholder="Id"
                                value={Id} onChange={e => setId(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                value={password} onChange={e => setpassword(e.target.value)} />
                        </div>

                        <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary m-4 " onClick={sendLoginRequest}>Submit</button>
                        </div>
                        <div className=" d-flex justify-content-center">
                            <a href="/signIn">New user?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}