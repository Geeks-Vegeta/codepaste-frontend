import React from "react";
import OuterBox from "../components/OuterBox";
import { MDBTextArea  } from 'mdb-react-ui-kit';
import Select from 'react-select'
import axios from "axios";

const options = [
  { value: 'c', label: 'c' },
  { value: 'c++', label: 'c++' },
  { value: 'go', label: 'go' },
  { value: 'python', label: 'python' },
  { value: 'javascipt', label: 'javascipt' },
  { value: 'jsx', label: 'jsx' },
  { value: 'ts', label: 'ts' },
  { value: 'lisp', label: 'lisp' },
  { value: 'java', label: 'java' },
  { value: 'vue', label: 'vue' }
]


const Paste=()=>{
    return(
        <>
        <OuterBox>
            <div className="my-4">
                <div className="mx-auto w-50">
                    <label>Selected Language</label>
                    <Select defaultValue={"go"} options={options} />
                    <br/>
                    <MDBTextArea label='Paste Code' id='textAreaExample' rows={9} />
                    <br />
                </div>
           </div>

        </OuterBox>
        </>
    )
}

export default Paste;