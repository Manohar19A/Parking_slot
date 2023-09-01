const express = require('express')
const twilio = require('twilio')
const { RecordingRulesInstance } = require('twilio/lib/rest/video/v1/room/recordingRules')
const app = express()

// async function sendSMS() {
//     const client = new twilio('AC02410cc86b86e021bb720c471aa1d529', '981f3c3c3e7a12477b1e3d0556670c6e')
//     return client.messages.create({ body: "hey this fofdsfdr just check", from: '+15005550006', to:'+919908816733' })
//         .then((res) => console.log("Message Sent",res))
//         .catch((err) => console.log('Message Not sent',err))
// }
// sendSMS()
const accountSid = 'AC949b027bd87040d1ebb91ef6d00bdaea';
const authToken = 'bc7c30ec5960db80eea3ff581be85c58';
const client = require('twilio')(accountSid, authToken);

client.messages
    // .create({body: "Hey Gaddam How are you?",
    //             from: '+12517148214',
    //     to: '+919908816733'
    // })
    .create({
        from: 'whatsapp:+12517148214',
        body: 'Hello there!',
        to: 'whatsapp:+919908816733'
      })
    .then(message => console.log("message Sent",message.sid))
    .catch((err)=>{
        console.log("message not send",err);
    });
app.listen(4000, () => {
    console.log("Server started")
})