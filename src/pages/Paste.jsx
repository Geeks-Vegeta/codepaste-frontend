import React, {useState, useEffect} from "react";
import OuterBox from "../components/OuterBox";
import { MDBTextArea  } from 'mdb-react-ui-kit';
import { AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';



const Paste=()=>{

    let { id } = useParams();
    const [display, setDisplay] = useState(true);
    const [text, setText] = useState();
    const [lang, setLang] = useState();
    const [copy, setCopy] = useState(false);

    const copied=()=>{
        setCopy(true);

    }




    useEffect(()=>{

        const getData=async()=>{
            
            try {
                let {data} = await axios.get(`https://codepaste-api.onrender.com/paste/get?slug=${id}`);
                setText(data.code);
                setLang(data.lang);
                
            } catch (error) {
                if(error.response.status === 404){
                    setDisplay(false);
                }
            }
           
        }
        getData();

    },[])


    return(
        <>
        <OuterBox>
            {display?(
                <>
                    <div className="my-4">
                        <div className="mx-auto w-50">
                            <br/>

                            {copy?(
                                    <>
                                    <AiOutlineCheck className="cursor"/> <span>Copied</span>
                                    </>
                                ):(
                                    <>
                                    <CopyToClipboard text={text}
                                    onCopy={copied}>
                                    <span className="cursor" onClick={copied}> <AiOutlineCopy size="1.5rem"/>Copy</span>
                                    </CopyToClipboard>
                                    </>
                                )} 
                                <br />
                                <br />
                            <MDBTextArea value={text} disabled={true} label='Paste Code' id='textAreaExample' rows={13} />
                            <br />
                        </div>
                    </div>
                </>
            ):(
                <>
                <div className="my-5">
                    <h6 className="text-center">No match Found</h6>
                </div>
                </>
            )}
            

        </OuterBox>
        </>
    )
}

export default Paste;