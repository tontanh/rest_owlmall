import React, {useState} from 'react'
import {TextareaAutosize} from '@material-ui/core'
import QrScan from 'react-qr-reader'

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
            <h3>ສະແກນ QR Code</h3>
            <center>
            <div style={{marginBottom:230}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 250, width: 350 ,}}
                />
            </div>
            </center>

            {/* <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            /> */}

      </div>
    );
  }
  
  export default QRscanner;
  