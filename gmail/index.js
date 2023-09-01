const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'chimatamanohar519@gmail.com',
		pass: 'ymqeojdrfogfsfvs'
	}
});

mailTransporter.sendMail({
    from: '"Your Name" <youremail@gmail.com>', // sender address
    to: "vishnu.miriyala@arshaa.com, mohankrishna.madanapu@arshaa.com,faisal.azam@arshaa.com,nikhil.mudheraj@arshaa.com", // list of receivers
    subject: "Escalations AMS", // Subject line
    text: "hope are you donig good", // plain text body
    html: "<b>Hi Team this is to inform you that if you not finish the tasks with in certain time it leads to Escalation</b>", // html body
  }).then(info => {
    console.log({info});
  }).catch(console.error);
