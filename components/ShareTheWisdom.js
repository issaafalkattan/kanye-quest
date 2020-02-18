import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import domtoimage from 'dom-to-image';
import KimQuotedashian from "../components/KimQuotedashian";

const ShareTheWisdom = ({ showWisdom, shareWindowVisible, setShowWisdom, imageUrl, quote, setShareWindowVisible }) => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const shareTheWisdom = () => {
        domtoimage.toJpeg(document.getElementById('wisdom'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'fromKanyeToKanye.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
    const renderWisdom = () => {

        return (
            <div id="wisdom" style={{
                width: '900px',
                position: 'relative', backgroundSize: 'cover',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`
            }}>

                <KimQuotedashian quote={quote} from={from} to={to} />
            </div>
        )
    }
    return (

        <Modal style={{ minWidth: '930px' }} visible={true} okText={showWisdom ? 'SHARE' : 'GENERATE'} onOk={() => showWisdom ? shareTheWisdom() : setShowWisdom(true)} onCancel={() => setShareWindowVisible(false)}>
            <div>
                {showWisdom ?
                    <div> {renderWisdom()}</div>
                    :
                    <div>
                        <p>From</p>
                        <Input placeholder="from" value={from} onChange={(e) => setFrom(e.currentTarget.value)} style={{ width: '90%', margin: '20px' }} />
                        <p>To</p>
                        <Input placeholder="to" value={to} onChange={(e) => setTo(e.currentTarget.value)} style={{ width: '90%', margin: '20px' }} />
                    </div>
                }

            </div>
        </Modal>

    )
}

export default ShareTheWisdom;