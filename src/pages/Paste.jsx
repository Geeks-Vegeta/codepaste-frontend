import React from "react";
import OuterBox from "../components/OuterBox";
import { MDBTextArea,MDBBtn  } from 'mdb-react-ui-kit';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Paste=()=>{
    return(
        <>
        <OuterBox>
            <div className="my-4">
                <div className="mx-auto w-50">
                    <label>Select Language</label>
                    <Select options={options} />
                    <br/>
                    <MDBTextArea label='Paste Code' id='textAreaExample' rows={9} />
                    <br />
                    <MDBBtn>Create Paste</MDBBtn>
                </div>
           </div>

        </OuterBox>
        </>
    )
}

export default Paste;