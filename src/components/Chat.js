import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return ( 
        <div>
            <SignOut />
            <div className="msgs">

                {messages.map(({ id, text, photoURL, uid, displayName, createdAt }) => (
                    <div>

                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <h1 className={`h1 ${uid === auth.currentUser.uid ? 's' : 'r'}`}>{displayName}</h1>
                            
                            <img src={photoURL} alt="" />
                            
                            <p>{text}</p>

                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
