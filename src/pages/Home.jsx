import React, {useState} from "react";
import OuterBox from "../components/OuterBox";
import { MDBTextArea,MDBBtn  } from 'mdb-react-ui-kit';
import Select from 'react-select'
import axios from "axios";
import { AiOutlineReload, AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const options = [
    { value: 'c', label: 'c' },
    { value: 'cpp', label: 'cpp' },
    { value: 'go', label: 'go' },
    { value: 'python', label: 'python' },
    { value: 'javascipt', label: 'javascipt' },
    { value: 'jsx', label: 'jsx' },
    { value: 'ts', label: 'ts' },
    { value: 'lisp', label: 'lisp' },
    { value: 'java', label: 'java' },
    { value: 'vue', label: 'vue' }
]



const Home=()=>{
    const [disbuton, setDisable] = useState(false);
    const [lang, setLang] = useState('');
    const [code, setCode] = useState('');
    const [link, setLink] = useState();
    const [copy, setCopy] = useState(false);


    const copied=()=>{
        setCopy(true);

    }


    const create=async()=>{
        try{
            
            let {data} = await axios.post("https://codepaste-api.onrender.com/paste/add", {
                "lang":lang.value,
                "code":code
            });
            let slug = data.slug; 
            let newLink = `https://codepasteapp.netlify.app/paste/${slug}`;
            setLink(newLink);
            setDisable(true);



        }catch(e){
            console.log(e);
        }
    }


    return(
        <>
        <OuterBox>
            <div className="my-4">
                <div className="mx-auto w-50">
                    <label>Select Language</label>
                    <Select 
                        defaultValue={lang}
                        onChange={setLang}
                        options={options} 
                    />
                    <br/>
                    <MDBTextArea value={code} onChange={(e)=>setCode(e.target.value)} label='Paste Code' id='textAreaExample' rows={9} />
                    <br />
                    <MDBBtn onClick={create} disabled={disbuton}>Create Paste</MDBBtn>
                    <div className="cursor">

                        {link?(
                            <>
                            <div className="visit">
                                <a href={link}>{link}</a> {copy?(
                                    <>
                                    <AiOutlineCheck/> <span>Copied</span>
                                    </>
                                ):(
                                    <>
                                    <CopyToClipboard text={link}
                                    onCopy={copied}>
                                     <span onClick={copied}> <AiOutlineCopy/>Copy</span>

                                    </CopyToClipboard>
                                    </>
                                )} 
                            </div>
                            <AiOutlineReload/> <span onClick={(e)=>window.location.reload()}>Reload</span>
                            </>
                        ):(
                            <>
                            </>
                        )}

                    </div>
                    
                </div>
           </div>

        </OuterBox>
        </>
    )
}

export default Home;